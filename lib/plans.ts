// ============================================================================
// MedEn — Catálogo de planos
// Três planos progressivos + Secretaria como add-on em qualquer plano.
// Sem preços em lugar nenhum — CTA sempre leva ao contato.
// ============================================================================

export type PlanSlug = "solo" | "clinica" | "referencia";

export type Feature = {
  title: string;
  body: string;
};

export type FeatureGroup = {
  area:
    | "CRM e Pacientes"
    | "Prontuário"
    | "Agenda"
    | "Portal do Paciente"
    | "Financeiro"
    | "Equipe"
    | "Relatórios"
    | "Inteligência Clínica"
    | "Copilot WhatsApp"
    | "Integrações";
  features: Feature[];
};

export type Plan = {
  slug: PlanSlug;
  order: 1 | 2 | 3;
  num: string;
  name: string;
  tagline: string;
  forWho: string;
  description: string;
  highlights: string[]; // 5–6 diferenciais para card
  groups: FeatureGroup[]; // catálogo completo deste plano
  copilot: {
    title: string;
    body: string;
    examples: { who: "Médico" | "Copilot"; text: string }[];
  };
  next: { slug: PlanSlug; name: string; num: string };
};

// ----------------------------------------------------------------------------
// Catálogo base reutilizado entre planos (Solo é o nível 1)
// ----------------------------------------------------------------------------

const SOLO_GROUPS: FeatureGroup[] = [
  {
    area: "CRM e Pacientes",
    features: [
      {
        title: "Lista de pacientes com busca e filtros",
        body: "Toda a base do consultório em uma tela. Filtros por ativo, inativo, convênio, origem de indicação.",
      },
      {
        title: "Ficha individual com histórico completo",
        body: "Cadastro, consultas, exames, documentos, mensagens — tudo na ficha de cada paciente.",
      },
      {
        title: "Cadastro com origem de indicação e convênio",
        body: "Saiba de onde vêm seus pacientes. Indicação por médico, paciente, marketing ou outros canais.",
      },
      {
        title: "Painel de pacientes sem retorno agendado",
        body: "Veja em uma tela quem deveria voltar e ainda não voltou. Sem deixar paciente cair.",
      },
      {
        title: "WhatsApp direto por paciente",
        body: "Clique no nome, abre a conversa. Sem catar número, sem copiar e colar.",
      },
      {
        title: "Controle de retorno previsto editável",
        body: "Defina o intervalo de retorno por paciente — 30, 60, 90 dias, ou personalizado.",
      },
    ],
  },
  {
    area: "Prontuário",
    features: [
      {
        title: "Evolução clínica com sinais vitais",
        body: "PA, FC, peso, altura — registrados em cada consulta, com histórico visual.",
      },
      {
        title: "Diagnósticos com CID",
        body: "Catálogo completo de CID-10. Diagnósticos vinculados ao paciente e ao histórico.",
      },
      {
        title: "Resultados laboratoriais com grade colorida",
        body: "Entrada manual de exames. Amarelo para atenção, vermelho para crítico — automaticamente.",
      },
      {
        title: "Exames de imagem com laudo e arquivo",
        body: "Anexe o PDF ou imagem, registre o laudo, vincule ao paciente. Tudo pesquisável.",
      },
      {
        title: "Histórico completo de consultas",
        body: "Toda evolução, conduta e prescrição passada — acessível em segundos.",
      },
      {
        title: "Documentos vinculados ao paciente",
        body: "Receitas, atestados, pedidos de exame, laudos — organizados na ficha.",
      },
    ],
  },
  {
    area: "Agenda",
    features: [
      {
        title: "Calendário mensal, semanal e diário",
        body: "Três visualizações da agenda. Navegação por arrastar, click ou teclado.",
      },
      {
        title: "Criar, editar, cancelar, remarcar",
        body: "Operações comuns em dois cliques. Histórico de remarcações por paciente.",
      },
      {
        title: "Cores por tipo de consulta",
        body: "Primeira consulta, retorno, procedimento, telemedicina — cada uma com sua cor.",
      },
      {
        title: "Visão expandida do dia",
        body: "O dia inteiro em uma tela: paciente, horário, motivo, status, notas rápidas.",
      },
    ],
  },
  {
    area: "Portal do Paciente",
    features: [
      {
        title: "Acesso individual por login",
        body: "Cada paciente entra com login próprio, vê só o que é dele.",
      },
      {
        title: "Exames laboratoriais com alertas",
        body: "O paciente vê os resultados com os mesmos alertas amarelo/vermelho que você vê.",
      },
      {
        title: "Documentos para download",
        body: "Receitas, atestados e laudos disponíveis 24h — paciente baixa direto.",
      },
      {
        title: "Histórico de consultas com conduta",
        body: "O que foi prescrito, o que foi indicado, qual o próximo passo.",
      },
      {
        title: "Monitoramento de MRPA com gráfico",
        body: "O paciente registra a pressão, você acompanha por gráfico, decide a conduta.",
      },
      {
        title: "Plano de cuidados definido pelo médico",
        body: "Você escreve o plano, o paciente lê. Adesão sobe quando ele entende o que fazer.",
      },
      {
        title: "Notas fiscais disponíveis para download",
        body: "Reembolso do convênio fica mais fácil. Paciente baixa quando precisar.",
      },
      {
        title: "Dados cadastrais editáveis",
        body: "Mudou de endereço, telefone, plano de saúde — o paciente atualiza sozinho.",
      },
    ],
  },
  {
    area: "Financeiro",
    features: [
      {
        title: "KPIs de receita, despesa e saldo",
        body: "Visão mensal, trimestral e anual. Saldo do consultório em uma olhada.",
      },
      {
        title: "Lançamentos por categoria",
        body: "Consultas, procedimentos, aluguel, material, equipe — separados, somados.",
      },
      {
        title: "Controle de notas fiscais emitidas",
        body: "Quem já recebeu, quem ainda não. Sem nota fiscal escapando.",
      },
    ],
  },
  {
    area: "Copilot WhatsApp",
    features: [
      {
        title: "Lembrete automático de consulta",
        body: "N dias antes, o paciente recebe a confirmação no WhatsApp. Você define o intervalo.",
      },
      {
        title: "Mensagem automática pós-consulta",
        body: "Agradecimento, plano de cuidados, próximos passos — disparados sem você lembrar.",
      },
      {
        title: "Mensagem de aniversário",
        body: "Vínculo se constrói com pequenos gestos. Esse fica automático.",
      },
    ],
  },
];

