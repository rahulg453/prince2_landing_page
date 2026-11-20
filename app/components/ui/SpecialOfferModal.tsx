// "use client";

// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   ArrowRight,
//   Loader2,
//   ShieldCheck,
//   CheckCircle2,
//   Clock,
//   Tag,
//   Star,
//   Zap,
// } from "lucide-react";
// import { supabase } from "../../lib/supabase";

// interface SpecialOfferModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// /* ─── Live Countdown ─── */
// function useCountdown() {
//   const [t, setT] = useState({ h: 11, m: 59, s: 47 });
//   useEffect(() => {
//     const id = setInterval(() => {
//       setT((p) => {
//         if (p.h === 0 && p.m === 0 && p.s === 0) return p;
//         if (p.s > 0) return { ...p, s: p.s - 1 };
//         if (p.m > 0) return { ...p, m: p.m - 1, s: 59 };
//         return { h: p.h - 1, m: 59, s: 59 };
//       });
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return t;
// }

// /* ─── Countdown block ─── */
// function TimeUnit({ value, label }: { value: number; label: string }) {
//   const d = String(value).padStart(2, "0");
//   return (
//     <div className="flex flex-col items-center gap-1">
//       <motion.div
//         key={d}
//         initial={{ rotateX: -50, opacity: 0 }}
//         animate={{ rotateX: 0, opacity: 1 }}
//         transition={{ duration: 0.3 }}
//         className="relative flex h-12 w-12 items-center justify-center rounded-lg overflow-hidden"
//         style={{
//           background: "linear-gradient(170deg, #1c1c1c, #111)",
//           border: "1px solid rgba(251,191,36,0.25)",
//           boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 16px rgba(0,0,0,0.5)",
//         }}
//       >
//         <div className="absolute inset-x-0 top-1/2 h-px bg-black/50 z-10" />
//         <span
//           className="relative z-20 text-2xl font-black tabular-nums"
//           style={{
//             background: "linear-gradient(180deg,#FEF3C7 0%,#F59E0B 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           {d}
//         </span>
//       </motion.div>
//       <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500/50">
//         {label}
//       </span>
//     </div>
//   );
// }

// /* ─── Floating spark ─── */
// function Spark({ x, y, size, dur, delay, color }: {
//   x: number; y: number; size: number;
//   dur: number; delay: number; color: string;
// }) {
//   return (
//     <motion.div
//       className="absolute rounded-full pointer-events-none"
//       style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color, filter: "blur(0.5px)" }}
//       animate={{ y: [-8, -40, -80], opacity: [0, 1, 0], scale: [0.5, 1, 0.3] }}
//       transition={{ duration: dur, delay, repeat: Infinity, ease: "easeOut" }}
//     />
//   );
// }

// /* ─── Input ─── */
// function InputField({
//   type, name, placeholder, value, onChange, icon: Icon,
// }: {
//   type: string; name: string; placeholder: string;
//   value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   icon: React.ElementType;
// }) {
//   return (
//     <div className="relative">
//       <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
//         <Icon size={14} style={{ color: "rgba(251,191,36,0.4)" }} />
//       </div>
//       <input
//         type={type}
//         name={name}
//         required
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className="w-full rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
//         style={{
//           background: "rgba(255,255,255,0.03)",
//           border: "1px solid rgba(255,255,255,0.07)",
//         }}
//         onFocus={(e) => {
//           e.currentTarget.style.borderColor = "rgba(251,191,36,0.5)";
//           e.currentTarget.style.background = "rgba(251,191,36,0.03)";
//           e.currentTarget.style.boxShadow = "0 0 0 3px rgba(251,191,36,0.06)";
//         }}
//         onBlur={(e) => {
//           e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
//           e.currentTarget.style.background = "rgba(255,255,255,0.03)";
//           e.currentTarget.style.boxShadow = "none";
//         }}
//       />
//     </div>
//   );
// }

