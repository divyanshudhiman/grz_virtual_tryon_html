import type { ReactNode } from "react";
import { LIVE_TRY_ON_URL } from "../data/links";

type Variant = "solid" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  solid:
    "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] shadow-md shadow-[var(--color-brand)]/20",
  outline:
    "border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-brand)]/40 hover:bg-[var(--color-brand-soft)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-muted)] hover:border-[var(--color-line)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]",
};

interface PrimaryButtonProps {
  variant?: Variant;
  size?: "sm" | "md";
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export function PrimaryButton({
  variant = "solid",
  size = "md",
  href = LIVE_TRY_ON_URL,
  external = true,
  className = "",
  children,
}: PrimaryButtonProps) {
  const sizeClass =
    size === "sm"
      ? "min-h-9 px-4 py-2 text-sm sm:min-h-0"
      : "min-h-11 px-5 py-2.5 text-base sm:min-h-10 sm:px-6 sm:py-3";
  const base = `inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] ${sizeClass} ${styles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {external && variant === "solid" ? (
        <span aria-hidden className="text-white/80">
          ↗
        </span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={base}>
      {children}
    </a>
  );
}
