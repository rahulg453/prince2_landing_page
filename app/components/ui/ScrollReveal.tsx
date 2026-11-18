"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in-3d"
  | "flip-up-3d"
  | "tilt-in-3d";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewportOnce?: boolean;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  viewportOnce = true,
  ...props
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (animation) {
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -45 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: 45 },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom-in-3d":
        return {
          hidden: { opacity: 0, scale: 0.82, rotateX: 20 },
          visible: { opacity: 1, scale: 1, rotateX: 0 },
        };
      case "flip-up-3d":
        return {
          hidden: { opacity: 0, y: 50, rotateX: 35 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        };
      case "tilt-in-3d":
        return {
          hidden: { opacity: 0, y: 40, rotateY: -25, scale: 0.9 },
          visible: { opacity: 1, y: 0, rotateY: 0, scale: 1 },
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, amount: 0.2 }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
