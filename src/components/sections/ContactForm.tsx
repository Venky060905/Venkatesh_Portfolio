"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";
type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

/** Credentials come only from NEXT_PUBLIC_EMAILJS_* env vars (see .env.example). */
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const MAX_MESSAGE = 1000;
const COOLDOWN_S = 30;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10)
    e.message = "Message should be at least 10 characters.";
  return e;
}

const base =
  "mt-1.5 w-full rounded-xl border bg-surface-solid px-4 py-2.5 text-sm text-fg placeholder:text-subtle transition-all focus:outline-none focus:ring-2";
const ok = "border-border focus:border-accent-from focus:ring-accent-from/30";
const bad = "border-red-500/70 focus:border-red-500 focus:ring-red-500/25";

export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [cooldown, setCooldown] = useState(0);
  const [errorReason, setErrorReason] = useState("");

  // Count down the anti-spam cooldown after a successful send
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
    if (status === "error" || status === "unconfigured") setStatus("idle");
  }

  function blur(key: keyof Values) {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return; // bots fill hidden fields
    if (status === "sending" || cooldown > 0) return;

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
          sent_from: typeof window !== "undefined" ? window.location.origin : "",
        },
        { publicKey },
      );
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
      setCooldown(COOLDOWN_S);
    } catch (err) {
      // EmailJS rejects with an object exposing { status, text }, which doesn't
      // serialise in the console, so pull the fields out explicitly.
      const { status: code, text } = (err ?? {}) as { status?: number; text?: string };
      const reason = `${code ?? "network"}: ${text ?? String(err)}`;
      console.warn(`EmailJS send failed (${reason})`);
      setErrorReason(reason);
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            role="status"
            className="flex min-h-72 flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
              className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            >
              <CheckCircle2 className="size-7" aria-hidden="true" />
            </motion.span>
            <h3 className="mt-5 text-lg font-semibold text-fg">Message sent</h3>
            <p className="mt-1 max-w-xs text-sm text-muted">
              Thanks for reaching out. I&apos;ll reply to your email soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              disabled={cooldown > 0}
              className="mt-6 rounded-full border border-border px-4 py-2 text-sm text-fg transition-all hover:-translate-y-0.5 hover:border-accent-from/60 disabled:opacity-50"
            >
              {cooldown > 0 ? `Send another in ${cooldown}s` : "Send another message"}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            aria-busy={sending}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="text-sm text-muted">
                  Name
                </label>
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  value={values.name}
                  disabled={sending}
                  onChange={(e) => update("name", e.target.value)}
                  onBlur={() => blur("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cf-name-err" : undefined}
                  placeholder="Your name"
                  className={cn(base, errors.name ? bad : ok)}
                />
                {errors.name && (
                  <p id="cf-name-err" className="mt-1 text-xs text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="cf-email" className="text-sm text-muted">
                  Email
                </label>
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  maxLength={150}
                  value={values.email}
                  disabled={sending}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => blur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cf-email-err" : undefined}
                  placeholder="you@company.com"
                  className={cn(base, errors.email ? bad : ok)}
                />
                {errors.email && (
                  <p id="cf-email-err" className="mt-1 text-xs text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-end justify-between">
                <label htmlFor="cf-message" className="text-sm text-muted">
                  Message
                </label>
                <span
                  className={cn(
                    "font-mono text-xs",
                    values.message.length > MAX_MESSAGE * 0.9 ? "text-red-500" : "text-subtle",
                  )}
                >
                  {values.message.length}/{MAX_MESSAGE}
                </span>
              </div>
              <textarea
                id="cf-message"
                rows={5}
                maxLength={MAX_MESSAGE}
                value={values.message}
                disabled={sending}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => blur("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "cf-message-err" : undefined}
                placeholder="Tell me about the role or project"
                className={cn(base, errors.message ? bad : ok)}
              />
              {errors.message && (
                <p id="cf-message-err" className="mt-1 text-xs text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* honeypot: hidden from people and screen readers */}
            <div className="hidden" aria-hidden="true">
              <input
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={sending || cooldown > 0}
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:translate-y-0 disabled:opacity-60"
              >
                {sending ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="size-4" aria-hidden="true" />
                )}
                {sending ? "Sending…" : "Send message"}
              </button>

              <AnimatePresence>
                {(status === "error" || status === "unconfigured") && (
                  <motion.p
                    key={status}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="flex max-w-sm items-start gap-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      {status === "error"
                        ? "Couldn't send your message. "
                        : "The form isn't connected yet. "}
                      <a
                        className="underline"
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(
                          `Portfolio message from ${values.name.trim() || "a visitor"}`,
                        )}&body=${encodeURIComponent(values.message.trim())}`}
                      >
                        Send it from your email app instead
                      </a>{" "}
                      or write to {profile.email}.
                      {process.env.NODE_ENV !== "production" && errorReason && (
                        <span className="mt-1 block font-mono text-xs opacity-80">
                          Dev info: {errorReason}
                        </span>
                      )}
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
