"use client";

import { useState, useEffect } from "react";
import { Briefcase, Menu, X, Sparkles, Award } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import EnquiryModal from "../ui/EnquiryModal";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Methodology", href: "#roadmap" },
  { label: "Courses", href: "#course" },
  { label: "Trainers", href: "#trainers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 px-6 md:px-8 py-3.5 ${
          scrolled
            ? "bg-[#071426]/95 backdrop-blur-xl shadow-xl shadow-black/25 border-b border-amber-400/30"
            : "bg-[#071426]/85 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          {/* Logo Brand with 3D Gold Accent */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-[#071426] shadow-md shadow-amber-400/25 transition-transform duration-300 group-hover:scale-110">
              <Award size={18} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] text-xl font-black tracking-tight text-white">
                Xcademia<span className="text-amber-400">.</span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-amber-300 -mt-1 uppercase">
                PRINCE2® Training
              </span>
            </div>
          </Link>

          {/* Desktop Links with Animated Hover */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-slate-300 hover:text-amber-400 text-sm font-semibold transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-xs font-bold text-[#071426] shadow-md shadow-amber-400/25 transition-all duration-300 hover:from-amber-300 hover:to-yellow-400 hover:shadow-lg"
            >
              <Sparkles size={14} />
              <span>Enquire & Syllabus</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden text-white p-1.5 rounded-lg border border-white/10 bg-white/5 hover:text-amber-400"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-[490] bg-[#071426] pt-24 pb-8 px-6 shadow-2xl border-b border-amber-400/30"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-base font-semibold text-slate-200 hover:text-amber-400 transition-colors py-2.5 border-b border-white/10"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setModalOpen(true);
                }}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3.5 text-sm font-bold text-[#071426] shadow-lg shadow-amber-400/25"
              >
                <Sparkles size={16} />
                Enquire Course & Syllabus
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse="PRINCE2 Foundation + Practitioner"
      />
    </>
  );
}
