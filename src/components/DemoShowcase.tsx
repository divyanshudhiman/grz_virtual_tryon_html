import { useCallback, useEffect, useRef, useState } from "react";
import { DEMO_SECTION } from "../data/content";
import { TRYON_DEMOS, type TryOnDemo } from "../data/demos";
import { LIVE_TRY_ON_URL } from "../data/links";
import { publicAsset } from "../lib/assets";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function DemoShowcase() {
  const [active, setActive] = useState<TryOnDemo>(TRYON_DEMOS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const loadDemo = useCallback(
    (demo: TryOnDemo) => {
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
    },
    []
  );

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
    <section id="demos" className="border-b border-[var(--color-line)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {DEMO_SECTION.eyebrow}
          </p>
          <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight sm:text-4xl">
            {DEMO_SECTION.title}
            <span className="font-display block italic font-normal text-[var(--color-muted)]">
              {DEMO_SECTION.titleAccent}
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">{DEMO_SECTION.body}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
          <div
            ref={panelRef}
            className="overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-2xl ring-1 ring-black/10"
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
                  className="absolute inset-0 h-full w-full object-contain bg-neutral-900 p-6"
                />
              )}
            </div>
            <div className="border-t border-white/10 bg-neutral-950 px-3 py-3 sm:px-4 sm:py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    {DEMO_SECTION.nowPlaying}
                  </p>
                  <p className="truncate text-sm font-semibold text-white">{active.title}</p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 sm:justify-end sm:gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/25"
                  >
                    {playing ? "Pause" : "Play"}
                  </button>
                  <span className="rounded-full bg-white/10 px-2.5 py-1.5 tabular-nums text-[10px] text-white/75 sm:text-[11px]">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </span>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/25"
                  >
                    {muted ? "Sound off" : "Sound on"}
                  </button>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/25"
                  >
                    <span className="sm:hidden">Expand</span>
                    <span className="hidden sm:inline">Full screen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {TRYON_DEMOS.map((demo) => {
              const isActive = demo.id === active.id;
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => loadDemo(demo)}
                  className={`group flex w-full min-w-[240px] shrink-0 snap-start items-center gap-3 rounded-xl border p-2.5 text-left transition-all lg:min-w-0 lg:shrink ${
                    isActive
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white shadow-lg"
                      : "border-[var(--color-line)] bg-[var(--color-paper)] hover:border-[var(--color-muted)] hover:shadow-sm"
                  }`}
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
                    <img
                      src={publicAsset(demo.thumbSrc)}
                      alt=""
                      className="h-full w-full object-contain p-1"
                    />
                    <span
                      className={`absolute bottom-0.5 right-0.5 rounded px-1 text-[8px] font-bold tabular-nums ${
                        isActive ? "bg-black/70 text-white" : "bg-white/90 text-neutral-600"
                      }`}
                    >
                      {demo.chapter}
                    </span>
                  </div>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold leading-snug">{demo.shortTitle}</span>
                    <span
                      className={`mt-0.5 block text-[11px] leading-snug ${
                        isActive ? "text-white/75" : "text-[var(--color-muted)]"
                      }`}
                    >
                      {demo.category}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[var(--color-muted)]">{DEMO_SECTION.footnote}</p>
          <a
            href={LIVE_TRY_ON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            {DEMO_SECTION.ctaLive}
          </a>
        </div>
      </div>
    </section>
  );
}
