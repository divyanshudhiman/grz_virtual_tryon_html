import { HERO } from "../data/content";
import { TRYON_DEMOS } from "../data/demos";
import { LIVE_TRY_ON_URL } from "../data/links";
import { publicAsset } from "../lib/assets";

export function Hero() {
  return (
    <section id="experience" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-[1fr_min(340px,42%)] lg:items-center lg:gap-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {HERO.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-[1.85rem] font-semibold leading-[1.1] tracking-tight min-[400px]:text-[2.1rem] sm:text-5xl lg:text-[3.25rem]">
              {HERO.title}
              <span className="mt-2 block font-display text-[1.55rem] italic font-normal text-[var(--color-muted)] sm:text-[2.35rem] lg:text-[2.75rem]">
                {HERO.titleAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {HERO.body}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-2.5 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <a
                href={LIVE_TRY_ON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                {HERO.ctaLive}
              </a>
              <a
                href="#demos"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-muted)] sm:w-auto"
              >
                {HERO.ctaVideos}
              </a>
              <a
                href="#platform"
                className="inline-flex w-full items-center justify-center py-2 text-sm font-semibold text-[var(--color-muted)] underline-offset-4 hover:text-[var(--color-ink)] hover:underline sm:w-auto sm:py-3"
              >
                {HERO.ctaBenefits}
              </a>
            </div>
            <p className="mt-10 max-w-lg text-[9px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[var(--color-muted)] sm:mt-12 sm:text-[10px] sm:tracking-[0.18em]">
              {HERO.tagline}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:mt-0">
            {TRYON_DEMOS.map((demo, i) => (
              <div
                key={demo.id}
                className={`relative overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-[var(--color-line)] ${
                  i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
              >
                <img
                  src={publicAsset(demo.thumbSrc)}
                  alt={demo.shortTitle}
                  className="h-full w-full object-contain p-3 sm:p-4"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-ink)] shadow-sm backdrop-blur-sm">
                  {demo.shortTitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
