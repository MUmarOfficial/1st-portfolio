import { projects } from "@/data/content";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Eye, Plus } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

// Smooth easing curve
const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

// Animation variants
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

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
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

// Spinning "VISIT PROJECT" circular badge
const VisitBadge = ({ href, accent }: { href: string; accent: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute -bottom-6 -right-6 sm:bottom-4 sm:right-4 z-20 w-20 h-20 sm:w-24 sm:h-24 group/badge"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Spinning text ring */}
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <path
          id="circlePath"
          d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
        />
      </defs>
      <text
        className="fill-white/70 group-hover/badge:fill-white transition-colors"
        fontSize="11.5"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href="#circlePath">VISIT PROJECT · VISIT PROJECT ·</textPath>
      </text>
    </motion.svg>
    {/* Center icon */}
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ color: accent }}
    >
      <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
    </div>
  </motion.a>
);

// Project Card Component
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50px" });

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative"
    >
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-start`}
      >
        {/* Image side */}
        <motion.div
          variants={isEven ? slideFromLeft : slideFromRight}
          className="w-full lg:w-1/2 relative group"
        >
          {/* Gradient border frame */}
          <div
            className="relative rounded-2xl p-3 sm:p-4"
            style={{
              background: `linear-gradient(145deg, ${project.accent}40, ${project.accent}15)`,
            }}
          >
            {/* Tagline banner */}
            <div
              className="relative rounded-t-xl px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4"
              style={{
                background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)`,
              }}
            >
              <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed flex-1">
                {project.tagline}
              </p>
              <ArrowRight className="w-5 h-5 text-white/60 shrink-0" />
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden rounded-b-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover object-top"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
              {/* Subtle overlay gradient */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${project.accent}30, transparent)`,
                }}
              />
            </div>

            {/* Visit badge */}
            {project.live && (
              <VisitBadge href={project.live} accent={project.accent} />
            )}
          </div>

          {/* Corner decorative dots */}
          <div
            className="absolute -top-2 -left-2 w-2 h-2 rounded-full opacity-40"
            style={{ backgroundColor: project.accent }}
          />
          <div
            className="absolute -bottom-2 -right-2 w-2 h-2 rounded-full opacity-40"
            style={{ backgroundColor: project.accent }}
          />
        </motion.div>

        {/* Info side */}
        <motion.div
          variants={isEven ? slideFromRight : slideFromLeft}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          {/* Title with accent bar */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-8 h-1 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <motion.ul
              variants={staggerChildren}
              className="space-y-3 mb-6"
            >
              {project.highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUpItem}
                  className="flex items-start gap-3 text-white/70 text-sm"
                >
                  <Plus
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: project.accent }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Tech Stack pills */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUpItem}
                className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-white/80 hover:border-white/20 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: `${project.accent}25`,
                  borderColor: `${project.accent}40`,
                  borderWidth: "1px",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${project.accent}30`,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Eye className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {project.repo !== "Private" && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub className="w-4 h-4" />
                Source Code
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
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
      <AnimatedSection className="text-center mb-20">
        <motion.div variants={slideFromTop}>
          <motion.span
            variants={scaleUp}
            className="inline-block px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-sm font-medium backdrop-blur-md mb-6"
          >
            🚀 My Work
          </motion.span>
        </motion.div>
        <motion.h1
          variants={slideFromBottom}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Featured{" "}
          <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h1>
        <motion.p
          variants={slideFromBottom}
          className="text-white/60 max-w-2xl mx-auto text-lg"
        >
          A showcase of my recent work, demonstrating expertise in React,
          TypeScript, and modern web development practices.
        </motion.p>
      </AnimatedSection>

      {/* Projects */}
      <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Floating Decorations */}
      <motion.div
        className="fixed top-1/4 left-10 w-64 h-64 bg-[#5227FF]/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-1/4 right-10 w-80 h-80 bg-[#a78bfa]/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};

export default Projects;
