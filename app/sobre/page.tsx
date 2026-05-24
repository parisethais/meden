import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label, Eyebrow } from "@/components/Section";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Sobre · MedEn",
  description:
    "MedEn — a plataforma do consultório médico. CRM, prontuário, agenda, Copilot de IA via WhatsApp e secretaria gerenciada como add-on.",
};

export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-20 md:pb-24 min-h-[70vh] flex flex-col">
        <div className="flex items-start justify-between mb-12 text-midnight/50">
          <Eyebrow label="Sobre" />
          <Label className="hidden md:block">MedEn · 2026</Label>
        </div>

        <h1 className="font-sans font-extrabold text-display-xl text-indigo max-w-[1100px] rise">
          O consultório que funciona{" "}
          <span className="serif-accent text-sage">enquanto você atende.</span>
        </h1>

        <p className="mt-14 md:mt-20 max-w-2xl text-base md:text-lg text-midnight/70 leading-relaxed rise rise-3">
          A MedEn nasceu de uma observação simples: o tempo do médico é o ativo mais escasso e
          o mais mal cuidado do sistema de saúde. Construímos uma plataforma — tecnologia, IA
          e serviço humano — para devolver esse tempo ao que realmente importa.
        </p>
      </Section>

      {/* MANIFESTO */}
      <Section tone="indigo" grid className="py-24 md:py-32">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="01" label="Manifesto" className="text-bone/60" />
        </div>

        <blockquote className="font-sans font-extrabold text-display-md text-bone max-w-[1100px] leading-[1.1]">
          “O médico não escolheu a profissão para gerenciar planilhas.{" "}
          <span className="serif-accent text-sage">Escolheu para cuidar de pessoas.”</span>
        </blockquote>

        <p className="mt-10 max-w-2xl text-bone/65 text-base md:text-lg leading-relaxed">
          Cada decisão na MedEn passa por esse filtro. Se o produto não devolve tempo ao
          médico — para o paciente, para a família, para si mesmo — não vai pra produção.
        </p>
      </Section>

      {/* A PLATAFORMA */}
      <Section tone="bone" className="py-20 md:py-24 border-t border-midnight/10">
        <div className="flex items-start justify-between mb-12">
          <Eyebrow num="02" label="A plataforma" />
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-12">
          Três planos, um produto.{" "}
          <span className="serif-accent text-sage">Secretaria como add-on.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-midnight/10 border border-midnight/10">
          {[
            { num: "01", name: "Solo", body: "Para o médico que toca o consultório com as próprias mãos.", href: "/solo" },
            { num: "02", name: "Clínica", body: "Para quem já tem equipe — ou está construindo uma.", href: "/clinica" },
            { num: "03", name: "Referência", body: "Para o consultório que não deixa nada passar.", href: "/referencia" },
          ].map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="group bg-bone p-7 md:p-8 min-h-[200px] flex flex-col hover:bg-bone-warm transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-5">
                Plano {item.num}
              </div>
              <h3 className="font-sans font-extrabold text-2xl text-indigo mb-3 tracking-[-0.02em]">
                {item.name}
              </h3>
              <p className="text-midnight/70 text-[14px] leading-relaxed mt-auto">{item.body}</p>
              <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-indigo">
                <span>Conheça</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-midnight/10">
          <p className="text-midnight/65 text-base max-w-md">
            Secretaria gerenciada disponível como add-on em qualquer plano.
          </p>
          <CTA href="/secretaria" variant="ghost">
            Conheça a Secretaria
          </CTA>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="sage" grid className="py-20 md:py-24">
        <Eyebrow label="Vamos conversar" className="text-midnight/55 mb-8" />
        <h2 className="font-sans font-extrabold text-display-lg text-midnight max-w-[1000px]">
          Pronto pra ter mais{" "}
          <span className="serif-accent text-indigo">tempo de medicina?</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA href="/contato" variant="primary">Falar com a MedEn</CTA>
        </div>
      </Section>
    </>
  );
}
