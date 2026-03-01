import { personalInfo, contactDetails } from "@/data/content";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Mail, Download } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import Education from "@/components/Eduction";

// Smooth easing curve
const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
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

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const staggerLinks: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

// Animated Section Component
const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen py-20 px-6 sm:px-12 lg:px-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#5227FF] transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>

      {/* Header */}
      <AnimatedSection className="text-center mb-16">
        <motion.div variants={slideFromTop}>
          <motion.span
            variants={scaleUp}
            className="inline-block px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-sm font-medium backdrop-blur-md mb-6"
          >
            👨‍💻 Get to Know Me
          </motion.span>
        </motion.div>
        <motion.h1
          variants={slideFromBottom}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          About{" "}
          <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Me
          </span>
        </motion.h1>
        <motion.p
          variants={slideFromBottom}
          className="text-white/60 max-w-2xl mx-auto text-lg"
        >
          Discover my skills, education, and certifications that shape my
          journey as a developer.
        </motion.p>
      </AnimatedSection>

      {/* Personal Info — no card bg, ProfileCard left + text right */}
      <AnimatedSection className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ProfileCard — left side */}
          <motion.div variants={slideFromLeft} className="flex justify-center">
            <ProfileCard
              name="Muhammad Umar"
              title="Front-End Developer"
              handle="muhammadumar"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/NoBgMe.webp"
              showUserInfo
              enableTilt={true}
              enableMobileTilt
              onContactClick={() => navigate("/contact")}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl="/code1.png"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </motion.div>

          {/* Text — right side */}
          <motion.div variants={slideFromRight} className="space-y-5">
            <motion.p
              variants={slideFromBottom}
              className="text-white/80 leading-relaxed text-base sm:text-lg"
            >
              {personalInfo.aboutIntro}
            </motion.p>

            {/* Email + Social Links */}
            <motion.div variants={staggerLinks} className="space-y-4 pt-2">
              <div className="flex gap-4">
                <motion.a
                  variants={linkItem}
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  variants={linkItem}
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  variants={linkItem}
                  href={`mailto:${contactDetails.email}`}
                  className="p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  variants={linkItem}
                  href="/resume.pdf"
                  download
                  className="group relative p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#5227FF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Resume
                  </span>
                </motion.a>
              </div>
            </motion.div>

            {/* See Projects CTA */}
            <motion.div variants={scaleUp} className="pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#5227FF]/20 border border-[#5227FF]/40 rounded-xl text-white font-medium text-sm sm:text-base hover:bg-[#5227FF]/40 hover:border-[#5227FF]/60 hover:shadow-[0_0_30px_rgba(82,39,255,0.4)] transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    See Projects
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <TechStack />

      {/* Education */}
      <Education />

      {/* Floating Decorations */}
      <motion.div
        className="fixed top-1/3 right-10 w-72 h-72 bg-[#5227FF]/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-1/3 left-10 w-64 h-64 bg-[#a78bfa]/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
};

export default About;
