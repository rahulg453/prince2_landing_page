"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [themeColor, setThemeColor] = useState<"yellow" | "blue">("yellow");

  // Ultra-responsive spring directly on cursor coordinates
  const cursorX = useSpring(0, { stiffness: 1200, damping: 40, mass: 0.1 });
  const cursorY = useSpring(0, { stiffness: 1200, damping: 40, mass: 0.1 });

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement | null;
      if (target) {
        // Check if cursor is over clickable element
        const isClickable = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest("[role='button']") ||
          target.closest(".cursor-pointer"),
        );
        setIsPointer(isClickable);

        // Detect dark vs light section under cursor
        const darkSection = target.closest(
          'section[class*="bg-[#0D1B3E]"], section[class*="bg-[#071426]"], footer, nav, [data-theme="dark"]',
        );

        if (darkSection) {
          // Yellow on dark background, but blue if hovering over an amber/yellow button
          if (
            isClickable &&
            target.closest(
              ".bg-amber-400, .bg-amber-500, [class*='from-amber-400']",
            )
          ) {
            setThemeColor("blue");
          } else {
            setThemeColor("yellow");
          }
        } else {
          // Blue on light background, yellow when hovering over a dark navy button
          const darkButton = target.closest("button, a, [role='button']");

          const isDarkButton =
            darkButton?.classList.contains("bg-[#0B1B3A]") ||
            darkButton?.classList.contains("bg-[#071426]");

          if (isClickable && isDarkButton) {
            setThemeColor("yellow");
          } else {
            setThemeColor("blue");
          }
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  const isYellow = themeColor === "yellow";
  const starFill = isYellow ? "#F59E0B" : "#2563EB";
  const starFilter = isYellow
    ? "drop-shadow(0 0 6px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 12px rgba(245, 158, 11, 0.5))"
    : "drop-shadow(0 0 6px rgba(37, 99, 235, 0.9)) drop-shadow(0 0 12px rgba(37, 99, 235, 0.45))";

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Single Sparkling Star directly on cursor pointer */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isVisible ? (isPointer ? 1.4 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
        className="absolute"
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill={starFill}
          style={{
            filter: starFilter,
            transition: "fill 0.25s ease, filter 0.25s ease",
          }}
        >
          {/* 4-Point Celestial Star Shape */}
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
          {/* Center core highlight */}
          <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" opacity="0.95" />
        </svg>
      </motion.div>
    </div>
  );
}
