import Link from "next/link";
import { Logo } from "./Logo";
import { contact, waLink } from "@/lib/contact";

const cols = [
  {
    title: "Planos",
    links: [
      { href: "/solo", label: "Solo" },
      { href: "/clinica", label: "Clínica" },
      { href: "/referencia", label: "Referência" },
      { href: "/planos", label: "Comparar" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/secretaria", label: "Secretaria" },
      { href: "/sobre", label: "Sobre" },
      { href: "/contato", label: "Contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contato", label: "Privacidade" },
      { href: "/contato", label: "Termos" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-midnight text-bone overflow-hidden">
      <div className="grid-bg-dark absolute inset-0 opacity-50 pointer-events-none" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-bone/10">
          <div className="md:col-span-5">
            <Logo variant="wordmark" tone="paper-on-dark" size="md" href="/" />
            <p className="mt-6 max-w-md text-bone/70 text-base leading-relaxed">
              A parceira digital que o médico nunca teve.{" "}
              <span className="serif-accent text-sage">Menos gestão. Mais medicina.</span>
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/40 mb-5">
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-bone/85 hover:text-sage transition-colors text-[15px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-bone/40">
          <span>© {new Date().getFullYear()} MedEn · Tecnologia Médica</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{contact.location}</span>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-sage transition-colors break-all"
            >
              {contact.email}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage transition-colors"
            >
              WhatsApp · {contact.whatsapp.display}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
