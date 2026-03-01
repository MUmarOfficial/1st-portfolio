import { education } from "@/data/content";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const cardFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const cardFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const dotScale: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

// Timeline item with scroll-triggered animation
const TimelineItem = ({
  degree,
  institution,
  period,
  description,
}: {
  degree: string;
  institution: string;
  period: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative"
    >
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-8">
        {/* Left column — info */}
        <motion.div
          variants={cardFromLeft}
          className="space-y-2 pr-4 text-right"
        >
          <span className="inline-block px-3 py-1 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-xs font-medium">
            {period}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {degree}
          </h3>
          <p className="text-[#a78bfa] font-medium text-sm">{institution}</p>
        </motion.div>

        {/* Center line + dot */}
        <div className="relative flex flex-col items-center">
          <motion.div
            variants={dotScale}
            className="w-4 h-4 rounded-full bg-[#5227FF] border-[3px] border-[#1a1a2e] shadow-[0_0_12px_rgba(82,39,255,0.6)] z-10 shrink-0"
          />
          <motion.div
            variants={lineGrow}
            className="w-px flex-1 bg-linear-to-b from-[#5227FF]/40 to-transparent origin-top"
            style={{ minHeight: "120px" }}
          />
        </div>

        {/* Right column — description */}
        <motion.p
          variants={cardFromRight}
          className="text-white/60 leading-relaxed text-sm sm:text-base pl-4 text-left"
        >
          {description}
        </motion.p>
      </div>

      {/* Mobile layout */}
      <div className="grid md:hidden grid-cols-[auto_1fr] items-start gap-4">
        {/* Left: line + dot */}
        <div className="relative flex flex-col items-center">
          <motion.div
            variants={dotScale}
            className="w-3.5 h-3.5 rounded-full bg-[#5227FF] border-[3px] border-[#1a1a2e] shadow-[0_0_12px_rgba(82,39,255,0.6)] z-10 shrink-0 mt-1"
          />
          <motion.div
            variants={lineGrow}
            className="w-px flex-1 bg-linear-to-b from-[#5227FF]/40 to-transparent origin-top"
            style={{ minHeight: "80px" }}
          />
        </div>

        {/* Right: all content */}
        <motion.div variants={cardFromRight} className="space-y-2 pb-8">
          <span className="inline-block px-3 py-1 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-xs font-medium">
            {period}
          </span>
          <h3 className="text-lg font-bold text-white">{degree}</h3>
          <p className="text-[#a78bfa] font-medium text-sm">{institution}</p>
          <p className="text-white/60 leading-relaxed text-sm pt-1">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-80px" });

  return (
    <section className="max-w-5xl mx-auto py-16">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-14 text-center relative"
      >
        {/* Large background text */}
        <motion.span
          variants={headerVariants}
          className="absolute inset-0 flex items-start justify-center select-none pointer-events-none"
          aria-hidden
        >
          <span className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-black uppercase tracking-widest text-white/3 leading-none">
            Study
          </span>
        </motion.span>

        {/* Main heading */}
        <motion.div variants={headerVariants} className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-[#a78bfa]" />
            <span className="text-sm sm:text-base font-semibold uppercase tracking-widest text-white/60">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-mono">
            Education
          </h2>
        </motion.div>

        {/* Decorative diamond divider */}
        <motion.div
          variants={headerVariants}
          className="flex items-center justify-center gap-0 my-6"
        >
          <span className="block h-px w-16 sm:w-24 bg-linear-to-r from-transparent to-white/20" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-white/30 mx-1"
          >
            <path
              d="M10 2 L14 10 L10 18 L6 10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M10 5 L12.5 10 L10 15 L7.5 10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span className="block h-px w-16 sm:w-24 bg-linear-to-l from-transparent to-white/20" />
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {education.map((item) => (
          <TimelineItem
            key={item.degree}
            degree={item.degree}
            institution={item.institution}
            period={item.period}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
