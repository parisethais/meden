import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { Section, Label, Eyebrow } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { PlanCard } from "@/components/PlanCard";
import { planList, fullCatalog, type FeatureGroup, type PlanSlug } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Planos · MedEn",
  description:
    "Solo, Clínica e Referência — os três planos da MedEn para consultórios médicos. CRM, prontuário, agenda, IA via WhatsApp e secretaria gerenciada como add-on.",
};

// Marca em qual plano cada feature aparece pela primeira vez.
function whichPlanIntroduces(area: FeatureGroup["area"], featureTitle: string): PlanSlug {
  for (const plan of planList) {
    const g = plan.groups.find((g) => g.area === area);
    if (g?.features.some((f) => f.title === featureTitle)) return plan.slug;
  }
  return "solo";
}

const dotForPlan: Record<PlanSlug, string> = {
  solo: "bg-indigo",
  clinica: "bg-sage",
  referencia: "bg-midnight",
};

export default function PlanosPage() {
  return (
    <>
      {/* HERO */}
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="flex items-start justify-between mb-12 text-midnight/50">
          <Eyebrow label="Planos" />
          <Label className="hidden md:block">Solo · Clínica · Referência</Label>
        </div>

        <h1 className="font-sans font-extrabold text-display-xl text-indigo max-w-[1100px] rise">
          Três planos.{" "}
          <span className="serif-accent text-sage">Um produto.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-base md:text-lg text-midnight/70 leading-relaxed rise rise-2">
          O plano organiza o que está incluído. O número de médicos é configurável em qualquer
          um. O valor a gente conversa no contato — o que importa aqui é encontrar o formato
          certo pro seu consultório.
        </p>
      </Section>

      {/* CARDS */}
      <Section tone="bone" className="pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px md:bg-midnight/10">
          <PlanCard plan={planList[0]} variant="bone" />
          <PlanCard plan={planList[1]} variant="indigo" featured />
          <PlanCard plan={planList[2]} variant="sage" />
        </div>
      </Section>

      {/* COMPARATIVO */}
      <Section tone="bone" grid className="py-20 md:py-28 border-t border-midnight/10">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow label="Comparativo completo" />
          <Label className="hidden md:block">{fullCatalog.reduce((n, g) => n + g.features.length, 0)} recursos</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[900px] mb-12">
          O que está em cada plano,{" "}
          <span className="serif-accent text-sage">item por item.</span>
        </h2>

        {/* Legenda */}
        <div className="flex flex-wrap gap-6 mb-10 font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/55">
          <span className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotForPlan.solo}`} /> Incluído no Solo
          </span>
          <span className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotForPlan.clinica}`} /> Entra no Clínica
          </span>
          <span className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotForPlan.referencia}`} /> Entra no Referência
          </span>
        </div>

        <div className="overflow-x-auto -mx-6 md:mx-0">
          <table className="min-w-[800px] md:min-w-full w-full border-t border-midnight/10">
            <thead>
              <tr className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/55">
                <th className="text-left py-4 pr-6 w-[55%]">Recurso</th>
                <th className="text-center py-4 px-2 w-[15%]">Solo</th>
                <th className="text-center py-4 px-2 w-[15%] bg-indigo/[0.04]">Clínica</th>
                <th className="text-center py-4 px-2 w-[15%]">Referência</th>
              </tr>
            </thead>
            <tbody>
              {fullCatalog.map((group) => (
                <Fragment key={group.area}>
                  <tr className="border-t border-midnight/10">
                    <td colSpan={4} className="pt-8 pb-3">
                      <h3 className="font-sans font-extrabold text-xl md:text-2xl tracking-[-0.02em] text-indigo">
                        {group.area}
                      </h3>
                    </td>
                  </tr>
                  {group.features.map((f) => {
                    const introducedIn = whichPlanIntroduces(group.area, f.title);
                    const inSolo = introducedIn === "solo";
                    const inClinica = introducedIn === "solo" || introducedIn === "clinica";
                    const inReferencia = true;
                    return (
                      <tr key={group.area + "-" + f.title} className="border-t border-midnight/10 align-top">
                        <td className="py-4 pr-6">
                          <div className="text-midnight font-medium text-[15px]">{f.title}</div>
                          <div className="text-midnight/55 text-sm leading-snug mt-1 max-w-2xl">
                            {f.body}
                          </div>
                        </td>
                        <td className="text-center py-4 px-2">
                          {inSolo ? <Check /> : <Dash />}
                        </td>
                        <td className="text-center py-4 px-2 bg-indigo/[0.04]">
                          {inClinica ? <Check /> : <Dash />}
                        </td>
                        <td className="text-center py-4 px-2">
                          {inReferencia ? <Check /> : <Dash />}
                        </td>
                      </tr>
                    );
                  })}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ADD-ON SECRETARIA */}
      <Section tone="indigo" grid className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <Eyebrow label="Add-on" className="text-bone/55 mb-6" />
            <h2 className="font-sans font-extrabold text-display-md text-bone max-w-[800px]">
              Secretaria gerenciada,{" "}
              <span className="serif-accent text-sage">em qualquer plano.</span>
            </h2>
            <p className="mt-6 max-w-xl text-bone/75 text-base md:text-lg leading-relaxed">
              Adicionar uma secretária dedicada — treinada e gerenciada pela MedEn — é
              independente do plano. Pode estar em Solo, Clínica ou Referência.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <CTA href="/secretaria" variant="ghost-dark">
              Conheça a Secretaria
            </CTA>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="sage" grid className="py-20 md:py-24">
        <Eyebrow label="Pronto pra começar" className="text-midnight/55 mb-8" />
        <h2 className="font-sans font-extrabold text-display-lg text-midnight max-w-[1000px]">
          Fale com a MedEn.{" "}
          <span className="serif-accent text-indigo">A gente monta o plano certo.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA href="/contato" variant="primary">Agendar conversa</CTA>
        </div>
      </Section>
    </>
  );
}

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 text-sage" aria-label="Incluído">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7.5L5.5 11L12 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Dash() {
  return <span className="text-midnight/20 text-base" aria-label="Não incluído">—</span>;
}
