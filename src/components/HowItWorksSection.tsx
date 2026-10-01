import { HOW_IT_WORKS } from "../data/content";
import { INTEGRATION_LINKS } from "../data/links";
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
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">{HOW_IT_WORKS.rolloutLabel}</h3>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {HOW_IT_WORKS.integrationStages.map((stage, i) => (
              <li
                key={stage.title}
                className="card-lift relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-sm"
              >
                {i < HOW_IT_WORKS.integrationStages.length - 1 ? (
                  <span
                    className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-[var(--color-line)] md:block lg:w-6"
                    aria-hidden
                  />
                ) : null}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">
                  {stage.step}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{stage.title}</h4>
                <p className="mt-1 text-sm font-medium text-[var(--color-brand)]">{stage.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{stage.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Shopify merchants can start from the{" "}
            <a
              href={INTEGRATION_LINKS.shopify}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline"
            >
              Shopify App Store
            </a>
            ; headless and custom stacks use the{" "}
            <a href={INTEGRATION_LINKS.customApi} className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline">
              API embed path
            </a>
            .
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
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
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper)] text-[10px] font-bold text-[var(--color-brand)] ring-1 ring-[var(--color-line)]">
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
