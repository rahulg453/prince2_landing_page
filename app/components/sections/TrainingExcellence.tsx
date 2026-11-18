"use client";

import { motion } from "framer-motion";
import {
  UserRoundCheck,
  FileCheck,
  Headset,
  Clock,
  Check,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
  {
    icon: UserRoundCheck,
    number: "01",
    title: "15+ Years Avg. Trainer Expertise",
    description:
      "Learn from certified corporate governance directors, senior PeopleCert assessors, and enterprise delivery leads.",
    highlight: "Senior Assessors",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Official Exam Simulator & Prep",
    description:
      "Prepare confidently with full mock examinations, case questions, and diagnostic performance analytics.",
    highlight: "Diagnostic Scoring",
  },
  {
    icon: Headset,
    number: "03",
    title: "Dedicated 1-on-1 Mentor Clinics",
    description:
      "Personal doubt-clearing sessions, exam booking assistance, and customized study plans to keep you on schedule.",
    highlight: "Direct Access",
  },
  {
    icon: Clock,
    number: "04",
    title: "Flexible Working-Professional Batches",
    description:
      "Interactive weekend and weekday evening cohorts designed specifically to fit around full-time corporate work.",
    highlight: "Weekend Batches",
  },
];

const credentials = [
  "Official PeopleCert-aligned syllabus",
  "15,000+ project managers trained",
  "Small interactive cohorts (max 18 learners)",
  "Full pass assurance & retake support",
];

export default function TrainingExcellence() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071426] py-20 sm:py-24 lg:py-28 text-white">
      <div className="container">
        {/* 3D Atmospheric Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/[0.08] blur-[140px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.1] blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] ">
          {/* SECTION HEADER */}
          <ScrollReveal animation="fade-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-amber-500" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                  TRAINING EXCELLENCE & CREDIBILITY
                </span>
                <span className="h-px w-8 bg-amber-500" />
              </div>

              <div className="mb-4 flex justify-center">
                <span className="flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-4 py-1.5 text-xs font-semibold text-amber-300">
                  <Sparkles size={14} />
                  Guaranteed Training Quality
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl">
                Built on Standards. <br className="hidden sm:block" />
                Driven by{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Excellence.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Experience world-class PRINCE2 training with veteran
                practitioners, interactive cohort learning, and official
                PeopleCert examination support engineered for your career
                advancement.
              </p>
            </div>
          </ScrollReveal>

          {/* 3D FEATURE CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <ScrollReveal
                  key={feature.title}
                  animation="flip-up-3d"
                  delay={index * 0.1}
                  className="h-full"
                >
                  <Card3D
                    maxTilt={14}
                    glowColor="rgba(245, 158, 11, 0.22)"
                    className="rounded-2xl border border-white/10 bg-[#0F2244]/80 p-7 shadow-[0_15px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl hover:border-amber-400/50 hover:bg-[#12284E]"
                  >
                    {/* Top Row with 3D Depth Number */}
                    <div className="relative mb-7 flex items-center justify-between">
                      <div
                        style={{ transform: "translateZ(30px)" }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-600/[0.08] text-amber-400 shadow-md transition-transform duration-300 group-hover:scale-110"
                      >
                        <Icon size={27} strokeWidth={1.8} />
                      </div>

                      <span
                        style={{ transform: "translateZ(20px)" }}
                        className="font-mono text-sm font-bold tracking-widest text-amber-400/50"
                      >
                        /{feature.number}
                      </span>
                    </div>

                    {/* Content with 3D Depth */}
                    <div
                      style={{ transform: "translateZ(20px)" }}
                      className="flex flex-col"
                    >
                      <span className="mb-2 w-fit rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        {feature.highlight}
                      </span>

                      <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-amber-300">
                        {feature.title}
                      </h3>

                      <p className="mt-3.5 text-xs leading-6 text-slate-300 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-gradient-to-r from-amber-400/30 via-white/10 to-transparent" />

                    {/* Bottom Quality Assured Tag */}
                    <div
                      style={{ transform: "translateZ(25px)" }}
                      className="flex items-center justify-between text-xs font-semibold text-amber-300"
                    >
                      <span className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400/20">
                          <Check
                            size={11}
                            strokeWidth={3}
                            className="text-amber-400"
                          />
                        </span>
                        Quality Assured
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
                      />
                    </div>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CREDIBILITY ACCREDITATION STRIP */}
          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="mt-14 rounded-2xl border border-amber-400/25 bg-gradient-to-r from-amber-400/[0.08] via-[#0F2244] to-amber-400/[0.05] p-6 shadow-xl sm:p-8">
              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                <div className="text-center lg:text-left">
                  <p className="flex items-center justify-center gap-2 text-base font-bold text-white lg:justify-start">
                    <ShieldCheck size={20} className="text-amber-400" />
                    Your Certification Guarantee
                  </p>
                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                    We stand by our students with comprehensive practice, mock
                    tests, and post-training support.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                  {credentials.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-slate-200"
                    >
                      <Check size={15} className="shrink-0 text-amber-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
