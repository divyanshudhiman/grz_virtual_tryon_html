import { HERO } from "../data/content";
import { LIVE_TRY_ON_URL } from "../data/links";

export function Hero() {
  return (
    <section id="experience" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
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
    </section>
  );
}
