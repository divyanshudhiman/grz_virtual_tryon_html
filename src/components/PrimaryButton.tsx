import type { ReactNode } from "react";
import { LIVE_TRY_ON_URL } from "../data/links";

type Variant = "solid" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  solid:
    "bg-[var(--color-ink)] text-white hover:opacity-90 shadow-sm",
  outline:
    "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-muted)]",
  ghost:
    "text-[var(--color-muted)] hover:text-[var(--color-ink)] underline-offset-4 hover:underline",
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
  const sizeClass = size === "sm" ? "px-3.5 py-2 text-[12px]" : "px-5 py-2.5 text-[13px] sm:px-6 sm:py-3 sm:text-sm";
  const base = `inline-flex items-center justify-center rounded-full font-semibold transition-all ${sizeClass} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={base}>
      {children}
    </a>
  );
}
