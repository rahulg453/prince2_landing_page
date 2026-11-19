"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import EnquiryModal from "../ui/EnquiryModal";

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return pos;
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 mb-4 ${
        light ? "text-amber-300" : "text-amber-400"
      }`}
    >
      <div className={`h-px w-8 ${light ? "bg-amber-300" : "bg-amber-400"}`} />
      <span className="font-mono text-xs uppercase tracking-[0.2em] font-medium">
        {children}
      </span>
      <div className={`h-px w-8 ${light ? "bg-amber-300" : "bg-amber-400"}`} />
    </div>
  );
}

export default function Prince2Hero() {
  const mouse = useMousePosition();
  const px = mouse.x - 0.5;
  const py = mouse.y - 0.5;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(
    "PRINCE2 Foundation + Practitioner",
  );

  const openEnquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen bg-[#0D1B3E] overflow-hidden flex items-center">
        <div className="container">
          {/* Background photo texture */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop&auto=format)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/90 to-[#0D1B3E]/50" />

          {/* 3D FLOATING OBJECTS (Preserved exact original design with rich 3D physics & animations) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ perspective: "800px" }}
          >
            {/* Glowing 3D Sphere */}
            <motion.div
              className="absolute w-80 h-80 rounded-full"
              style={{
                right: "4%",
                top: "10%",
                background:
                  "radial-gradient(circle at 35% 35%, rgba(200,146,42,0.32), rgba(200,146,42,0.08) 50%, transparent 70%)",
                border: "1px solid rgba(200,146,42,0.24)",
                boxShadow:
                  "inset -20px -20px 60px rgba(0,0,0,0.5), 0 0 100px rgba(200,146,42,0.18)",
              }}
              animate={{
                x: px * -45,
                y: py * -28,
                rotateX: py * 22,
                rotateY: px * -22,
                scale: [1, 1.03, 1],
              }}
              transition={{
                x: { type: "spring", stiffness: 55, damping: 18 },
                y: { type: "spring", stiffness: 55, damping: 18 },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* 3D Wireframe Cube with preserve-3d and continuous rotation */}
            <motion.div
              className="absolute w-44 h-44"
              style={{
                right: "21%",
                top: "55%",
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: 32 + py * 28,
                rotateY: 48 + px * 38,
                rotateZ: [0, 8, 0, -8, 0],
                x: px * -28,
                y: py * -22,
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 48, damping: 16 },
                rotateY: { type: "spring", stiffness: 48, damping: 16 },
                rotateZ: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                x: { type: "spring", stiffness: 48, damping: 16 },
                y: { type: "spring", stiffness: 48, damping: 16 },
              }}
            >
              {[
                ["translateZ(44px)", "0.28"],
                ["translateZ(-44px)", "0.28"],
                ["rotateY(90deg) translateZ(44px)", "0.18"],
                ["rotateY(90deg) translateZ(-44px)", "0.18"],
                ["rotateX(90deg) translateZ(44px)", "0.14"],
                ["rotateX(90deg) translateZ(-44px)", "0.14"],
              ].map(([tr, op], i) => (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    transform: tr,
                    border: `1px solid rgba(200,146,42,${op})`,
                    backgroundColor: "rgba(200,146,42,0.02)",
                    boxShadow: "inset 0 0 15px rgba(200,146,42,0.05)",
                  }}
                />
              ))}
            </motion.div>

            {/* 3D Torus Ring */}
            <motion.div
              className="absolute w-28 h-28 rounded-full"
              style={{
                right: "37%",
                top: "16%",
                border: "9px solid rgba(200,146,42,0.25)",
                boxShadow:
                  "0 0 50px rgba(200,146,42,0.15), inset 0 0 20px rgba(0,0,0,0.5)",
              }}
              animate={{
                x: px * -60,
                y: py * -40,
                rotateX: 62 + py * 32,
                rotateY: px * 28,
              }}
              transition={{ type: "spring", stiffness: 38, damping: 14 }}
            />

            {/* Orbiting Golden Floating Particles */}
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-400/35"
                style={{
                  width: 6 + i * 2,
                  height: 6 + i * 2,
                  right: `${8 + i * 7}%`,
                  top: `${32 + (i % 3) * 14}%`,
                  boxShadow: "0 0 10px rgba(245, 158, 11, 0.5)",
                }}
                animate={{
                  x: px * -(22 + i * 10),
                  y: py * -(15 + i * 6),
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0.9, 0.3],
                }}
                transition={{
                  x: { type: "spring", stiffness: 38 + i * 6, damping: 14 },
                  y: { type: "spring", stiffness: 38 + i * 6, damping: 14 },
                  scale: {
                    duration: 2 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 2 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </div>

          {/* HERO CONTENT CONTAINER (EXACT ORIGINAL DESIGN) */}
          <div className="relative max-w-7xl mx-auto pt-36 pb-20 w-full ">
            <div className="max-w-4xl">
              {/* Top Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel light>
                  PROFESSIONAL PRINCE2 TRAINING • Advance Your Career
                </SectionLabel>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.25] mt-2"
              >
                Advance Your Project Management Career with{" "}
                <span className="italic text-amber-400">
                  PRINCE2® Certification
                </span>
              </motion.h1>

              {/* Description Paragraph (clean, authoritative) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-6 text-blue-200 text-lg leading-relaxed max-w-2xl"
              >
                Gain professional recognition with instructor-led PRINCE2
                Foundation and Practitioner training. Master structured project
                governance, strengthen your project management skills, and
                prepare through practical case studies and mock exam practice.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => {
                    const el =
                      document.querySelector("#course") ||
                      document.querySelector("#courses");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#071426] font-bold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/35 cursor-pointer"
                >
                  Explore Training <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => openEnquiry("PRINCE2 Free Consultation")}
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                >
                  <CalendarDays size={18} className="text-amber-400" />
                  Book Free Consultation
                </button>
              </motion.div>

              {/* Statistics Row (Exact original design + AnimatedCounter) */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-16 flex flex-wrap gap-8"
                style={{ perspective: "600px" }}
              >
                {[
                  { val: 10000, suffix: "+", label: "Placements" },
                  { val: 500, suffix: "+", label: "Client Companies" },
                  { val: 98, suffix: "%", label: "Satisfaction Rate" },
                  { val: 15, suffix: "+", label: "Years Experience" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ duration: 0.18 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="h-8 w-px bg-amber-400/40" />
                    <div>
                      <div className="font-['DM_Mono'] text-2xl font-bold text-amber-400">
                        <AnimatedCounter end={s.val} suffix={s.suffix} />
                      </div>
                      <div className="text-blue-300 text-xs uppercase tracking-wider mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
      />
    </>
  );
}
