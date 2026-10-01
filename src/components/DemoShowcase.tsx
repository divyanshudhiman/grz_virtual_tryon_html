import { useCallback, useEffect, useRef, useState } from "react";
import { CTAS, DEMO_SECTION } from "../data/content";
import { TRYON_DEMOS, type TryOnDemo } from "../data/demos";
import { publicAsset } from "../lib/assets";
import { PrimaryButton } from "./PrimaryButton";
import { SectionHeading } from "./SectionHeading";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface DemoShowcaseProps {
  /** Sits directly under hero — tighter spacing, no duplicate section chrome. */
  placement?: "default" | "top";
}

export function DemoShowcase({ placement = "default" }: DemoShowcaseProps) {
  const isTop = placement === "top";
  const [active, setActive] = useState<TryOnDemo>(TRYON_DEMOS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const loadDemo = useCallback((demo: TryOnDemo) => {
    setActive(demo);
    setVideoFailed(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.poster = publicAsset(demo.posterSrc);
    video.src = publicAsset(demo.videoSrc);
    video.load();
    video.play().catch(() => setPlaying(false));
    setPlaying(true);
  }, []);

  useEffect(() => {
    loadDemo(TRYON_DEMOS[0]);
  }, [loadDemo]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const panel = panelRef.current;
    if (!panel) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void panel.requestFullscreen();
    }
  };

  return (
    <section
      id="demos"
      className={
        isTop
          ? "bg-transparent pb-14 sm:pb-16 lg:pb-20"
          : "border-b border-[var(--color-line)] bg-[var(--color-surface)]"
      }
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
          isTop ? "pt-0" : "py-16 lg:py-24"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:gap-6">
          <SectionHeading
            className="max-w-2xl"
            eyebrow={DEMO_SECTION.eyebrow}
            title={DEMO_SECTION.title}
            titleAccent={DEMO_SECTION.titleAccent}
            body={isTop ? DEMO_SECTION.bodyTop : DEMO_SECTION.body}
          />
          <PrimaryButton size="sm" className="w-full shrink-0 sm:w-auto">
            {CTAS.liveShort}
          </PrimaryButton>
        </div>

        <div className={`grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 ${isTop ? "mt-8" : "mt-10"}`}>
          <div
            ref={panelRef}
            className="overflow-hidden rounded-3xl bg-[#0a0a0a] shadow-2xl shadow-black/20 ring-1 ring-black/10"
          >
            <div className="relative aspect-video w-full bg-neutral-900">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                loop
                muted={muted}
                poster={publicAsset(active.posterSrc)}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setVideoFailed(true)}
              />
              {videoFailed && (
                <img
                  src={publicAsset(active.posterSrc)}
                  alt={active.title}
                  className="absolute inset-0 h-full w-full bg-neutral-900 object-contain p-6"
                />
              )}
            </div>
            <div className="border-t border-white/10 bg-neutral-950 px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white/60">{DEMO_SECTION.nowPlaying}</p>
                  <p className="truncate text-base font-semibold text-white">{active.title}</p>
                  {muted ? (
                    <p className="mt-1 text-sm text-[var(--color-brand)]/90">{DEMO_SECTION.soundTip}</p>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? "Pause video" : "Play video"}
                    className="min-h-10 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25"
                  >
                    {playing ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <span className="rounded-full bg-white/10 px-3 py-2 tabular-nums text-sm text-white/80">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </span>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Turn sound on" : "Turn sound off"}
                    className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold ${
                      muted
                        ? "bg-[var(--color-brand)]/90 text-white hover:bg-[var(--color-brand)]"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                  >
                    {muted ? "🔇 Sound off" : "🔊 Sound on"}
                  </button>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label="Full screen"
                    className="min-h-10 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25"
                  >
                    Full screen
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--color-ink)]">
              {DEMO_SECTION.sidebarLabel}
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {TRYON_DEMOS.map((demo) => {
                const isActive = demo.id === active.id;
                return (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={() => loadDemo(demo)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-full min-w-[260px] shrink-0 snap-start items-center gap-3 rounded-2xl border p-3 text-left transition-all lg:min-w-0 lg:shrink ${
                      isActive
                        ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)] shadow-md ring-2 ring-[var(--color-brand)]/30"
                        : "border-[var(--color-line)] bg-[var(--color-paper)] hover:border-[var(--color-brand)]/30 hover:shadow-sm"
                    }`}
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                      <img
                        src={publicAsset(demo.thumbSrc)}
                        alt=""
                        className="h-full w-full object-contain p-1.5"
                      />
                      <span
                        className={`absolute bottom-1 right-1 rounded-md px-1.5 py-0.5 text-[9px] font-bold tabular-nums ${
                          isActive ? "bg-[var(--color-brand)] text-white" : "bg-neutral-800/80 text-white"
                        }`}
                      >
                        {demo.chapter}
                      </span>
                    </div>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-base font-semibold leading-snug ${
                          isActive ? "text-[var(--color-brand-hover)]" : "text-[var(--color-ink)]"
                        }`}
                      >
                        {demo.shortTitle}
                      </span>
                      <span className="mt-0.5 block text-sm leading-snug text-[var(--color-muted)]">
                        {demo.category}
                      </span>
                      <span className="mt-1 line-clamp-2 hidden text-sm leading-relaxed text-[var(--color-muted)] sm:block">
                        {demo.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-8 rounded-xl bg-[var(--color-paper)] px-4 py-3 text-sm leading-relaxed text-[var(--color-muted)] ring-1 ring-[var(--color-line)] sm:text-base">
          {DEMO_SECTION.footnote}
        </p>
      </div>
    </section>
  );
}
