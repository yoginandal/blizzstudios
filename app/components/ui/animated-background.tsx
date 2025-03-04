"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  velocityX: number;
  velocityY: number;
}

const PARTICLE_COUNT = 100;
const MOUSE_RADIUS = 100;
const REPULSE_FORCE = 0.02;
const SMOOTHING = 0.1;

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: -MOUSE_RADIUS, y: -MOUSE_RADIUS });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        density: Math.random() * 30 + 1,
        velocityX: 0,
        velocityY: 0,
      }));
    };
    initParticles();

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, MOUSE_RADIUS - distance) / MOUSE_RADIUS;

        // Apply mouse repulsion force
        if (distance < MOUSE_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const acceleration = force * REPULSE_FORCE * particle.density;

          particle.velocityX -= Math.cos(angle) * acceleration;
          particle.velocityY -= Math.sin(angle) * acceleration;
        }

        // Return to base position with smooth easing
        const baseDx = particle.baseX - particle.x;
        const baseDy = particle.baseY - particle.y;

        particle.velocityX += baseDx * SMOOTHING * 0.015;
        particle.velocityY += baseDy * SMOOTHING * 0.015;

        // Apply velocity damping
        particle.velocityX *= 0.95;
        particle.velocityY *= 0.95;

        // Update positions
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + force * 0.3})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-indigo-950 opacity-80" />

      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  );
}
