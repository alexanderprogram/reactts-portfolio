// src/components/Favicon.tsx
import { useEffect } from "react";

const Favicon = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Set background
      ctx.fillStyle = "#0050e0";
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();

      // Draw T letter
      ctx.fillStyle = "#ffffff";

      // Horizontal bar of T
      ctx.beginPath();
      ctx.roundRect(20, 22, 24, 6, 2);
      ctx.fill();

      // Vertical bar of T
      ctx.beginPath();
      ctx.roundRect(29, 22, 6, 22, 2);
      ctx.fill();

      // Add a subtle shadow effect
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.beginPath();
      ctx.roundRect(29, 22, 6, 22, 2);
      ctx.roundRect(20, 22, 24, 6, 2);
      ctx.fill();
    }

    let link = document.querySelector<HTMLLinkElement>('link[rel*="icon"]');

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = canvas.toDataURL();
  }, []);

  return null;
};

export default Favicon;
