"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryCard } from "@/data/site-content";

type GalleryCarouselProps = {
  card: GalleryCard;
  delayClass?: string;
};

export function GalleryCarousel({ card, delayClass = "" }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % card.images.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [card.images.length, paused]);

  return (
    <article
      className={`reveal relative min-h-[270px] overflow-hidden rounded-[22px] bg-[#d9c3af] shadow-glow ${delayClass}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.38),transparent_16%),linear-gradient(180deg,rgba(255,248,242,0.02),rgba(31,18,11,0.45))]"
      />

      {card.images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
        </div>
      ))}

      <div className="absolute right-4 top-4 z-20 flex items-center gap-2" aria-label={card.ariaLabel}>
        <button
          type="button"
          aria-label="上一张"
          className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(255,252,247,0.76)] text-base text-ink shadow-[0_8px_18px_rgba(45,34,27,0.12)] backdrop-blur-md transition hover:-translate-y-0.5"
          onClick={() => setActiveIndex((activeIndex - 1 + card.images.length) % card.images.length)}
        >
          ←
        </button>
        <div className="flex items-center gap-[7px] px-0.5">
          {card.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`查看第 ${index + 1} 张`}
              className={`h-[9px] rounded-full transition hover:-translate-y-0.5 ${
                index === activeIndex
                  ? "w-[22px] bg-[rgba(255,252,247,0.98)]"
                  : "w-[9px] bg-[rgba(255,252,247,0.62)]"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="下一张"
          className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(255,252,247,0.76)] text-base text-ink shadow-[0_8px_18px_rgba(45,34,27,0.12)] backdrop-blur-md transition hover:-translate-y-0.5"
          onClick={() => setActiveIndex((activeIndex + 1) % card.images.length)}
        >
          →
        </button>
      </div>

      <div className="relative z-20 flex min-h-[270px] flex-col justify-end p-[22px]">
        <strong className="mt-[148px] block font-serif text-[1.35rem] text-white sm:mt-[156px]">
          {card.title}
        </strong>
        <span className="text-[0.95rem] text-white/90">{card.subtitle}</span>
      </div>
    </article>
  );
}
