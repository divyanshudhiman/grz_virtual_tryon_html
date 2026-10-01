import { FEATURES } from "../data/content";

export function FeatureGrid() {
  return (
    <section id="features" className="border-b border-[var(--color-line)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Supporting detail
        </p>
        <h2 className="mt-3 max-w-xl text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl">
          Less imagining.
          <span className="font-display block italic font-normal text-[var(--color-muted)]">More trying.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
          Photos show the product; try-on shows the product on the person—before they commit to a size or SKU.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-sm"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{item.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--color-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
