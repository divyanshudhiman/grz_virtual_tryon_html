import { SITE_NAV } from "../data/content";
import { LIVE_TRY_ON_URL } from "../data/links";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-ink)] text-[11px] font-bold text-white">
            VT
          </span>
          <span className="truncate text-sm font-semibold tracking-tight">Virtual Try-On</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {SITE_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#demos"
            className="hidden rounded-full border border-[var(--color-line)] bg-white px-3 py-2 text-[12px] font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-muted)] sm:inline-flex"
          >
            Sample videos
          </a>
          <a
            href={LIVE_TRY_ON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-ink)] px-3 py-2 text-[11px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-4 sm:text-[12px]"
          >
            Try it yourself
          </a>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
