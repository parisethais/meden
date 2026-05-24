import Link from "next/link";
import type { Plan } from "@/lib/plans";

type PlanCardProps = {
  plan: Plan;
  variant?: "bone" | "indigo" | "sage";
  featured?: boolean;
};

const variantStyles = {
  bone: {
    bg: "bg-bone",
    text: "text-midnight",
    num: "text-indigo",
    accent: "text-sage",
    body: "text-midnight/70",
    border: "border-midnight/15",
    arrow: "text-indigo",
    cta: "border border-midnight/25 text-midnight hover:bg-indigo hover:text-bone hover:border-indigo",
  },
  indigo: {
    bg: "bg-indigo",
    text: "text-bone",
    num: "text-sage",
    accent: "text-sage",
    body: "text-bone/75",
    border: "border-bone/20",
    arrow: "text-sage",
    cta: "border border-bone/30 text-bone hover:bg-sage hover:text-midnight hover:border-sage",
  },
  sage: {
    bg: "bg-sage",
    text: "text-midnight",
    num: "text-indigo",
    accent: "text-indigo",
    body: "text-midnight/75",
    border: "border-midnight/20",
    arrow: "text-indigo",
    cta: "border border-midnight/30 text-midnight hover:bg-indigo hover:text-bone hover:border-indigo",
  },
} as const;

export function PlanCard({ plan, variant = "bone", featured = false }: PlanCardProps) {
  const s = variantStyles[variant];

  return (
    <article
      className={`group relative flex flex-col p-7 md:p-9 ${s.bg} ${s.text} border ${s.border} transition-all duration-300 ${
        featured ? "md:scale-[1.02]" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-7 md:left-9 px-3 py-1 bg-midnight text-bone font-mono text-[9px] tracking-[0.3em] uppercase">
          Recomendado
        </div>
      )}

      <div className="flex items-start justify-between mb-8">
        <div className={`font-mono text-[10px] tracking-[0.25em] uppercase ${s.body}`}>
          Plano {plan.num}
        </div>
      </div>

      <div className={`font-sans font-extrabold text-[80px] md:text-[96px] leading-none tracking-[-0.04em] ${s.num} mb-5`}>
        {plan.num}
      </div>

      <h3 className="font-sans font-extrabold text-3xl md:text-4xl tracking-[-0.025em] leading-[1.05] mb-3">
        {plan.name}
      </h3>

      <p className={`text-[15px] leading-snug ${s.body} mb-7 max-w-xs`}>{plan.tagline}</p>

      <ul className="space-y-2.5 mb-8">
        {plan.highlights.map((h, i) => (
          <li key={i} className={`text-[14px] leading-snug ${i === 0 && h.endsWith("mais:") ? `font-mono text-[10px] tracking-[0.25em] uppercase ${s.accent} pt-1` : ""}`}>
            {i === 0 && h.endsWith("mais:") ? h : <span className="flex gap-2.5"><span className={s.accent}>·</span><span>{h}</span></span>}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-current/15 flex items-center justify-between gap-4">
        <Link
          href={`/${plan.slug}`}
          className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors ${s.cta}`}
        >
          <span>Conheça o {plan.name}</span>
          <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
