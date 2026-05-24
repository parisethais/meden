type TimelineItem = {
  time: string;
  title: string;
  body: string;
};

export function Timeline({ items, tone = "light" }: { items: TimelineItem[]; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  const timeColor = isDark ? "text-sage" : "text-indigo";
  const titleColor = isDark ? "text-bone" : "text-midnight";
  const bodyColor = isDark ? "text-bone/70" : "text-midnight/70";
  const line = isDark ? "bg-bone/15" : "bg-midnight/15";
  const dot = isDark ? "bg-sage" : "bg-indigo";

  return (
    <ol className="relative">
      {/* Vertical line */}
      <span className={`absolute left-[6px] top-2 bottom-2 w-px ${line}`} aria-hidden />

      {items.map((item, i) => (
        <li key={i} className="relative pl-10 pb-10 last:pb-0">
          <span
            className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ${dot} ring-4 ${
              isDark ? "ring-midnight" : "ring-bone"
            }`}
            aria-hidden
          />
          <div className={`font-mono text-[11px] tracking-[0.25em] uppercase ${timeColor} mb-2`}>
            {item.time}
          </div>
          <h3 className={`font-sans font-bold text-xl md:text-2xl tracking-[-0.015em] ${titleColor} mb-2 leading-snug`}>
            {item.title}
          </h3>
          <p className={`text-[15px] leading-relaxed ${bodyColor} max-w-2xl`}>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
