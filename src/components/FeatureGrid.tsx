import { FEATURES } from "../data/content";
import { TRYON_DEMOS } from "../data/demos";
import { publicAsset } from "../lib/assets";

export function FeatureGrid() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          For teams who sell personal style
        </p>
          <h2 className="mt-3 max-w-xl text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl">
          Less imagining.
          <span className="font-display block italic font-normal text-[var(--color-muted)]">More trying.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
          A product photo shows the product. Live virtual try-on helps customers explore how a selected look
          appears on them before deciding what to try or buy next.
        </p>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden">
          {TRYON_DEMOS.map((demo) => (
            <div
              key={demo.id}
              className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-line)] bg-white py-1.5 pl-1.5 pr-3 shadow-sm"
            >
              <img
                src={publicAsset(demo.thumbSrc)}
                alt={demo.shortTitle}
                className="h-10 w-10 rounded-full object-contain bg-neutral-50 p-0.5"
              />
              <span className="text-[12px] font-medium text-[var(--color-ink)]">{demo.shortTitle}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
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