// export default function SpecialOfferModal({ isOpen, onClose }: SpecialOfferModalProps) {
//   const cd = useCountdown();
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");
//   const [form, setForm] = useState({ name: "", email: "", phone: "" });

//   const handleKey = useCallback(
//     (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
//     [onClose],
//   );

//   useEffect(() => {
//     if (!isOpen) return;
//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", handleKey);
//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleKey);
//     };
//   }, [isOpen, handleKey]);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//     setError("");
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const { error: dbErr } = await supabase.from("course_enquiries").insert([{
//         name: form.name.trim(),
//         email: form.email.trim(),
//         phone: form.phone.trim(),
//         course: "PRINCE2 Foundation + Practitioner",
//         training_format: "Black Friday Special Offer",
//       }]);
//       if (dbErr) throw dbErr;
//       setSubmitted(true);
//     } catch {
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const reset = () => {
//     setSubmitted(false);
//     setError("");
//     setForm({ name: "", email: "", phone: "" });
//     onClose();
//   };

//   const sparks = useMemo(() =>
//     Array.from({ length: 24 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: 50 + Math.random() * 50,
//       size: 2 + Math.random() * 3,
//       dur: 2.5 + Math.random() * 3,
//       delay: Math.random() * 4,
//       color: i % 2 === 0 ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.7)",
//     })), []);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[1100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">

//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0"
//             style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(14px)" }}
//           />

//           {/* ═══════════════════════════════════════════
//               HORIZONTAL CARD  (left image | right form)
//           ═══════════════════════════════════════════ */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.84, y: 56 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 36 }}
//             transition={{ type: "spring", stiffness: 290, damping: 25 }}
//             className="relative z-10 w-full max-w-4xl my-auto flex overflow-hidden"
//             style={{
//               borderRadius: "1.75rem",
//               border: "1px solid rgba(251,191,36,0.2)",
//               boxShadow:
//                 "0 0 0 1px rgba(251,191,36,0.07), 0 60px 140px rgba(0,0,0,0.9), 0 0 100px rgba(251,191,36,0.07)",
//               minHeight: "520px",
//             }}
//           >
//             {/* ══════════════════════════════════════
//                 LEFT - BLACK FRIDAY VISUAL PANEL
//             ══════════════════════════════════════ */}
//             <div
//               className="relative hidden md:flex flex-col flex-shrink-0 w-[46%] overflow-hidden"
//               style={{
//                 background:
//                   "radial-gradient(ellipse at 30% 20%, #1a1200 0%, #0d0d0d 55%, #000000 100%)",
//               }}
//             >
//               {/* Grid texture */}
//               <div
//                 className="absolute inset-0 pointer-events-none opacity-[0.04]"
//                 style={{
//                   backgroundImage:
//                     "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
//                 }}
//               />

//               {/* Top amber gradient glow */}
//               <div
//                 className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
//                 style={{
//                   background:
//                     "radial-gradient(circle, rgba(251,191,36,0.14) 0%, transparent 70%)",
//                 }}
//               />
//               <div
//                 className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full pointer-events-none"
//                 style={{
//                   background:
//                     "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
//                 }}
//               />

//               {/* Sparks */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {sparks.map((s) => <Spark key={s.id} {...s} />)}
//               </div>

//               {/* Diagonal amber strip */}
//               <div
//                 className="absolute inset-0 pointer-events-none"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(251,191,36,0.07) 0%, transparent 50%)",
//                 }}
//               />

//               {/* Content */}
//               <div className="relative z-10 flex flex-col h-full px-8 py-9 justify-between">

//                 {/* Top: tag + BIG BLACK FRIDAY */}
//                 <div className="flex flex-col gap-4">
//                   {/* Sale tag pill */}
//                   <div
//                     className="inline-flex self-start items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.22em]"
//                     style={{
//                       background: "rgba(251,191,36,0.1)",
//                       border: "1px solid rgba(251,191,36,0.35)",
//                       color: "#FCD34D",
//                     }}
//                   >
//                     <Tag size={10} />
//                     Limited Time Sale
//                   </div>

//                   {/* Giant headline */}
//                   <div>
//                     <div
//                       className="text-5xl font-black uppercase leading-none tracking-tight"
//                       style={{
//                         background: "linear-gradient(170deg,#ffffff 0%,#FDE68A 45%,#F59E0B 100%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         textShadow: "none",
//                         filter: "drop-shadow(0 0 24px rgba(251,191,36,0.4))",
//                       }}
//                     >
//                       BLACK
//                     </div>
//                     <div
//                       className="text-5xl font-black uppercase leading-none tracking-tight mt-0.5"
//                       style={{
//                         background: "linear-gradient(170deg,#ffffff 0%,#FDE68A 45%,#F59E0B 100%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         filter: "drop-shadow(0 0 24px rgba(251,191,36,0.4))",
//                       }}
//                     >
//                       FRIDAY
//                     </div>
//                     <div
//                       className="mt-1 text-lg font-black uppercase tracking-[0.35em]"
//                       style={{ color: "rgba(251,191,36,0.6)" }}
//                     >
//                       MEGA SALE
//                     </div>
//                     {/* 60% off pill */}
//                     <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
//                       style={{
//                         background: "linear-gradient(135deg,rgba(251,191,36,0.18),rgba(251,191,36,0.06))",
//                         border: "1px solid rgba(251,191,36,0.4)",
//                       }}
//                     >
//                       <span className="text-xs font-black" style={{ color: "#FCD34D" }}>
//                         🔥
//                       </span>
//                       <span className="text-sm font-black" style={{
//                         background: "linear-gradient(90deg,#FEF3C7,#F59E0B)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                       }}>
//                         Get up to 60% OFF
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Centre: Starburst badge */}
//                 <div className="flex justify-center my-4">
//                   <div className="relative">
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//                       className="absolute pointer-events-none"
//                       style={{ inset: "-12px", border: "1.5px dashed rgba(251,191,36,0.3)", borderRadius: "50%" }}
//                     />
//                     <motion.div
//                       animate={{ rotate: -360 }}
//                       transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
//                       className="absolute pointer-events-none"
//                       style={{ inset: "-22px", border: "1px dashed rgba(251,191,36,0.15)", borderRadius: "50%" }}
//                     />
//                     <svg viewBox="0 0 190 190" className="w-44 h-44" fill="none">
//                       <defs>
//                         <radialGradient id="sg" cx="38%" cy="30%" r="68%">
//                           <stop offset="0%" stopColor="#FEF9C3" />
//                           <stop offset="40%" stopColor="#F59E0B" />
//                           <stop offset="100%" stopColor="#92400E" />
//                         </radialGradient>
//                         <filter id="sg-glow" x="-20%" y="-20%" width="140%" height="140%">
//                           <feGaussianBlur stdDeviation="5" result="b" />
//                           <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
//                         </filter>
//                       </defs>
//                       {/* 12-point burst */}
//                       {[...Array(12)].map((_, i) => (
//                         <polygon
//                           key={i}
//                           points="95,10 100,80 95,95 90,80"
//                           transform={`rotate(${i * 30} 95 95)`}
//                           fill="url(#sg)"
//                           opacity="0.9"
//                           filter="url(#sg-glow)"
//                         />
//                       ))}
//                       <circle cx="95" cy="95" r="62" fill="url(#sg)" filter="url(#sg-glow)" />
//                       <circle cx="95" cy="95" r="56" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />

//                       {/* Text inside badge */}
//                       <text x="95" y="62" textAnchor="middle" fill="#030303"
//                         fontSize="11" fontWeight="900" fontFamily="system-ui" letterSpacing="1">
//                         GET UP TO
//                       </text>
//                       <text x="95" y="96" textAnchor="middle" fill="#030303"
//                         fontSize="44" fontWeight="900" fontFamily="system-ui" letterSpacing="-1">
//                         60%
//                       </text>
//                       <text x="95" y="116" textAnchor="middle" fill="#030303"
//                         fontSize="18" fontWeight="900" fontFamily="system-ui" letterSpacing="2">
//                         OFF
//                       </text>
//                       <text x="95" y="133" textAnchor="middle" fill="rgba(5,5,5,0.6)"
//                         fontSize="9.5" fontWeight="800" fontFamily="system-ui" letterSpacing="1">
//                         SAVE UP TO £300
//                       </text>
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Bottom: Countdown + perks */}
//                 <div className="flex flex-col gap-4">
//                   {/* Countdown */}
//                   <div>
//                     <div className="flex items-center gap-1.5 mb-2.5">
//                       <Clock size={11} className="text-amber-500" />
//                       <span className="text-[9px] font-black uppercase tracking-[0.25em] text-amber-500/70">
//                         Offer expires in
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2.5">
//                       <TimeUnit value={cd.h} label="HRS" />
//                       <span className="text-amber-500/60 font-black text-xl -mt-4">:</span>
//                       <TimeUnit value={cd.m} label="MIN" />
//                       <span className="text-amber-500/60 font-black text-xl -mt-4">:</span>
//                       <TimeUnit value={cd.s} label="SEC" />
//                     </div>
//                   </div>

//                   {/* Perks */}
//                   <ul className="flex flex-col gap-2">
//                     {[
//                       { icon: Star,  text: "PeopleCert Exam Voucher Included" },
//                       { icon: Zap,   text: "98.4% First-Attempt Pass Rate"    },
//                       { icon: Star,  text: "Free Study Pack & Mock Exams"      },
//                       { icon: Clock, text: "Weekend & Evening Live Batches"    },
//                     ].map(({ icon: Icon, text }) => (
//                       <li key={text} className="flex items-center gap-2">
//                         <span
//                           className="flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-full"
//                           style={{ background: "rgba(251,191,36,0.15)" }}
//                         >
//                           <Icon size={9} className="text-amber-400" />
//                         </span>
//                         <span className="text-[11px] text-zinc-400 leading-4">{text}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Right-edge amber glow divider */}
//               <div
//                 className="absolute right-0 inset-y-0 w-px pointer-events-none"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, transparent, rgba(251,191,36,0.4) 30%, rgba(251,191,36,0.4) 70%, transparent)",
//                 }}
//               />
//             </div>

//             {/* ══════════════════════════════════════
//                 RIGHT - FORM PANEL
//             ══════════════════════════════════════ */}
//             <div
//               className="relative flex-1 flex flex-col overflow-hidden"
//               style={{
//                 background: "linear-gradient(170deg, #0c1120 0%, #07090f 100%)",
//               }}
//             >
//               {/* Top amber line */}
//               <div
//                 className="absolute inset-x-0 top-0 h-0.5 pointer-events-none"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(251,191,36,0.6), rgba(253,230,138,0.9) 50%, rgba(251,191,36,0.6))",
//                 }}
//               />

//               {/* Close */}
//               <button
//                 onClick={onClose}
//                 className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 hover:text-amber-400 hover:bg-amber-400/10 transition-all"
//                 aria-label="Close"
//               >
//                 <X size={15} />
//               </button>

//               {!submitted ? (
//                 <div className="relative z-10 flex flex-col h-full px-7 sm:px-9 py-8 sm:py-10">

//                   {/* Mobile-only: compact BF badge */}
//                   <div className="md:hidden mb-5 flex items-center gap-2">
//                     <div
//                       className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
//                       style={{
//                         background: "rgba(251,191,36,0.1)",
//                         border: "1px solid rgba(251,191,36,0.3)",
//                         color: "#FCD34D",
//                       }}
//                     >
//                       🖤 Black Friday - Save £300
//                     </div>
//                   </div>

//                   {/* Form header */}
//                   <div className="mb-6">
//                     <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
//                       Claim Your
//                       <span
//                         className="block"
//                         style={{
//                           background: "linear-gradient(90deg,#FDE68A,#F59E0B)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}
//                       >
//                         Black Friday Deal
//                       </span>
//                     </h2>
//                     <p className="mt-2 text-xs text-zinc-500 leading-5">
//                       Reserve your seat in 30 seconds - our advisor will
//                       confirm your discount within 2 hours.
//                     </p>
//                   </div>

//                   {/* Offer highlight strip */}
//                   <div
//                     className="mb-6 rounded-xl px-4 py-3.5 flex items-center gap-3"
//                     style={{
//                       background: "rgba(251,191,36,0.06)",
//                       border: "1px solid rgba(251,191,36,0.15)",
//                     }}
//                   >
//                     <div
//                       className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-sm font-black"
//                       style={{
//                         background: "linear-gradient(135deg,#FEF3C7,#F59E0B)",
//                         color: "#050505",
//                       }}
//                     >
//                       £300
//                     </div>
//                     <div>
//                       <p className="text-xs font-bold text-white">
//                         PRINCE2® Foundation + Practitioner Combo
//                       </p>
//                       <p className="text-[11px] text-zinc-500 mt-0.5">
//                         Black Friday exclusive · Exam voucher included
//                       </p>
//                     </div>
//                   </div>

//                   {/* Form */}
//                   <form onSubmit={onSubmit} className="flex flex-col gap-3.5 flex-1">
//                     <InputField
//                       type="text" name="name" placeholder="Full Name *"
//                       value={form.name} onChange={onChange}
//                       icon={({ size, style }: { size: number; style: React.CSSProperties }) =>
//                         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
//                       }
//                     />
//                     <InputField
//                       type="email" name="email" placeholder="Email Address *"
//                       value={form.email} onChange={onChange}
//                       icon={({ size, style }: { size: number; style: React.CSSProperties }) =>
//                         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
//                       }
//                     />
//                     <InputField
//                       type="tel" name="phone" placeholder="Phone Number *"
//                       value={form.phone} onChange={onChange}
//                       icon={({ size, style }: { size: number; style: React.CSSProperties }) =>
//                         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0122 16.9z"/></svg>
//                       }
//                     />

//                     {error && (
//                       <p
//                         className="rounded-xl px-4 py-2.5 text-xs text-red-300"
//                         style={{
//                           background: "rgba(239,68,68,0.08)",
//                           border: "1px solid rgba(239,68,68,0.2)",
//                         }}
//                       >
//                         {error}
//                       </p>
//                     )}

//                     {/* CTA */}
//                     <motion.button
//                       type="submit"
//                       disabled={loading}
//                       whileHover={{ scale: loading ? 1 : 1.015 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="relative mt-auto flex items-center justify-center gap-2.5 overflow-hidden rounded-xl py-4 text-sm font-black uppercase tracking-wider text-black disabled:opacity-60 cursor-pointer"
//                       style={{
//                         background:
//                           "linear-gradient(135deg,#FEF3C7 0%,#FBBF24 40%,#F59E0B 70%,#D97706 100%)",
//                         boxShadow: loading
//                           ? "none"
//                           : "0 8px 32px rgba(251,191,36,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
//                         letterSpacing: "0.07em",
//                       }}
//                     >
//                       {/* shimmer sweep */}
//                       <motion.div
//                         className="absolute inset-0 pointer-events-none"
//                         style={{
//                           background:
//                             "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.4) 50%,transparent 70%)",
//                         }}
//                         animate={{ x: ["-120%", "220%"] }}
//                         transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
//                       />
//                       {loading ? (
//                         <><Loader2 size={16} className="animate-spin" /> Claiming…</>
//                       ) : (
//                         <>🔥 &nbsp;Claim My £300 Black Friday Discount <ArrowRight size={15} /></>
//                       )}
//                     </motion.button>

//                     <p className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-700 mt-0.5">
//                       <ShieldCheck size={11} className="text-amber-500/40" />
//                       No spam · 100% confidential · 2-hour advisor callback
//                     </p>
//                   </form>
//                 </div>
//               ) : (
//                 /* ── SUCCESS ── */
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 py-12 gap-6"
//                 >
//                   <div className="relative">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.1 }}
//                       className="flex h-20 w-20 items-center justify-center rounded-full"
//                       style={{
//                         background: "radial-gradient(circle,rgba(251,191,36,0.2),rgba(251,191,36,0.03))",
//                         border: "2px solid rgba(251,191,36,0.55)",
//                         boxShadow: "0 0 60px rgba(251,191,36,0.3)",
//                       }}
//                     >
//                       <CheckCircle2 size={40} className="text-amber-400" />
//                     </motion.div>
//                     {[1.3, 1.7, 2.1].map((s, i) => (
//                       <motion.div
//                         key={i}
//                         className="absolute inset-0 rounded-full"
//                         style={{ border: "1.5px solid rgba(251,191,36,0.3)" }}
//                         animate={{ scale: [1, s], opacity: [0.7, 0] }}
//                         transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
//                       />
//                     ))}
//                   </div>

//                   <div>
//                     <span
//                       className="inline-block mb-3 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest"
//                       style={{
//                         background: "rgba(251,191,36,0.1)",
//                         border: "1px solid rgba(251,191,36,0.3)",
//                         color: "#FCD34D",
//                       }}
//                     >
//                       🎉 Deal Reserved!
//                     </span>
//                     <h3 className="text-2xl font-black text-white">
//                       You&apos;re locked in,{" "}
//                       <span
//                         style={{
//                           background: "linear-gradient(90deg,#FDE68A,#F59E0B)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}
//                       >
//                         {form.name.split(" ")[0] || "Learner"}!
//                       </span>
//                     </h3>
//                     <p className="mt-2.5 text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto">
//                       Your{" "}
//                       <span className="text-amber-400 font-semibold">£300 Black Friday</span>{" "}
//                       discount is confirmed. Our advisor will reach you at{" "}
//                       <span className="text-white font-medium">{form.email}</span> within 2 hours.
//                     </p>
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     onClick={reset}
//                     className="rounded-xl px-10 py-3.5 text-sm font-black text-black uppercase tracking-wider"
//                     style={{
//                       background: "linear-gradient(135deg,#FEF3C7 0%,#F59E0B 100%)",
//                       boxShadow: "0 8px 24px rgba(251,191,36,0.3)",
//                     }}
//                   >
//                     Done
//                   </motion.button>
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialOfferModal({
  isOpen,
  onClose,
}: SpecialOfferModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const enquiryData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        message: formData.message.trim(),
        course: "Black Friday Special Offer",
        training_format: "Black Friday - Up to 60% OFF",
      };

      // Submit enquiry to Supabase
      const { error: submitError } = await supabase
        .from("course_enquiries")
        .insert([enquiryData]);

      if (submitError) {
        console.error("Supabase error:", submitError);
        throw submitError;
      }

      // Show success screen
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission failed:", err);

      setError("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   setError("");

  //   try {
  //     const { error: submitError } = await supabase
  //       .from("course_enquiries")
  //       .insert([
  //         {
  //           name: formData.name.trim(),
  //           email: formData.email.trim(),
  //           phone: formData.phone.trim(),
  //           address: formData.address.trim(),
  //           message: formData.message.trim(),
  //           course: "Black Friday Special Offer",
  //           training_format: "Black Friday - Up to 60% OFF",
  //         },
  //       ]);

  //     if (submitError) throw submitError;

  //     setSubmitted(true);
  //   } catch (err) {
  //     console.error("Offer submission error:", err);
  //     setError("Unable to submit your enquiry. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const closeModal = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
    setSubmitted(false);
    setError("");
    onClose();
  };

  const fields = [
    {
      name: "name",
      placeholder: "Full Name",
      icon: User,
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      placeholder: "Email Address",
      icon: Mail,
      type: "email",
      autoComplete: "email",
    },
    {
      name: "phone",
      placeholder: "Phone Number",
      icon: Phone,
      type: "tel",
      autoComplete: "tel",
    },
    {
      name: "address",
      placeholder: "Your Address",
      icon: MapPin,
      type: "text",
      autoComplete: "street-address",
    },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#061329]/80 p-3 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Black Friday special offer"
            className="relative grid w-full max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-[0_25px_100px_rgba(0,0,0,0.3)] md:grid-cols-2"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#10294B] shadow-md transition hover:rotate-90 hover:bg-[#F9C928]"
            >
              <X size={20} />
            </button>

            {/* LEFT IMAGE SECTION */}
            <div className="relative hidden min-h-[570px] overflow-hidden bg-[#071B3C] md:block">
              <img
                src="/black%20friday.png"
                alt="Black Friday Sale - Up to 60% OFF"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071329]/30 via-transparent to-transparent" />
            </div>

            {/* MOBILE IMAGE */}
            {/* <div className="relative h-[190px] overflow-hidden bg-[#071B3C] sm:hidden">
              <img
                src="/black%20friday.png"
                alt="Black Friday Sale - Up to 60% OFF"
                className="h-full w-full object-cover object-center"
              />
            </div> */}

            {/* RIGHT FORM SECTION */}
            <div className="flex min-w-0 flex-col justify-center px-6 py-7">
              {!submitted ? (
                <>
                  {/* HEADER */}
                  <div className="mb-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF7D9] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#10294B]">
                      <Sparkles size={14} className="text-[#D49E00]" />
                      Exclusive Black Friday Deal
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#10294B] sm:text-[38px]">
                      Don't Miss Out!
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#64748B] sm:text-base">
                      Get exclusive Black Friday offers on your favourite
                      courses. Fill in your details and our team will get in
                      touch.
                    </p>

                    <div className="mt-4 h-1 w-16 rounded-full bg-[#F9C928]" />
                  </div>

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* INPUT FIELDS */}
                    {fields.map((field) => {
                      const Icon = field.icon;

                      return (
                        <div key={field.name} className="relative">
                          <Icon
                            size={17}
                            strokeWidth={1.8}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]"
                          />

                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                            autoComplete={field.autoComplete}
                            required
                            className="h-[48px] w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-sm font-medium text-[#10294B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#E7B900] focus:bg-white focus:ring-2 focus:ring-[#F9C928]/20"
                          />
                        </div>
                      );
                    })}

                    {/* MESSAGE */}
                    <div className="relative">
                      <MessageCircle
                        size={17}
                        strokeWidth={1.8}
                        className="absolute left-4 top-4 text-[#718096]"
                      />

                      <textarea
                        name="message"
                        placeholder="Tell us what you're interested in..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="min-h-[85px] w-full resize-y rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-sm font-medium text-[#10294B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#E7B900] focus:bg-white focus:ring-2 focus:ring-[#F9C928]/20"
                      />
                    </div>

                    {/* ERROR */}
                    {error && (
                      <p className="text-sm font-medium text-red-600">
                        {error}
                      </p>
                    )}

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group mt-2 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#071B3C] text-base font-bold text-white shadow-lg shadow-[#071B3C]/10 transition-all duration-300 hover:bg-[#F9C928] hover:text-[#071B3C] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Claim Your Offer
                          <ArrowRight
                            size={19}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>

                    {/* PRIVACY */}
                    <div className="mt-1 flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
                      <ShieldCheck size={15} className="text-[#16A085]" />
                      Your information is safe and secure.
                    </div>
                  </form>
                </>
              ) : (
                /* SUCCESS SCREEN */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF7D9] text-[#10294B]">
                    <CheckCircle2 size={42} strokeWidth={1.8} />
                  </div>

                  <h2 className="text-3xl font-extrabold text-[#10294B]">
                    Thank You!
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#64748B]">
                    Your Black Friday offer enquiry has been submitted
                    successfully. Our team will contact you soon.
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-7 rounded-xl bg-[#071B3C] px-10 py-3 font-bold text-white transition hover:bg-[#F9C928] hover:text-[#071B3C]"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
