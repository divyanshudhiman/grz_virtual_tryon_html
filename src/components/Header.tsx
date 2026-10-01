import { CTAS, SITE_NAV } from "../data/content";
import { PrimaryButton } from "./PrimaryButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#experience" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-ink)] text-[11px] font-bold text-white">
            VT
          </span>
          <span className="hidden truncate text-sm font-semibold tracking-tight sm:inline">Virtual Try-On</span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 md:flex lg:gap-5" aria-label="Sections">
          {SITE_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[12px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
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
