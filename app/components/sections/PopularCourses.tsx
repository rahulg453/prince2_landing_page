"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Award,
  GraduationCap,
  CheckCircle2,
  FileCheck,
  Users,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const courses = [
  {
    id: "01",
    title: "PRINCE2® Foundation",
    version: "Version 7",
    subtitle: "Build Your Project Management Foundation",
    description:
      "Master the fundamental terminology, 7 principles, 7 practices, and project governance framework. Ideal for new PMs and coordinators.",
    icon: BookOpen,
    tag: "Beginner Friendly",
    duration: "3 Days / 16 Hours",
    features: [
      "Official PeopleCert Foundation Exam Voucher",
      "Comprehensive digital syllabus & mock tests",
      "Understand project roles & lifecycle phases",
      "Pass guarantee with personalized coaching",
    ],
    audience: "Aspiring project managers, team leads & career transitioners",
    popular: false,
  },
  {
    id: "02",
    title: "Foundation + Practitioner (Dual Combo)",
    version: "Version 7",
    subtitle: "Complete Career-Defining Certification Pathway",
    description:
      "Progress from foundational concepts to advanced practical scenario tailoring. Includes both official examination vouchers with full mentorship.",
    icon: GraduationCap,
    tag: "Most Popular Pathway",
    duration: "5 Days / 32 Hours",
    features: [
      "Both Foundation + Practitioner Exam Vouchers",
      "Practical enterprise case study simulations",
      "1-on-1 Dedicated mentor doubt clinics",
      "Official PeopleCert digital badges & certificates",
    ],
    audience: "Professionals seeking complete qualification in one cohort",
    popular: true,
  },
  {
    id: "03",
    title: "PRINCE2® Practitioner",
    version: "Version 7",
    subtitle: "Master Practical Project Tailoring & Governance",
    description:
      "Build expert capability to apply and tailor PRINCE2 to complex corporate environments, agile frameworks, and challenging risk profiles.",
    icon: Award,
    tag: "Advanced Level",
    duration: "2 Days / 16 Hours",
    features: [
      "Official PeopleCert Practitioner Exam Voucher",
      "Scenario-based complex case analyses",
      "Tailor PRINCE2 to agile & waterfall projects",
      "Advanced exam technique & mock drills",
    ],
    audience: "Certified Foundation holders & experienced project managers",
    popular: false,
  },
];

