"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpenCheck,
  BriefcaseBusiness,
  Target,
  Users,
  Headset,
  Award,
  Lightbulb,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";

const benefits = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Expert-Led Interactive Training",
    description:
      "Learn from certified PeopleCert senior instructors who translate complex governance principles into clear, actionable project execution.",
  },
  {
    icon: BookOpenCheck,
    number: "02",
    title: "Official Accredited Curriculum",
    description:
      "Every slide, workbook, and practice question adheres strictly to the official PRINCE2 Version 7 PeopleCert syllabus.",
  },
  {
    icon: BriefcaseBusiness,
    number: "03",
    title: "Practical Enterprise Simulations",
    description:
      "Connect theory with real-world scenarios through risk logs, business case formulations, and stage boundary workshops.",
  },
  {
    icon: Target,
    number: "04",
    title: "First-Time Exam Pass Guarantee",
    description:
      "Full-length diagnostic mock exam simulators with targeted weakness resolution clinics ensure benchmark readiness.",
  },
  {
    icon: Users,
    number: "05",
    title: "Small-Cohort Discussion Groups",
    description:
      "Limited cohort sizes allow maximum instructor contact, peer networking with other PMs, and active group case solving.",
  },
  {
    icon: Headset,
    number: "06",
    title: "Dedicated Mentorship & Support",
    description:
      "One-on-one mentor doubt clinics, seamless exam voucher booking, and continued post-course guidance.",
  },
];

const courseAdvantages = [
  {
    icon: Award,
    title: "Official Digital Credentials",
    text: "Claim your verifiable PeopleCert digital badge for LinkedIn, enhancing your resume for high-tier enterprise PM roles.",
  },
  {
    icon: Lightbulb,
    title: "Structured Risk Governance",
    text: "Eliminate project surprises with proven stage boundary controls, exception reporting, and tolerance management.",
  },
  {
    icon: ClipboardCheck,
    title: "Career Elevation",
    text: "PRINCE2 certified professionals earn significantly higher average compensation across public and private sectors worldwide.",
  },
];

export default function BenefitsOfChoosingUs() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#FAF9F6] py-20 md:py-28"
    >
      <div className="container">
        {/* 3D Atmospheric Background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-200/30 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/50 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl ">
          {/* Section Heading */}
          <ScrollReveal animation="fade-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#A66D08]">
                <Sparkles size={14} />
                THE LEARNING ADVANTAGE
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                Benefits of Choosing{" "}
                <span className="italic text-[#C58A18]">Xcademia Training</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Discover why thousands of project leaders choose us for their
                PRINCE2 examination prep and career development.
              </p>
            </div>
          </ScrollReveal>

          {/* 3D Main Benefits Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <ScrollReveal
                  key={benefit.number}
                  animation="flip-up-3d"
                  delay={(index % 3) * 0.1}
                  className="h-full"
                >
                  <Card3D
                    maxTilt={12}
                    glowColor="rgba(245, 158, 11, 0.2)"
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#EAE5DA] bg-white p-7 shadow-xs transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
                  >
                    {/* 3D Depth Number */}
                    <span
                      style={{ transform: "translateZ(10px)" }}
                      className="pointer-events-none absolute -right-1 -top-4 font-mono text-7xl font-black text-[#F4F0E6] transition-colors duration-300 group-hover:text-amber-100/70"
                    >
                      {benefit.number}
                    </span>

                    {/* Icon */}
                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1B3A] text-amber-400 shadow-md transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#0B1B3A]"
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div
                      style={{ transform: "translateZ(20px)" }}
                      className="relative flex flex-col flex-grow"
                    >
                      <h3 className="text-lg font-bold text-[#0B1B3A] transition-colors group-hover:text-[#B77908]">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
                        {benefit.description}
                      </p>

                      <div className="mt-6 mt-auto h-1 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-20" />
                    </div>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Course Advantages Strip */}
          <ScrollReveal animation="fade-up" delay={0.25} className="mt-20">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#B77908]">
                  GLOBAL RECOGNITION
                </span>
                <h3 className="font-['Playfair_Display'] mt-2 text-2xl font-bold text-[#0B1B3A] sm:text-3xl">
                  What You Gain From Certification
                </h3>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
                Equip yourself with structured governance credentials recognized
                across 150+ countries.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {courseAdvantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Card3D
                    key={item.title}
                    maxTilt={8}
                    className="flex gap-4 rounded-2xl border border-[#EAE5DA] bg-[#F5F1E8]/70 p-6 transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-[#B77908] shadow-xs">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0B1B3A]">{item.title}</h4>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
