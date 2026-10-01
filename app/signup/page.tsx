"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setIsLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        setMessage(
          error.message || "Unable to create your account. Please try again."
        );
        setIsLoading(false);
        return;
      }

      setMessage("Account created successfully. Redirecting...");

      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);

      setMessage(
        "Something went wrong while creating your account. Please try again."
      );

      setIsLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-eyebrow">START LEARNING</div>

        <h1>Create your account.</h1>

        <p className="auth-subtitle">
          Create a ChainLab student account so your learning progress,
          achievements, and certificate can follow you.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Name

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
              autoComplete="name"
              disabled={isLoading}
            />
          </label>

          <label>
            Email

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              disabled={isLoading}
            />
          </label>

          <label>
            Password

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              required
              minLength={8}
              autoComplete="new-password"
              disabled={isLoading}
            />
          </label>

          <button
            type="submit"
            className="auth-primary-button"
            disabled={isLoading}
          >
            {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </button>
        </form>

        {message && (
          <p className="auth-message" role="status">
            {message}
          </p>
        )}

        <p className="auth-switch">
          Already have an account?{" "}
          <Link href="/login">Sign in</Link>
        </p>

        <Link href="/" className="auth-back">
          ← Back to ChainLab
        </Link>
      </section>
    </main>
  );
}