import { CTAS, CTA_BAND } from "../data/content";
import { LIFESTYLE } from "../data/stockImages";
import { publicAsset } from "../lib/assets";
import { PrimaryButton } from "./PrimaryButton";

export function CtaBand() {
  return (
    <section id="get-started" className="cta-glow relative overflow-hidden border-y border-black/20 text-[#f7f5f2]">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage: `url(${publicAsset(LIFESTYLE.flatlayGear)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{CTA_BAND.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">{CTA_BAND.body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
          <PrimaryButton className="w-full !bg-white !text-[var(--color-ink)] hover:!opacity-95 sm:w-auto">
            {CTAS.live}
          </PrimaryButton>
          <PrimaryButton
            variant="outline"
            href="#demos"
            external={false}
            className="w-full !border-white/35 !bg-white/10 !text-white hover:!border-white/60 hover:!bg-white/15 sm:w-auto"
          >
            {CTAS.demos}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
