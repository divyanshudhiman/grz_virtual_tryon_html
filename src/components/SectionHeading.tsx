type Tone = "light" | "dark";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  body?: string;
  tone?: Tone;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  body,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div className={className}>
      <p
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-normal ${
          isDark ? "bg-white/10 text-white/85" : "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-[1.875rem] font-semibold leading-snug tracking-tight sm:text-4xl sm:leading-tight ${
          isDark ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
        {titleAccent ? (
          <span
            className={`mt-2 block text-xl font-medium leading-snug sm:text-[1.75rem] ${
              isDark ? "text-stone-300" : "text-[var(--color-muted)]"
            }`}
          >
            {titleAccent}
          </span>
        ) : null}
      </h2>
      {body ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            isDark ? "text-stone-200" : "text-[var(--color-muted)]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
