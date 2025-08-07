import React, { useEffect, useRef } from "react";

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const getHsl = (token: string) => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
      const [h, s, l] = v.split(/\s+/);
      return { h, s, l } as const;
    };
    const brand500 = getHsl("--brand-500");

    const size = { w: 0, h: 0 };
    const mouse = { x: -9999, y: -9999, active: false };

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const fit = () => {
      size.w = window.innerWidth;
      size.h = window.innerHeight;
      canvas.width = Math.floor(size.w * dpr);
      canvas.height = Math.floor(size.h * dpr);
      canvas.style.width = size.w + "px";
      canvas.style.height = size.h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = size.w * size.h;
      const target = Math.max(40, Math.min(140, Math.floor(area / 12000)));
      if (particles.length === 0) {
        particles = Array.from({ length: target }, () => spawn());
      } else if (particles.length < target) {
        particles.push(...Array.from({ length: target - particles.length }, () => spawn()));
      } else if (particles.length > target) {
        particles.length = target;
      }
    };

    const spawn = (): P => ({
      x: Math.random() * size.w,
      y: Math.random() * size.h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1 + Math.random() * 1.6,
    });

    let running = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      if (!running) return;

      ctx.clearRect(0, 0, size.w, size.h);

      // Lines
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = `hsla(${brand500.h}, ${brand500.s}, ${brand500.l}, 0.28)`;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReduced) {
          // Mouse influence (gentle attraction)
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const d2 = dx * dx + dy * dy;
            const maxDist = 240;
            if (d2 < maxDist * maxDist) {
              const d = Math.sqrt(d2) || 1;
              const f = (1 - d / maxDist) * 0.06; // strength
              p.vx += (dx / d) * f;
              p.vy += (dy / d) * f;
            }
          }

          // Move
          p.x += p.vx;
          p.y += p.vy;

          // Gentle bounds + wrap
          if (p.x < -10) p.x = size.w + 10;
          if (p.x > size.w + 10) p.x = -10;
          if (p.y < -10) p.y = size.h + 10;
          if (p.y > size.h + 10) p.y = -10;

          // Friction
          p.vx *= 0.995;
          p.vy *= 0.995;
        }
      }

      // Connections and nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.globalAlpha = Math.max(0, 1 - dist / 110) * 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = `hsla(${brand500.h}, ${brand500.s}, ${brand500.l}, ${mouse.active ? 0.55 : 0.4})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.active = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running && !rafRef.current) rafRef.current = requestAnimationFrame(draw);
    };

    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", fit);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas className="bg-particles" ref={canvasRef} aria-hidden="true" />;
};

export default InteractiveBackground;
