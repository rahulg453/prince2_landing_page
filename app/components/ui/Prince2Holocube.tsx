"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Compass,
} from "lucide-react";

interface Prince2HolocubeProps {
  onOpenEnquiry?: () => void;
}

export default function Prince2Holocube({ onOpenEnquiry }: Prince2HolocubeProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFace, setActiveFace] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Face rotation definitions
  const faceRotations = [
    { name: "7 Principles", rx: -15, ry: 25 },
    { name: "7 Practices", rx: -15, ry: -65 },
    { name: "7 Processes", rx: -15, ry: 115 },
    { name: "PeopleCert Voucher", rx: -15, ry: -155 },
    { name: "Pass Guarantee", rx: -105, ry: 25 },
    { name: "Exam Support", rx: 75, ry: 25 },
  ];

  const currentRot = faceRotations[activeFace];

  return (
    <div className="relative mx-auto flex h-[480px] w-full max-w-[520px] items-center justify-center lg:h-[560px]">
      {/* Background 3D Radial Glow and Energy Rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-amber-300/15 blur-[90px]" />

        {/* Orbit Ring 1 */}
        <motion.div
          animate={{
            rotateZ: 360,
            rotateX: [65, 72, 65],
          }}
          transition={{
            rotateZ: { duration: 32, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute h-[380px] w-[380px] rounded-full border border-amber-400/25"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 0 30px rgba(245,158,11,0.12)",
          }}
        >
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-amber-300 bg-[#071426] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <Sparkles size={13} />
          </div>
        </motion.div>

        {/* Orbit Ring 2 */}
        <motion.div
          animate={{
            rotateZ: -360,
            rotateY: [45, 55, 45],
          }}
          transition={{
            rotateZ: { duration: 28, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute h-[440px] w-[440px] rounded-full border border-blue-400/20"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute -bottom-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-blue-400 bg-[#071426] text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Compass size={12} />
          </div>
        </motion.div>
      </div>

      {/* 3D Perspective Scene Container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          perspective: 1200,
          perspectiveOrigin: "50% 50%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The 3D Cube Object */}
        <motion.div
          animate={{
            rotateX: currentRot.rx + mousePos.y * -14,
            rotateY: currentRot.ry + mousePos.x * 20,
          }}
          transition={{
            type: "spring",
            stiffness: 75,
            damping: 18,
            mass: 0.8,
          }}
          style={{
            width: 250,
            height: 250,
            transformStyle: "preserve-3d",
          }}
          className="relative cursor-grab active:cursor-grabbing"
        >
          {/* CUBE FACE 1: FRONT - 7 Principles */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-[#0F2244]/95 via-[#0A1832]/95 to-[#071426]/95 p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-xl"
            style={{
              transform: "translateZ(125px)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <Compass size={11} /> 7 Principles
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">PRINCE2® 7</span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-extrabold text-white">Guiding Principles</h4>
              <p className="text-[11px] leading-relaxed text-blue-200/80">
                Business Justification • Defined Roles • Manage by Stages • Manage by Exception • Products • Tailor
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-400">Official Standard</span>
              <span className="font-semibold text-amber-400">100% Syllabus</span>
            </div>
          </div>

          {/* CUBE FACE 2: RIGHT - 7 Practices */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-[#122A54]/95 via-[#0B1E3E]/95 to-[#071426]/95 p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-xl"
            style={{
              transform: "rotateY(90deg) translateZ(125px)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <Layers size={11} /> 7 Practices
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">Gov & Risk</span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-extrabold text-white">Project Controls</h4>
              <p className="text-[11px] leading-relaxed text-blue-200/80">
                Business Case • Organizing • Plans • Risk Management • Quality Review • Issues • Progress
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-400">Execution</span>
              <span className="font-semibold text-amber-400">Practitioner</span>
            </div>
          </div>

          {/* CUBE FACE 3: BACK - 7 Processes */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-[#0F2244]/95 via-[#0A1832]/95 to-[#071426]/95 p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-xl"
            style={{
              transform: "rotateY(180deg) translateZ(125px)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <Target size={11} /> 7 Processes
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">Lifecycle</span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-extrabold text-white">Project Lifecycle</h4>
              <p className="text-[11px] leading-relaxed text-blue-200/80">
                Starting Up • Directing • Initiating • Controlling a Stage • Managing Delivery • Stage Boundary • Closing
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-400">Methodology</span>
              <span className="font-semibold text-amber-400">Structured</span>
            </div>
          </div>

          {/* CUBE FACE 4: LEFT - PeopleCert Exam Voucher */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-[#122A54]/95 via-[#0B1E3E]/95 to-[#071426]/95 p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-xl"
            style={{
              transform: "rotateY(-90deg) translateZ(125px)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <ShieldCheck size={11} /> Official Exam
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">PeopleCert</span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-extrabold text-white">Voucher Included</h4>
              <p className="text-[11px] leading-relaxed text-blue-200/80">
                Online proctored exam voucher with official digital badge and certificate recognized worldwide.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-400">Accredited</span>
              <span className="font-semibold text-amber-400">Global Validity</span>
            </div>
          </div>

          {/* CUBE FACE 5: TOP - Pass Guarantee */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-[#152E5C]/95 via-[#0D2146]/95 to-[#071426]/95 p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-xl"
            style={{
              transform: "rotateX(90deg) translateZ(125px)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <Award size={11} /> Pass Rate
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">98.4%</span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-extrabold text-white">Exam Success</h4>
              <p className="text-[11px] leading-relaxed text-blue-200/80">
                Diagnostic mock simulators, real case scenarios, and targeted coaching to ensure first-time pass.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-400">Mentorship</span>
              <span className="font-semibold text-amber-400">1-on-1 Clinics</span>
            </div>
          </div>

          {/* CUBE FACE 6: BOTTOM - Mentorship & Schedule */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-[#0F2244]/95 via-[#0A1832]/95 to-[#071426]/95 p-6 text-white shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-xl"
            style={{
              transform: "rotateX(-90deg) translateZ(125px)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <Users size={11} /> Live Batches
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">Interactive</span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-extrabold text-white">Flexible Schedules</h4>
              <p className="text-[11px] leading-relaxed text-blue-200/80">
                Weekend & weekday evening batches. Small cohort sizes for maximum instructor interaction.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-400">Format</span>
              <span className="font-semibold text-amber-400">Weekend / Evening</span>
            </div>
          </div>
        </motion.div>

        {/* 3D FLOATING BADGES IN DEPTH AROUND CUBE */}
        {/* Floating Badge 1: Top Right */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            x: mousePos.x * -18,
            rotateX: mousePos.y * 12,
            rotateY: mousePos.x * -12,
          }}
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            x: { type: "spring", stiffness: 45, damping: 15 },
          }}
          className="absolute -right-6 -top-8 z-20 flex items-center gap-2.5 rounded-2xl border border-amber-400/30 bg-[#0F2244]/90 px-4 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md sm:-right-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-400">
            <Award size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Official Exam</p>
            <p className="text-xs font-bold text-white">PeopleCert Voucher</p>
          </div>
        </motion.div>

        {/* Floating Badge 2: Bottom Left */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            x: mousePos.x * 22,
            rotateX: mousePos.y * -14,
            rotateY: mousePos.x * 14,
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { type: "spring", stiffness: 40, damping: 14 },
          }}
          className="absolute -bottom-8 -left-6 z-20 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#071426]/90 px-4 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md sm:-left-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Pass Rate</p>
            <p className="text-xs font-bold text-white">98.4% First-Time</p>
          </div>
        </motion.div>

        {/* Floating Badge 3: Bottom Right */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
            x: mousePos.x * -15,
          }}
          transition={{
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute -bottom-6 -right-4 z-20 hidden items-center gap-2 rounded-xl border border-amber-400/20 bg-[#0A1A35]/85 px-3 py-1.5 shadow-lg backdrop-blur-md sm:flex"
        >
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-[11px] font-semibold text-amber-200">Weekend Batches Active</span>
        </motion.div>
      </div>

      {/* Interactive 3D Face Selector Controls */}
      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-[#071426]/80 p-1.5 shadow-xl backdrop-blur-lg">
        {faceRotations.map((face, index) => (
          <button
            key={face.name}
            onClick={() => setActiveFace(index)}
            className={`rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200 ${
              activeFace === index
                ? "bg-amber-400 text-[#071426] shadow-md shadow-amber-400/30 font-bold scale-105"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {face.name}
          </button>
        ))}
      </div>
    </div>
  );
}
