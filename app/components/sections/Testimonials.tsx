"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  MessageSquareQuote,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";

const testimonials = [
  {
    name: "James Wilson",
    role: "Senior Project Manager at Barclays",
    course: "PRINCE2® Practitioner V7",
    initials: "JW",
    rating: 5,
    examScore: "94% Exam Score",
    text: "The PRINCE2 Foundation & Practitioner combo gave me an undeniable edge. The sessions broke down governance into practical stage boundaries. The PeopleCert exam voucher process was completely seamless, and I cleared both exams on my very first try!",
  },
  {
    name: "Sarah Thompson",
    role: "IT Delivery Lead at NHS Digital",
    course: "PRINCE2® Foundation + Practitioner",
    initials: "ST",
    rating: 5,
    examScore: "91% Exam Score",
    text: "The weekend batch format was perfect for my demanding corporate schedule. The trainer explained the 7 principles through real enterprise case studies instead of dry textbook theory. Highly recommended for any serious PM!",
  },
  {
    name: "Daniel Roberts",
    role: "PMO Programme Analyst at Deloitte",
    course: "Managing Successful Programmes (MSP)®",
    initials: "DR",
    rating: 5,
    examScore: "96% Exam Score",
    text: "The mock exam simulations and 1-on-1 mentor clinic were game changers. My mentor dissected the exact trap questions to look out for. I walked into the exam room feeling completely prepared.",
  },
  {
    name: "Emily Johnson",
    role: "Technical Business Analyst",
    course: "PRINCE2® Foundation",
    initials: "EJ",
    rating: 5,
    examScore: "95% Exam Score",
    text: "As someone transitioning into project management from a business analysis background, this course gave me the exact vocabulary, risk controls, and confidence I needed. The trainer was exceptional.",
  },
  {
    name: "Michael Brown",
    role: "Agile Delivery Manager at FinTech Hub",
    course: "PMI-ACP® & PRINCE2® Dual",
    initials: "MB",
    rating: 5,
    examScore: "93% Exam Score",
    text: "The hybrid tailoring of PRINCE2 with agile sprints was brilliantly explained. The small cohort size allowed us to discuss actual work challenges and get actionable advice from an experienced assessor.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-[#071426] py-20 md:py-28 text-white"
    >
      <div className="container">
        {/* 3D Atmospheric Background */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl ">
          {/* Section Heading */}
          <ScrollReveal animation="fade-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                <MessageSquareQuote size={15} />
                VERIFIED STUDENT SUCCESS
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Stories That Inspire{" "}
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Career Progress
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Read how our students passed their PeopleCert examination on the
                first attempt and elevated their project management careers.
              </p>
            </div>
          </ScrollReveal>

          {/* 3D Perspective Carousel Container */}
          <div className="mx-auto max-w-5xl" style={{ perspective: 1200 }}>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, rotateY: 20, scale: 0.94 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -20, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0F2244]/90 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                >
                  {/* Top Gold Trim */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />

                  <div className="relative grid md:grid-cols-[0.85fr_2fr]">
                    {/* Left Student Info Column */}
                    <div className="relative flex flex-col items-center justify-center overflow-hidden border-b border-white/10 bg-[#071426]/90 p-8 text-center md:border-b-0 md:border-r md:p-10">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border-[25px] border-white/[0.04]" />

                      {/* Student Avatar with 3D Ring */}
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 text-2xl font-black text-[#071426] shadow-[0_0_25px_rgba(245,158,11,0.35)]">
                        {active.initials}
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-white">
                        {active.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-slate-300">
                        {active.role}
                      </p>

                      <div className="mt-4 flex flex-col gap-1.5">
                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-300">
                          {active.course}
                        </span>
                        <span className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-400">
                          <CheckCircle2 size={12} /> {active.examScore}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="mt-5 flex items-center gap-1">
                        {[...Array(active.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#F59E0B"
                            className="text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right Testimonial Quote Column */}
                    <div className="relative flex flex-col justify-center p-8 sm:p-10 md:p-12">
                      <Quote
                        size={44}
                        className="mb-5 text-amber-400/70"
                        fill="currentColor"
                      />

                      <span className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                        VERIFIED PEOPLECERT ALUMNUS
                      </span>

                      <p className="text-base font-medium leading-relaxed text-slate-100 sm:text-lg sm:leading-8">
                        "{active.text}"
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs">
                        <span className="flex items-center gap-1.5 font-semibold text-amber-300">
                          <ShieldCheck size={16} /> Verified PeopleCert
                          Certificate Holder
                        </span>

                        <span className="font-mono text-slate-400">
                          Student Pass Guarantee
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* Pagination Indicator Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-amber-400"
                        : "w-2.5 bg-white/25 hover:bg-amber-400/60"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                <span className="mr-3 font-mono text-xs font-bold text-slate-400">
                  0{activeIndex + 1} / 0{testimonials.length}
                </span>

                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all hover:border-amber-400 hover:bg-amber-400 hover:text-[#071426]"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-[#071426] shadow-lg shadow-amber-400/25 transition-all hover:bg-amber-300"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
