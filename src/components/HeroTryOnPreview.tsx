import { useEffect, useRef, useState } from "react";
import { HERO } from "../data/content";
import { TRYON_DEMOS } from "../data/demos";
import { publicAsset } from "../lib/assets";

/** Looping try-on clip + catalog contrast; defers load until visible. */
export function HeroTryOnPreview() {
  const featured = TRYON_DEMOS.find((d) => d.id === "cap") ?? TRYON_DEMOS[0];
  const poster = publicAsset(featured.posterSrc);
  const videoSrc = publicAsset(featured.videoSrc);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          video.src = videoSrc;
          video.load();
          video.play().catch(() => setVideoFailed(true));
        } else {
          video.pause();
        }
      },
      { rootMargin: "80px", threshold: 0.25 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [videoSrc]);

  return (
    <div ref={rootRef} className="mt-10 min-w-0 lg:mt-0">
      <a
        href="#demos"
        className="group block overflow-hidden rounded-3xl ring-1 ring-[var(--color-line)] transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]"
        aria-label="Jump to recorded try-on demos"
      >
        <div className="grid grid-cols-[minmax(0,38%)_minmax(0,1fr)] bg-[var(--color-surface)]">
          <div className="border-r border-[var(--color-line)] bg-[var(--color-product-fill)] p-3 sm:p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {HERO.previewBeforeLabel}
            </p>
            <div className="relative mt-2 aspect-[3/4] overflow-hidden rounded-xl bg-[var(--color-surface)]">
              <img
                src={publicAsset(featured.thumbSrc)}
                alt=""
                className="product-photo"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <div className="relative bg-neutral-950 p-3 sm:p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
              {HERO.previewAfterLabel}
            </p>
            <div className="relative mt-2 aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900">
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  videoReady && !videoFailed ? "opacity-100" : "opacity-0"
                }`}
                muted
                loop
                playsInline
                preload="none"
                poster={poster}
                onLoadedData={() => setVideoReady(true)}
                onError={() => setVideoFailed(true)}
              />
              {(videoFailed || !videoReady) && (
                <img
                  src={poster}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <span className="pointer-events-none absolute left-2 top-2 flex items-center gap-1 rounded-full bg-[var(--color-brand)] px-2.5 py-1 text-[11px] font-semibold text-white shadow-md">
                <span aria-hidden>⚡</span>
                {HERO.livePreviewBadge}
              </span>
            </div>
          </div>
        </div>
        <p className="border-t border-[var(--color-line)] px-4 py-3 text-center text-sm text-[var(--color-muted)] sm:text-left">
          {HERO.previewCaption}
        </p>
      </a>
    </div>
  );
}
