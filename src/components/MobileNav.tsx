import { SITE_NAV } from "../data/content";

export function MobileNav() {
  return (
    <nav
      aria-label="Page sections"
      className="flex gap-2 overflow-x-auto border-t border-[var(--color-line)]/60 bg-[var(--color-paper)]/80 px-4 py-2.5 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {SITE_NAV.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="shrink-0 snap-start rounded-full border border-transparent bg-[var(--color-surface)] px-3.5 py-2 text-sm font-semibold text-[var(--color-muted)] shadow-sm ring-1 ring-[var(--color-line)] transition-colors active:bg-[var(--color-brand-soft)] active:text-[var(--color-brand)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
