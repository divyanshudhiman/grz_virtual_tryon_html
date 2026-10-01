import { USE_GUIDE } from "../data/content";

export function UseSection() {
  return (
    <section id="use" className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {USE_GUIDE.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl">
          {USE_GUIDE.title}
          <span className="font-display block italic font-normal text-[var(--color-muted)]">
            {USE_GUIDE.titleAccent}
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">{USE_GUIDE.intro}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {USE_GUIDE.paths.map((path) => (
            <article
              key={path.id}
              className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">{path.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">{path.summary}</p>
              <ol className="mt-5 flex-1 space-y-3">
                {path.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-[13px] leading-snug text-[var(--color-ink)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper)] text-[10px] font-bold ring-1 ring-[var(--color-line)]">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
