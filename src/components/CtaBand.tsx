import { CTAS, CTA_BAND } from "../data/content";
import { PrimaryButton } from "./PrimaryButton";

export function CtaBand() {
  return (
    <section
      id="get-started"
      className="border-y border-[var(--color-line)] bg-[var(--color-ink)] text-[#f7f5f2]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{CTA_BAND.title}</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-white/65">{CTA_BAND.body}</p>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:shrink-0">
          <PrimaryButton className="w-full bg-white text-[var(--color-ink)] hover:opacity-95 sm:w-auto">
            {CTAS.live}
          </PrimaryButton>
          <PrimaryButton
            variant="outline"
            href="#demos"
            external={false}
            className="w-full !border-white/30 !bg-transparent !text-white hover:!border-white/60 sm:w-auto"
          >
            {CTAS.demos}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