export default function PopularCourses() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(
    "PRINCE2 Foundation + Practitioner",
  );

  const openEnquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="course"
        className="relative isolate overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 lg:py-28"
      >
        <div className="container">
          {/* 3D Background Lighting */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-100/50 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(11,27,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,58,0.4) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1400px]">
            {/* HEADER */}
            <ScrollReveal animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-700 shadow-xs">
                  <Sparkles size={14} />
                  ACCREDITED LEARNING PATHWAYS
                </span>

                <h2 className="font-['Playfair_Display'] mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                  Popular PRINCE2®{" "}
                  <span className="italic text-[#C58A18]">
                    Certification Courses
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                  Select the right qualification to strengthen your project
                  leadership. All courses include official PeopleCert
                  examination vouchers and dedicated mentor clinics.
                </p>
              </div>
            </ScrollReveal>

            {/* 3D PERSPECTIVE COURSE CARDS DECK */}
            <div className="grid items-stretch gap-7 lg:grid-cols-3">
              {courses.map((course, index) => {
                const Icon = course.icon;

                return (
                  <ScrollReveal
                    key={course.id}
                    animation="zoom-in-3d"
                    delay={index * 0.12}
                    className="h-full"
                  >
                    <Card3D
                      maxTilt={course.popular ? 14 : 10}
                      glowColor={
                        course.popular
                          ? "rgba(245, 158, 11, 0.35)"
                          : "rgba(11, 27, 58, 0.12)"
                      }
                      className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 transition-all duration-300 sm:p-8 ${
                        course.popular
                          ? "border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.2)] lg:-translate-y-3"
                          : "border-[#E5E7EB] shadow-[0_8px_30px_rgba(11,27,58,0.04)] hover:border-amber-400/60 hover:shadow-xl"
                      }`}
                    >
                      {/* Popular Badge */}
                      {course.popular && (
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 rounded-b-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#071426] shadow-md">
                            <Sparkles size={12} />
                            MOST POPULAR CHOICE
                          </span>
                        </div>
                      )}

                      {/* Card Top */}
                      <div
                        className={`relative flex items-start justify-between gap-3 ${
                          course.popular ? "mt-4" : ""
                        }`}
                      >
                        <div
                          style={{ transform: "translateZ(30px)" }}
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-all duration-300 ${
                            course.popular
                              ? "bg-[#0B1B3A] text-amber-400"
                              : "bg-amber-50 text-amber-600 border border-amber-200"
                          }`}
                        >
                          <Icon size={26} strokeWidth={1.8} />
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-bold text-slate-600">
                            {course.id}
                          </span>
                          <span className="mt-1 flex items-center gap-1 text-[11px] font-medium text-amber-700">
                            <Clock size={11} /> {course.duration}
                          </span>
                        </div>
                      </div>

                      {/* Course Title & Subtitle */}
                      <div
                        style={{ transform: "translateZ(20px)" }}
                        className="mt-6"
                      >
                        <span className="inline-flex rounded-full border border-amber-300/60 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                          {course.tag}
                        </span>

                        <h3 className="font-['Playfair_Display'] mt-3 text-2xl font-bold leading-tight text-[#0B1B3A]">
                          {course.title}
                        </h3>

                        <p className="mt-1.5 text-xs font-semibold text-amber-600">
                          PRINCE2® Project Management · {course.version}
                        </p>

                        <p className="mt-3 text-xs leading-5 text-[#64748B]">
                          {course.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="my-6 h-px bg-gradient-to-r from-amber-300/60 via-[#E5E7EB] to-transparent" />

                      {/* Features List */}
                      <div
                        style={{ transform: "translateZ(20px)" }}
                        className="flex-grow space-y-3"
                      >
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1B3A]">
                          What's Included:
                        </h4>

                        <div className="space-y-2.5">
                          {course.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-2.5"
                            >
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-amber-500"
                              />
                              <span className="text-xs leading-5 text-[#475569]">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Target Audience Box */}
                      <div className="mt-6 rounded-xl border border-amber-200/50 bg-[#FAF9F6] p-3.5">
                        <div className="flex items-start gap-2.5">
                          <Users
                            size={16}
                            className="mt-0.5 shrink-0 text-amber-600"
                          />
                          <div>
                            <p className="text-[11px] font-bold text-[#0B1B3A]">
                              Ideal For
                            </p>
                            <p className="mt-0.5 text-[11px] leading-4 text-[#64748B]">
                              {course.audience}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Interactive 3D CTA Button */}
                      <button
                        onClick={() => openEnquiry(course.title)}
                        className={`mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 text-xs font-bold transition-all duration-300 ${
                          course.popular
                            ? "bg-gradient-to-r from-amber-400 to-amber-500 text-[#071426] shadow-lg shadow-amber-400/25 hover:-translate-y-1 hover:from-amber-300 hover:to-yellow-400"
                            : "bg-[#0B1B3A] text-white hover:-translate-y-1 hover:bg-amber-500 hover:text-[#0B1B3A]"
                        }`}
                      >
                        <span>Enquire Syllabus & Pricing</span>
                        <ArrowRight size={15} />
                      </button>
                    </Card3D>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* BOTTOM COURSE ADVICE BANNER */}
            <ScrollReveal animation="fade-up" delay={0.3} className="mt-14">
              <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-amber-200/80 bg-white p-6 shadow-md sm:flex-row sm:px-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-600">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B3A]">
                      Unsure which level matches your career experience?
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                      Our advisors will review your background and recommend the
                      most cost-effective route.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openEnquiry("PRINCE2 Free Consultation")}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0B1B3A] px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-amber-400 hover:text-[#0B1B3A]"
                >
                  Get Personalized Advice
                  <ArrowRight
                    size={15}
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
        defaultCourse={selectedCourse}
      />
    </>
  );
}
