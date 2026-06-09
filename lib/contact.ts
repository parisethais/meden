/**
 * Canais de contato da MedEn (operação compartilhada com a Firm Collective).
 * Mude aqui e a mudança propaga pra toda a UI.
 */
export const contact = {
  email: "meden@firmcollective.com.br",
  whatsapp: {
    /** Número formatado para exibição. */
    display: "+55 19 99473-1092",
    /** Mesmo número, formato wa.me — só dígitos com código do país. */
    wameId: "5519994731092",
    /** Texto pré-preenchido na conversa do WhatsApp. */
    defaultMessage:
      "Olá, MedEn! Vim pelo site e gostaria de conhecer a plataforma para o meu consultório.",
  },
  location: "São Paulo · Brasil",
} as const;

/** wa.me URL com mensagem pré-preenchida. Aceita override do texto. */
export function waLink(message: string = contact.whatsapp.defaultMessage) {
  return `https://wa.me/${contact.whatsapp.wameId}?text=${encodeURIComponent(message)}`;
}

/** mailto: URL com assunto e corpo opcionais. */
export function mailLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${contact.email}${qs ? `?${qs}` : ""}`;
}
