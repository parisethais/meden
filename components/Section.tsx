import { ReactNode } from "react";

type SectionProps = {
  tone?: "bone" | "indigo" | "midnight" | "sage";
  grid?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
};

const toneMap = {
  bone: "bg-bone text-midnight",
  indigo: "bg-indigo text-bone",
  midnight: "bg-midnight text-bone",
  sage: "bg-sage text-midnight",
};

export function Section({ tone = "bone", grid = false, className = "", children, id }: SectionProps) {
  const isDark = tone === "indigo" || tone === "midnight";
  return (
    <section id={id} className={`relative overflow-hidden ${toneMap[tone]} ${className}`}>
      {grid && (
        <div
          className={`absolute inset-0 pointer-events-none opacity-60 ${
            isDark ? "grid-bg-dark" : "grid-bg-light"
          }`}
        />
      )}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[10px] tracking-[0.25em] uppercase opacity-50 ${className}`}>
      {children}
    </span>
  );
}

export function Eyebrow({
  num,
  label,
  className = "",
}: {
  num?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] uppercase ${className}`}>
      {num && <span className="opacity-40">{num}</span>}
      <span className="opacity-70">{label}</span>
    </div>
  );
}
