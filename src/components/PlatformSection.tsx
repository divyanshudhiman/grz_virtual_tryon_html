import { PLATFORM, PLATFORM_PILLARS, PLATFORM_STATS } from "../data/content";

export function PlatformSection() {
  return (
    <section id="platform" className="border-b border-[var(--color-line)] bg-[var(--color-ink)] text-[#f7f5f2]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{PLATFORM.eyebrow}</p>
        <h2 className="mt-3 max-w-xl text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl">
          {PLATFORM.title}
          <span className="font-display block italic font-normal text-white/60">{PLATFORM.titleAccent}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/65">{PLATFORM.body}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-[12px] leading-snug text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PLATFORM_PILLARS.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/45">{pillar.title}</p>
              <ul className="mt-3 space-y-2.5">
                {pillar.items.map((line) => (
                  <li key={line} className="flex gap-2 text-[13px] leading-relaxed text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" aria-hidden />
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
