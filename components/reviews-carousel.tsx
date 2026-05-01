"use client";

import { useEffect, useState } from "react";
import type { Review } from "@/data/site-content";

type ReviewsCarouselProps = {
  reviews: Review[];
};

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, [paused, reviews.length]);

  const activeReview = reviews[activeIndex];

  return (
    <div
      className="reveal overflow-hidden rounded-[28px] border border-white/60 bg-[rgba(255,250,243,0.84)] shadow-glow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <article className="rounded-[24px] border border-black/5 bg-white/55 p-6 md:p-8">
          <span className="text-[1rem] tracking-[0.18em] text-brand">★★★★★</span>
          <p className="mt-5 text-[1.02rem] leading-8 text-muted md:text-[1.08rem]">
            {activeReview.quote}
          </p>
          <div className="mt-7 flex items-center gap-3 text-[0.96rem] text-muted">
            <div className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-deep))] font-bold text-white">
              {activeReview.avatar}
            </div>
            <span>{activeReview.name}</span>
          </div>
        </article>

        <aside className="grid content-between gap-5 rounded-[24px] border border-black/5 bg-[linear-gradient(180deg,rgba(251,241,228,0.95),rgba(255,255,255,0.8))] p-5 md:p-6">
          <div>
            <span className="eyebrow">真实口碑</span>
            <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-ink">
              更多回头客反馈，滑动看看大家为什么放心把毛孩子交给我们。
            </h3>
          </div>

          <div className="grid gap-3">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                aria-label={`查看第 ${index + 1} 条顾客反馈`}
                className={`flex items-center justify-between gap-3 rounded-[18px] border px-4 py-3 text-left transition ${
                  index === activeIndex
                    ? "border-transparent bg-[linear-gradient(135deg,rgba(231,139,95,0.15),rgba(133,183,162,0.18))] shadow-[0_12px_24px_rgba(45,34,27,0.08)]"
                    : "border-black/5 bg-white/70 hover:-translate-y-0.5"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div>
                  <strong className="block text-[0.98rem] text-ink">{review.name}</strong>
                  <span className="mt-1 block text-[0.88rem] text-muted">
                    {review.quote.slice(0, 20)}...
                  </span>
                </div>
                <span className="text-brand">{index + 1}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-black/5 px-6 py-4 md:px-8">
        <div className="flex items-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              aria-label={`切换到第 ${index + 1} 条顾客反馈`}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex
                  ? "w-7 bg-[rgba(208,109,66,0.96)]"
                  : "w-2.5 bg-[rgba(208,109,66,0.28)] hover:-translate-y-0.5"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="查看上一条顾客反馈"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-lg text-ink shadow-[0_10px_24px_rgba(45,34,27,0.08)] transition hover:-translate-y-0.5"
            onClick={() => setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="查看下一条顾客反馈"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-lg text-ink shadow-[0_10px_24px_rgba(45,34,27,0.08)] transition hover:-translate-y-0.5"
            onClick={() => setActiveIndex((activeIndex + 1) % reviews.length)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
