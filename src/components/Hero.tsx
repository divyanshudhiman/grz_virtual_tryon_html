import { CTAS, HERO } from "../data/content";
import { TRYON_DEMOS } from "../data/demos";
import { publicAsset } from "../lib/assets";
import { PrimaryButton } from "./PrimaryButton";
import { SectionHeading } from "./SectionHeading";

export function Hero() {
  return (
    <section id="experience" className="border-b border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pb-12 lg:pt-20">
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 xl:gap-14">
          <div className="max-w-xl lg:max-w-none">
            <SectionHeading
              eyebrow={HERO.eyebrow}
              title={HERO.title}
              titleAccent={HERO.titleAccent}
              body={HERO.body}
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton className="w-full sm:w-auto">{CTAS.live}</PrimaryButton>
              <PrimaryButton variant="outline" href="#demos" external={false} className="w-full sm:w-auto">
                {CTAS.demos}
              </PrimaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {HERO.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-sm font-medium text-[var(--color-ink)] shadow-sm backdrop-blur-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 min-w-0 lg:mt-0">
            <p className="mb-3 text-center text-sm font-medium text-[var(--color-muted)] lg:text-left">
              {HERO.demoGridHint}
            </p>
            <a
              href="#demos"
              className="group grid grid-cols-2 gap-2 sm:gap-3 rounded-3xl p-1 transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]"
              aria-label="Jump to recorded demos"
            >
              {TRYON_DEMOS.map((demo, i) => (
                <div
                  key={demo.id}
                  className="card-lift relative aspect-square min-h-0 overflow-hidden rounded-2xl bg-[#ebe6e0] shadow-sm ring-1 ring-[var(--color-line)]"
                >
                  <img
                    src={publicAsset(demo.thumbSrc)}
                    alt={`${demo.shortTitle} product preview`}
                    className="product-photo"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 1024px) 45vw, 280px"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-[var(--color-ink)]/85 px-2.5 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                    {demo.shortTitle}
                  </span>
                  {i === 0 ? (
                    <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-lg sm:h-10 sm:w-10">
                      <span aria-hidden className="ml-0.5 text-sm">
                        ▶
                      </span>
                    </span>
                  ) : null}
                </div>
              ))}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
