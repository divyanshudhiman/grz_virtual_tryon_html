import { CTAS, HERO } from "../data/content";
import { TRYON_DEMOS } from "../data/demos";
import { publicAsset } from "../lib/assets";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <section id="experience" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {HERO.eyebrow}
            </p>
            <h1 className="mt-3 text-[1.85rem] font-semibold leading-[1.1] tracking-tight min-[400px]:text-[2.1rem] sm:text-[2.75rem] lg:text-[3rem]">
              {HERO.title}
              <span className="mt-2 block font-display text-[1.5rem] italic font-normal text-[var(--color-muted)] sm:text-[2rem]">
                {HERO.titleAccent}
              </span>
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)] sm:text-base">{HERO.body}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton className="w-full sm:w-auto">{CTAS.live}</PrimaryButton>
              <PrimaryButton variant="outline" href="#demos" external={false} className="w-full sm:w-auto">
                {CTAS.demos}
              </PrimaryButton>
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {HERO.tagline}
            </p>
          </div>

          <a
            href="#demos"
            className="mt-10 block grid grid-cols-2 gap-2 sm:gap-3 lg:mt-0 rounded-2xl transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
            aria-label="Jump to recorded demos"
          >
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
                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-ink)] shadow-sm">
                  {demo.shortTitle}
                </span>
              </div>
            ))}
          </a>
        </div>
      </div>
    </section>
  );
}
