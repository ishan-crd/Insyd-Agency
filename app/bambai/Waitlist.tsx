"use client";
import { useId, useState, type FormEvent } from "react";

type State =
  | { s: "idle" }
  | { s: "sending" }
  | { s: "done"; position?: number; again: boolean }
  | { s: "error"; msg: string };

const pad = (n: number) => String(n).padStart(6, "0");

/** Email capture for the Bambai waitlist. On success it turns into a BEST-style bus ticket. */
export function Waitlist({ size = "md", id }: { size?: "md" | "lg"; id?: string }) {
  const [state, setState] = useState<State>({ s: "idle" });
  const [email, setEmail] = useState("");
  const fid = useId();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.s === "sending") return;
    const company = (new FormData(e.currentTarget).get("company") as string) ?? "";
    setState({ s: "sending" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "We couldn't save that just now. Try again in a minute.");
      setState({ s: "done", position: data.position, again: data.added === false });
    } catch (err) {
      setState({ s: "error", msg: err instanceof Error ? err.message : "Something went wrong. Try again." });
    }
  }

  if (state.s === "done")
    return (
      <div className={`ticket ticket-${size}`} role="status" aria-live="polite">
        <div className="ticket-main">
          <div className="ticket-top">
            <span className="ticket-brand">BAMBAI</span>
            <span className="ticket-class">Waitlist pass</span>
          </div>
          <dl className="ticket-grid">
            <div>
              <dt>From</dt>
              <dd>Wherever you are</dd>
            </div>
            <div>
              <dt>To</dt>
              <dd>South Mumbai</dd>
            </div>
            <div>
              <dt>Valid</dt>
              <dd>Launch day</dd>
            </div>
            <div>
              <dt>Pass no.</dt>
              <dd className="ticket-no">{state.position ? pad(state.position) : "Issued"}</dd>
            </div>
          </dl>
          <p className="ticket-note">
            {state.again
              ? "You were already on the list. We'll write the day Bambai is playable."
              : "You're on the list. We'll write the day Bambai is playable, and not before."}
          </p>
        </div>
        <div className="ticket-stub" aria-hidden>
          <span>{state.position ? pad(state.position) : "BAMBAI"}</span>
        </div>
      </div>
    );

  return (
    <form id={id} className={`wl wl-${size}`} onSubmit={submit} noValidate>
      <label htmlFor={fid} className="sr-only">
        Email address
      </label>
      <div className={`wl-field${state.s === "error" ? " wl-bad" : ""}`}>
        <input
          id={fid}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state.s === "error") setState({ s: "idle" });
          }}
          aria-invalid={state.s === "error"}
          aria-describedby={`${fid}-msg`}
        />
        <input className="wl-hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden />
        <button type="submit" className="wl-btn" disabled={state.s === "sending"}>
          <span>{state.s === "sending" ? "Joining" : "Join the waitlist"}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <p id={`${fid}-msg`} className="wl-msg" aria-live="polite">
        {state.s === "error" ? state.msg : "One email when it's playable. No spam, ever."}
      </p>
    </form>
  );
}
