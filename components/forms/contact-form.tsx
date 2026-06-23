"use client"

import { FormEvent, useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""), // honeypot
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.")
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message."
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/25"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/25"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/25"
          placeholder="Tell me a bit about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald-400">
          Message sent successfully. I’ll get back to you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-red-400">{errorMessage}</p>
      ) : null}
    </form>
  )
}
