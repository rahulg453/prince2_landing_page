"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Crown,
  Layers3,
  Target,
  Clock,
  Sparkles,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const allCourses = [
  {
    title: "PRINCE2® Foundation + Practitioner Dual",
    category: "prince2",
    duration: "5 Days / 32 Hours",
    level: "Practitioner",
    description: "Complete end-to-end PeopleCert accredited qualification with both exam vouchers included.",
    icon: ClipboardCheck,
    featured: true,
  },
  {
    title: "PMP® Exam Preparation Training",
    category: "pmp",
    duration: "5 Days / 35 Hours",
    level: "Professional",
    description: "Master PMBOK 7th Edition principles, predictive, agile and hybrid project delivery for PMI certification.",
    icon: Award,
    featured: true,
  },
  {
    title: "PMI Agile Certified Practitioner (PMI-ACP)®",
    category: "agile",
    duration: "4 Days / 21 Hours",
    level: "Practitioner",
    description: "Explore Scrum, Kanban, Lean, extreme programming (XP) and test-driven development frameworks.",
    icon: Target,
  },
  {
    title: "Managing Successful Programmes (MSP)®",
    category: "agile",
    duration: "4 Days / 24 Hours",
    level: "Professional",
    description: "Develop executive governance to orchestrate multiple related projects and deliver strategic business change.",
    icon: Layers3,
  },
  {
    title: "APM Project Fundamentals Qualification (PFQ)",
    category: "pmp",
    duration: "2 Days / 14 Hours",
    level: "Foundation",
    description: "Build a strong foundational command of project management terminology, lifecycle phases, and basics.",
    icon: BookOpen,
  },
  {
    title: "Project Controls & Delivery Governance",
    category: "pmp",
    duration: "2 Days / 14 Hours",
    level: "Practitioner",
    description: "Master earned value management (EVM), critical path scheduling, and executive steering governance.",
    icon: CheckCircle2,
  },
  {
    title: "Project Manager Accelerator (X-PM)",
    category: "prince2",
    duration: "3 Days / 20 Hours",
    level: "Practitioner",
    description: "Intensive practical workshop focusing on stakeholder diplomacy, sprint retrospectives, and budget rescues.",
    icon: BriefcaseBusiness,
  },
  {
    title: "XPROJ: Enterprise Project Management Practitioner",
    category: "prince2",
    duration: "5 Days / 35 Hours",
    level: "Expert",
    description: "Advanced masterclass in organizational PMO design, portfolio value management, and multi-team leadership.",
    icon: Crown,
  },
];

const levelStyles: Record<string, string> = {
  Foundation: "bg-blue-50 text-blue-700 border-blue-200",
  Professional: "bg-purple-50 text-purple-700 border-purple-200",
  Practitioner: "bg-amber-50 text-amber-800 border-amber-300",
  Expert: "bg-emerald-50 text-emerald-800 border-emerald-300",
};

export default function ProjectManagementCourses() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("PRINCE2 Foundation + Practitioner Dual");

  const openEnquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setModalOpen(true);
  };

  const filteredCourses =
    activeTab === "all"
      ? allCourses
      : allCourses.filter((c) => c.category === activeTab);

  return (
    <>
      <section
        id="courses"
        className="relative overflow-hidden bg-[#FAF9F6] py-20 md:py-24"
      >
       <div className="container">
         {/* Background 3D Decorations */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-200/30 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl ">
          {/* Section Heading */}
          <ScrollReveal animation="fade-up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#A66D08]">
                <Award size={15} />
                EXTENSIVE PORTFOLIO
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl font-extrabold leading-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                Explore Our Project Management{" "}
                <span className="italic text-[#C58A18]">Courses</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                From foundational PM qualifications to advanced enterprise certifications,
                find the right accredited programme for your career trajectory.
              </p>

              {/* Filter Tabs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: "all", label: "All Programmes" },
                  { id: "prince2", label: "PRINCE2® Suite" },
                  { id: "pmp", label: "PMP & Governance" },
                  { id: "agile", label: "Agile & Programme (MSP)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-[#0B1B3A] text-white shadow-md shadow-[#0B1B3A]/20 scale-105"
                        : "border border-amber-200/70 bg-white text-slate-600 hover:border-amber-400 hover:text-[#0B1B3A]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 3D Compact Course Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((course, index) => {
              const Icon = course.icon;

              return (
                <ScrollReveal
                  key={course.title}
                  animation="zoom-in-3d"
                  delay={(index % 4) * 0.08}
                  className="h-full"
                >
                  <Card3D
                    maxTilt={10}
                    glowColor="rgba(245, 158, 11, 0.2)"
                    className={`group relative flex h-full flex-col rounded-2xl border bg-white p-5 shadow-xs transition-all duration-300 hover:border-amber-300 hover:shadow-xl ${
                      course.featured
                        ? "border-amber-300 ring-1 ring-amber-300/40"
                        : "border-[#EAE5DA]"
                    }`}
                  >
                    {/* Featured Badge */}
                    {course.featured && (
                      <span className="absolute right-3.5 top-3.5 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#071426]">
                        Popular
                      </span>
                    )}

                    {/* Course Icon */}
                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1B3A] text-amber-400 shadow-sm transition-transform duration-300 group-hover:scale-110"
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Course Title */}
                    <h3
                      style={{ transform: "translateZ(20px)" }}
                      className="min-h-[56px] text-base font-bold leading-snug text-[#0B1B3A] transition-colors group-hover:text-amber-700"
                    >
                      {course.title}
                    </h3>

                    <p className="mt-2 flex-grow text-xs leading-5 text-slate-500">
                      {course.description}
                    </p>

                    {/* Duration and Level */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#EEE9DF] pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                        <CalendarDays size={13} className="text-[#C58A18]" />
                        {course.duration}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300" />

                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${
                          levelStyles[course.level]
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>

                    {/* Enquire Button */}
                    <button
                      onClick={() => openEnquiry(course.title)}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1B3A] py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-[#0B1B3A]"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight size={14} />
                    </button>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom Help Banner */}
          <ScrollReveal animation="fade-up" delay={0.25} className="mt-14">
            <div className="relative overflow-hidden rounded-3xl bg-[#0B1B3A] px-7 py-8 md:px-12 md:py-10 text-white shadow-xl">
              <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[35px] border-amber-400/10" />

              <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    CORPORATE & GROUP ENROLMENTS
                  </span>
                  <h3 className="font-['Playfair_Display'] mt-2 text-2xl font-bold text-white md:text-3xl">
                    Need Custom Team Training for Your Enterprise?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    We deliver customized private cohorts for government departments, banking institutions,
                    and IT consultancies with discounted voucher packages.
                  </p>
                </div>

                <button
                  onClick={() => openEnquiry("Corporate Group Training")}
                  className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-amber-400 px-7 py-3.5 text-xs font-bold text-[#071426] transition-all hover:bg-amber-300 hover:shadow-lg"
                >
                  Request Corporate Quote
                  <ArrowRight size={16} />
                </button>
              </div>
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
