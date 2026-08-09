import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  darkMode?: boolean;
}

export default function AnimatedBackground({ darkMode = false }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic speed light particles
    const particleCount = Math.min(Math.floor(width / 18), 60);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4 + 0.2, // Drifting rightward
      speedY: -(Math.random() * 0.8 + 0.3), // Floating upward
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.4 ? "#00D1FF" : Math.random() > 0.5 ? "#6366F1" : "#38BDF8",
    }));

    // Dynamic glowing light beams sliding diagonally
    const beams = Array.from({ length: 4 }, (_, i) => ({
      x: -width * 0.2 + (i * width) / 3,
      y: -height * 0.2,
      length: Math.random() * 250 + 200,
      width: Math.random() * 3 + 1.5,
      speed: Math.random() * 1.2 + 0.8,
      angle: Math.PI / 4, // 45 degree angle
      opacity: Math.random() * 0.4 + 0.2,
    }));

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      // Draw floating speed particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 10) {
          p.x = -10;
        }

        // Pulse opacity
        p.opacity += Math.sin(tick * p.pulseSpeed) * 0.008;
        const currentOpacity = Math.max(0.1, Math.min(0.8, p.opacity));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = darkMode ? currentOpacity * 0.85 : currentOpacity * 0.5;
        ctx.shadowBlur = darkMode ? 12 : 6;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // Draw sliding light beams
      beams.forEach((b) => {
        b.x += b.speed;
        b.y += b.speed * 0.8;

        if (b.x > width + 200 || b.y > height + 200) {
          b.x = -200;
          b.y = Math.random() * (height * 0.6) - height * 0.2;
        }

        const endX = b.x + Math.cos(b.angle) * b.length;
        const endY = b.y + Math.sin(b.angle) * b.length;

        const gradient = ctx.createLinearGradient(b.x, b.y, endX, endY);
        const beamColor = darkMode ? "0, 209, 255" : "14, 165, 233";
        gradient.addColorStop(0, `rgba(${beamColor}, 0)`);
        gradient.addColorStop(0.5, `rgba(${beamColor}, ${b.opacity * (darkMode ? 0.6 : 0.35)})`);
        gradient.addColorStop(1, `rgba(${beamColor}, 0)`);

        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = b.width;
        ctx.globalAlpha = 1;
        ctx.shadowBlur = darkMode ? 15 : 8;
        ctx.shadowColor = "#00D1FF";
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Animated Gradient Mesh Orbs */}
      <div 
        className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-[#00D1FF]/25 via-cyan-500/15 to-blue-600/20 dark:from-[#00D1FF]/20 dark:via-cyan-600/15 dark:to-indigo-900/30 blur-[130px] animate-mesh-orb-1"
      />
      <div 
        className="absolute top-1/3 -left-48 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-sky-400/20 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-cyan-500/15 blur-[150px] animate-mesh-orb-2"
      />
      <div 
        className="absolute -bottom-32 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tl from-sky-400/20 via-[#00D1FF]/15 to-blue-500/20 dark:from-sky-900/25 dark:via-cyan-500/10 dark:to-indigo-900/20 blur-[140px] animate-mesh-orb-3"
      />

      {/* Cybernetic Animated Grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-70 dark:opacity-50 animate-grid-scroll" />

      {/* Interactive 60fps Canvas for Light Particles & Speed Beams */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Vignette border glow */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
}
