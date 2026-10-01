import { TRUST } from "../data/content";
import { PlatformLogos } from "./PlatformLogos";

export function TrustBar() {
  return (
    <div className="mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/90 px-4 py-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
        {TRUST.worksWith}
      </p>
      <PlatformLogos className="mt-3" />
      <p className="mt-4 text-sm font-semibold text-[var(--color-brand)]">{TRUST.highlight}</p>
      <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">{TRUST.disclaimer}</p>
    </div>
  );
}
