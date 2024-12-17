// src/hooks/useScrollAnimation.tsx
import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1, delay = 0) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold,
          rootMargin: "0px",
        }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [threshold, delay]);

  return { elementRef, isVisible };
}
