import { SITE_NAV } from "../data/content";

export function MobileNav() {
  return (
    <nav
      aria-label="Page sections"
      className="flex gap-2 overflow-x-auto border-b border-[var(--color-line)] px-4 py-2.5 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {SITE_NAV.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="shrink-0 rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-ink)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
