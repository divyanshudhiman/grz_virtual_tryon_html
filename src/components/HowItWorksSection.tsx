import { HOW_IT_WORKS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow={HOW_IT_WORKS.eyebrow}
          title={HOW_IT_WORKS.title}
          titleAccent={HOW_IT_WORKS.titleAccent}
          body={HOW_IT_WORKS.intro}
        />

        <div className="mt-12">
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">{HOW_IT_WORKS.flowLabel}</h3>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_IT_WORKS.flowSteps.map((step, i) => (
              <li
                key={step}
                className="card-lift relative rounded-2xl border border-[var(--color-line)] bg-white p-5 pl-14 shadow-sm"
              >
                <span className="absolute left-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-hover)] text-[12px] font-bold text-white shadow-sm">
                  {i + 1}
                </span>
                <p className="text-base font-medium leading-snug text-[var(--color-ink)]">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 rounded-3xl border border-[var(--color-line)] bg-white p-6 sm:p-8 lg:p-10">
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">{HOW_IT_WORKS.useLabel}</h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            {HOW_IT_WORKS.useIntro}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {HOW_IT_WORKS.paths.map((path) => (
              <article
                key={path.id}
                className="card-lift flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-xl">
                  {path.icon}
                </span>
                <h4 className="mt-4 text-lg font-semibold tracking-tight text-[var(--color-ink)]">{path.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">{path.summary}</p>
                <ol className="mt-5 flex-1 space-y-3">
                  {path.steps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink)] sm:text-base">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[var(--color-brand)] ring-1 ring-[var(--color-line)]">
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
      </div>
    </section>
  );
}
