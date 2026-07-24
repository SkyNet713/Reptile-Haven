"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/lib/storage";

const links = [
  { href: "/", label: "Home" },
  { href: "/reptiles", label: "Species" },
  { href: "/dashboard", label: "My Reptiles" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    setLoggedIn(!!user);
    setName(user?.displayName ?? "");
    setOpen(false);
  }, [pathname]);

  function handleLogout() {
    logoutUser();
    setLoggedIn(false);
    setName("");
    window.location.href = "/";
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden />
          <span className="brand-text">
            Rainforest<span>Reptile</span> Haven
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
          {loggedIn ? (
            <>
              <span className="nav-user">Hi, {name}</span>
              <button type="button" className="nav-cta ghost" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <Link href="/login" className="nav-cta">
              Log in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
