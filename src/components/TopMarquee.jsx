import MarqueeComponent from "react-fast-marquee";
import React from "react";

const Marquee = MarqueeComponent.default || MarqueeComponent;
const TopMarquee = () => {
  return (
    <div>
      <Marquee>
        <div class="relative border-y border-gray-500 py-3.5">
          <div class="flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[11px] uppercase tracking-[0.28em] text-ink-400 text-gray-300">
            <div class="flex items-center gap-10">
              <span class="flex items-center gap-10">
                Free shipping over $150<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                Carbon-neutral delivery<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                30-day easy returns<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                Crafted in Portugal<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                Responsible materials<span class="text-clay-400">✦</span>
              </span>
            </div>
            <div class="flex items-center gap-10">
              <span class="flex items-center gap-10">
                Free shipping over $150<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                Carbon-neutral delivery<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                30-day easy returns<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                Crafted in Portugal<span class="text-clay-400">✦</span>
              </span>
              <span class="flex items-center gap-10">
                Responsible materials<span class="text-clay-400">✦</span>
              </span>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TopMarquee;
