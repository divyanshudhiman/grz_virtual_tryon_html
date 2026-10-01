import { CTAS, HERO } from "../data/content";
import { BOOK_CALL_URL } from "../data/links";
import { PrimaryButton } from "./PrimaryButton";
import { HeroTryOnPreview } from "./HeroTryOnPreview";
import { SectionHeading } from "./SectionHeading";
import { TrustBar } from "./TrustBar";

export function Hero() {
  return (
    <section id="experience" className="border-b border-[var(--color-line)]/60">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pb-12 lg:pt-20">
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12 xl:gap-14">
          <div className="max-w-xl lg:max-w-none">
            <SectionHeading
              eyebrow={HERO.eyebrow}
              title={HERO.title}
              titleAccent={HERO.titleAccent}
              body={HERO.body}
            />

            <div className="mt-8 space-y-3">
              <PrimaryButton className="w-full sm:w-auto">{CTAS.live}</PrimaryButton>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <PrimaryButton
                  variant="outline"
                  href="#how-it-works"
                  external={false}
                  className="w-full sm:w-auto"
                >
                  {CTAS.integrationGuide}
                </PrimaryButton>
                <PrimaryButton
                  variant="ghost"
                  href={BOOK_CALL_URL}
                  className="w-full justify-center sm:w-auto"
                >
                  {CTAS.bookCall}
                </PrimaryButton>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                {HERO.secondaryHint}{" "}
                <a
                  href="#demos"
                  className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline"
                >
                  {CTAS.demos}
                </a>
              </p>
            </div>

            <TrustBar />

            <ul className="mt-6 flex flex-wrap gap-2">
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

          <HeroTryOnPreview />
        </div>
      </div>
    </section>
  );
}
