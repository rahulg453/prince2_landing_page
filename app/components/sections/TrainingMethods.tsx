"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorPlay,
  BookOpen,
  ClipboardCheck,
  Users,
  ArrowRight,
  CheckCircle2,
  Video,
  FileText,
  Target,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const methods = [
  {
    number: "01",
    icon: MonitorPlay,
    title: "Live Online Instructor-Led Training",
    description:
      "Engage directly with certified governance trainers through real-time interactive lectures, screen-shares, and group case solving.",
    points: [
      "Real-time interactive discussions",
      "Live Q&A clinics with senior PMs",
      "Full class recordings provided",
    ],
    tag: "Instructor-Led",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Guided Self-Paced Flexible Access",
    description:
      "Review official accredited PRINCE2 learning modules on your schedule, supported by syllabus chapter quizzes and structured flashcards.",
    points: [
      "24/7 LMS portal access",
      "Bite-sized module breakdowns",
      "Study at your own rhythm",
    ],
    tag: "Flexible Learning",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Practical Case Studies & Exam Mocks",
    description:
      "Bridge exam theory with enterprise scenarios through official PeopleCert mock exams, scenario questions, and scored diagnostic breakdowns.",
    points: [
      "Real-world enterprise case studies",
      "Timed full-length exam simulations",
      "Weakness diagnosis & correction",
    ],
    tag: "Exam Preparation",
  },
  {
    number: "04",
    icon: Users,
    title: "1-on-1 Dedicated Mentor Coaching",
    description:
      "Overcome tricky methodology hurdles with one-on-one mentor appointments, exam booking assistance, and customized study plans.",
    points: [
      "Personalized exam strategy",
      "Dedicated doubt resolution",
      "Pre-exam readiness sign-off",
    ],
    tag: "Personal Support",
  },
];

const learningSteps = [
  {
    icon: Video,
    title: "Learn",
    description:
      "Master the 7 Principles, 7 Practices & 7 Processes from official accredited materials.",
  },
  {
    icon: FileText,
    title: "Practice",
    description:
      "Apply project governance across realistic enterprise scenarios and team exercises.",
  },
  {
    icon: Target,
    title: "Prepare",
    description:
      "Achieve benchmark pass scores across timed mock exam simulators with diagnostic feedback.",
  },
  {
    icon: GraduationCap,
    title: "Certify",
    description:
      "Sit your official PeopleCert proctored exam from home or office and claim your digital credential.",
  },
];

export default function TrainingMethods() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#071426] py-20 sm:py-24 text-white">
        <div className="container">
          {/* 3D Background Lighting */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-amber-500/[0.08] blur-[140px]" />
            <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/[0.08] blur-[140px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1400px]">
            {/* SECTION HEADER */}
            <ScrollReveal animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                  <Sparkles size={14} className="text-amber-400" />
                  HOW WE HELP YOU SUCCEED
                </span>

                <h2 className="font-['Playfair_Display'] mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Flexible Training Methods for{" "}
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    Your Certification Journey
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Whether you prefer live trainer engagement, self-paced
                  independence, or targeted mock clinics, our modular pedagogy
                  adapts to your career schedule.
                </p>
              </div>
            </ScrollReveal>

            {/* 3D TRAINING METHOD CARDS */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {methods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <ScrollReveal
                    key={method.number}
                    animation="zoom-in-3d"
                    delay={index * 0.1}
                    className="h-full"
                  >
                    <Card3D
                      maxTilt={12}
                      glowColor="rgba(245, 158, 11, 0.2)"
                      className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0F2244]/80 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl hover:border-amber-400/50 hover:bg-[#12284E]"
                    >
                      {/* Top Row */}
                      <div className="relative mb-6 flex items-start justify-between">
                        <div
                          style={{ transform: "translateZ(30px)" }}
                          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/20 to-amber-600/[0.06] text-amber-400 shadow-md"
                        >
                          <Icon size={26} strokeWidth={1.8} />
                        </div>

                        <span
                          style={{ transform: "translateZ(20px)" }}
                          className="font-mono text-3xl font-black text-white/[0.08]"
                        >
                          {method.number}
                        </span>
                      </div>

                      {/* Tag */}
                      <span
                        style={{ transform: "translateZ(20px)" }}
                        className="mb-3 w-fit rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300"
                      >
                        {method.tag}
                      </span>

                      {/* Title & Desc */}
                      <div
                        style={{ transform: "translateZ(25px)" }}
                        className="flex-grow"
                      >
                        <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-amber-300 sm:text-lg">
                          {method.title}
                        </h3>

                        <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm">
                          {method.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="my-5 h-px bg-gradient-to-r from-amber-400/30 via-white/10 to-transparent" />

                      {/* Features List */}
                      <div
                        style={{ transform: "translateZ(20px)" }}
                        className="space-y-2.5"
                      >
                        {method.points.map((point) => (
                          <div key={point} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-amber-400"
                            />
                            <span className="text-xs font-medium text-slate-300">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card3D>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* 3D 4-STEP LEARNING JOURNEY LADDER */}
            <ScrollReveal animation="fade-up" delay={0.25} className="mt-20">
              <div className="mb-12 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  PROVEN 4-PHASE PROGRESSION
                </span>
                <h3 className="font-['Playfair_Display'] mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  From First Concept to PeopleCert Certification
                </h3>
              </div>

              <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Connector Laser Line */}
                <div className="absolute left-[12%] right-[12%] top-8 hidden h-[2px] bg-gradient-to-r from-amber-400/20 via-amber-400/60 to-amber-400/20 lg:block" />

                {learningSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <ScrollReveal
                      key={step.title}
                      animation="zoom-in-3d"
                      delay={index * 0.1}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      {/* Step Icon with 3D Halo */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-amber-400/60 bg-[#0F2244] text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-transform duration-300 hover:scale-110">
                        <Icon size={26} />
                        <span className="absolute -bottom-2.5 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-black uppercase text-[#071426]">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      <h4 className="mt-5 text-lg font-bold text-white">
                        {step.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                        {step.description}
                      </p>
                    </ScrollReveal>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* BOTTOM INTERACTIVE CTA BANNER */}
            <ScrollReveal animation="fade-up" delay={0.3} className="mt-16">
              <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-[#0F2244] via-[#12284E] to-[#0F2244] p-7 shadow-2xl sm:flex-row sm:p-9">
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl font-extrabold text-white sm:text-2xl">
                    Not Sure Which Learning Format Suits Your Schedule?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Speak with an education advisor to explore batch
                    availability, weekend options, and fee plans.
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-sm font-bold text-[#071426] shadow-lg shadow-amber-400/20 transition-all duration-300 hover:-translate-y-1 hover:from-amber-300 hover:to-yellow-400 hover:shadow-xl"
                >
                  Discuss Your Learning Options
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse="PRINCE2 Foundation + Practitioner"
      />
    </>
  );
}
