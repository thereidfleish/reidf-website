"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MediaItem } from "../data/projectdetails";

const navBtn =
  "absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 shadow flex items-center justify-center text-zinc-700 hover:bg-white transition-colors cursor-pointer";

function MediaCarousel({ slides }: { slides: { src: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const syncState = useCallback((api: EmblaCarouselType) => {
    const idx = api.selectedScrollSnap();
    setSelectedIndex(idx);
    const h = slideRefs.current[idx]?.offsetHeight;
    if (h) setHeight(h);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    syncState(emblaApi);
    emblaApi.on("select", syncState);
    emblaApi.on("reInit", syncState);
    return () => {
      emblaApi.off("select", syncState);
      emblaApi.off("reInit", syncState);
    };
  }, [emblaApi, syncState]);

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative overflow-hidden rounded-xl transition-[height] duration-300"
        style={height ? { height } : undefined}
      >
        <div ref={emblaRef}>
          <div className="flex items-start">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0"
                ref={(el) => { slideRefs.current[i] = el; }}
              >
                <Image
                  src={slide.src} alt={`Slide ${i + 1}`} width={900} height={600}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  onLoad={() => { if (emblaApi?.selectedScrollSnap() === i) syncState(emblaApi); }}
                />
              </div>
            ))}
          </div>
        </div>
        {slides.length > 1 && (
          <>
            <button onClick={() => emblaApi?.scrollPrev()} className={`${navBtn} left-2`} aria-label="Previous slide">‹</button>
            <button onClick={() => emblaApi?.scrollNext()} className={`${navBtn} right-2`} aria-label="Next slide">›</button>
          </>
        )}
      </div>
      {slides.length > 1 && (
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${i === selectedIndex ? "bg-zinc-700" : "bg-zinc-300"}`}
              aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectMedia({ media }: { media: MediaItem[] }) {
  if (!media?.length) return null;
  return (
    <div className="flex flex-col gap-4">
      {media.map((item, i) => {
        if (item.type === "image")
          return <Image key={i} src={item.src} alt="" width={900} height={600}
            style={{ width: "100%", height: "auto", objectFit: "contain" }} className="rounded-xl" />;
        if (item.type === "video")
          return (
            <video key={i} src={item.src} controls
              style={{ width: "100%", height: "auto" }} className="rounded-xl" />
          );
        if (item.type === "carousel")
          return <MediaCarousel key={i} slides={item.slides} />;
      })}
    </div>
  );
}

