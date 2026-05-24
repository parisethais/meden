"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, type LogoTone } from "./Logo";

const links = [
  { href: "/planos", label: "Planos" },
  { href: "/secretaria", label: "Secretaria" },
  { href: "/sobre", label: "Sobre" },
];

/**
 * Background color of each route's *hero* (the part the Nav sits over before
 * the user scrolls). Drives the logo/link colors when the Nav is transparent.
 *
 * Default for anything not listed: "bone".
 */
type HeroTone = "bone" | "indigo" | "midnight" | "sage";

const heroToneByPath: Record<string, HeroTone> = {
  "/": "bone",
  "/planos": "bone",
  "/solo": "bone",
  "/clinica": "indigo",
  "/referencia": "sage",
  "/secretaria": "bone",
  "/sobre": "bone",
  "/contato": "bone",
};

const logoToneFor: Record<HeroTone, LogoTone> = {
  bone: "ink-on-light",
  indigo: "paper-on-dark",
  midnight: "paper-on-dark",
  sage: "ink-on-sage",
};

const linkBaseFor: Record<HeroTone, string> = {
  bone: "text-midnight/70 hover:text-indigo",
  indigo: "text-bone/75 hover:text-sage",
  midnight: "text-bone/75 hover:text-sage",
  sage: "text-midnight/75 hover:text-indigo",
};

const linkActiveFor: Record<HeroTone, string> = {
  bone: "text-indigo",
  indigo: "text-sage",
  midnight: "text-sage",
  sage: "text-indigo",
};

const ctaFor: Record<HeroTone, string> = {
  bone: "bg-indigo text-bone hover:bg-midnight",
  indigo: "bg-sage text-midnight hover:bg-bone",
  midnight: "bg-sage text-midnight hover:bg-bone",
  sage: "bg-indigo text-bone hover:bg-midnight",
};

const burgerColorFor: Record<HeroTone, string> = {
  bone: "bg-midnight",
  indigo: "bg-bone",
  midnight: "bg-bone",
  sage: "bg-midnight",
};

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const heroTone: HeroTone = heroToneByPath[pathname] ?? "bone";
  // When scrolled, the Nav gets a bone backdrop, so we always switch to
  // light-surface coloring regardless of the hero behind.
  const effectiveTone: HeroTone = scrolled ? "bone" : heroTone;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-midnight/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 h-16 md:h-20">
        <Logo variant="wordmark" tone={logoToneFor[effectiveTone]} size="sm" />

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.25em] uppercase">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            const className = active ? linkActiveFor[effectiveTone] : linkBaseFor[effectiveTone];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`link-line transition-colors ${className}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contato"
            className={`ml-2 inline-flex items-center justify-center px-5 py-2.5 transition-colors ${ctaFor[effectiveTone]}`}
          >
            <span className="tracking-[0.18em]">Contato</span>
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block w-5 h-px ${burgerColorFor[effectiveTone]} transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px ${burgerColorFor[effectiveTone]} transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bone border-t border-midnight/10">
          <nav className="flex flex-col px-6 py-6 font-mono text-[11px] tracking-[0.25em] uppercase">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 border-b border-midnight/10 text-midnight/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-6 inline-flex items-center justify-center px-5 py-3 bg-indigo text-bone"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
