import Link from "next/link";
import { Section, Label, Eyebrow } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { PlanCard } from "@/components/PlanCard";
import { Timeline } from "@/components/Timeline";
import { WhatsAppConvo } from "@/components/WhatsAppConvo";
import { FeatureCatalog } from "@/components/FeatureCatalog";
import { planList, fullCatalog } from "@/lib/plans";

const day = [
  {
    time: "07h30",
    title: "Briefing do dia chega no WhatsApp",
    body: "O Copilot manda os pacientes do dia, em ordem. Carlos Silva às 8h, retorno, creatinina subiu de 1.6 pra 1.8 na última coleta. Você lê no caminho.",
  },
  {
    time: "08h00",
    title: "Consulta começa com o prontuário aberto",
    body: "Histórico de Carlos, últimos exames e plano da consulta anterior, já carregados. Você não digita login, não procura papel.",
  },
  {
    time: "08h45",
    title: "Maria traz o laudo da ressonância",
    body: "Foto do PDF, upload em dois cliques. O OCR extrai tudo e preenche o prontuário. Creatinina nova de 2.1 mg/dL aparece em vermelho, automaticamente.",
  },
  {
    time: "12h00",
    title: "Três pacientes sem retorno há mais de 90 dias",
    body: "O sistema identifica, o Copilot manda mensagem de reativação no tom certo. Você só precisa aprovar.",
  },
  {
    time: "18h00",
    title: "Último paciente do dia",
    body: "Você fecha a evolução, a IA sugere o resumo, você ajusta uma frase. Plano de cuidados enviado pro portal do paciente. Prontuário fechado em 2 minutos.",
  },
  {
    time: "19h00",
    title: "Em casa. Consultório funcionando.",
    body: "A secretária da MedEn confirma os pacientes de amanhã pelo WhatsApp. O Copilot manda a mensagem pós-consulta pros atendidos hoje. Você está com sua família.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ 01 · HERO ============ */}
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-20 md:pb-24 min-h-[88vh] flex flex-col">
        <div className="flex items-start justify-between text-midnight/45 font-mono text-[10px] tracking-[0.25em] uppercase mb-12 md:mb-16 rise">
          <span>MedEn · V.02 · 2026</span>
          <span className="hidden md:inline">Tecnologia Médica · Brasil</span>
        </div>

        <h1 className="font-sans font-extrabold text-display-xl text-indigo max-w-[1100px] rise rise-2">
          Você estudou medicina pra cuidar de pessoas.{" "}
          <span className="serif-accent text-sage">Não pra gerenciar planilha.</span>
        </h1>

        <div className="mt-auto pt-16 md:pt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end rise rise-4">
          <p className="md:col-span-7 text-base md:text-lg text-midnight/70 leading-relaxed max-w-2xl">
            A MedEn é a plataforma do seu consultório: CRM, prontuário, agenda, portal do
            paciente, financeiro, Copilot de IA no WhatsApp e secretaria humana gerenciada,
            disponível como add-on em qualquer plano.
          </p>
          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <CTA href="/planos" variant="primary">
              Conheça os planos
            </CTA>
            <CTA href="/contato" variant="ghost">
              Falar com a MedEn
            </CTA>
          </div>
        </div>
      </Section>

      {/* ============ 02 · PROBLEMA / MANIFESTO ============ */}
      <Section tone="midnight" grid className="py-24 md:py-32">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="01" label="O problema" className="text-bone/60" />
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-bone max-w-[1000px] leading-[1.1]">
          São 19h. Você terminou a consulta. <br className="hidden md:block" />
          <span className="serif-accent text-sage">E ainda não acabou.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <p className="md:col-span-7 text-bone/80 text-lg md:text-xl leading-relaxed">
            Três prontuários por preencher. A secretária ainda não confirmou os pacientes de
            amanhã. Aquele resultado de creatinina que subiu há duas semanas, você não lembra
            se já ligou pra Ana Lima. Tem uma receita pra refazer, um pedido de exame, um
            atestado. E o Maurício, sumido há 8 meses, devia ter voltado pro retorno.
          </p>
          <p className="md:col-span-5 text-bone/55 text-base md:text-lg leading-relaxed">
            Isso não é ineficiência sua. Isso é o padrão do consultório brasileiro: um sistema
            que assume que o médico vai resolver tudo nas horas que sobram. <br /><br />
            <span className="serif-accent text-sage text-xl md:text-2xl">A MedEn existe pra desfazer esse padrão.</span>
          </p>
        </div>
      </Section>

      {/* ============ 03 · UM DIA COM A MEDEN ============ */}
      <Section tone="bone" grid className="py-24 md:py-32">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="02" label="Um dia com a MedEn" />
          <Label className="hidden md:block">Cenário real · paciente fictício</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-14 md:mb-16">
          Como o consultório funciona{" "}
          <span className="serif-accent text-sage">enquanto você atende.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <Timeline items={day} tone="light" />
          </div>
          <aside className="md:col-span-4 md:pl-8 md:border-l md:border-midnight/10">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-5">
              O que aconteceu
            </div>
            <p className="text-midnight/75 text-base leading-relaxed mb-8">
              Em um dia, a MedEn evitou que você esquecesse um exame crítico, recuperou três
              pacientes que iam cair, escreveu para você um resumo de consulta e devolveu seis
              horas que estariam no consultório.
            </p>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
              Tempo recuperado
            </div>
            <div className="font-sans font-extrabold text-5xl md:text-6xl text-indigo tracking-[-0.04em] leading-none">
              ~6h
            </div>
            <div className="mt-2 text-sm text-midnight/55">por semana, em média</div>
          </aside>
        </div>
      </Section>

      {/* ============ 04 · OS TRÊS PLANOS ============ */}
      <Section id="planos" tone="bone" grid className="py-24 md:py-32 border-t border-midnight/10">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="03" label="Os Planos" />
          <Label className="hidden md:block">Três planos · Um produto</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-4">
          Três planos. <span className="serif-accent text-sage">Um produto.</span>
        </h2>
        <p className="text-midnight/65 text-base md:text-lg max-w-2xl mb-14 md:mb-16 leading-relaxed">
          O plano organiza o que está incluído. O número de médicos é configurável em todos.
          A conversa sobre valor é com a gente, no contato. O que importa aqui é encontrar
          a forma certa do seu consultório.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px md:bg-midnight/10">
          <PlanCard plan={planList[0]} variant="bone" />
          <PlanCard plan={planList[1]} variant="indigo" featured />
          <PlanCard plan={planList[2]} variant="sage" />
        </div>

        <div className="mt-10 md:mt-12 flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-midnight/10">
          <p className="text-midnight/65 text-base max-w-md">
            Secretaria gerenciada disponível como <span className="text-indigo font-semibold">add-on em qualquer plano</span>.
          </p>
          <CTA href="/secretaria" variant="ghost">
            Conheça a Secretaria
          </CTA>
        </div>
      </Section>

      {/* ============ 05 · O COPILOT EM DETALHE ============ */}
      <Section tone="indigo" grid className="py-24 md:py-32">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="04" label="O Copilot" className="text-bone/60" />
          <Label className="text-bone/40 hidden md:block">Sem app · Sem instalação</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md max-w-[1000px] mb-6">
          O Copilot mora no <span className="serif-accent text-sage">WhatsApp.</span>
        </h2>
        <p className="text-bone/75 text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
          Sem instalar nada. Sem trocar de aplicativo. O Copilot conversa com você no mesmo
          número que a secretária usa, e age dentro do prontuário, da agenda e do CRM.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Exemplo 1: linguagem natural (Referência) */}
          <div className="md:col-span-6">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/45 mb-4">
              Conversa em linguagem natural
            </div>
            <WhatsAppConvo
              tone="dark"
              messages={[
                { who: "Médico", text: "Quem são meus pacientes de amanhã?" },
                { who: "Copilot", text: "Você tem 6 pacientes. Primeiro: Carlos Silva, 8h, retorno. Última creatinina: 1.8 (↑). Quer o sumário completo?" },
                { who: "Médico", text: "Sim" },
                { who: "Copilot", text: "Carlos Silva, 58a. HAS, DM2, DRC estágio 3. Ajustou losartana para 100mg na última consulta. MRPA média 142×89 esta semana. Creatinina 1.8 (subiu de 1.6). Atenção pra função renal." },
              ]}
            />
            <p className="text-bone/55 text-sm leading-relaxed mt-4 max-w-md">
              Disponível no plano <Link href="/referencia" className="text-sage link-line">Referência</Link>.
            </p>
          </div>

          {/* Exemplo 2: alerta proativo (Clínica) */}
          <div className="md:col-span-6">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/45 mb-4">
              Alertas que o Copilot dispara sozinho
            </div>
            <WhatsAppConvo
              tone="dark"
              messages={[
                { who: "Copilot", text: "Resultado de Maria Lima acabou de chegar: creatinina 2.1 mg/dL. Marcado em vermelho no prontuário. Quer que eu agende retorno em 7 dias?" },
                { who: "Médico", text: "Sim, e me lembra de ligar agora" },
                { who: "Copilot", text: "Feito. Retorno marcado pra 29/05 às 14h30. Lembrete de ligação agendado pras 14h. Quer que eu mande mensagem de aviso pra Maria?" },
              ]}
            />
            <p className="text-bone/55 text-sm leading-relaxed mt-4 max-w-md">
              Disponível a partir do plano <Link href="/clinica" className="text-sage link-line">Clínica</Link>.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-bone/15 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Plano Solo", body: "Confirmação de consulta, mensagem pós-atendimento e aniversário, automáticos." },
            { label: "Plano Clínica", body: "Reativação de pacientes inativos, alertas críticos e lembretes proativos de retorno." },
            { label: "Plano Referência", body: "Linguagem natural, sumário pré-consulta no WhatsApp e análise sob demanda." },
          ].map((c) => (
            <div key={c.label} className="border-t border-sage pt-5">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage mb-3">
                {c.label}
              </div>
              <p className="text-bone/80 text-[15px] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ 06 · CATÁLOGO COMPLETO ============ */}
      <Section tone="bone" grid className="py-24 md:py-32">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="05" label="O catálogo completo" />
          <Label className="hidden md:block">Tudo que o produto faz</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-md text-indigo max-w-[1000px] mb-6">
          Não escondemos o que o produto faz. <span className="serif-accent text-sage">Aqui está tudo.</span>
        </h2>
        <p className="text-midnight/65 text-base md:text-lg max-w-2xl mb-14 md:mb-16 leading-relaxed">
          O catálogo abaixo é o que está no plano Referência, o mais completo. O Solo e o
          Clínica contêm um subconjunto. Veja a comparação na{" "}
          <Link href="/planos" className="text-indigo link-line">página de planos</Link>.
        </p>

        <FeatureCatalog groups={fullCatalog} tone="light" />
      </Section>

      {/* ============ 07 · SECRETARIA TEASER ============ */}
      <Section tone="sage" grid className="py-24 md:py-32">
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <Eyebrow num="06" label="Add-on · Secretaria" className="text-midnight/55" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-7">
            <h2 className="font-sans font-extrabold text-display-md text-midnight leading-[1.05]">
              Quer também uma{" "}
              <span className="serif-accent text-indigo">secretária?</span>
            </h2>
            <p className="mt-8 text-midnight/80 text-base md:text-lg leading-relaxed max-w-xl">
              Profissional dedicada ao seu consultório, treinada pela MedEn e gerenciada por
              nós. Sem CLT, sem rotatividade, com continuidade garantida quando ela tirar
              férias ou for substituída. Trabalha dentro do mesmo Portal, e você acompanha tudo.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTA href="/secretaria" variant="primary">
                Conheça a Secretaria
              </CTA>
              <Link
                href="/contato"
                className="link-line font-mono text-[11px] tracking-[0.25em] uppercase text-midnight/80 hover:text-indigo"
              >
                Falar com a MedEn
              </Link>
            </div>
          </div>

          <ul className="md:col-span-5 grid grid-cols-1 gap-3">
            {[
              "Sem vínculo trabalhista, assinatura mensal",
              "Treinada em atendimento médico e glossário clínico",
              "Cobertura garantida em férias, faltas e desligamentos",
              "Auditoria mensal de qualidade com plano de melhoria",
              "Add-on disponível em Solo, Clínica e Referência",
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

      {/* ============ 08 · CTA FINAL ============ */}
      <Section tone="midnight" grid className="py-28 md:py-36">
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <Eyebrow label="Pronto pra começar" className="text-bone/55" />
          <Label className="hidden md:block text-bone/40">MedEn · 2026</Label>
        </div>

        <h2 className="font-sans font-extrabold text-display-xl text-bone max-w-[1100px] leading-[1.02]">
          Fale com a MedEn.{" "}
          <span className="serif-accent text-sage">A gente monta o plano certo pro seu consultório.</span>
        </h2>

        <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-6">
          <CTA href="/contato" variant="ghost-dark">
            Agendar conversa
          </CTA>
          <Link
            href="/planos"
            className="link-line font-mono text-[11px] tracking-[0.25em] uppercase text-bone/80 hover:text-sage"
          >
            Ver os planos primeiro
          </Link>
        </div>
      </Section>
    </>
  );
}
