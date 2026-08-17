"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/territories", label: "Territories" },
  { href: "/news", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#05070d] text-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_14px_34px_-24px_rgba(0,0,0,1)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-[padding] duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Eleftheriou Associates"
            width={48}
            height={48}
            className="h-11 w-11 object-contain bg-white rounded-sm p-0.5"
          />
          <span className="leading-tight">
            <span className="block font-serif text-[15px] tracking-wide truncate">
              Eleftheriou Associates
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
              Business Development Consultants
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-[0.16em]">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/85 hover:text-[var(--gold)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-outline text-xs">
            Let&apos;s connect
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-[var(--gold)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span className="block text-2xl leading-none">×</span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-6 bg-[var(--gold)]" />
              <span className="block h-[2px] w-6 bg-[var(--gold)]" />
              <span className="block h-[2px] w-6 bg-[var(--gold)]" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <nav className="menu-in lg:hidden border-t border-white/10 bg-[var(--navy)] px-5 py-6 flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-[var(--gold)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold w-fit mt-2" onClick={() => setOpen(false)}>
            Let&apos;s connect
          </Link>
        </nav>
      )}
    </header>
  );
}
