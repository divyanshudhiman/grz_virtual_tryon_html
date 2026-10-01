import { FOOTER } from "../data/content";
import { LIVE_TRY_ON_URL } from "../data/links";

export function Footer() {
  return (
    <footer className="bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-t border-[var(--color-line)] pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">Virtual Try-On</p>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-[var(--color-muted)]">
              {FOOTER.body}{" "}
              <a
                href={LIVE_TRY_ON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--color-ink)] underline underline-offset-2"
              >
                {FOOTER.ctaLive}
              </a>
              .
            </p>
          </div>
          <p className="text-[12px] text-[var(--color-muted)]">
            © {new Date().getFullYear()} · {FOOTER.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
