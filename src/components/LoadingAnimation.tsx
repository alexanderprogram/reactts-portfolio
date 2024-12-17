// src/components/LoadingAnimation.tsx
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

function LoadingAnimation({ onAnimationComplete }: LoadingAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        onAnimationComplete();
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-primary-50 to-primary-100 
        flex items-center justify-center z-[9999]
        ${isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"}
        transition-opacity duration-500`}
    >
      <div className="relative transform-gpu">
        <svg
          className="w-[400px] h-[120px] md:w-[600px] md:h-[160px]"
          viewBox="0 0 600 160"
          aria-label="TaskSoft Logo Animation"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-8xl md:text-9xl font-bold select-none"
            fill="none"
            stroke="currentColor"
          >
            <tspan
              className="text-primary-600 animate-[strokeDraw_2s_ease-in-out_forwards]"
              strokeWidth="2"
              strokeDasharray="500"
              strokeDashoffset="500"
            >
              TaskSoft
            </tspan>
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-8xl md:text-9xl font-bold select-none"
          >
            <tspan
              className="fill-primary-600 animate-[fillText_1s_ease-in-out_1s_forwards]"
              fillOpacity="0"
            >
              TaskSoft
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default LoadingAnimation;
