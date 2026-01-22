"use client";

import { useEffect, useRef } from "react";

export default function FloatingCharacter() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth * 0.7;
    let y = window.innerHeight * 0.6;
    let targetX = x;
    let targetY = y;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 64,
        height: 64,
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {/* INNER element spins */}
      <div className="spin">
        <img
          src="/among-us.png"
          alt="Among Us"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
