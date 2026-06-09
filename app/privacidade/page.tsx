import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  LegalArticle,
  LegalHero,
  LegalList,
  LegalSection,
  LegalSubhead,
  LegalTable,
} from "@/components/Legal";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade · MedEn",
  description:
    "Como a MedEn (uma marca da Firm Collective Tecnologia LTDA) coleta, usa, compartilha e protege dados de médicos, clínicas e pacientes. Em conformidade com a LGPD.",
};

const COMPANY = "FIRM COLLECTIVE TECNOLOGIA LTDA";
const CNPJ = "47.276.333/0001-01";
const CITY = "Campinas, São Paulo, Brasil";

export default function PrivacidadePage() {
  return (
    <>
      {/* HERO */}
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-14 md:pb-20">
        <LegalHero
          eyebrow="Documento legal"
          title="Política de Privacidade"
          version="1.0"
          updated="junho de 2025"
        />
      </Section>

      {/* CORPO */}
      <Section tone="bone" className="pb-24 md:pb-32 border-t border-midnight/10 pt-16 md:pt-20">
        <LegalArticle>
          <LegalSection num="01" title="Quem somos">
            <p>
              MedEn é uma marca da <strong>{COMPANY}</strong>, pessoa jurídica de direito
              privado, inscrita no CNPJ sob o nº {CNPJ}, com sede em {CITY}, doravante
              denominada simplesmente “Firm Collective” ou “nós”.
            </p>
            <p>
              Operamos a plataforma MedEn, um sistema de gestão clínica e prontuário
              eletrônico destinado a médicos e clínicas. O site institucional está em{" "}
              <a href="https://meden.health" className="text-indigo link-line">meden.health</a>.
              O acesso de cada Cliente é entregue em um ambiente dedicado, em subdomínio
              próprio no formato{" "}
              <code className="font-mono text-[14px] bg-bone-warm/60 px-1.5 py-0.5 text-indigo">
                consultorio.meden.health
              </code>
              , conforme detalhado nos Termos de Uso.
            </p>
            <p>
              Contato:{" "}
              <a href={`mailto:${contact.email}`} className="text-indigo link-line break-all">
                {contact.email}
              </a>
            </p>
          </LegalSection>

          <LegalSection num="02" title="A quem esta política se aplica">
            <p>
              Esta Política de Privacidade se aplica a duas categorias distintas de pessoas:
            </p>
            <LegalList
              items={[
                <>
                  <strong>Médicos e clínicas clientes (“Clientes”):</strong> profissionais e
                  estabelecimentos que contratam a plataforma MedEn. Em relação a esses dados,
                  a Firm Collective atua como <em>controladora</em>.
                </>,
                <>
                  <strong>Pacientes dos clientes (“Pacientes”):</strong> pessoas cujos dados de
                  saúde são registrados na plataforma pelos médicos e clínicas. Em relação a
                  esses dados, a Firm Collective atua como <em>operadora</em>, sendo o médico
                  ou clínica o controlador responsável perante os pacientes.
                </>,
              ]}
            />
            <p>
              Se você é paciente e tem dúvidas sobre como seu médico trata seus dados, entre em
              contato diretamente com o consultório ou clínica.
            </p>
          </LegalSection>

          <LegalSection num="03" title="Quais dados coletamos">
            <LegalSubhead>3.1 Dados dos Clientes (médicos e clínicas)</LegalSubhead>
            <LegalList
              items={[
                <><strong>Dados de identificação:</strong> nome completo, CPF, CRM, e-mail, telefone.</>,
                <><strong>Dados da empresa ou clínica:</strong> razão social, CNPJ, endereço.</>,
                <><strong>Dados de acesso:</strong> e-mail, senha criptografada, registros de login.</>,
                <><strong>Dados de pagamento:</strong> processados por terceiros (não armazenamos dados de cartão).</>,
                <><strong>Dados de uso da plataforma:</strong> logs de acesso, configurações, preferências.</>,
              ]}
            />

            <LegalSubhead>3.2 Dados dos Pacientes (tratados em nome dos Clientes)</LegalSubhead>
            <LegalList
              items={[
                <><strong>Dados de identificação:</strong> nome, CPF, data de nascimento, sexo, telefone, e-mail, endereço.</>,
                <><strong>Dados de saúde (dados sensíveis):</strong> diagnósticos, evolução clínica, exame físico, condutas, resultados laboratoriais, exames de imagem, laudos, prescrições medicamentosas.</>,
                <><strong>Dados de agendamento:</strong> data, hora e tipo das consultas.</>,
                <><strong>Documentos:</strong> arquivos enviados pelo paciente ou pelo médico (PDFs, imagens).</>,
                <><strong>Registros de consentimento:</strong> data e versão do aceite dos termos de uso e política de privacidade.</>,
              ]}
            />
          </LegalSection>

          <LegalSection num="04" title="Base legal para o tratamento">
            <LegalSubhead>4.1 Dados dos Clientes</LegalSubhead>
            <LegalTable
              headers={["Finalidade", "Base legal (LGPD)"]}
              rows={[
                ["Prestação do serviço contratado", "Execução de contrato · Art. 7º, V"],
                ["Emissão de notas fiscais e obrigações fiscais", "Cumprimento de obrigação legal · Art. 7º, II"],
                ["Comunicações sobre o serviço", "Legítimo interesse · Art. 7º, IX"],
                ["Marketing (com opção de descadastro)", "Consentimento · Art. 7º, I"],
              ]}
            />

            <LegalSubhead>4.2 Dados dos Pacientes (como operadora)</LegalSubhead>
            <LegalTable
              headers={["Finalidade", "Base legal (LGPD)"]}
              rows={[
                ["Manutenção do prontuário eletrônico", "Cumprimento de obrigação legal (CFM Res. 1.821/2007 e 2.299/2021) · Art. 11, II, a"],
                ["Prestação de cuidados de saúde", "Tutela da saúde por profissional habilitado · Art. 11, II, f"],
                ["Funcionalidades de inteligência artificial clínica", "Consentimento específico do paciente · Art. 11, I"],
              ]}
            />
          </LegalSection>

          <LegalSection num="05" title="Como usamos os dados">
            <p>Utilizamos os dados coletados para:</p>
            <LegalList
              items={[
                "Fornecer, operar e melhorar a plataforma MedEn.",
                "Autenticar usuários e garantir a segurança dos acessos.",
                "Gerar e armazenar prontuários eletrônicos conforme exigências do CFM.",
                "Processar assinaturas digitais ICP-Brasil em documentos médicos.",
                "Sincronizar agendamentos com ferramentas de calendário (quando autorizado).",
                "Gerar análises e interpretações clínicas com apoio de inteligência artificial (quando consentido).",
                "Enviar comunicações sobre o serviço, atualizações e suporte.",
                "Cumprir obrigações legais e regulatórias.",
              ]}
            />
          </LegalSection>

          <LegalSection num="06" title="Compartilhamento com terceiros (suboperadores)">
            <p>
              Para operar a plataforma, compartilhamos dados com os seguintes fornecedores,
              todos vinculados a obrigações de confidencialidade e proteção de dados:
            </p>
            <LegalTable
              headers={["Fornecedor", "Finalidade", "País sede"]}
              rows={[
                ["Supabase Inc.", "Banco de dados e armazenamento de arquivos", "Estados Unidos"],
                ["Vercel Inc.", "Hospedagem e infraestrutura da aplicação", "Estados Unidos"],
                ["Anthropic PBC", "Processamento de IA para interpretação clínica e OCR de laudos", "Estados Unidos"],
                ["Memed", "Emissão de prescrições eletrônicas", "Brasil"],
                ["Google LLC", "Sincronização de agenda (quando habilitado pelo Cliente)", "Estados Unidos"],
                ["Meta Platforms (WhatsApp)", "Comunicação via API WhatsApp Business (quando habilitado)", "Estados Unidos"],
              ]}
            />
            <p>
              <strong>Não vendemos dados pessoais a terceiros.</strong> O compartilhamento
              ocorre exclusivamente para as finalidades descritas acima.
            </p>
          </LegalSection>

          <LegalSection num="07" title="Transferência internacional de dados">
            <p>
              Parte dos nossos fornecedores (Supabase, Vercel, Anthropic, Google) está sediada
              nos Estados Unidos. A transferência internacional de dados ocorre com base em
              cláusulas contratuais-padrão de proteção de dados e demais salvaguardas previstas
              no Art. 33 da LGPD.
            </p>
            <p>
              Especificamente em relação ao uso de inteligência artificial (Anthropic), dados
              clínicos dos pacientes podem ser processados em servidores nos Estados Unidos.
              Esta transferência ocorre somente mediante consentimento específico do paciente,
              colhido no momento do cadastro na plataforma.
            </p>
          </LegalSection>

          <LegalSection num="08" title="Retenção de dados">
            <LegalTable
              headers={["Tipo de dado", "Prazo de retenção"]}
              rows={[
                ["Dados de conta (Clientes)", "Enquanto a conta estiver ativa, mais 5 anos após o encerramento"],
                ["Prontuários médicos eletrônicos", "Mínimo de 20 anos a partir da última anotação (CFM Res. 1.821/2007)"],
                ["Registros de consentimento LGPD", "10 anos"],
                ["Logs de acesso e segurança", "6 meses"],
                ["Dados de cobrança", "5 anos (obrigação fiscal)"],
              ]}
            />
            <p>
              Os prontuários médicos eletrônicos não podem ser excluídos antes do prazo legal,
              mesmo em caso de cancelamento do serviço. Em caso de encerramento do contrato, o
              Cliente receberá exportação completa dos dados antes do encerramento do acesso.
            </p>
          </LegalSection>

          <LegalSection num="09" title="Direitos dos titulares">
            <p>Você tem direito a, a qualquer momento:</p>
            <LegalList
              items={[
                "Confirmar a existência de tratamento dos seus dados.",
                "Acessar os dados que temos sobre você.",
                "Corrigir dados incompletos, inexatos ou desatualizados.",
                "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.",
                "Portabilidade dos dados a outro fornecedor de serviço.",
                "Revogar o consentimento para finalidades baseadas em consentimento.",
                "Obter informações sobre com quem compartilhamos seus dados.",
                "Opor-se ao tratamento em caso de descumprimento da lei.",
              ]}
            />
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a href={`mailto:${contact.email}`} className="text-indigo link-line break-all">
                {contact.email}
              </a>
              . Responderemos em até 15 dias úteis.
            </p>
            <p>
              <strong>Pacientes:</strong> os direitos relativos aos dados do prontuário devem
              ser exercidos junto ao médico ou clínica responsável, que é o controlador dos
              dados.
            </p>
          </LegalSection>

          <LegalSection num="10" title="Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso
              não autorizado, perda, alteração ou destruição, incluindo:
            </p>
            <LegalList
              items={[
                "Transmissão criptografada via HTTPS/TLS em todas as comunicações.",
                "Criptografia de dados em repouso na infraestrutura de banco de dados.",
                "Controle de acesso por perfil (médico, secretária, paciente).",
                "Autenticação segura gerenciada por plataforma especializada.",
                "Assinatura digital ICP-Brasil para prontuários eletrônicos finalizados.",
              ]}
            />
            <p>
              Em caso de incidente de segurança que possa representar risco aos titulares,
              notificaremos a ANPD e os afetados no prazo previsto pela Resolução CD/ANPD nº
              15/2024.
            </p>
          </LegalSection>

          <LegalSection num="11" title="Cookies">
            <p>
              Utilizamos cookies estritamente necessários para o funcionamento da plataforma
              (autenticação e sessão). Não utilizamos cookies de rastreamento ou publicidade.
            </p>
          </LegalSection>

          <LegalSection num="12" title="Atualizações desta política">
            <p>
              Esta política pode ser atualizada periodicamente. Notificaremos os Clientes por
              e-mail em caso de alterações relevantes. A versão vigente estará sempre
              disponível em{" "}
              <a href="https://meden.health/privacidade" className="text-indigo link-line">
                meden.health/privacidade
              </a>
              . O uso continuado da plataforma após a notificação implica aceitação das
              alterações.
            </p>
          </LegalSection>

          <LegalSection num="13" title="Contato">
            <div className="bg-bone-warm/40 border border-midnight/10 p-6 md:p-7 not-prose">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
                Controladora
              </div>
              <p className="font-sans text-lg text-midnight font-semibold mb-1">{COMPANY}</p>
              <p className="text-[15px] text-midnight/75">CNPJ {CNPJ}</p>
              <p className="text-[15px] text-midnight/75">{CITY}</p>
              <p className="text-[15px] mt-3">
                <a href={`mailto:${contact.email}`} className="text-indigo link-line break-all">
                  {contact.email}
                </a>
              </p>
            </div>
          </LegalSection>
        </LegalArticle>
      </Section>

      {/* PARES */}
      <Section tone="sage" grid className="py-16 md:py-20">
        <div className="max-w-[820px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/55 mb-2">
              Veja também
            </div>
            <p className="font-sans text-2xl md:text-3xl tracking-[-0.015em] text-midnight">
              <Link href="/termos" className="link-line">
                Termos de Uso
              </Link>
            </p>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-indigo text-bone hover:bg-midnight font-mono text-[11px] tracking-[0.25em] uppercase transition-colors"
          >
            <span>Falar com a MedEn</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>
      </Section>
    </>
  );
}