// Diferenciais que entram no Clínica (somam ao Solo)
const CLINICA_EXTRAS: FeatureGroup[] = [
  {
    area: "Prontuário",
    features: [
      {
        title: "OCR inteligente de laudos",
        body: "Faça upload do PDF ou foto do laudo — a IA extrai e preenche todos os valores no prontuário, automaticamente.",
      },
      {
        title: "Prescrição digital via Memed",
        body: "Receita autenticada, com assinatura digital, enviada ao paciente em segundos.",
      },
    ],
  },
  {
    area: "Equipe",
    features: [
      {
        title: "Múltiplos membros — médicos e secretárias",
        body: "Toda a equipe no mesmo sistema. Cada um vê o que precisa, faz o que pode.",
      },
      {
        title: "Permissões granulares por módulo",
        body: "Prontuário, agenda, financeiro, pacientes, mensagens — controlado por perfil.",
      },
      {
        title: "Perfis pré-definidos",
        body: "Médico e secretária já vêm configurados. Personalize se quiser.",
      },
    ],
  },
  {
    area: "Relatórios",
    features: [
      {
        title: "Pacientes com baixa aderência",
        body: "Quem não está cumprindo o plano de cuidados — para você intervir antes do desfecho ruim.",
      },
      {
        title: "Retornos vencidos",
        body: "Lista de quem passou da data de retorno previsto. Recuperação ativa, não passiva.",
      },
      {
        title: "Alertas de laboratório críticos sem seguimento",
        body: "Resultado em vermelho sem nova consulta agendada — aparece na lista de pendências.",
      },
      {
        title: "Pressão arterial fora da meta",
        body: "Pacientes com MRPA acima do alvo. Filtrável por período e gravidade.",
      },
      {
        title: "Pesquisa científica por coorte",
        body: "Filtros por sexo, idade, CID e dois valores laboratoriais com operadores (< > =). Para quem publica.",
      },
      {
        title: "Distribuição demográfica e top diagnósticos",
        body: "Conheça sua casuística. Quem são seus pacientes, do que adoecem, o que prescreve mais.",
      },
    ],
  },
  {
    area: "Copilot WhatsApp",
    features: [
      {
        title: "Reativação de pacientes inativos",
        body: "Quem não volta há X meses recebe uma mensagem com tom certo, no momento certo.",
      },
      {
        title: "Alerta imediato em resultado crítico",
        body: "Resultado laboratorial atinge nível crítico — você é notificado no WhatsApp em segundos.",
      },
      {
        title: "Lembrete proativo de retorno",
        body: "Data prevista se aproxima e o paciente não agendou — Copilot sugere agendar.",
      },
    ],
  },
];

