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

        <div
          className={`grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,18.75rem)] lg:gap-10 ${
            isTop ? "mt-8" : "mt-10"
          }`}
        >
          <div
            ref={panelRef}
            className="min-w-0 max-w-full overflow-hidden rounded-3xl bg-[#0a0a0a] shadow-2xl shadow-black/20 ring-1 ring-black/10"
          >
            <div className="demo-video-frame relative aspect-video w-full max-w-full bg-neutral-900">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full max-h-full max-w-full object-contain sm:object-cover"
                playsInline
                loop
                muted={muted}
                poster={publicAsset(active.posterSrc)}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onLoadedData={() => setVideoFailed(false)}
                onError={() => setVideoFailed(true)}
              />
              {videoFailed && (
                <>
                  <img
                    src={publicAsset(active.posterSrc)}
                    alt={active.title}
                    className="absolute inset-0 h-full w-full bg-neutral-900 object-contain p-6"
                  />
                  <p className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/75 px-3 py-2 text-center text-sm text-white">
                    {DEMO_SECTION.videoError}
                  </p>
                </>
              )}
            </div>
            <div className="border-t border-white/10 bg-neutral-950 px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white/60">{DEMO_SECTION.nowPlaying}</p>
                  <p className="truncate text-base font-semibold text-white">{active.title}</p>
                  {muted ? (
                    <p className="mt-1 text-sm text-[var(--color-brand)]/90">{DEMO_SECTION.soundTip}</p>
                  ) : null}
                </div>
                <div className="demo-video-controls flex min-w-0 max-w-full shrink-0 items-center gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? "Pause video" : "Play video"}
                    className="min-h-10 shrink-0 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white hover:bg-white/25 sm:px-4"
                  >
                    <span className="sm:hidden" aria-hidden>
                      {playing ? "⏸" : "▶"}
                    </span>
                    <span className="hidden sm:inline">{playing ? "⏸ Pause" : "▶ Play"}</span>
                  </button>
                  <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-2 tabular-nums text-xs text-white/80 sm:px-3 sm:text-sm">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </span>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Turn sound on" : "Turn sound off"}
                    className={`min-h-10 shrink-0 rounded-full px-3 py-2 text-sm font-semibold sm:px-4 ${
                      muted
                        ? "bg-[var(--color-brand)]/90 text-white hover:bg-[var(--color-brand)]"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                  >
                    <span className="sm:hidden" aria-hidden>
                      {muted ? "🔇" : "🔊"}
                    </span>
                    <span className="hidden sm:inline">{muted ? "🔇 Sound off" : "🔊 Sound on"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label="Full screen"
                    className="min-h-10 shrink-0 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white hover:bg-white/25 sm:px-4"
                  >
                    <span className="sm:hidden" aria-hidden>
                      ⛶
                    </span>
                    <span className="hidden sm:inline">Full screen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0 max-w-full">
            <p className="mb-3 text-sm font-semibold text-[var(--color-ink)]">
              {DEMO_SECTION.sidebarLabel}
            </p>
            <div className="demo-chapter-rail -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 snap-x snap-mandatory [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {TRYON_DEMOS.map((demo) => {
                const isActive = demo.id === active.id;
                return (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={() => loadDemo(demo)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-[min(100%,17.5rem)] shrink-0 snap-center items-center gap-3 rounded-2xl border p-3 text-left transition-all max-lg:max-w-[calc(100vw-2rem)] lg:w-full lg:max-w-none lg:snap-none ${
                      isActive
                        ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)] shadow-md ring-2 ring-[var(--color-brand)]/30"
                        : "border-[var(--color-line)] bg-[var(--color-paper)] hover:border-[var(--color-brand)]/30 hover:shadow-sm"
                    }`}
                  >
                    <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-xl bg-[var(--color-product-fill)] ring-1 ring-black/5 sm:h-16 sm:w-16">
                      <img
                        src={publicAsset(demo.thumbSrc)}
                        alt=""
                        className={
                          demo.id === "glasses" ? "product-photo product-photo--contain" : "product-photo"
                        }
                        sizes="72px"
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
