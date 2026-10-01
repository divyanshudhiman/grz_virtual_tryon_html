import { FEATURES } from "../data/content";
import { publicAsset } from "../lib/assets";
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
              className="card-lift overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] shadow-sm"
            >
              <div className="relative aspect-[16/10] min-h-[10rem] overflow-hidden bg-[#ebe6e0] sm:min-h-0">
                <img
                  src={publicAsset(item.image)}
                  alt=""
                  className="product-photo"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 90vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/50 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-[var(--color-brand)]">{item.eyebrow}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
