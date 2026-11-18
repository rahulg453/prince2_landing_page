"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Search,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const faqs = [
  {
    question: "What is PRINCE2® Version 7 and why is it globally recognized?",
    answer:
      "PRINCE2® 7 is the latest official standard from PeopleCert. It introduces modern project management frameworks, focusing heavily on human leadership, agile integration, sustainability, and data-driven project control across 150+ countries.",
  },
  {
    question:
      "Is the official PeopleCert exam voucher included in the course fee?",
    answer:
      "Yes! All our PRINCE2 training packages include the official PeopleCert proctored exam voucher, access to digital syllabus materials, mock simulator questions, and certification processing fees with no hidden costs.",
  },
  {
    question: "Do I need previous project management experience to begin?",
    answer:
      "No previous prerequisites are required for PRINCE2® Foundation. Anyone can enroll, including career switchers and junior coordinators. To sit the Practitioner exam, you only need to hold the PRINCE2 Foundation certificate (or approved PMI/APM credentials).",
  },
  {
    question: "What is the difference between Foundation and Practitioner?",
    answer:
      "Foundation establishes understanding of the 7 Principles, 7 Practices, and 7 Processes. Practitioner tests your practical capability to tailor and apply these mechanisms to complex real-world project constraints, contracts, and change logs.",
  },
  {
    question:
      "How do the weekend and weekday batches work for working professionals?",
    answer:
      "Our live online batches are scheduled specifically around working hours (Saturdays & Sundays, or weekday evenings). All sessions are interactive, recorded in high-definition, and accompanied by 1-on-1 mentor clinic hours.",
  },
  {
    question: "What is your First-Time Exam Pass Guarantee?",
    answer:
      "Students who complete our live cohort classes and score benchmark grades on our mock diagnostic simulator achieve a 98.4% first-attempt pass rate. If you do not pass, we provide complimentary one-on-one diagnostic coaching until you clear.",
  },
  {
    question: "How is the official PeopleCert exam conducted?",
    answer:
      "The exam is taken online from the comfort of your home or office via PeopleCert's secure proctored testing application. You can schedule the exact day and time that suits your availability.",
  },
  {
    question: "How quickly will I receive my digital badge and certificate?",
    answer:
      "Preliminary scores are displayed immediately upon completing the exam. Official PeopleCert e-certificates and shareable LinkedIn digital credentials are provided within 2 business days.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <section
        id="faqs"
        className="relative overflow-hidden bg-[#FAF9F6] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="container">
          {/* Background 3D Lighting */}
          <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-amber-100/60 blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-100/50 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl">
            {/* Section Heading */}
            <ScrollReveal animation="fade-up">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-4 py-1.5 shadow-xs">
                  <HelpCircle size={15} className="text-[#C58A18]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A87512]">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                </div>

                <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                  Everything You Need to{" "}
                  <span className="italic text-[#C58A18]">Know</span>
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                  Have questions about official exam vouchers, cohort schedules,
                  or certification prerequisites? Find answers below or chat
                  directly with our advisor.
                </p>

                {/* Instant Search Bar */}
                <div className="relative mx-auto mt-8 max-w-xl">
                  <input
                    type="text"
                    placeholder="Search questions (e.g. voucher, weekend, pass guarantee)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-2xl border border-amber-200/80 bg-white py-3.5 pl-12 pr-5 text-sm text-[#0B1B3A] shadow-xs outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  />
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 3D FAQ Accordion */}
            <div className="mx-auto max-w-4xl space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <ScrollReveal
                    key={faq.question}
                    animation="fade-up"
                    delay={index * 0.04}
                  >
                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-amber-400 bg-white shadow-[0_15px_35px_rgba(11,27,58,0.08)] ring-1 ring-amber-400/30"
                          : "border-[#EAE5DA] bg-white/80 hover:border-amber-300 hover:bg-white hover:shadow-xs"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-8 sm:py-6"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`mt-0.5 hidden font-mono text-sm font-bold sm:block ${
                              isOpen ? "text-[#C58A18]" : "text-slate-400"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`text-sm font-bold leading-snug sm:text-base ${
                              isOpen ? "text-[#0B1B3A]" : "text-[#1E293B]"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                            isOpen
                              ? "bg-amber-400 text-[#071426] rotate-180 shadow-xs"
                              : "bg-[#F5F2EA] text-[#0B1B3A]"
                          }`}
                        >
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.28, ease: "easeInOut" },
                              opacity: { duration: 0.2 },
                            }}
                          >
                            <div className="border-t border-[#F0ECE3] px-6 pb-6 pt-4 text-xs leading-6 text-slate-600 sm:px-8 sm:pl-[4.5rem] sm:text-sm sm:leading-7">
                              <p>{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="rounded-2xl border border-dashed border-amber-300 bg-white p-8 text-center text-sm text-slate-500">
                  No questions found matching your search. Try another keyword
                  or speak with our advisor.
                </div>
              )}
            </div>

            {/* Bottom Interactive Support Card */}
            <ScrollReveal animation="fade-up" delay={0.25} className="mt-14">
              <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-3xl border border-[#EAE5DA] bg-white p-7 shadow-md sm:flex-row sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 shadow-xs">
                    <MessageCircle size={26} />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0B1B3A] sm:text-xl">
                      Still have questions about PRINCE2?
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      Connect directly with our education coordinator for fee
                      breakdown and batch options.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B1B3A] px-7 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-[#071426] hover:shadow-lg hover:shadow-amber-400/20"
                >
                  <span>Ask an Advisor</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
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
        defaultCourse="PRINCE2 General Enquiry"
      />
    </>
  );
}
