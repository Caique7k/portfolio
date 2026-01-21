"use client";

import { useEffect, useRef } from "react";

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    let time = 0;

    const lines = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.3 + Math.random() * 0.6,
      baseAngle: Math.random() * Math.PI * 2,
      length: 80 + Math.random() * 140,
      offset: Math.random() * 1000,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      lines.forEach((line) => {
        const wave =
          Math.sin(time + line.offset) * 0.5 +
          Math.cos(time * 0.7 + line.offset) * 0.3;

        const dx = mouse.x - line.x;
        const dy = mouse.y - line.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 350);

        const angle = line.baseAngle + wave + influence * 0.8;

        line.x += Math.cos(angle) * line.speed;
        line.y += Math.sin(angle) * line.speed;

        if (line.x < -100) line.x = width + 100;
        if (line.x > width + 100) line.x = -100;
        if (line.y < -100) line.y = height + 100;
        if (line.y > height + 100) line.y = -100;

        const x2 = line.x + Math.cos(angle) * line.length;
        const y2 = line.y + Math.sin(angle) * line.length;

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(180, 190, 200, ${0.12 + influence * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}
