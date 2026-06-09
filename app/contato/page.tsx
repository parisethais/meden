import type { Metadata } from "next";
import { Section, Label, Eyebrow } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contato · MedEn",
  description:
    "Fale com a MedEn pelo WhatsApp ou e-mail. Canal compartilhado MedEn e Firm Collective. Resposta em até um dia útil.",
};

export default function ContatoPage() {
  return (
    <Section
      tone="bone"
      grid
      className="pt-28 md:pt-32 pb-20 md:pb-24 min-h-[88vh] flex flex-col"
    >
      {/* topo */}
      <div className="flex items-start justify-between mb-12 text-midnight/50">
        <Eyebrow label="Contato" />
        <Label className="hidden md:block">MedEn · Firm Collective</Label>
      </div>

      {/* headline */}
      <h1 className="font-sans font-extrabold text-display-xl text-indigo max-w-[1100px] rise">
        Vamos <span className="serif-accent text-sage">conversar.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-base md:text-lg text-midnight/70 leading-relaxed rise rise-2">
        Sem formulário. Sem etapa intermediária. Escolha o canal e fale direto com a gente.
      </p>

      {/* os dois canais */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-midnight/10 border border-midnight/10 rise rise-3">
        {/* WhatsApp · destaque */}
        <div className="bg-bone p-8 md:p-10 lg:p-12 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45">
              Canal preferido
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage">
              · Online agora
            </div>
          </div>

          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-[-0.025em] text-indigo leading-tight">
            WhatsApp.
          </h2>
          <p className="mt-3 font-sans text-2xl md:text-3xl text-midnight tracking-[-0.01em]">
            {contact.whatsapp.display}
          </p>
          <p className="mt-5 text-[15px] text-midnight/65 leading-relaxed max-w-md">
            Resposta no mesmo dia. Atendimento humano, com contexto, sem
            atendente robotizado.
          </p>

          <div className="mt-8">
            <WhatsAppButton variant="solid" label="Abrir conversa agora" />
          </div>
        </div>

        {/* Email */}
        <div className="bg-bone p-8 md:p-10 lg:p-12 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45">
              Prefere por escrito
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/40">
              Até 1 dia útil
            </div>
          </div>

          <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-[-0.025em] text-indigo leading-tight">
            E-mail.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 font-sans text-xl md:text-2xl text-midnight tracking-[-0.01em] link-line break-all"
          >
            {contact.email}
          </a>
          <p className="mt-5 text-[15px] text-midnight/65 leading-relaxed max-w-md">
            Bom para apresentar um caso com calma, anexar documentos ou começar
            uma conversa fora do horário comercial.
          </p>

          <div className="mt-8">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 px-6 md:px-7 py-3.5 border border-midnight/25 text-midnight hover:border-indigo hover:text-indigo font-mono text-[11px] tracking-[0.25em] uppercase transition-colors"
            >
              <span>Enviar e-mail</span>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 5H13M13 5L9 1M13 5L9 9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* rodapé */}
      <div className="mt-auto pt-20 md:pt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-[15px] rise rise-4">
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
            Sede
          </div>
          <p className="text-midnight/85">{contact.location}</p>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
            Operação
          </div>
          <p className="text-midnight/85">
            Canal compartilhado MedEn e Firm Collective.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
            Horário humano
          </div>
          <p className="text-midnight/85">Seg a sex, 9h às 19h.</p>
        </div>
      </div>
    </Section>
  );
}
