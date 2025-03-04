"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const animationFrame = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    // Smooth animation loop
    const animate = () => {
      // Update position with linear interpolation
      position.current.x +=
        (targetPosition.current.x - position.current.x) * 0.3;
      position.current.y +=
        (targetPosition.current.y - position.current.y) * 0.3;

      // Apply positions directly to DOM elements
      if (cursorRef.current && outerRef.current) {
        cursorRef.current.style.transform = `translate3d(${targetPosition.current.x}px, ${targetPosition.current.y}px, 0)`;
        outerRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [visible]);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 rounded-full mix-blend-difference bg-white pointer-events-none z-50 transition-opacity duration-300 will-change-transform ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: "-8px",
          top: "-8px",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Outer circle */}
      <div
        ref={outerRef}
        className={`fixed w-12 h-12 border-2 border-white rounded-full mix-blend-difference pointer-events-none z-50 transition-opacity duration-300 will-change-transform ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: "-24px",
          top: "-24px",
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </>
  );
}
