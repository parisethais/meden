import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  LegalArticle,
  LegalHero,
  LegalList,
  LegalSection,
  LegalSubhead,
} from "@/components/Legal";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Termos de Uso · MedEn",
  description:
    "Condições de uso da plataforma MedEn, operada pela Firm Collective Tecnologia LTDA. Direitos e responsabilidades do médico, da clínica e da empresa.",
};

const COMPANY = "FIRM COLLECTIVE TECNOLOGIA LTDA";
const CNPJ = "47.276.333/0001-01";
const CITY = "Campinas, São Paulo, Brasil";

export default function TermosPage() {
  return (
    <>
      {/* HERO */}
      <Section tone="bone" grid className="pt-28 md:pt-32 pb-14 md:pb-20">
        <LegalHero
          eyebrow="Documento legal"
          title="Termos de Uso"
          version="1.0"
          updated="junho de 2025"
        />
      </Section>

      {/* CORPO */}
      <Section tone="bone" className="pb-24 md:pb-32 border-t border-midnight/10 pt-16 md:pt-20">
        <LegalArticle>
          <LegalSection num="01" title="Sobre a plataforma">
            <p>
              MedEn é uma plataforma de gestão clínica e prontuário eletrônico desenvolvida e
              operada pela <strong>{COMPANY}</strong>, CNPJ {CNPJ}, com sede em {CITY} (“Firm
              Collective”).
            </p>
            <p>
              Ao criar uma conta e utilizar a plataforma MedEn, você (“Cliente”) concorda com
              estes Termos de Uso em sua integralidade. Leia com atenção antes de prosseguir.
            </p>
          </LegalSection>

          <LegalSection num="02" title="Quem pode usar e como o acesso é entregue">
            <p>A plataforma MedEn é destinada exclusivamente a:</p>
            <LegalList
              items={[
                "Médicos com registro ativo no CRM.",
                "Clínicas e consultórios médicos devidamente registrados.",
                "Profissionais autorizados pelos médicos titulares (secretárias, recepcionistas).",
              ]}
            />

            <LegalSubhead>2.1 Provisionamento do acesso</LegalSubhead>
            <p>
              Não há cadastro autosserviço. O acesso à plataforma é provisionado pela MedEn
              <strong> após a assinatura do contrato</strong>, em seguida ao alinhamento
              comercial e ao recebimento das informações necessárias do Cliente.
            </p>

            <LegalSubhead>2.2 Ambiente dedicado por Cliente</LegalSubhead>
            <p>
              Cada Cliente recebe um <strong>ambiente próprio em subdomínio dedicado</strong>{" "}
              no formato{" "}
              <code className="font-mono text-[14px] bg-bone-warm/60 px-1.5 py-0.5 text-indigo">
                consultorio.meden.health
              </code>{" "}
              (por exemplo,{" "}
              <code className="font-mono text-[14px] bg-bone-warm/60 px-1.5 py-0.5 text-indigo">
                santa-catharina.meden.health
              </code>
              ). Os dados, prontuários, agendas e usuários de cada Cliente ficam isolados em
              seu próprio ambiente.
            </p>

            <LegalSubhead>2.3 Gestão de usuários internos</LegalSubhead>
            <p>
              O Cliente, por meio do médico titular ou da pessoa por ele designada, é
              responsável por cadastrar e gerenciar os usuários do seu ambiente (médicos
              adicionais, secretárias, recepcionistas), definindo permissões e revogando
              acessos quando necessário.
            </p>

            <p>
              É vedado o uso da plataforma por menores de 18 anos ou por qualquer pessoa sem
              habilitação legal para o exercício da atividade médica nas funções que exijam
              tal habilitação.
            </p>
          </LegalSection>

          <LegalSection num="03" title="Responsabilidades do Cliente">
            <p>
              Ao utilizar a plataforma, o Cliente é o único controlador dos dados pessoais e
              de saúde de seus pacientes, sendo integralmente responsável por:
            </p>

            <LegalSubhead>3.1 Conformidade legal</LegalSubhead>
            <LegalList
              items={[
                "Cumprir integralmente a Lei Geral de Proteção de Dados (Lei 13.709/2018) em relação aos dados dos seus pacientes.",
                "Obter o consentimento adequado dos pacientes para tratamento de dados de saúde.",
                "Respeitar os direitos dos titulares previstos na LGPD.",
                "Cumprir as resoluções do CFM aplicáveis ao prontuário eletrônico, em especial as Resoluções 1.821/2007 e 2.299/2021.",
              ]}
            />

            <LegalSubhead>3.2 Uso adequado</LegalSubhead>
            <LegalList
              items={[
                "Manter as credenciais de acesso em sigilo e não compartilhá-las com terceiros não autorizados.",
                "Garantir que o conteúdo registrado na plataforma seja verídico e pertinente ao atendimento médico.",
                "Não utilizar a plataforma para finalidades ilícitas, antiéticas ou que violem normas do CFM/CRM.",
                "Manter o CRM ativo e regularizado durante todo o período de uso.",
              ]}
            />

            <LegalSubhead>3.3 Dados e backup</LegalSubhead>
            <LegalList
              items={[
                "A guarda legal dos prontuários por 20 anos é de responsabilidade do médico. A Firm Collective fornece a infraestrutura, mas recomenda que o Cliente mantenha exportações periódicas dos seus dados.",
              ]}
            />
          </LegalSection>

          <LegalSection num="04" title="Responsabilidades da Firm Collective">
            <p>A Firm Collective se compromete a:</p>
            <LegalList
              items={[
                "Manter a plataforma disponível e funcional, com esforços razoáveis para garantir uptime mínimo de 99% mensais.",
                "Armazenar os dados com segurança conforme descrito na Política de Privacidade.",
                "Não acessar o conteúdo dos prontuários, exceto quando necessário para suporte técnico expressamente autorizado pelo Cliente.",
                "Notificar o Cliente sobre manutenções programadas com antecedência mínima de 24 horas, salvo emergências.",
                "Fornecer exportação completa dos dados do Cliente em caso de encerramento do contrato, no prazo de 30 dias.",
              ]}
            />
            <p className="pt-2">A Firm Collective não se responsabiliza por:</p>
            <LegalList
              items={[
                "Erros de preenchimento ou informações incorretas inseridas pelo Cliente ou seus colaboradores.",
                "Decisões clínicas baseadas em funcionalidades de inteligência artificial. Estas têm caráter de apoio e não substituem o julgamento médico.",
                "Indisponibilidade da plataforma causada por falhas em serviços de terceiros (hospedagem, banco de dados, conectividade).",
                "Uso indevido das credenciais de acesso pelo próprio Cliente ou por terceiros a quem o Cliente concedeu acesso.",
              ]}
            />
          </LegalSection>

          <LegalSection num="05" title="Inteligência Artificial">
            <p>
              A plataforma MedEn utiliza tecnologias de inteligência artificial (IA) para
              funcionalidades como interpretação de exames laboratoriais, leitura automática
              de laudos (OCR) e sumários clínicos. O uso dessas funcionalidades implica o
              envio de dados clínicos a provedores de IA especificados na Política de
              Privacidade.
            </p>
            <p>O Cliente é responsável por:</p>
            <LegalList
              items={[
                "Obter o consentimento dos pacientes para o uso de IA no processamento de seus dados clínicos.",
                "Revisar e validar todos os resultados gerados por IA antes de utilizá-los clinicamente.",
                "Não utilizar saídas de IA como única fonte para decisões médicas.",
              ]}
            />
            <p>
              As funcionalidades de IA têm caráter de auxílio clínico e não constituem
              diagnóstico médico. A responsabilidade pelo ato médico permanece integralmente
              com o profissional habilitado.
            </p>
          </LegalSection>

          <LegalSection num="06" title="Assinatura Digital">
            <p>
              A funcionalidade de assinatura digital ICP-Brasil disponível na plataforma
              depende de certificado digital válido de responsabilidade do próprio médico. A
              Firm Collective fornece a integração técnica, mas não é responsável pela
              obtenção, validade ou renovação do certificado digital do Cliente.
            </p>
          </LegalSection>

          <LegalSection num="07" title="Planos e pagamento">
            <p>
              Os planos, preços e condições de pagamento são definidos no momento da
              contratação e podem ser consultados em{" "}
              <a href="https://meden.health" className="text-indigo link-line">meden.health</a>.
              A Firm Collective se reserva o direito de reajustar os preços, mediante
              notificação ao Cliente com antecedência mínima de 30 dias.
            </p>
            <p>
              O não pagamento por período superior a 30 dias pode resultar na suspensão
              temporária do acesso. Os dados permanecem armazenados por até 90 dias após a
              suspensão, período em que o Cliente pode regularizar a situação ou solicitar
              exportação dos dados.
            </p>
          </LegalSection>

          <LegalSection num="08" title="Propriedade intelectual">
            <p>
              A plataforma MedEn, incluindo seu código, design, marca e funcionalidades, é
              propriedade exclusiva da Firm Collective e protegida pelas leis de propriedade
              intelectual aplicáveis.
            </p>
            <p>
              Os dados inseridos pelo Cliente (prontuários, informações de pacientes,
              documentos) pertencem ao Cliente. A Firm Collective não reivindica qualquer
              direito sobre o conteúdo clínico registrado.
            </p>
          </LegalSection>

          <LegalSection num="09" title="Confidencialidade">
            <p>
              A Firm Collective trata todas as informações dos Clientes e seus pacientes como
              confidenciais, utilizando-as apenas para as finalidades descritas nestes Termos
              e na Política de Privacidade. Os colaboradores da Firm Collective com acesso aos
              sistemas estão vinculados a acordos de confidencialidade.
            </p>
          </LegalSection>

          <LegalSection num="10" title="Rescisão">
            <p>
              <strong>Pelo Cliente:</strong> o contrato pode ser rescindido a qualquer momento
              mediante comunicação formal. O acesso será mantido até o fim do período já pago.
              Após o encerramento, os dados ficam disponíveis para exportação por 30 dias.
            </p>
            <p>
              <strong>Pela Firm Collective:</strong> reservamo-nos o direito de suspender ou
              encerrar o acesso em caso de violação destes Termos, uso ilícito da plataforma
              ou inadimplência, com notificação prévia sempre que possível.
            </p>
            <p>
              Em qualquer caso de encerramento, os prontuários finalizados permanecem
              armazenados pelo prazo legal de 20 anos, em ambiente seguro, acessíveis mediante
              solicitação formal.
            </p>
          </LegalSection>

          <LegalSection num="11" title="Limitação de responsabilidade">
            <p>
              Na máxima extensão permitida pela lei, a responsabilidade total da Firm
              Collective perante o Cliente por quaisquer danos decorrentes do uso da
              plataforma fica limitada ao valor pago pelo Cliente nos últimos 12 meses de
              contrato.
            </p>
            <p>
              A Firm Collective não será responsável por danos indiretos, lucros cessantes,
              perda de dados por ação do próprio Cliente ou por eventos fora de seu controle
              razoável (caso fortuito ou força maior).
            </p>
          </LegalSection>

          <LegalSection num="12" title="Alterações nos Termos">
            <p>
              Estes Termos podem ser atualizados periodicamente. Alterações relevantes serão
              comunicadas por e-mail com antecedência mínima de 15 dias. O uso continuado da
              plataforma após o prazo de notificação implica aceitação das alterações. Caso o
              Cliente não concorde com as novas condições, poderá rescindir o contrato sem
              ônus dentro do prazo de notificação.
            </p>
          </LegalSection>

          <LegalSection num="13" title="Lei aplicável e foro">
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Para
              dirimir quaisquer controvérsias, fica eleito o foro da Comarca de Campinas,
              Estado de São Paulo, com exclusão de qualquer outro, por mais privilegiado que
              seja.
            </p>
          </LegalSection>

          <LegalSection num="14" title="Contato">
            <div className="bg-bone-warm/40 border border-midnight/10 p-6 md:p-7">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-midnight/45 mb-3">
                Empresa
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
            <p className="text-[15px] text-midnight/65 pt-4">
              Ao utilizar a plataforma MedEn, você declara ter lido, compreendido e concordado
              com estes Termos de Uso e com a{" "}
              <Link href="/privacidade" className="text-indigo link-line">
                Política de Privacidade
              </Link>
              .
            </p>
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
              <Link href="/privacidade" className="link-line">
                Política de Privacidade
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
