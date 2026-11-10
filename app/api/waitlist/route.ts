// Bambai waitlist. Each signup is one private file in the project's Vercel Blob store, named after the email:
// waitlist/<email>.json. They show up in the Vercel dashboard (Storage, the Blob store, folder "waitlist"), and
// GET /api/waitlist?key=<WAITLIST_ADMIN_KEY> downloads them all as a CSV.
// In local development without a Blob token, signups go to .waitlist.json instead.
import { promises as fs } from "node:fs";
import path from "node:path";
import { head, list, put } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PREFIX = "waitlist/";
const EMAIL = /^[^\s@/\\]{1,64}@[^\s@/\\]{1,255}\.[^\s@/\\]{2,}$/;
const hasBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;

type Entry = { email: string; at: string };
type Result = { added: boolean; position: number };

async function allFromBlob(): Promise<Entry[]> {
  const out: Entry[] = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: PREFIX, cursor, limit: 1000 });
    for (const b of page.blobs)
      out.push({ email: b.pathname.slice(PREFIX.length).replace(/\.json$/, ""), at: new Date(b.uploadedAt).toISOString() });
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return out.sort((a, b) => a.at.localeCompare(b.at));
}

async function viaBlob(email: string, meta: Record<string, string>): Promise<Result> {
  const pathname = `${PREFIX}${email}.json`;
  let added = true;
  try {
    await head(pathname);
    added = false;
  } catch {}
  if (added) {
    await put(pathname, JSON.stringify({ email, joined: new Date().toISOString(), ...meta }), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
    });
  }
  const all = await allFromBlob();
  const i = all.findIndex((e) => e.email === email);
  return { added, position: i >= 0 ? i + 1 : all.length };
}

const FILE = path.join(process.cwd(), ".waitlist.json");
async function allFromFile(): Promise<Entry[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}
async function viaFile(email: string): Promise<Result> {
  const list = await allFromFile();
  const i = list.findIndex((e) => e.email === email);
  if (i >= 0) return { added: false, position: i + 1 };
  list.push({ email, at: new Date().toISOString() });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));
  return { added: true, position: list.length };
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
    if (hasBlob()) {
      const country = req.headers.get("x-vercel-ip-country") ?? "";
      const city = decodeURIComponent(req.headers.get("x-vercel-ip-city") ?? "");
      return Response.json({ ok: true, ...(await viaBlob(email, { country, city })) });
    }
    if (process.env.NODE_ENV !== "production") return Response.json({ ok: true, ...(await viaFile(email)) });
    console.error("waitlist: no Blob store connected (BLOB_READ_WRITE_TOKEN missing)");
  } catch (e) {
    console.error("waitlist:", e);
  }
  return Response.json({ error: "We couldn't save that just now. Try again in a minute." }, { status: 503 });
}

/** CSV export of every signup, for the owner: /api/waitlist?key=<WAITLIST_ADMIN_KEY> */
export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get("key");
  const admin = process.env.WAITLIST_ADMIN_KEY;
  const devOpen = !admin && process.env.NODE_ENV !== "production";
  if (!devOpen && (!admin || key !== admin)) return new Response("Not found", { status: 404 });
  const all = hasBlob() ? await allFromBlob() : await allFromFile();
  const csv = ["email,joined", ...all.map((e) => `${e.email},${e.at}`)].join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="bambai-waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
