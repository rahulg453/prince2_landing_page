"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  BookOpen,
  Target,
  Sparkles,
  Layers,
  GraduationCap,
  ShieldCheck,
  Check,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const benefits = [
  "Master PRINCE2 7 Principles, Practices & Processes",
  "Implement structured project governance & stage controls",
  "Manage risks, change requests, and stakeholder teams",
  "Build confidence through real-world case simulations",
];

export default function CertificationOverview() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("PRINCE2 Foundation + Practitioner");

  const openEnquiry = (course: string) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="overview"
        className="relative isolate overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 lg:py-28"
      >
        <div className="container">
          {/* 3D Atmospheric Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-200/35 blur-[140px]" />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,27,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,58,0.4) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] ">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-20">
            
            {/* LEFT: 3D IMAGE SHOWCASE WITH FLOATING DEPTH ELEMENTS */}
            <ScrollReveal animation="zoom-in-3d" duration={0.8}>
              <Card3D maxTilt={10} glowColor="rgba(245, 158, 11, 0.3)">
                <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
                  {/* Decorative Corner Borders */}
                  <div className="absolute -left-3 -top-3 z-0 h-24 w-24 rounded-tl-2xl border-l-3 border-t-3 border-amber-400 sm:-left-5 sm:-top-5" />
                  <div className="absolute -bottom-3 -right-3 z-0 h-24 w-24 rounded-br-2xl border-b-3 border-r-3 border-amber-400 sm:-bottom-5 sm:-right-5" />

                  {/* Main Image Container */}
                  <div className="relative z-10 overflow-hidden rounded-2xl border border-amber-200/60 bg-[#E8E5DF] shadow-[0_25px_60px_rgba(11,27,58,0.14)]">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                      alt="Project management team analyzing PRINCE2 workflows"
                      className="h-[380px] w-full object-cover sm:h-[450px] lg:h-[480px]"
                    />

                    {/* Gradient Depth Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/85 via-[#0B1B3A]/30 to-transparent" />

                    {/* Floating Chip 1: Top Right */}
                    <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#071426]/80 px-4 py-2 text-xs font-bold text-amber-300 shadow-lg backdrop-blur-md">
                      <Sparkles size={14} className="text-amber-400" />
                      PRINCE2® 7th Edition
                    </div>

                    {/* Image Inset Caption */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#071426]">
                        <ShieldCheck size={13} />
                        Structured Methodology
                      </span>
                      <h4 className="mt-2 text-lg font-bold text-white sm:text-xl">
                        Turn Project Theory Into Boardroom Execution
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                        Master the 7 Principles, 7 Practices, and 7 Processes for predictable project ROI.
                      </p>
                    </div>
                  </div>

                  {/* Floating 3D Pass Rate Card */}
                  <div
                    style={{ transform: "translateZ(45px)" }}
                    className="relative z-30 mx-4 -mt-12 rounded-2xl border border-amber-300/70 bg-white p-5 shadow-[0_20px_45px_rgba(11,27,58,0.18)] sm:absolute sm:-bottom-8 sm:-right-6 sm:mx-0 sm:mt-0 sm:w-[260px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B1B3A] text-amber-400 shadow-md">
                        <Award size={26} />
                      </div>
                      <div>
                        <p className="text-lg font-black text-[#0B1B3A]">PRINCE2®</p>
                        <p className="text-xs font-semibold text-amber-600">PeopleCert Voucher</p>
                      </div>
                    </div>

                    <div className="mt-3.5 h-2 overflow-hidden rounded-full bg-amber-100">
                      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse" />
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                      <span>Exam Pass Rate</span>
                      <span className="font-bold text-[#0B1B3A]">98.4% First-Time</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* RIGHT: TEXT CONTENT & 3D LEVEL CARDS */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={0.15}>
              <div className="relative">
                {/* Section Badge */}
                <div className="mb-5 inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-amber-500" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-600">
                    UNDERSTANDING PRINCE2®
                  </span>
                  <span className="h-px w-8 bg-amber-500" />
                </div>

                {/* Section Title */}
                <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                  What Is{" "}
                  <span className="italic text-amber-500">
                    PRINCE2®
                  </span>
                  <br />
                  Certification?
                </h2>

                {/* Description Paragraphs */}
                <p className="mt-6 text-sm leading-[1.85] text-[#526078] sm:text-base">
                  <strong className="text-[#0B1B3A]">PRINCE2®</strong> (Projects IN Controlled Environments)
                  is the world's most widely recognized project management framework. Adopted by leading
                  governments, multinational corporations, and tech leaders, it provides an organized roadmap
                  to start, control, and close projects on time and within budget.
                </p>

                <p className="mt-3.5 text-sm leading-[1.85] text-[#526078] sm:text-base">
                  Whether managing multimillion-pound infrastructure rollouts or dynamic software releases,
                  PRINCE2 equips you with clear roles, stage boundaries, and robust risk frameworks.
                </p>

                {/* Benefits Bullet Grid */}
                <h3 className="mb-4 mt-7 text-sm font-bold uppercase tracking-wider text-[#0B1B3A]">
                  Core Capabilities You Will Master:
                </h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-2.5 rounded-lg border border-amber-200/50 bg-white p-3 shadow-xs transition-colors hover:border-amber-400"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-amber-500"
                      />
                      <span className="text-xs font-medium text-[#243653] sm:text-[13px]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 3D Foundation vs Practitioner Cards */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Foundation Card */}
                  <Card3D maxTilt={8} className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-sm hover:border-amber-400 hover:shadow-md">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <BookOpen size={22} />
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#0B1B3A]">Foundation</h4>
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                        Level 1
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Understand fundamental principles, themes, and lifecycle terminology. Ideal for aspiring PMs.
                    </p>
                    <button
                      onClick={() => openEnquiry("PRINCE2 Foundation")}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                    >
                      Explore Syllabus <ArrowRight size={13} />
                    </button>
                  </Card3D>

                  {/* Practitioner Card */}
                  <Card3D maxTilt={8} className="rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50/40 via-white to-white p-5 shadow-sm hover:border-amber-500 hover:shadow-md">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1B3A] text-amber-400">
                      <Target size={22} />
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#0B1B3A]">Practitioner</h4>
                      <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-[#071426]">
                        Advanced
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Apply and tailor PRINCE2 to complex real-world project scenarios, risk constraints, and delivery teams.
                    </p>
                    <button
                      onClick={() => openEnquiry("PRINCE2 Practitioner")}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B3A] hover:text-amber-600"
                    >
                      Explore Syllabus <ArrowRight size={13} />
                    </button>
                  </Card3D>
                </div>

                {/* CTA Button */}
                <div className="mt-9 flex flex-wrap gap-4">
                  <button
                    onClick={() => openEnquiry("PRINCE2 Foundation + Practitioner")}
                    className="group inline-flex items-center gap-3 rounded-xl bg-[#0B1B3A] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0B1B3A]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:text-[#0B1B3A] hover:shadow-xl"
                  >
                    <span>Request Full Syllabus & Voucher Details</span>
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
      />
    </>
  );
}
