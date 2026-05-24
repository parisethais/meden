import type { FeatureGroup } from "@/lib/plans";

type FeatureCatalogProps = {
  groups: FeatureGroup[];
  /** Optional list of areas marked as new for this plan (vs. inherited from previous). */
  newAreas?: FeatureGroup["area"][];
  tone?: "light" | "dark";
};

export function FeatureCatalog({ groups, newAreas = [], tone = "light" }: FeatureCatalogProps) {
  const isDark = tone === "dark";
  const labelColor = isDark ? "text-bone/45" : "text-midnight/45";
  const areaText = isDark ? "text-bone" : "text-indigo";
  const featureTitle = isDark ? "text-bone" : "text-indigo";
  const featureBody = isDark ? "text-bone/70" : "text-midnight/70";
  const cardBg = isDark ? "bg-midnight" : "bg-bone";
  const border = isDark ? "border-bone/15" : "border-midnight/10";

  return (
    <div className="space-y-10 md:space-y-14">
      {groups.map((group) => {
        const isNew = newAreas.includes(group.area);
        return (
          <section key={group.area}>
            <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-midnight/10 md:border-0">
              <div className="flex items-baseline gap-4">
                <h3 className={`font-sans font-extrabold text-2xl md:text-3xl tracking-[-0.02em] ${areaText}`}>
                  {group.area}
                </h3>
                {isNew && (
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-sage">
                    + Neste plano
                  </span>
                )}
              </div>
              <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${labelColor} hidden md:inline`}>
                {String(group.features.length).padStart(2, "0")} itens
              </span>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border ${border}`} style={{ background: isDark ? "rgba(245,240,232,0.08)" : "rgba(21,20,47,0.08)" }}>
              {group.features.map((f, i) => (
                <article
                  key={f.title}
                  className={`${cardBg} p-6 md:p-7 min-h-[180px] flex flex-col`}
                >
                  <div className={`font-mono text-[10px] tracking-[0.25em] uppercase ${labelColor} mb-4`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className={`font-sans font-bold text-lg tracking-[-0.01em] ${featureTitle} mb-3 leading-snug`}>
                    {f.title}
                  </h4>
                  <p className={`text-[14px] leading-relaxed ${featureBody} mt-auto`}>{f.body}</p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
