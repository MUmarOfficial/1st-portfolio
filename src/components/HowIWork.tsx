import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  ClipboardList,
  Layers,
  Code,
  FlaskConical,
  Rocket,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { howIWorkSteps } from "@/data/content";

// Smooth easing curve (consistent with site)
const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

// Map icon names from content to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Search,
  ClipboardList,
  Layers,
  Code,
  FlaskConical,
  Rocket,
};

// Resolve steps with actual icon components
const steps = howIWorkSteps.map((step) => ({
  ...step,
  icon: iconMap[step.iconName] || Code,
}));

// Card gradient backgrounds matching the screenshots
const cardGradients = [
  "from-[#5227FF]/30 via-[#5227FF]/10 to-transparent",
  "from-[#7c3aed]/30 via-[#a78bfa]/10 to-transparent",
  "from-[#a78bfa]/30 via-[#c084fc]/10 to-transparent",
  "from-[#c084fc]/30 via-[#e879f9]/10 to-transparent",
  "from-[#06b6d4]/30 via-[#5227FF]/10 to-transparent",
  "from-[#06b6d4]/30 via-[#5227FF]/10 to-transparent",
];

const HowIWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Auto-advance steps every 2s when in view and not paused
  const advanceStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) return;
    const timer = setInterval(advanceStep, 4000);
    return () => clearInterval(timer);
  }, [isInView, isPaused, advanceStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);
    // Resume auto-advance after 6s of inactivity
    setTimeout(() => setIsPaused(false), 6000);
  };

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: smoothEase }}
      >
        <motion.span
          className="inline-block px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-xs sm:text-sm font-medium backdrop-blur-md mb-6 cursor-default"
          whileHover={{ scale: 1.05 }}
        >
          My Process
        </motion.span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            How I W
          </span>
          <span className="text-white">ork</span>
        </h2>

        <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          A structured approach to delivering exceptional results for your
          project.
        </p>
      </motion.div>

      {/* Timeline Navigation */}
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-16 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
      >
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          let circleStyles = "bg-transparent text-white/40 border-white/15";
          if (isActive) circleStyles = "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]";
          else if (isCompleted) circleStyles = "bg-transparent text-white/70 border-white/30";

          let labelStyles = "text-white/30";
          if (isActive) labelStyles = "text-white";
          else if (isCompleted) labelStyles = "text-white/60";

          return (
            <div key={step.id} className="flex items-center gap-2 sm:gap-4">
              {/* Step circle */}
              <motion.button
                onClick={() => handleStepClick(index)}
                className="relative flex flex-col items-center gap-2 group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold border-2 transition-all duration-300 ${circleStyles}`}
                  layout
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </motion.div>
                <span
                  className={`text-[10px] sm:text-xs font-medium transition-colors duration-300 ${labelStyles}`}
                >
                  {step.title}
                </span>
              </motion.button>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-8 md:w-16 lg:w-20 h-0.5 relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full" />
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-[#5227FF] to-[#a78bfa] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: index < activeStep ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5, ease: smoothEase }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center"
        >
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Step indicator + icon */}
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/80" />
              </motion.div>
              <div>
                <p className="text-white/40 text-xs sm:text-sm font-medium">
                  Step &bull; {String(current.id).padStart(2, "0")}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">
              {current.description}
            </p>

            {/* Detail list */}
            <ul className="space-y-3">
              {current.details.map((detail, i) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                    ease: smoothEase,
                  }}
                  className="flex items-center gap-3 text-white/60 text-sm sm:text-base group"
                >
                  <motion.span
                    className="text-[#a78bfa]/60 group-hover:text-[#a78bfa] transition-colors"
                    whileHover={{ rotate: 90 }}
                  >
                    &#x203A;
                  </motion.span>
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Visual Card */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className={`relative w-full max-w-lg aspect-4/3 rounded-2xl border border-white/10 bg-linear-to-br ${cardGradients[activeStep]} backdrop-blur-xl overflow-hidden`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {/* Decorative circles */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-sm" />
              <div className="absolute bottom-1/4 left-8 w-24 h-24 bg-white/5 rounded-full" />

              {/* Card content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
                <motion.div
                  className="w-14 h-14 rounded-full bg-black/30 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-7 h-7 text-white/80" />
                </motion.div>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {current.title}
                </h4>
                <p className="text-white/50 text-xs sm:text-sm max-w-xs leading-relaxed">
                  {current.description}
                </p>
              </div>
            </motion.div>

            {/* Floating step number */}
            <motion.div
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 text-5xl sm:text-7xl font-extrabold select-none pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
            >
              <span className="text-white/10">0</span>
              <span className="bg-linear-to-b from-[#a78bfa] to-[#5227FF] bg-clip-text text-transparent">
                {current.id}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HowIWork;
