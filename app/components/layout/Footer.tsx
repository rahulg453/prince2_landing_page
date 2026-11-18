"use client";

import { useEffect, useState } from "react";
import { Award, Mail, MapPin, Phone, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    "PRINCE2® Suite": [
      { label: "PRINCE2® Foundation V7", href: "#course" },
      { label: "PRINCE2® Practitioner V7", href: "#course" },
      { label: "Foundation + Practitioner Dual", href: "#course" },
      { label: "PeopleCert Exam Vouchers", href: "#overview" },
      { label: "Official Mock Simulator", href: "#roadmap" },
    ],
    "Other Programmes": [
      { label: "PMP® Certification Prep", href: "#courses" },
      { label: "PMI Agile (PMI-ACP)®", href: "#courses" },
      { label: "Managing Successful Programmes (MSP)®", href: "#courses" },
      { label: "APM Project Fundamentals (PFQ)", href: "#courses" },
      { label: "Corporate Team Cohorts", href: "#courses" },
    ],
    "Learner Support": [
      { label: "Methodology Roadmap", href: "#roadmap" },
      { label: "Meet Our Instructors", href: "#trainers" },
      { label: "Student Testimonials", href: "#testimonials" },
      { label: "Frequently Asked Questions", href: "#faqs" },
      { label: "Pass Assurance Policy", href: "#overview" },
    ],
  };

  return (
    <footer className="bg-[#050C1A] text-white border-t border-amber-400/20">
      <div className="container mx-auto px-6 py-12 md:px-8 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand & Accreditation Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-[#071426] shadow-md shadow-amber-400/20">
                <Award size={18} strokeWidth={2.5} />
              </div>
              <span className="font-['Playfair_Display'] text-2xl font-black text-white">
                Xcademia<span className="text-amber-400">.</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Premier provider of official PeopleCert accredited PRINCE2® Foundation
              and Practitioner certifications. Empowering professionals and enterprise teams
              with structured project governance excellence.
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a
                  href="mailto:training@xcademia.com"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  training@xcademia.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a
                  href="tel:+442080504999"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  +44 20 8050 4999 (UK) / +1 800 450 2199
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  London, United Kingdom • Global Live Online Batches
                </p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-5">
                {heading}
              </h4>

              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-amber-400 text-xs sm:text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer & Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            PRINCE2® and MSP® are registered trade marks of AXELOS Limited, used under permission of AXELOS Limited.
            All rights reserved.
          </p>
          <p className="shrink-0 text-slate-300">
            &copy; {year} Xcademia Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
