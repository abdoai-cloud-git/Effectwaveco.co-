
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      speed: number;
      offset: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = 450;
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() < 0.8 ? 1 : Math.random() < 0.95 ? 1.5 : 2.5,
          baseOpacity: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 0.5 + 0.2, // Twinkle speed
          offset: Math.random() * Math.PI * 2, // Random starting phase
        });
      }
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const seconds = time * 0.001;

      stars.forEach((star) => {
        // Calculate twinkle opacity using sine wave
        const opacity = star.baseOpacity + Math.sin(seconds * star.speed + star.offset) * 0.2;
        // Clamp opacity
        const finalOpacity = Math.max(0.1, Math.min(1, opacity));

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect for larger stars
        if (star.size > 1.5) {
          ctx.shadowBlur = 3;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default StarField;
