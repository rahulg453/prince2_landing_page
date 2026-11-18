"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  GraduationCap,
  BookOpenCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";

import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const journeySteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose Your PRINCE2 Training Path",
    description:
      "Explore our Foundation, Practitioner, or combined training options and find the right path for your goals.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Learn with Expert Guidance",
    description:
      "Build your understanding of PRINCE2 principles, practices, and processes through structured learning.",
  },
  {
    number: "03",
    icon: BookOpenCheck,
    title: "Practise and Prepare",
    description:
      "Strengthen your knowledge with practical project scenarios, revision, and exam-focused preparation.",
  },
  {
    number: "04",
    icon: Award,
    title: "Get Ready for Certification",
    description:
      "Prepare for your PRINCE2 certification exam and take the next step in your project management journey.",
  },
];

export default function WhyTrainingWithUs() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F8F7F4] py-20 md:py-28">
        <div className="container">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* LEFT CONTENT */}
            <ScrollReveal animation="fade-up">
              <div className="max-w-xl">
                <span className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#B18B32]">
                  Your PRINCE2 Learning Journey
                </span>

                <h2 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#101D30] sm:text-5xl lg:text-[58px]">
                  What Will Your
                  <br />
                  Training Journey
                  <br />
                  Look Like?
                </h2>

                <p className="mt-7 max-w-md text-base leading-8 text-[#687386]">
                  From choosing your course to preparing for certification,
                  discover how we guide you through every stage of your PRINCE2
                  learning experience.
                </p>

                <button
                  onClick={() => setModalOpen(true)}
                  className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#101D30] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#B18B32]"
                >
                  Let's Get Started
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </ScrollReveal>

            {/* RIGHT TIMELINE */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute bottom-12 left-[25px] top-8 w-px bg-[#D9D5CB] sm:left-[29px]" />

              <div className=" space-y-10 md:space-y-12">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <ScrollReveal
                      key={step.number}
                      animation="fade-up"
                      delay={index * 0.12}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.25 }}
                        className="group relative flex gap-6 sm:gap-8"
                      >
                        {/* Timeline icon */}
                        <motion.div
                          whileHover={{ scale: 1.12, rotate: 10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#F8F7F4] text-[#A47D24] transition-colors duration-500 group-hover:border-[#D4AF37] group-hover:bg-gradient-to-br group-hover:from-[#E8C76A] group-hover:to-[#B18B32] group-hover:text-white group-hover:shadow-[0_0_22px_rgba(212,175,55,0.35)] sm:h-[60px] sm:w-[60px]"
                        >
                          <Icon size={23} strokeWidth={1.8} />
                        </motion.div>

                        {/* Step content */}
                        <div className="flex-1 pb-2 pt-1">
                          <div className="mb-2 flex items-center gap-3">
                            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B18B32]">
                              STEP {step.number}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold leading-snug text-[#101D30] sm:text-xl">
                            {step.title}
                          </h3>

                          <p className="mt-3 max-w-lg text-sm leading-7 text-[#737D8C]">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
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
