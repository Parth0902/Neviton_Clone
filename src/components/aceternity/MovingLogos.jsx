import { InfiniteMovingLogos } from "@/components/aceternity/inf-moving-logos.jsx";

export const MovingLogos = ({ logos, direction, color, className, speed }) => {
  return (
    <div className="w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingLogos
        className={className}
        items={logos}
        speed={speed}
        direction={direction}
        color={color}
      />
    </div>
  );
};
