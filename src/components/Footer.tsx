import { CTAS, FOOTER } from "../data/content";
import { LIVE_TRY_ON_URL } from "../data/links";

export function Footer() {
  return (
    <footer className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">Virtual Try-On</p>
            <p className="mt-1 text-[13px] text-[var(--color-muted)]">{FOOTER.body}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[13px]">
            <a href="#demos" className="font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">
              {CTAS.demos}
            </a>
            <a
              href={LIVE_TRY_ON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-ink)] underline underline-offset-2"
            >
              {CTAS.live}
            </a>
            <span className="text-[12px] text-[var(--color-muted)]">
              © {new Date().getFullYear()} · {FOOTER.legal}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
