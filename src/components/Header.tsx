import { CTAS, SITE_NAV } from "../data/content";
import { PrimaryButton } from "./PrimaryButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)]/80 bg-[var(--color-paper)]/95 shadow-sm shadow-black/[0.04] backdrop-blur-lg supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-[3.25rem] max-w-6xl items-center gap-3 px-4 sm:h-14 sm:px-6 lg:px-8">
        <a href="#experience" className="group flex min-w-0 shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-hover)] text-[11px] font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            VT
          </span>
          <span className="hidden truncate text-sm font-semibold tracking-tight sm:inline">Virtual Try-On</span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex lg:gap-1.5" aria-label="Sections">
          {SITE_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-white hover:text-[var(--color-ink)] hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto shrink-0">
          <PrimaryButton size="sm">{CTAS.liveShort}</PrimaryButton>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
