import { JOURNEY } from "../data/content";

export function JourneySection() {
  return (
    <section id="journey" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {JOURNEY.eyebrow}
        </p>
        <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl">
          {JOURNEY.title}
          <span className="font-display block italic font-normal text-[var(--color-muted)]">
            {JOURNEY.titleAccent}
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">{JOURNEY.intro}</p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNEY.steps.map((step, i) => (
            <li
              key={step}
              className="relative rounded-2xl border border-[var(--color-line)] bg-white p-5 pl-12 shadow-sm"
            >
              <span className="absolute left-4 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-ink)] text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <p className="text-[14px] font-medium leading-snug text-[var(--color-ink)]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
