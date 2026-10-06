import { useEffect, useRef, useState } from "react";
import { INTRO_SECTION } from "../data/content";
import { publicAsset } from "../lib/assets";
import { SectionHeading } from "./SectionHeading";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const src = publicAsset(INTRO_SECTION.videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    video.muted = true;
    const play = video.play();
    if (play) play.catch(() => {});
  }, []);

  return (
    <section id="intro" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <SectionHeading
          className="max-w-2xl"
          eyebrow={INTRO_SECTION.eyebrow}
          title={INTRO_SECTION.title}
          titleAccent={INTRO_SECTION.titleAccent}
          body={INTRO_SECTION.body}
        />

        <div className="mt-8 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl shadow-black/20 ring-1 ring-black/10">
          <div className="demo-video-frame relative flex min-h-[12rem] items-center justify-center bg-neutral-900">
            <video
              ref={videoRef}
              className="max-h-[min(78vh,42rem)] w-full bg-black object-contain"
              src={src}
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              aria-label={INTRO_SECTION.videoLabel}
              onError={() => setFailed(true)}
              onLoadedData={() => setFailed(false)}
            />
            {failed ? (
              <p className="absolute inset-x-4 bottom-4 rounded-xl bg-black/70 px-4 py-3 text-center text-sm text-white">
                {INTRO_SECTION.videoError}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
