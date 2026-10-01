import { CTAS, FOOTER } from "../data/content";
import { LIVE_TRY_ON_URL } from "../data/links";

export function Footer() {
  return (
    <footer className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-hover)] text-[10px] font-bold text-white">
                VT
              </span>
              Virtual Try-On
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">{FOOTER.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex flex-wrap gap-3 text-sm sm:text-base">
              <a
                href="#demos"
                className="font-medium text-[var(--color-muted)] underline-offset-2 hover:text-[var(--color-brand)] hover:underline"
              >
                {CTAS.demos}
              </a>
              <a
                href={LIVE_TRY_ON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-brand)] underline-offset-2 hover:underline"
              >
                {CTAS.live}
              </a>
            </div>
            <span className="text-[12px] text-[var(--color-muted)]">
              © {new Date().getFullYear()} · {FOOTER.legal}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
