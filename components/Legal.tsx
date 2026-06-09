import { ReactNode } from "react";

/**
 * Wrappers visuais para páginas legais (privacidade, termos).
 * Padronizam tipografia legível para texto longo, espaçamento e
 * marcação editorial (número monospace na lateral, headlines indigo).
 */

export function LegalArticle({ children }: { children: ReactNode }) {
  return (
    <article className="max-w-[820px] mx-auto space-y-16 md:space-y-20">
      {children}
    </article>
  );
}

export function LegalSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={`secao-${num}`} className="scroll-mt-28">
      <header className="flex items-baseline gap-5 md:gap-6 mb-6 md:mb-8">
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-midnight/40 pt-2 shrink-0 w-10 md:w-12">
          {num}
        </span>
        <h2 className="font-sans font-extrabold text-[26px] md:text-[34px] tracking-[-0.02em] text-indigo leading-[1.1]">
          {title}
        </h2>
      </header>
      <div className="md:pl-[68px] space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-midnight/85">
        {children}
      </div>
    </section>
  );
}

export function LegalSubhead({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-sans font-bold text-[18px] md:text-[20px] text-indigo tracking-[-0.01em] mt-8 mb-2">
      {children}
    </h3>
  );
}

/** Lista de bullets editoriais (sem marcador padrão; usa ponto sage à esquerda). */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-[1.65]">
          <span className="text-sage shrink-0 font-bold leading-[1.4]">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Tabela com cabeçalho mono e células finas; vira lista empilhada no mobile. */
export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="my-4">
      {/* desktop */}
      <div className="hidden md:block border-t border-midnight/15">
        <table className="w-full text-[15px]">
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/55">
              {headers.map((h) => (
                <th key={h} className="text-left py-3.5 pr-6 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-midnight/10 align-top">
                {row.map((cell, j) => (
                  <td key={j} className="py-3.5 pr-6 text-midnight/85 leading-[1.55]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <div className="md:hidden space-y-5 border-t border-midnight/15 pt-5">
        {rows.map((row, i) => (
          <div key={i} className="border-b border-midnight/10 pb-5 space-y-2">
            {row.map((cell, j) => (
              <div key={j}>
                <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-midnight/45 mb-0.5">
                  {headers[j]}
                </div>
                <div className="text-[15px] text-midnight/85 leading-[1.5]">{cell}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Hero compacto para páginas legais. */
export function LegalHero({
  eyebrow,
  title,
  version,
  updated,
}: {
  eyebrow: string;
  title: string;
  version: string;
  updated: string;
}) {
  return (
    <div className="max-w-[820px] mx-auto">
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-6">
        {eyebrow}
      </div>
      <h1 className="font-sans font-extrabold text-[44px] md:text-[64px] tracking-[-0.025em] text-indigo leading-[1.04] rise">
        {title}
      </h1>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/50">
        <span>Versão {version}</span>
        <span>Atualizado em {updated}</span>
      </div>
    </div>
  );
}
