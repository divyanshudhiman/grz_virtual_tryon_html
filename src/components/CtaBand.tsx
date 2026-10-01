import { CTAS, CTA_BAND } from "../data/content";
import { PrimaryButton } from "./PrimaryButton";

export function CtaBand() {
  return (
    <section id="get-started" className="cta-glow border-y border-stone-800 text-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-2xl border border-white/15 bg-stone-900/50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {CTA_BAND.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-stone-200">{CTA_BAND.body}</p>
              <p className="mt-4 text-sm text-stone-300">
                {CTA_BAND.secondary}{" "}
                <a href="#demos" className="font-semibold text-white underline-offset-2 hover:underline">
                  {CTA_BAND.secondaryLink}
                </a>
              </p>
            </div>
            <div className="w-full shrink-0 sm:w-auto sm:min-w-[12rem]">
              <PrimaryButton className="w-full !bg-white !text-[var(--color-ink)] hover:!opacity-95">
                {CTAS.live}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
