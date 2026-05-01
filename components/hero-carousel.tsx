"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/data/site-content";

type HeroCarouselProps = {
  slides: HeroSlide[];
};

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [paused, slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="relative grid min-h-[540px] content-end overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(20,12,8,0.04),rgba(20,12,8,0.24))]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.36),transparent_18%),linear-gradient(180deg,rgba(255,250,245,0.06),rgba(37,20,11,0.34))]"
      />

      <div className="relative z-10 m-6 w-fit rounded-[20px] border border-white/60 bg-[rgba(255,252,247,0.8)] px-5 py-4 backdrop-blur-md">
        <strong className="block text-base">{activeSlide.title}</strong>
        <span className="mt-1 block max-w-[28ch] text-sm text-muted">{activeSlide.desc}</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2.5">
        <button
          type="button"
          aria-label="上一张"
          className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(255,252,247,0.78)] text-lg text-ink shadow-[0_10px_24px_rgba(45,34,27,0.12)] backdrop-blur-md transition hover:-translate-y-0.5"
          onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
        >
          ←
        </button>
        <div className="flex items-center gap-2 px-1">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`查看第 ${index + 1} 张`}
              className={`h-2.5 rounded-full transition hover:-translate-y-0.5 ${
                index === activeIndex
                  ? "w-6 bg-[rgba(255,252,247,0.96)]"
                  : "w-2.5 bg-[rgba(255,252,247,0.52)]"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="下一张"
          className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(255,252,247,0.78)] text-lg text-ink shadow-[0_10px_24px_rgba(45,34,27,0.12)] backdrop-blur-md transition hover:-translate-y-0.5"
          onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
        >
          →
        </button>
      </div>
    </div>
  );
}
