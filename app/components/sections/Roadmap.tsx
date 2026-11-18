"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ClipboardList,
  Target,
  Users,
  BriefcaseBusiness,
  Award,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";

const roadmapSteps = [
  {
    number: "01",
    title: "Build Your Foundation",
    duration: "Weeks 1–2",
    description:
      "Master PRINCE2 fundamentals, core terminology, project lifecycle stages, and governance responsibilities.",
    topics: [
      "Project fundamentals",
      "7 Core principles",
      "Roles & responsibilities",
    ],
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Apply Key Practices",
    duration: "Weeks 3–4",
    description:
      "Deep dive into project governance, business case development, risk logs, and stage boundary controls.",
    topics: [
      "Business Case & Plans",
      "Risk & Issue management",
      "Quality criteria",
    ],
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Develop Practical Skills",
    duration: "Weeks 5–6",
    description:
      "Learn to tailor PRINCE2 to agile sprints, hybrid workflows, and diverse organizational cultures.",
    topics: [
      "Tailoring methodology",
      "Change control",
      "Stage exception plans",
    ],
    icon: Target,
  },
  {
    number: "04",
    title: "Work on Real Scenarios",
    duration: "Weeks 7–8",
    description:
      "Simulate end-to-end enterprise projects with realistic constraints, client changes, and team workshops.",
    topics: [
      "Case study workshops",
      "Team collaboration",
      "Executive reporting",
    ],
    icon: Users,
  },
  {
    number: "05",
    title: "Mock Exam Preparation",
    duration: "Weeks 9–10",
    description:
      "Build total exam confidence with timed practice assessments, PeopleCert mock questions, and diagnostic reviews.",
    topics: [
      "Official mock exams",
      "Time-management clinics",
      "Diagnostic weakness fix",
    ],
    icon: Award,
  },
  {
    number: "06",
    title: "Career & Certification",
    duration: "Ongoing",
    description:
      "Take your PeopleCert exam, earn your digital badge, and enhance your CV with project leadership credentials.",
    topics: [
      "Official certificate",
      "Digital badge claim",
      "Career advisory & CV review",
    ],
    icon: BriefcaseBusiness,
  },
];

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#FAF9F6] py-20 lg:py-28"
    >
      <div className="container">
        {/* 3D Atmospheric Background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-amber-100/60 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Heading */}
          <ScrollReveal animation="fade-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-4 py-1.5 shadow-xs">
                <Target size={15} className="text-[#C58A18]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A87512]">
                  YOUR LEARNING PATHWAY
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                Your 3D Roadmap to{" "}
                <span className="italic text-[#C58A18]">PRINCE2®</span>{" "}
                Certification
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
                A structured step-by-step curriculum engineered to transform
                your project governance understanding into certified,
                career-defining leadership.
              </p>
            </div>
          </ScrollReveal>

          {/* DESKTOP 3D TIMELINE */}
          <div className="relative hidden lg:block">
            {/* Animated 3D Laser Timeline Line */}
            <div className="absolute left-[8%] right-[8%] top-9 h-[3px] rounded-full bg-[#E8DCC2]">
              {/* Active Running Pulse Light */}
              <motion.div
                animate={{
                  left: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 h-2 w-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]"
              />
            </div>

            <div className="grid grid-cols-6 gap-4">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                const isPassed = index <= activeStep;

                return (
                  <ScrollReveal
                    key={step.number}
                    animation="flip-up-3d"
                    delay={index * 0.08}
                    className="flex flex-col"
                  >
                    {/* Timeline 3D Interactive Node */}
                    <div className="relative z-10 mb-7 flex justify-center">
                      <button
                        onClick={() => setActiveStep(index)}
                        className={`group relative flex h-18 w-18 items-center justify-center rounded-2xl border-4 transition-all duration-300 hover:scale-110 ${
                          isPassed
                            ? "border-amber-400 bg-[#0B1B3A] text-amber-400 shadow-xl shadow-amber-400/25"
                            : "border-[#FAF9F6] bg-white text-slate-400 shadow-md hover:border-amber-300 hover:text-[#0B1B3A]"
                        }`}
                        style={{ perspective: 600 }}
                      >
                        <Icon size={25} />
                        {/* Pulse Ring when active */}
                        {index === activeStep && (
                          <span className="absolute -inset-1.5 rounded-2xl border-2 border-amber-400 animate-ping opacity-50" />
                        )}
                      </button>
                    </div>

                    {/* 3D Tilt Card */}
                    <Card3D
                      maxTilt={12}
                      glowColor="rgba(245, 158, 11, 0.2)"
                      className={`flex flex-1 flex-col rounded-2xl border p-5 transition-all duration-300 ${
                        index === activeStep
                          ? "border-amber-400 bg-white shadow-xl shadow-amber-400/10"
                          : "border-[#EAE5DA] bg-white/90 shadow-sm hover:border-amber-300 hover:shadow-md"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-xs font-bold tracking-wider text-[#C58A18]">
                          STEP {step.number}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                          <Clock size={12} className="text-amber-500" />
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="min-h-[46px] text-sm font-bold leading-snug text-[#0B1B3A]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[#64748B]">
                        {step.description}
                      </p>

                      <div className="mt-auto space-y-2 border-t border-[#F0ECE3] pt-3.5">
                        {step.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-start gap-1.5 text-[11px] text-[#475569]"
                          >
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0 text-[#C58A18]"
                            />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </Card3D>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* MOBILE & TABLET TIMELINE */}
          <div className="relative space-y-5 lg:hidden">
            <div className="absolute bottom-10 left-[27px] top-10 w-[2px] bg-[#E8DCC2]" />

            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal
                  key={step.number}
                  animation="fade-left"
                  delay={index * 0.08}
                  className="relative flex gap-4 sm:gap-5"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-4 border-[#FAF9F6] bg-[#0B1B3A] text-amber-400 shadow-md">
                    <Icon size={22} />
                  </div>

                  <div className="flex-1 rounded-2xl border border-[#EAE5DA] bg-white p-5 shadow-xs">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold tracking-wider text-[#C58A18]">
                        STEP {step.number}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Clock size={13} className="text-amber-500" />
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B1B3A] sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                      {step.description}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-[#F0ECE3] pt-3">
                      {step.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-center gap-2 text-xs text-[#475569]"
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-[#C58A18]"
                          />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
