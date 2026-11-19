"use client";

import { useState } from "react";
import { Tag, Sparkles, X } from "lucide-react";
import SpecialOfferModal from "../ui/SpecialOfferModal";

const OFFER_ITEMS = [
  "🖤 BLACK FRIDAY SALE - Save £300 on PRINCE2® Foundation + Practitioner!",
  "⚡ Biggest Discount of the Year - Ends Tonight at Midnight!",
  "🏆 PeopleCert Exam Voucher Included - Limited Seats Available!",
  "🎓 98.4% First-Attempt Pass Rate - Expert Live Trainers!",
  "📅 Weekend & Weekday Evening Batches - Enrol Today!",
  "🔥 Black Friday Exclusive - £300 Off, Free Study Pack + Mock Exams!",
  "🖤 BLACK FRIDAY SALE - Save £300 on PRINCE2® Foundation + Practitioner!",
  "⚡ Biggest Discount of the Year - Ends Tonight at Midnight!",
  "🏆 PeopleCert Exam Voucher Included - Limited Seats Available!",
  "🎓 98.4% First-Attempt Pass Rate - Expert Live Trainers!",
  "📅 Weekend & Weekday Evening Batches - Enrol Today!",
  "🔥 Black Friday Exclusive - £300 Off, Free Study Pack + Mock Exams!",
];

export default function SpecialOfferBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Fixed banner at very top - z-[600] sits above Navbar (z-500) */}
      <div
        className="fixed inset-x-0 top-0 z-[600] flex h-10 items-stretch overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #071426 0%, #0D1B3E 40%, #071426 100%)",
          borderBottom: "1px solid rgba(251,191,36,0.35)",
          boxShadow: "0 2px 20px rgba(251,191,36,0.12)",
        }}
      >
        {/* Left glow accent */}
        <div
          className="absolute left-0 top-0 h-full w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(251,191,36,0.18) 0%, transparent 100%)",
          }}
        />
        {/* Right glow accent */}
        <div
          className="absolute right-0 top-0 h-full w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, rgba(251,191,36,0.18) 0%, transparent 100%)",
          }}
        />

        {/* Left label pill */}
        <div className="flex-shrink-0 flex items-center gap-1.5 px-3 bg-amber-400/10 border-r border-amber-400/25 z-10">
          <Tag size={12} className="text-amber-400" />
          <span className="hidden sm:block text-[10px] font-black tracking-widest uppercase text-amber-400 whitespace-nowrap">
            🖤 Black Friday
          </span>
        </div>

        {/* Scrolling Marquee */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div className="animate-marquee-special flex whitespace-nowrap items-center gap-10">
            {OFFER_ITEMS.map((item, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-xs font-semibold text-slate-200 inline-flex items-center gap-2"
              >
                {item}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA button */}
        <button
          onClick={() => setModalOpen(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 sm:px-4 text-[10px] sm:text-[11px] font-black uppercase tracking-wide text-[#071426] bg-amber-400 hover:bg-amber-300 transition-colors duration-200 border-l border-amber-500 z-10 cursor-pointer whitespace-nowrap"
          aria-label="Claim Special Offer"
        >
          <Sparkles size={11} />
          <span className="hidden sm:block">🖤 Claim Offer</span>
          <span className="sm:hidden">Claim</span>
        </button>

        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 flex items-center justify-center w-8 text-slate-400 hover:text-amber-400 transition-colors border-l border-amber-400/15 bg-[#071426]/60 z-10"
          aria-label="Dismiss banner"
        >
          <X size={13} />
        </button>
      </div>

      <SpecialOfferModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
