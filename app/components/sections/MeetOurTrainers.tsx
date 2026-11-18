"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Star,
  Calendar,
} from "lucide-react";
import Card3D from "../ui/Card3D";
import ScrollReveal from "../ui/ScrollReveal";
import EnquiryModal from "../ui/EnquiryModal";

const trainers = [
  {
    number: "01",
    name: "Dr. Peter Thornton",
    role: "Senior PRINCE2® Lead Trainer",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
    experience: "18+ Years PM Leadership",
    certified: "PeopleCert Lead Assessor",
    students: "3,800+ Certified",
    rating: "4.98",
    reviews: "340+ Reviews",
    description:
      "Former Government Project Director and certified PeopleCert assessor. Specializes in translating formal PRINCE2 governance into intuitive, high-impact boardroom delivery.",
    expertise: [
      "PRINCE2® 7th Edition",
      "Stage Boundary Control",
      "Enterprise Risk Mitigation",
    ],
    featured: true,
  },
  {
    name: "Sarah Linwood, PMP",
    role: "Practitioner & Agile Specialist",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
    experience: "14+ Years Delivery Experience",
    certified: "PRINCE2® & Agile Coach",
    students: "2,900+ Certified",
    rating: "4.96",
    reviews: "280+ Reviews",
    description:
      "Senior PMO director across FinTech and healthcare infrastructure. Master at tailoring structured PRINCE2 stage gates into fast-paced agile sprint cadences.",
    expertise: [
      "PRINCE2® Practitioner",
      "Hybrid Project Delivery",
      "Business Case Justification",
    ],
    featured: false,
  },
  {
    number: "03",
    name: "Marcus Reynolds",
    role: "Exam Master & Diagnostic Mentor",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85",
    experience: "12+ Years Exam Instruction",
    certified: "PeopleCert Certified Trainer",
    students: "4,100+ Certified",
    rating: "4.99",
    reviews: "410+ Reviews",
    description:
      "Veteran diagnostic coach who deconstructs tricky scenario questions and PeopleCert mock exams. Dedicated to building exam room confidence and eliminating hesitation.",
    expertise: [
      "Mock Simulator Drills",
      "Scenario Dissection",
      "Doubt-Clearing Clinics",
    ],
    featured: false,
  },
];

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Industry-Relevant Insights",
    description:
      "Understand project management concepts through real-world case studies from banking, construction, and IT rollouts.",
  },
  {
    icon: Lightbulb,
    title: "Clear, Intuitive Pedagogy",
    description:
      "Break down dense PeopleCert syllabus requirements into structured, digestible, and memorable classroom discussions.",
  },
  {
    icon: Users,
    title: "1-on-1 Dedicated Support",
    description:
      "Direct personalized mentorship to resolve confusing topics and review mock tests before you sit your official exam.",
  },
];

export default function MeetOurTrainers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("Dr. Peter Thornton");

  const openBooking = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="trainers"
        className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 lg:py-28"
      >
        <div className="container">
          {/* Background Atmosphere */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/70 blur-[130px]" />
          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-200/40 blur-[130px]" />

          <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <ScrollReveal animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1B3A] shadow-xs">
                  <Sparkles size={14} className="text-[#C58A18]" />
                  LEARN FROM ACCREDITED PM DIRECTORS
                </span>

                <h2 className="font-['Playfair_Display'] mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
                  Meet Your{" "}
                  <span className="italic text-[#C58A18]">
                    PRINCE2® Instructors
                  </span>
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                  Your instructor determines your success. Learn from verified
                  PeopleCert assessors and enterprise delivery directors who
                  make structured governance clear, engaging, and practical.
                </p>
              </div>
            </ScrollReveal>

            {/* 3D TRAINER CARDS WITH PHOTO PORTRAITS */}
            <div className="grid gap-8 lg:grid-cols-3">
              {trainers.map((trainer, index) => (
                <ScrollReveal
                  key={trainer.name}
                  animation="zoom-in-3d"
                  delay={index * 0.12}
                  className="h-full"
                >
                  <Card3D
                    maxTilt={10}
                    glowColor="rgba(245, 158, 11, 0.25)"
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-[0_12px_35px_rgba(11,27,58,0.06)] transition-all duration-300 hover:shadow-2xl ${
                      trainer.featured
                        ? "border-amber-400 ring-1 ring-amber-400/40"
                        : "border-[#E8DFCC]"
                    }`}
                  >
                    {/* Top Image Portrait Container */}
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100 sm:h-72">
                      <img
                        src={trainer.photo}
                        alt={trainer.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Inset Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/90 via-[#0B1B3A]/20 to-transparent" />

                      {/* Rating Pill Overlay (Top Right) */}
                      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/20 bg-[#071426]/80 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                        <Star
                          size={13}
                          fill="#F59E0B"
                          className="text-amber-400"
                        />
                        <span>{trainer.rating}</span>
                        <span className="text-[10px] text-slate-300">
                          ({trainer.reviews})
                        </span>
                      </div>

                      {/* Trainer Status Chip (Bottom Left over Image) */}
                      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                        <span className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/20 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md">
                          <ShieldCheck size={13} className="text-amber-400" />
                          {trainer.certified}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {/* Name & Role */}
                      <div>
                        <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0B1B3A] transition-colors group-hover:text-[#C58A18]">
                          {trainer.name}
                        </h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                          {trainer.role}
                        </p>
                      </div>

                      {/* Quick Credential Highlights */}
                      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                        <span className="rounded-md border border-slate-200 bg-[#FAF9F6] px-2.5 py-1">
                          {trainer.experience}
                        </span>
                        <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-amber-800">
                          {trainer.students}
                        </span>
                      </div>

                      {/* Bio Description */}
                      <p className="mt-4 text-xs leading-6 text-[#64748B] sm:text-sm">
                        {trainer.description}
                      </p>

                      {/* Domain Expertise Tags */}
                      <div className="mt-6 border-t border-[#F0ECE3] pt-4">
                        <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0B1B3A]">
                          Specialized Modules:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {trainer.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-[#E8DFCC] bg-[#FAF9F6] px-2.5 py-1 text-[10px] font-semibold text-[#526078] transition-colors hover:border-amber-400 hover:bg-amber-50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-6 pt-2">
                        <button
                          onClick={() =>
                            openBooking(`1-on-1 Session with ${trainer.name}`)
                          }
                          className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1B3A] py-3.5 text-xs font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-[#071426] hover:shadow-md cursor-pointer"
                        >
                          <Calendar size={14} />
                          <span>Book 1-on-1 Session</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </Card3D>
                </ScrollReveal>
              ))}
            </div>

            {/* THE LEARNING DIFFERENCE CARDS */}
            <ScrollReveal animation="fade-up" delay={0.25} className="mt-20">
              <div className="mb-10 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C58A18]">
                  THE LEARNING DIFFERENCE
                </span>
                <h3 className="font-['Playfair_Display'] mt-2 text-2xl font-bold text-[#0B1B3A] sm:text-3xl">
                  Instruction Designed Around Your Success
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <Card3D
                      key={benefit.title}
                      maxTilt={8}
                      className="flex flex-col rounded-2xl border border-[#E8DFCC] bg-white p-7 shadow-xs transition-all hover:border-amber-300 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1B3A] text-amber-400 shadow-sm">
                        <Icon size={24} />
                      </div>

                      <h4 className="mt-5 text-base font-bold text-[#0B1B3A]">
                        {benefit.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-[#64748B] sm:text-sm">
                        {benefit.description}
                      </p>
                    </Card3D>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedTrainer}
      />
    </>
  );
}
