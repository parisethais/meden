import Link from "next/link";

/**
 * Three brand-safe logo tones. Pick by the background of the surface the
 * logo is sitting on, not by the "feel" of the page.
 *
 * - ink-on-light: bone / paper / light surfaces (default).  M/d/n indigo, E sage.
 * - paper-on-dark: indigo / midnight surfaces.              M/d/n bone,  E sage.
 * - ink-on-sage:   sage surface. Sage E would vanish.        M/d/n midnight, E indigo.
 */
export type LogoTone = "ink-on-light" | "paper-on-dark" | "ink-on-sage";

type LogoProps = {
  variant?: "wordmark" | "symbol";
  tone?: LogoTone;
  size?: "sm" | "md" | "lg";
  href?: string;
};

const sizeMap = {
  sm: { wordmark: "text-2xl", symbol: "text-3xl" },
  md: { wordmark: "text-3xl", symbol: "text-4xl" },
  lg: { wordmark: "text-5xl", symbol: "text-6xl" },
};

const toneMap: Record<LogoTone, { ink: string; accent: string }> = {
  "ink-on-light": { ink: "text-indigo", accent: "text-sage" },
  "paper-on-dark": { ink: "text-bone", accent: "text-sage" },
  "ink-on-sage": { ink: "text-midnight", accent: "text-indigo" },
};

export function Logo({
  variant = "wordmark",
  tone = "ink-on-light",
  size = "md",
  href = "/",
}: LogoProps) {
  const { ink, accent } = toneMap[tone];

  const content =
    variant === "wordmark" ? (
      <span
        className={`font-sans font-extrabold tracking-[-0.04em] ${sizeMap[size].wordmark} leading-none`}
        aria-label="MedEn"
      >
        <span className={ink}>Med</span>
        <span className={accent}>E</span>
        <span className={ink}>n</span>
      </span>
    ) : (
      <span
        className={`font-sans font-extrabold tracking-[-0.05em] ${sizeMap[size].symbol} leading-none`}
        aria-label="dE"
      >
        <span className={ink}>d</span>
        <span className={accent}>E</span>
      </span>
    );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
}
