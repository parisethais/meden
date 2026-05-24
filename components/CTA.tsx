import Link from "next/link";
import { ReactNode } from "react";

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark";
  className?: string;
};

export function CTA({ href, children, variant = "primary", className = "" }: CTAProps) {
  const styles = {
    primary:
      "bg-indigo text-bone hover:bg-midnight",
    ghost:
      "border border-midnight/30 text-midnight hover:border-indigo hover:text-indigo",
    "ghost-dark":
      "border border-bone/30 text-bone hover:border-sage hover:text-sage",
  } as const;

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-6 md:px-7 py-3.5 font-mono text-[11px] tracking-[0.25em] uppercase transition-all ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        className="transition-transform group-hover:translate-x-1"
        aria-hidden
      >
        <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </Link>
  );
}
