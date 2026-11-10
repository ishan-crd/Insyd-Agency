// Bambai waitlist. Stores emails in Redis over the Upstash REST API (the env vars that Vercel's Upstash
// integration creates). In local development without those vars it writes to .waitlist.json instead.
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const KEY = "bambai:waitlist";
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

const redisUrl = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

type Result = { added: boolean; position: number };

async function viaRedis(email: string): Promise<Result> {
  const res = await fetch(`${redisUrl}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${redisToken}`, "Content-Type": "application/json" },
    body: JSON.stringify([
      ["SADD", KEY, email],
      ["SCARD", KEY],
      ["HSETNX", `${KEY}:joined`, email, new Date().toISOString()],
    ]),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  const [added, count] = (await res.json()) as { result: number }[];
  return { added: added.result === 1, position: count.result };
}

async function viaFile(email: string): Promise<Result> {
  const file = path.join(process.cwd(), ".waitlist.json");
  let list: { email: string; at: string }[] = [];
  try {
    list = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {}
  const added = !list.some((e) => e.email === email);
  if (added) {
    list.push({ email, at: new Date().toISOString() });
    await fs.writeFile(file, JSON.stringify(list, null, 2));
  }
  return { added, position: list.length };
}

export async function POST(req: Request) {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Send an email address." }, { status: 400 });
  }
  // honeypot: people never see this field, bots fill it
  if (typeof body.company === "string" && body.company.length > 0) return Response.json({ ok: true, added: true });

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL.test(email) || email.length > 254) {
    return Response.json({ error: "That email doesn't look right. Check it and try again." }, { status: 400 });
  }

  try {
    if (redisUrl && redisToken) return Response.json({ ok: true, ...(await viaRedis(email)) });
    if (process.env.NODE_ENV !== "production") return Response.json({ ok: true, ...(await viaFile(email)) });
    console.error("waitlist: no Redis configured (set KV_REST_API_URL and KV_REST_API_TOKEN)");
  } catch (e) {
    console.error("waitlist:", e);
  }
  return Response.json(
    { error: "We couldn't save that just now. Try again in a minute." },
    { status: 503 },
  );
}
