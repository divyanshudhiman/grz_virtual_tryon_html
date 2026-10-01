import type { ReactNode } from "react";

/** Monochrome wordmarks for compatibility strip (presentation use). */
const LOGOS: { id: string; label: string; node: ReactNode }[] = [
  {
    id: "shopify",
    label: "Shopify",
    node: (
      <svg viewBox="0 0 120 28" className="h-5 w-auto" aria-hidden>
        <text x="0" y="20" fill="currentColor" fontSize="18" fontWeight="700" fontFamily="system-ui,sans-serif">
          shopify
        </text>
      </svg>
    ),
  },
  {
    id: "woo",
    label: "WooCommerce",
    node: (
      <svg viewBox="0 0 140 28" className="h-5 w-auto" aria-hidden>
        <text x="0" y="20" fill="currentColor" fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif">
          Woo
        </text>
        <text x="38" y="20" fill="currentColor" fontSize="15" fontWeight="500" fontFamily="system-ui,sans-serif">
          Commerce
        </text>
      </svg>
    ),
  },
  {
    id: "webflow",
    label: "Webflow",
    node: (
      <svg viewBox="0 0 100 28" className="h-5 w-auto" aria-hidden>
        <text x="0" y="20" fill="currentColor" fontSize="17" fontWeight="600" fontFamily="system-ui,sans-serif">
          Webflow
        </text>
      </svg>
    ),
  },
  {
    id: "magento",
    label: "Magento",
    node: (
      <svg viewBox="0 0 100 28" className="h-5 w-auto" aria-hidden>
        <text x="0" y="20" fill="currentColor" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">
          Magento
        </text>
      </svg>
    ),
  },
  {
    id: "api",
    label: "Custom API",
    node: (
      <svg viewBox="0 0 110 28" className="h-5 w-auto" aria-hidden>
        <text x="0" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="ui-monospace,monospace">
          {"{ API }"}
        </text>
      </svg>
    ),
  },
];

interface PlatformLogosProps {
  className?: string;
}

export function PlatformLogos({ className = "" }: PlatformLogosProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {LOGOS.map((logo) => (
        <li
          key={logo.id}
          className="flex h-10 items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-3 text-[var(--color-ink)]/80"
          title={logo.label}
        >
          <span className="sr-only">{logo.label}</span>
          {logo.node}
        </li>
      ))}
    </ul>
  );
}
