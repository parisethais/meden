import type { Metadata } from "next";
import { Section, Label, Eyebrow } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contato · MedEn",
  description:
    "Fale com a MedEn. Tire dúvidas, agende uma demonstração e descubra como devolver tempo ao seu consultório.",
};

export default function ContatoPage() {
  return (
    <>
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="flex items-start justify-between mb-12 text-midnight/50">
          <Eyebrow label="Contato" />
          <Label className="hidden md:block">MedEn · 2026</Label>
        </div>

        <h1 className="font-sans font-extrabold text-display-lg text-indigo max-w-[1100px] rise">
          Vamos <span className="serif-accent text-sage">conversar.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base md:text-lg text-midnight/70 leading-relaxed rise rise-2">
          Conte o que você precisa para o seu consultório. Respondemos em até um dia útil —
          de médico para parceiro de médico.
        </p>
      </Section>

      <Section tone="bone" className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-midnight/10 pt-12">
          {/* FORM */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          {/* INFO */}
          <aside className="md:col-span-5 md:pl-8 md:border-l md:border-midnight/10 space-y-10">
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
                WhatsApp
              </div>
              <p className="font-sans text-xl md:text-2xl text-indigo mb-4">
                {contact.whatsapp.display}
              </p>
              <WhatsAppButton variant="solid" label="Abrir conversa" />
              <p className="mt-3 text-xs text-midnight/45 leading-relaxed">
                Canal compartilhado MedEn · Firm Collective.
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
                E-mail
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="font-sans text-xl md:text-2xl text-indigo link-line break-all"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
                Sede
              </div>
              <p className="text-base text-midnight/85 leading-snug">
                São Paulo · SP · Brasil
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
                Tempo de resposta
              </div>
              <p className="text-base text-midnight/85 leading-snug">
                Até <span className="text-indigo font-semibold">1 dia útil</span>.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
