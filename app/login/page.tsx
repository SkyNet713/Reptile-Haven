"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getCurrentUser,
  loginUser,
  registerUser,
} from "@/lib/storage";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (getCurrentUser()) router.replace("/dashboard");
  }, [router]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    if (mode === "register") {
      if (!displayName.trim()) {
        setError("Display name is required.");
        return;
      }
      const result = registerUser(email.trim(), displayName.trim(), password);
      if (!result.ok) {
        setError(result.error);
        return;
      }
    } else {
      const result = loginUser(email.trim(), password);
      if (!result.ok) {
        setError(result.error);
        return;
      }
    }

    router.push("/dashboard");
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Keeper access</p>
        <h1>Log in to your haven</h1>
        <p>
          Accounts are stored on this device for personal reptile profiles,
          schedules, and health-risk reminders.
        </p>

        <div className="tabs">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setError("");
            }}
          >
            Log in
          </button>
          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => {
              setMode("register");
              setError("");
            }}
          >
            Create account
          </button>
        </div>

        <form className="form" onSubmit={onSubmit}>
          {mode === "register" ? (
            <label>
              Display name
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Alex"
                autoComplete="nickname"
              />
            </label>
          ) : null}
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              autoComplete="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </label>
          {error ? <p className="form-error">{error}</p> : null}
          <button type="submit" className="btn primary">
            {mode === "login" ? "Enter dashboard" : "Create & continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
