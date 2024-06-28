"use client";

import { InfiniteMovingCards } from "@/components/aceternity/inf-moving-cards.jsx";

export function MovingCards({ items, direction, speed }) {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={items} direction={direction} speed={speed} />{" "}
    </div>
  );
}
