"use client";

import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { mailLink } from "@/lib/contact";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState({
    nome: "",
    email: "",
    especialidade: "",
    mensagem: "",
  });

  const onChange = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const subject = `Contato MedEn — ${data.nome || "novo lead"}`;
    const body = `Nome: ${data.nome}\nE-mail: ${data.email}\nEspecialidade: ${data.especialidade}\n\n${data.mensagem}`;
    window.location.href = mailLink(subject, body);
    setTimeout(() => setStatus("success"), 600);
  };

  if (status === "success") {
    return (
      <div className="border-l-2 border-sage bg-bone-warm/40 p-10">
        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage mb-4">
          ✓ Enviado
        </div>
        <p className="text-2xl text-midnight leading-snug">
          Obrigada. Abrimos seu cliente de e-mail — basta confirmar o envio. Respondemos em
          até <span className="text-indigo font-semibold">1 dia útil</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {/* Atalho WhatsApp — mais rápido pra quem tá com pressa */}
      <div className="flex items-center justify-between gap-6 flex-wrap pb-8 border-b border-midnight/10">
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/50 mb-2">
            Prefere WhatsApp?
          </div>
          <p className="text-[15px] text-midnight/70 max-w-md leading-relaxed">
            Chame direto no número compartilhado MedEn · Firm Collective.
          </p>
        </div>
        <WhatsAppButton variant="solid" label="Abrir conversa" />
      </div>

      <Field label="Nome" name="nome" value={data.nome} onChange={onChange("nome")} required />
      <Field
        label="E-mail"
        name="email"
        type="email"
        value={data.email}
        onChange={onChange("email")}
        required
      />
      <Field
        label="Especialidade · Consultório"
        name="especialidade"
        value={data.especialidade}
        onChange={onChange("especialidade")}
        placeholder="Ex.: Cardiologia · Consultório próprio"
      />
      <FieldArea
        label="Como podemos ajudar?"
        name="mensagem"
        value={data.mensagem}
        onChange={onChange("mensagem")}
        required
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo text-bone font-mono text-[11px] tracking-[0.25em] uppercase hover:bg-midnight transition-colors disabled:opacity-50"
      >
        <span>{status === "submitting" ? "Enviando…" : "Enviar mensagem"}</span>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
          <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      <p className="text-xs text-midnight/45 max-w-md leading-relaxed">
        Ao enviar você concorda em ser contactado pela MedEn. Não compartilhamos seus dados com
        terceiros.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/50 mb-3">
        {label}
        {required && <span className="text-sage ml-1">·</span>}
      </div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-midnight/20 px-0 py-3 text-base md:text-lg text-midnight placeholder:text-midnight/30 focus:outline-none focus:border-indigo transition-colors"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/50 mb-3">
        {label}
        {required && <span className="text-sage ml-1">·</span>}
      </div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        className="w-full bg-transparent border-0 border-b border-midnight/20 px-0 py-3 text-base text-midnight placeholder:text-midnight/30 focus:outline-none focus:border-indigo transition-colors resize-none"
      />
    </label>
  );
}
