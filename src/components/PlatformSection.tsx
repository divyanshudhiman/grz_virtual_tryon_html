import { PLATFORM, PLATFORM_PILLARS, PLATFORM_STATS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function PlatformSection() {
  return (
    <section id="platform" className="platform-glow border-b border-black/20 text-[#f7f5f2]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          tone="dark"
          eyebrow={PLATFORM.eyebrow}
          title={PLATFORM.title}
          titleAccent={PLATFORM.titleAccent}
          body={PLATFORM.body}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-lift rounded-2xl border border-white/10 bg-white/10 px-4 py-5 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold tracking-tight text-white">{stat.value}</p>
              <p className="mt-1.5 text-sm leading-snug text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PLATFORM_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="card-lift rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-[var(--color-brand)]">{pillar.title}</p>
              <ul className="mt-3 space-y-2.5">
                {pillar.items.map((line) => (
                  <li key={line} className="flex gap-2.5 text-base leading-relaxed text-white/90">
                    <span
                      className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/30 text-[10px] text-white"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
