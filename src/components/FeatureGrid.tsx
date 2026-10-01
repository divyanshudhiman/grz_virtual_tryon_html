import { FEATURES } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function FeatureGrid() {
  return (
    <section id="features" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Why it helps"
          title="Less imagining."
          titleAccent="More trying."
          body="Photos show the product; try-on shows the product on the person—before they commit to a size or SKU."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <article
              key={item.title}
              className="card-lift flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm ring-1 ring-[var(--color-line)]">
                {item.icon}
              </span>
              <p className="mt-4 text-sm font-semibold text-[var(--color-brand)]">{item.eyebrow}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight sm:text-xl">{item.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--color-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
