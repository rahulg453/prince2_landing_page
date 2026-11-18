"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Headset,
  Laptop,
  ShieldCheck,
  Target,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const benefits = [
  {
    icon: GraduationCap,
    title: "Accredited PeopleCert Trainers",
    description:
      "Learn from active project management directors with 15+ years experience translating methodologies into real execution.",
  },
  {
    icon: Target,
    title: "100% Exam-Aligned Curriculum",
    description:
      "Every module strictly reflects the latest PRINCE2 Version 7 syllabus, ensuring no surprises on exam day.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical Enterprise Case Studies",
    description:
      "Connect theory with practice through real-world governance scenarios, business case models, and risk logs.",
  },
  {
    icon: Users,
    title: "Dedicated 1-on-1 Mentorship",
    description:
      "Unlimited access to doubt-clearing sessions, mock review clinics, and personalized study schedules.",
  },
  {
    icon: Clock3,
    title: "Working-Professional Batches",
    description:
      "Weekend (Sat & Sun) and weekday evening cohorts designed specifically around your corporate commitments.",
  },
  {
    icon: ShieldCheck,
    title: "First-Time Pass Guarantee",
    description:
      "If you don't pass on your first attempt after completing our prep drills, we sponsor your revision coaching free.",
  },
];

export default function WhyChoosePrince2() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#071426] py-20 md:py-28 text-white">
        <div className="container">
          {/* 3D Atmospheric Lighting */}
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl ">
            <ScrollReveal animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                  <ShieldCheck size={16} />
                  THE XCADEMIA ADVANTAGE
                </span>

                <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Why Choose Us for Your{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    PRINCE2 Training?
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  We combine official PeopleCert accreditation, small cohort
                  mentoring, and diagnostic mock simulators to ensure you pass
                  with confidence.
                </p>
              </div>
            </ScrollReveal>

            {/* 3D BENEFITS GRID */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <ScrollReveal
                    key={benefit.title}
                    animation="flip-up-3d"
                    delay={index * 0.08}
                    className="h-full"
                  >
                    <Card3D
                      maxTilt={12}
                      glowColor="rgba(245, 158, 11, 0.2)"
                      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0F2244]/80 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-amber-400/60 hover:bg-[#12284E]"
                    >
                      <div
                        style={{ transform: "translateZ(30px)" }}
                        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400 shadow-md transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#071426]"
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>

                      <h3
                        style={{ transform: "translateZ(20px)" }}
                        className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-amber-300"
                      >
                        {benefit.title}
                      </h3>

                      <p
                        style={{ transform: "translateZ(15px)" }}
                        className="text-xs leading-6 text-slate-300 sm:text-sm"
                      >
                        {benefit.description}
                      </p>

                      <div className="mt-6 mt-auto h-1 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-20" />
                    </Card3D>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Bottom Interactive Bar */}
            <ScrollReveal
              animation="fade-up"
              delay={0.25}
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-amber-400/30 bg-[#0F2244]/90 p-4 px-7 backdrop-blur-md shadow-xl">
                <span className="text-sm font-semibold text-white">
                  Ready to take the next step in your project management
                  journey?
                </span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-[#071426] transition-all hover:bg-amber-300"
                >
                  Speak with an Advisor <ArrowRight size={14} />
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
