import Link from "next/link";
import { Section, Label, Eyebrow } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { FeatureCatalog } from "@/components/FeatureCatalog";
import { WhatsAppConvo } from "@/components/WhatsAppConvo";
import type { Plan, FeatureGroup } from "@/lib/plans";

const heroTones = {
  solo: "bone",
  clinica: "indigo",
  referencia: "sage",
} as const;

const heroNum = {
  solo: "text-indigo",
  clinica: "text-sage",
  referencia: "text-indigo",
} as const;

const heroAccent = {
  solo: "text-sage",
  clinica: "text-sage",
  referencia: "text-indigo",
} as const;

const heroSubtle = {
  solo: "text-midnight/70",
  clinica: "text-bone/75",
  referencia: "text-midnight/75",
} as const;

type PlanPageProps = {
  plan: Plan;
  /** Areas where this plan adds new features vs the previous plan. */
  newAreas?: FeatureGroup["area"][];
};

export function PlanPage({ plan, newAreas = [] }: PlanPageProps) {
  const isDark = plan.slug === "clinica";
  const tone = heroTones[plan.slug];

  return (
    <>
      {/* HERO */}
      <Section tone={tone} grid className="pt-28 md:pt-32 pb-20 md:pb-24 min-h-[80vh] flex flex-col">
        <div className={`flex items-start justify-between mb-10 md:mb-12 ${isDark ? "text-bone/50" : "text-midnight/50"}`}>
          <Eyebrow num={plan.num} label="Plano" className={isDark ? "text-bone/60" : "text-midnight/60"} />
          <Label className={isDark ? "text-bone/40" : "text-midnight/40"}>MedEn · Plano</Label>
        </div>

        <div className={`font-sans font-extrabold text-[clamp(72px,11vw,180px)] leading-[0.88] tracking-[-0.045em] ${heroNum[plan.slug]} mb-6 md:mb-8 rise`}>
          {plan.num}
        </div>

        <h1 className={`font-sans font-extrabold text-display-lg max-w-[1000px] ${isDark ? "text-bone" : "text-indigo"} rise rise-2`}>
          {plan.name}.{" "}
          <span className={`serif-accent ${heroAccent[plan.slug]}`}>
            {plan.tagline}
          </span>
        </h1>

        <div className="mt-auto pt-16 md:pt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end rise rise-4">
          <div className="md:col-span-7">
            <div className={`font-mono text-[10px] tracking-[0.25em] uppercase mb-3 ${isDark ? "text-bone/45" : "text-midnight/45"}`}>
              Para quem
            </div>
            <p className={`text-base md:text-lg leading-relaxed ${heroSubtle[plan.slug]} max-w-2xl`}>
              {plan.forWho}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <CTA href="/contato" variant={isDark ? "ghost-dark" : "primary"}>
              Falar com a MedEn
            </CTA>
          </div>
        </div>
      </Section>

      {/* DESCRIÇÃO + HIGHLIGHTS */}
      <Section tone="bone" className="py-20 md:py-24 border-t border-midnight/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Label>O que é</Label>
            <h2 className="mt-6 font-sans font-extrabold text-display-md text-indigo leading-[1.1]">
              {plan.name}
            </h2>
            <p className="mt-6 text-midnight/75 text-base md:text-lg leading-relaxed">{plan.description}</p>
          </div>
          <div className="md:col-span-7">
            <Label>Diferenciais</Label>
            <ul className="mt-6 space-y-3">
              {plan.highlights.map((h, i) => {
                const isHeader = h.endsWith("mais:");
                if (isHeader) {
                  return (
                    <li key={i} className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage pt-2">
                      {h}
                    </li>
                  );
                }
                return (
                  <li key={i} className="flex gap-3 text-midnight text-[16px] leading-snug border-b border-midnight/10 pb-3">
                    <span className="text-sage font-bold">·</span>
                    <span>{h}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* CATÁLOGO COMPLETO DO PLANO */}
      <Section tone="bone" grid className="py-20 md:py-28 border-t border-midnight/10">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow label="O que está incluído" />
          <Label className="hidden md:block">
            {plan.groups.reduce((n, g) => n + g.features.length, 0)} recursos
          </Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-12">
          Tudo que está no <span className="serif-accent text-sage">{plan.name}.</span>
        </h2>

        <FeatureCatalog groups={plan.groups} newAreas={newAreas} tone="light" />
      </Section>

      {/* COPILOT DO PLANO */}
      <Section tone="indigo" grid className="py-20 md:py-24">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow label={plan.copilot.title} className="text-bone/60" />
          <Label className="text-bone/40 hidden md:block">Via WhatsApp · sem instalar</Label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-6">
            <h2 className="font-sans font-extrabold text-display-md max-w-[600px]">
              O Copilot no <span className="serif-accent text-sage">{plan.name}.</span>
            </h2>
            <p className="mt-6 text-bone/75 text-base md:text-lg leading-relaxed max-w-xl">
              {plan.copilot.body}
            </p>
          </div>
          <div className="md:col-span-6">
            <WhatsAppConvo tone="dark" messages={plan.copilot.examples} />
          </div>
        </div>
      </Section>

      {/* SECRETARIA ADD-ON */}
      <Section tone="sage" grid className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <Eyebrow label="Add-on" className="text-midnight/55 mb-6" />
            <h2 className="font-sans font-extrabold text-display-md text-midnight max-w-[700px]">
              Adicione uma <span className="serif-accent text-indigo">secretária gerenciada.</span>
            </h2>
            <p className="mt-6 max-w-xl text-midnight/75 text-base md:text-lg leading-relaxed">
              Disponível como add-on no {plan.name} — e em todos os planos. Profissional dedicada,
              treinada e gerenciada pela MedEn, trabalhando dentro do Portal.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <CTA href="/secretaria" variant="primary">
              Conheça a Secretaria
            </CTA>
          </div>
        </div>
      </Section>

      {/* NEXT */}
      <Section tone="midnight" grid className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <Eyebrow label="Pronto pra começar" className="text-bone/55 mb-6" />
            <h2 className="font-sans font-extrabold text-display-md text-bone max-w-[700px]">
              Fale com a MedEn.{" "}
              <span className="serif-accent text-sage">A gente monta o plano certo pro seu consultório.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTA href="/contato" variant="ghost-dark">
                Agendar conversa
              </CTA>
            </div>
          </div>

          <Link
            href={`/${plan.next.slug}`}
            className="md:col-span-5 group block border border-bone/15 bg-bone/[0.04] p-7 md:p-8 hover:bg-bone/[0.08] transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/50">
                Próximo plano
              </div>
              <svg width="16" height="12" viewBox="0 0 14 10" fill="none" className="text-sage transition-transform group-hover:translate-x-2">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="font-sans font-extrabold text-6xl md:text-7xl tracking-[-0.04em] text-sage leading-none mb-3">
              {plan.next.num}
            </div>
            <h3 className="font-sans font-extrabold text-2xl tracking-[-0.02em] text-bone">
              {plan.next.name}
            </h3>
          </Link>
        </div>
      </Section>
    </>
  );
}