// Diferenciais que entram no Referência (somam ao Clínica)
const REFERENCIA_EXTRAS: FeatureGroup[] = [
  {
    area: "Inteligência Clínica",
    features: [
      {
        title: "Interpretação laboratorial por IA",
        body: "Análise completa por sistema — função renal, hemograma, metabolismo, função hepática — com resumo clínico estruturado.",
      },
      {
        title: "Sumário pré-consulta por IA",
        body: "Antes de cada paciente, um briefing com histórico relevante, últimos exames, alertas e pontos de atenção.",
      },
      {
        title: "Sumário entregue no WhatsApp",
        body: "O Copilot envia o sumário antes da consulta. Você lê no caminho, entra preparado.",
      },
    ],
  },
  {
    area: "Copilot WhatsApp",
    features: [
      {
        title: "Consultas em linguagem natural",
        body: "“Quem são meus pacientes de amanhã?” “Quais exames estão pendentes?” — resposta imediata.",
      },
      {
        title: "Análise de dados sob demanda",
        body: "Distribuição de pacientes, consultas por período, top diagnósticos, alertas laboratoriais — tudo via mensagem.",
      },
    ],
  },
  {
    area: "Integrações",
    features: [
      {
        title: "API aberta",
        body: "Integre com qualquer ferramenta externa — laboratórios, planos de saúde, sistemas próprios.",
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// Composição: Clínica = Solo + CLINICA_EXTRAS; Referência = Clínica + REFERENCIA_EXTRAS
// Fundindo por área para uma única lista por plano.
// ----------------------------------------------------------------------------

function merge(base: FeatureGroup[], extras: FeatureGroup[]): FeatureGroup[] {
  const map = new Map<string, FeatureGroup>();
  for (const g of base) map.set(g.area, { area: g.area, features: [...g.features] });
  for (const g of extras) {
    const existing = map.get(g.area);
    if (existing) existing.features.push(...g.features);
    else map.set(g.area, { area: g.area, features: [...g.features] });
  }
  // Ordem canônica das áreas no site
  const order: FeatureGroup["area"][] = [
    "CRM e Pacientes",
    "Prontuário",
    "Agenda",
    "Portal do Paciente",
    "Financeiro",
    "Equipe",
    "Relatórios",
    "Inteligência Clínica",
    "Copilot WhatsApp",
    "Integrações",
  ];
  return order.filter((a) => map.has(a)).map((a) => map.get(a)!);
}

const CLINICA_GROUPS = merge(SOLO_GROUPS, CLINICA_EXTRAS);
const REFERENCIA_GROUPS = merge(CLINICA_GROUPS, REFERENCIA_EXTRAS);

// ----------------------------------------------------------------------------
// Planos
// ----------------------------------------------------------------------------

export const plans: Record<PlanSlug, Plan> = {
  solo: {
    slug: "solo",
    order: 1,
    num: "01",
    name: "Solo",
    tagline: "Para o médico que toca o consultório com as próprias mãos.",
    forWho:
      "Médico autônomo, consultório particular, agenda gerenciada por ele ou por uma única secretária.",
    description:
      "Tudo que um consultório precisa para funcionar — CRM, prontuário, agenda, portal do paciente, financeiro e o Copilot básico no WhatsApp. Pronto pra rodar no primeiro dia.",
    highlights: [
      "CRM completo com painel de pacientes sem retorno",
      "Prontuário com grade laboratorial colorida (atenção e crítico)",
      "Agenda em três visualizações",
      "Portal do paciente com exames, documentos e MRPA",
      "Copilot básico: lembretes, pós-consulta, aniversário",
      "Financeiro com receita, despesa e nota fiscal",
    ],
    groups: SOLO_GROUPS,
    copilot: {
      title: "Copilot Básico",
      body: "Automatiza as três conversas que você não devia precisar lembrar de mandar: confirmação de consulta, mensagem pós-atendimento e aniversário do paciente.",
      examples: [
        { who: "Copilot", text: "Olá, Ana. Lembrando da sua consulta com o Dr. Carlos amanhã (terça) às 14h30. Posso confirmar?" },
        { who: "Copilot", text: "Bom dia, João. Reforçando o plano: hidroclorotiazida 25mg pela manhã. MRPA por 7 dias e retornar com os valores." },
      ],
    },
    next: { slug: "clinica", name: "Clínica", num: "02" },
  },

  clinica: {
    slug: "clinica",
    order: 2,
    num: "02",
    name: "Clínica",
    tagline: "Para quem já tem equipe — ou está construindo uma.",
    forWho:
      "Consultórios com mais de um médico, ou com secretárias e auxiliares trabalhando junto. Quem precisa de permissões, relatórios e Copilot que age sozinho.",
    description:
      "Tudo do Solo, mais OCR de laudos, prescrição Memed, permissões por equipe, relatórios clínicos completos e Copilot intermediário que reativa pacientes e alerta em resultados críticos.",
    highlights: [
      "Tudo do Solo, mais:",
      "OCR de laudos com IA — sem digitar exame",
      "Prescrição digital Memed",
      "Equipe com permissões granulares",
      "Relatórios clínicos: aderência, retornos vencidos, MRPA fora da meta",
      "Copilot que reativa inativos e alerta em resultado crítico",
    ],
    groups: CLINICA_GROUPS,
    copilot: {
      title: "Copilot Intermediário",
      body: "Além das automações do Solo, o Copilot do plano Clínica age sozinho na recuperação de pacientes e em alertas de segurança clínica.",
      examples: [
        { who: "Copilot", text: "Resultado de Maria Lima acabou de chegar: creatinina 2.1 mg/dL. Marcado em vermelho. Quer que eu agende retorno?" },
        { who: "Copilot", text: "João Pereira não consulta há 8 meses — última conduta era retorno em 90 dias. Posso mandar mensagem de reativação?" },
      ],
    },
    next: { slug: "referencia", name: "Referência", num: "03" },
  },

  referencia: {
    slug: "referencia",
    order: 3,
    num: "03",
    name: "Referência",
    tagline: "Para o consultório que não deixa nada passar.",
    forWho:
      "Clínicas de excelência, médicos de referência na especialidade, consultórios que tratam pacientes complexos e exigem inteligência clínica de verdade.",
    description:
      "Tudo do Clínica, mais interpretação laboratorial por IA, sumário pré-consulta entregue no WhatsApp, Copilot que responde em linguagem natural e API aberta para integrações.",
    highlights: [
      "Tudo do Clínica, mais:",
      "Interpretação laboratorial por IA, por sistema",
      "Sumário pré-consulta entregue no WhatsApp",
      "Copilot completo: linguagem natural e análise sob demanda",
      "API aberta para integrações externas",
    ],
    groups: REFERENCIA_GROUPS,
    copilot: {
      title: "Copilot Completo",
      body: "Conversa de verdade com o consultório. Responde sobre pacientes, agenda, exames e tendências — e entrega o sumário clínico no WhatsApp antes de cada consulta.",
      examples: [
        { who: "Médico", text: "Quem são meus pacientes de amanhã?" },
        { who: "Copilot", text: "Você tem 6 pacientes. Primeiro: Carlos Silva, 8h, retorno. Última creatinina: 1.8 (↑). Quer o sumário completo?" },
        { who: "Médico", text: "Sim" },
        { who: "Copilot", text: "Carlos Silva, 58a. HAS, DM2, DRC estágio 3. Última consulta há 60 dias — ajustou losartana para 100mg. MRPA da última semana: média 142×89. Creatinina hoje 1.8 (subiu de 1.6). Atenção pra função renal." },
      ],
    },
    next: { slug: "solo", name: "Solo", num: "01" },
  },
};

export const planList: Plan[] = [plans.solo, plans.clinica, plans.referencia];

// ----------------------------------------------------------------------------
// Catálogo agregado para a home (todas as áreas, mostrando a fundo)
// ----------------------------------------------------------------------------

export const fullCatalog = REFERENCIA_GROUPS;

// ----------------------------------------------------------------------------
// Secretaria — add-on, não plano
// ----------------------------------------------------------------------------

export const secretaria = {
  title: "Secretaria",
  tagline: "A secretária que o consultório merecia. Sem os encargos que você conhece.",
  description:
    "Profissional dedicada ao seu consultório, treinada e gerenciada pela MedEn. Disponível como add-on em qualquer plano Solo, Clínica ou Referência.",
  pillars: [
    {
      title: "Dedicada ao seu consultório",
      body: "Uma profissional fixa, com identidade própria, atendendo no seu número e em nome do consultório.",
    },
    {
      title: "Treinada pela MedEn",
      body: "Onboarding em atendimento médico, agenda, glossário clínico e ferramentas da plataforma.",
    },
    {
      title: "Trabalha dentro do Portal e do Copilot",
      body: "Toda interação registrada no histórico do paciente. Você acompanha sem precisar perguntar.",
    },
    {
      title: "Continuidade garantida",
      body: "Férias, faltas, desligamentos — coberturas treinadas no seu histórico. Você não precisa agir.",
    },
    {
      title: "Auditoria de qualidade mensal",
      body: "Métricas de atendimento e plano de melhoria contínua acompanhado pela MedEn.",
    },
    {
      title: "Sem vínculo trabalhista",
      body: "Assinatura mensal. Sem CLT, sem rescisão, sem rotatividade silenciosa.",
    },
  ],
  problem: [
    "Contratar leva semanas. Treinar leva meses.",
    "Quando ela vai bem, ela é assediada por outros consultórios.",
    "Quando ela sai, você volta pra estaca zero.",
    "Férias, atestados, faltas — sempre na sua conta.",
    "CLT, encargos, vale, plano de saúde — tudo no seu CNPJ.",
  ],
};
