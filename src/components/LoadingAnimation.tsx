// src/components/LoadingAnimation.tsx
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

function LoadingAnimation({ onAnimationComplete }: LoadingAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onAnimationComplete, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-primary-50 to-primary-100 
        flex items-center justify-center z-50
        ${isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"}
        transition-opacity duration-800`}
    >
      <div className="relative">
        {/* SVG Text Animation */}
        <svg
          className="w-[300px] h-[80px] md:w-[400px] md:h-[100px]"
          viewBox="0 0 400 100"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-6xl md:text-7xl font-bold"
            fill="none"
            stroke="currentColor"
          >
            <tspan
              className="text-primary-600 animate-[strokeDraw_2s_ease-out_forwards]"
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
            className="text-6xl md:text-7xl font-bold"
          >
            <tspan
              className="fill-primary-600 animate-[fillText_1s_ease-out_1.8s_forwards]"
              fillOpacity="0"
            >
              TaskSoft
            </tspan>
          </text>
        </svg>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary-400
                animate-[pulse_1s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
