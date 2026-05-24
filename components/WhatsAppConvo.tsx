type Message = {
  who: "Médico" | "Copilot";
  text: string;
};

type WhatsAppConvoProps = {
  messages: Message[];
  /** Tone-on-bone for default light sections; tone-on-dark for indigo/midnight. */
  tone?: "light" | "dark";
};

export function WhatsAppConvo({ messages, tone = "light" }: WhatsAppConvoProps) {
  const isDark = tone === "dark";
  const frame = isDark
    ? "border border-bone/15 bg-bone/[0.04]"
    : "border border-midnight/10 bg-bone-warm/40";
  const headerText = isDark ? "text-bone/55" : "text-midnight/55";
  const headerBorder = isDark ? "border-bone/10" : "border-midnight/10";

  return (
    <div className={`${frame} p-5 md:p-7`}>
      {/* Header */}
      <div className={`flex items-center justify-between pb-4 mb-5 border-b ${headerBorder}`}>
        <div className={`font-mono text-[10px] tracking-[0.25em] uppercase ${headerText}`}>
          WhatsApp · MedEn Copilot
        </div>
        <div className="flex gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-bone/30" : "bg-midnight/25"}`} />
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-bone/30" : "bg-midnight/25"}`} />
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-bone/30" : "bg-midnight/25"}`} />
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3">
        {messages.map((m, i) => {
          const isMedico = m.who === "Médico";
          if (isMedico) {
            return (
              <div key={i} className="flex justify-end">
                <div className="max-w-[78%] bg-sage/95 text-midnight rounded-2xl rounded-tr-sm px-4 py-2.5 text-[15px] leading-snug">
                  {m.text}
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start">
              <div
                className={`max-w-[82%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-[15px] leading-snug ${
                  isDark ? "bg-bone text-midnight" : "bg-bone text-midnight border border-midnight/10"
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
