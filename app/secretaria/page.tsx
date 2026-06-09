import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, Eyebrow } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { secretaria } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Secretaria · MedEn",
  description:
    "Secretária dedicada ao seu consultório, treinada e gerenciada pela MedEn. Add-on disponível em qualquer plano. Sem CLT, sem rotatividade, com continuidade garantida.",
};

export default function SecretariaPage() {
  return (
    <>
      {/* HERO */}
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-20 md:pb-24 min-h-[80vh] flex flex-col">
        <div className="flex items-start justify-between mb-10 md:mb-12 text-midnight/50">
          <Eyebrow label="Add-on · Secretaria" />
          <Label className="hidden md:block">Disponível em qualquer plano</Label>
        </div>

        <h1 className="font-sans font-extrabold text-display-xl text-indigo max-w-[1100px] rise">
          A secretária que o consultório merecia.{" "}
          <span className="serif-accent text-sage">Sem os encargos que você conhece.</span>
        </h1>

        <div className="mt-auto pt-16 md:pt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end rise rise-4">
          <p className="md:col-span-7 text-base md:text-lg text-midnight/70 leading-relaxed max-w-2xl">
            {secretaria.description}
          </p>
          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <CTA href="/contato" variant="primary">
              Falar com a MedEn
            </CTA>
          </div>
        </div>
      </Section>

      {/* O PROBLEMA */}
      <Section tone="midnight" grid className="py-20 md:py-24">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="01" label="O problema" className="text-bone/60" />
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-bone max-w-[1000px] leading-[1.1] mb-12">
          Contratar secretária é{" "}
          <span className="serif-accent text-sage">o problema que ninguém resolveu.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {secretaria.problem.map((p, i) => (
            <div
              key={i}
              className="bg-bone/[0.05] border border-bone/15 p-5 md:p-6 text-bone text-[16px] leading-snug flex gap-3"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage shrink-0 pt-1">
                0{i + 1}
              </span>
              <span>{p}</span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-bone/65 text-lg md:text-xl max-w-2xl leading-relaxed">
          A MedEn assume o vínculo, o treinamento e a continuidade.{" "}
          <span className="serif-accent text-sage">Você recebe uma profissional, não um problema de RH.</span>
        </p>
      </Section>

      {/* COMO FUNCIONA */}
      <Section tone="bone" grid className="py-20 md:py-28">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="02" label="Como funciona" />
          <Label className="hidden md:block">{secretaria.pillars.length} princípios</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-14">
          Uma extensão do consultório,{" "}
          <span className="serif-accent text-sage">não um terceirizado.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/10 border border-midnight/10">
          {secretaria.pillars.map((p, i) => (
            <article key={p.title} className="bg-bone p-7 md:p-8 min-h-[220px] flex flex-col">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-6">
                {String(i + 1).padStart(2, "0")} / {String(secretaria.pillars.length).padStart(2, "0")}
              </div>
              <h3 className="font-sans font-bold text-xl tracking-[-0.015em] text-indigo mb-3">
                {p.title}
              </h3>
              <p className="text-midnight/70 text-[15px] leading-relaxed mt-auto">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* INTEGRAÇÃO NATIVA */}
      <Section tone="sage" grid className="py-20 md:py-24">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="03" label="Integração nativa" className="text-midnight/55" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <h2 className="font-sans font-extrabold text-display-md text-midnight max-w-[700px] leading-[1.05]">
              Ela trabalha{" "}
              <span className="serif-accent text-indigo">dentro do mesmo sistema.</span>
            </h2>
            <p className="mt-6 max-w-xl text-midnight/80 text-base md:text-lg leading-relaxed">
              A secretária da MedEn agenda, confirma, registra e responde dentro do Portal e do
              Copilot. Toda interação aparece no histórico do paciente. Você acompanha sem
              precisar perguntar como foi o dia.
            </p>
          </div>
          <ul className="md:col-span-5 space-y-3">
            {[
              "Confirma os pacientes do dia no WhatsApp",
              "Agenda, remarca e cancela direto no Portal",
              "Responde dúvidas administrativas dos pacientes",
              "Encaminha o que é clínico pra você",
              "Tudo registrado no prontuário e no CRM",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 items-start text-midnight bg-bone/40 border border-midnight/10 px-4 py-3 text-[15px] leading-snug"
              >
                <span className="text-indigo font-bold">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* DISPONÍVEL EM QUALQUER PLANO */}
      <Section tone="bone" grid className="py-20 md:py-24 border-t border-midnight/10">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="04" label="Disponível em" />
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-12">
          Add-on em <span className="serif-accent text-sage">qualquer plano.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-midnight/10 border border-midnight/10">
          {[
            { num: "01", name: "Solo", body: "Para o médico que toca o consultório com as próprias mãos.", href: "/solo" },
            { num: "02", name: "Clínica", body: "Para quem já tem equipe, ou está construindo uma.", href: "/clinica" },
            { num: "03", name: "Referência", body: "Para o consultório que não deixa nada passar.", href: "/referencia" },
          ].map((p) => (
            <Link
              key={p.num}
              href={p.href}
              className="group bg-bone p-7 md:p-8 min-h-[220px] flex flex-col hover:bg-bone-warm transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-6">
                Plano {p.num}
              </div>
              <h3 className="font-sans font-extrabold text-3xl text-indigo mb-3 tracking-[-0.025em]">
                {p.name}
              </h3>
              <p className="text-midnight/70 text-[14px] leading-relaxed mt-auto">{p.body}</p>
              <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-indigo">
                <span>Conheça</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="midnight" grid className="py-24 md:py-32">
        <Eyebrow label="Vamos conversar" className="text-bone/55 mb-8" />
        <h2 className="font-sans font-extrabold text-display-lg text-bone max-w-[1100px]">
          Fale com a MedEn.{" "}
          <span className="serif-accent text-sage">A gente entende seu consultório e propõe a equipe certa.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA href="/contato" variant="ghost-dark">Agendar conversa</CTA>
        </div>
      </Section>
    </>
  );
}
