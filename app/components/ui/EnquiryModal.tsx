"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  LockKeyhole,
  Award,
  Sparkles,
  Loader2,
  CalendarDays,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultCourse = "PRINCE2 Foundation + Practitioner",
}: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse,
    format: "Weekend Live Online (Sat & Sun)",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // Simulate responsive submission or API call
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 900));
  //     setSubmitted(true);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const { error } = await supabase.from("course_enquiries").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          course: formData.course,
          training_format: formData.format,
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setErrorMessage("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // const resetForm = () => {
  //   setSubmitted(false);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     course: defaultCourse,
  //     format: "Weekend Live Online (Sat & Sun)",
  //   });
  //   onClose();
  // };

  const resetForm = () => {
    setSubmitted(false);
    setErrorMessage("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: defaultCourse,
      format: "Weekend Live Online (Sat & Sun)",
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060E1F]/80 backdrop-blur-md"
          />

          {/* 3D Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: 10, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0B1B3A] p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.5)] sm:p-9"
          >
            {/* Top Glowing Trim */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-amber-400 hover:bg-amber-400/20 hover:text-white"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-300">
                    <Sparkles size={13} />
                    FAST ADMISSION ENQUIRY
                  </div>

                  <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                    Request Syllabus & Fee Quote
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                    Get PeopleCert exam voucher details, upcoming weekend batch
                    schedules, and personalized course advice.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Montgomery"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-amber-400 focus:bg-white/10 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-200">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-amber-400 focus:bg-white/10 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-200">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7123 456789"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-amber-400 focus:bg-white/10 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-200">
                      Interested Programme *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-[#0F2244] px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="PRINCE2 Foundation + Practitioner">
                        PRINCE2® Foundation + Practitioner (Dual Combo)
                      </option>
                      <option value="PRINCE2 Foundation">
                        PRINCE2® Foundation (Version 7)
                      </option>
                      <option value="PRINCE2 Practitioner">
                        PRINCE2® Practitioner (Version 7)
                      </option>
                      <option value="PMP Training">
                        PMP® Exam Preparation Training
                      </option>
                      <option value="PMI-ACP Training">
                        PMI Agile Certified Practitioner (PMI-ACP)
                      </option>
                      <option value="MSP Training">
                        Managing Successful Programmes (MSP)
                      </option>
                      <option value="APM PFQ Training">
                        APM Project Fundamentals (PFQ)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-200">
                      Preferred Training Format
                    </label>
                    <select
                      name="format"
                      value={formData.format}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-[#0F2244] px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="Weekend Live Online (Sat & Sun)">
                        Weekend Live Online (Sat & Sun)
                      </option>
                      <option value="Weekday Evening Live Online">
                        Weekday Evening Live Online
                      </option>
                      <option value="Self-Paced Guided Learning">
                        Self-Paced Guided Learning
                      </option>
                      <option value="Corporate Team Cohort">
                        Corporate Team Cohort
                      </option>
                    </select>
                  </div>
                  {errorMessage && (
                    <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-4 text-sm font-bold text-[#071426] shadow-lg shadow-amber-400/25 transition-all duration-300 hover:from-amber-300 hover:to-yellow-400 hover:shadow-xl disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Generating Your Brochure & Pricing...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Get Free Course Syllabus & Fee Advice
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-center text-[11px] text-slate-400">
                    <LockKeyhole size={13} className="text-amber-400" />
                    <span>
                      Your privacy is protected. No spam. Instant counselor
                      callback.
                    </span>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-400/30 bg-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={40} />
                </div>

                <span className="rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Enquiry Received
                </span>

                <h3 className="mt-4 text-2xl font-extrabold text-white">
                  Thank You, {formData.name || "Learner"}!
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                  Your request for{" "}
                  <span className="font-semibold text-amber-400">
                    {formData.course}
                  </span>{" "}
                  has been dispatched to our senior training advisor. We will
                  send the full syllabus and exam voucher guide to{" "}
                  <span className="text-white">{formData.email}</span> shortly.
                </p>

                <button
                  onClick={resetForm}
                  className="mt-8 rounded-xl bg-amber-400 px-8 py-3 text-sm font-bold text-[#071426] shadow-md transition-all hover:bg-amber-300"
                >
                  Done & Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
