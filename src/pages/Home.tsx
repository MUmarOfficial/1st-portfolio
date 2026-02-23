import TiltedCard from "@/components/TiltedCard";
import { personalInfo } from "@/data/content";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Rocket, Code } from "lucide-react";
import { Link } from "react-router";

// Smooth easing curve
const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

// Animation variants for staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const slideFromTop: Variants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

// Glassmorphism Button Component with Link support
const GlassButton = ({
  children,
  to,
  variant = "primary",
}: {
  children: React.ReactNode;
  to: string;
  variant?: "primary" | "secondary";
}) => {
  const baseStyles =
    "relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-md border overflow-hidden group inline-flex items-center gap-2 cursor-pointer";
  const variants = {
    primary:
      "bg-[#5227FF]/20 border-[#5227FF]/40 text-white hover:bg-[#5227FF]/40 hover:border-[#5227FF]/60 hover:shadow-[0_0_30px_rgba(82,39,255,0.4)]",
    secondary:
      "bg-white/5 border-white/20 text-white/90 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
  };

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-[#5227FF]/0 via-[#5227FF]/20 to-[#5227FF]/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </Link>
  );
};

// Floating Icon Component
const FloatingIcon = ({
  icon: Icon,
  delay,
  className,
}: {
  icon: typeof Sparkles;
  delay: number;
  className: string;
}) => (
  <motion.div
    className={`absolute ${className} p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-xl backdrop-blur-sm`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.1, 1],
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-5 h-5 text-[#a78bfa]" />
  </motion.div>
);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#5227FF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#a78bfa]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#5227FF]/5 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Icons */}
      <FloatingIcon icon={Sparkles} delay={0} className="top-32 right-20 hidden lg:block" />
      <FloatingIcon icon={Rocket} delay={1.5} className="bottom-40 left-16 hidden lg:block" />
      <FloatingIcon icon={Code} delay={3} className="top-1/3 left-28 hidden lg:block" />

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, scale: heroScale }}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 sm:px-12 lg:px-20 py-20"
      >
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Greeting Tag */}
          <motion.div variants={slideFromTop} className="mb-4 sm:mb-6">
            <motion.span
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-xs sm:text-sm font-medium backdrop-blur-md cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block mr-2"
              >
                👋
              </motion.span>
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Name with letter animation */}
          <motion.h1
            variants={slideFromLeft}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <br className="block sm:hidden" />
            <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
              <div></div>{/*  Don't remove necessary for spacing */}
              {personalInfo.name.split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="inline-block cursor-default"
                  whileHover={{ scale: 1.2, color: "#fff" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Profession with typing effect style */}
          <motion.h2
            variants={slideFromRight}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-4 sm:mb-6"
          >
            <span className="relative inline-flex items-center">
              <motion.span
                animate={{
                  width: ["0%", "100%", "100%", "0%"]
                }}
                transition={{
                  duration: 10,
                  delay: 1,
                  repeat: Infinity,
                  times: [0, 0.3, 0.8, 1],
                  ease: "easeInOut"
                }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                {personalInfo.profession}
              </motion.span>
              <motion.span
                className="inline-block w-0.5 h-5 sm:h-6 md:h-8 bg-[#5227FF] ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={slideFromBottom}
            className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {personalInfo.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <GlassButton to="/projects" variant="primary">
                See Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </GlassButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <GlassButton to="/about" variant="secondary">
                Learn More
              </GlassButton>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={slideFromBottom}
            className="flex gap-6 sm:gap-8 mt-8 sm:mt-12 justify-center lg:justify-start"
          >
            {[
              { label: "Projects", value: "10+" },
              { label: "Technologies", value: "20+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                  whileHover={{ scale: 1.1, color: "#a78bfa" }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/50 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          variants={rotateIn}
          initial="hidden"
          animate="visible"
          className="shrink-0 relative mt-8 lg:mt-0"
        >
          {/* Glow effect behind card */}
          <motion.div
            className="absolute inset-0 bg-[#5227FF]/20 rounded-full blur-3xl scale-125 sm:scale-150"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.25, 1.5, 1.25],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <TiltedCard
            imageSrc="/Me.webp"
            altText="Muhammad Umar - Profile Pic"
            captionText="Front-End Developer"
            containerHeight="500px"
            containerWidth="350px"
            imageHeight="500px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-demo-text text-bold text-white text-sm sm:text-base bg-[#5227FF]/30 px-3 py-1 rounded-full backdrop-blur-md">
                Umar
              </p>
            }
          />
        </motion.div>
      </motion.section>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex justify-center pt-1.5 sm:pt-2"
          animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(82,39,255,0.5)", "rgba(255,255,255,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 sm:w-1.5 sm:h-3 bg-[#5227FF] rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <span className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Home;
