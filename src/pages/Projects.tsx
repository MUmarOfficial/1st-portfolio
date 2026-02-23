import { projects } from "@/data/content";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, ArrowLeft } from "lucide-react";
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
      variants={isEven ? slideFromLeft : slideFromRight}
      className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-[#5227FF]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(82,39,255,0.15)]"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#5227FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Project Image */}
        <div className="lg:w-1/3 overflow-hidden rounded-xl">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 lg:h-full object-cover rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Project Info */}
        <div className="lg:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#5227FF] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa]"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Testing Tools */}
            {project.testingTools && (
              <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
                <Code2 className="w-4 h-4" />
                <span>Testing: {project.testingTools.join(", ")}</span>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-2">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#5227FF] transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {project.repo !== "Private" && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#5227FF] transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub className="w-4 h-4" />
                Source Code
              </motion.a>
            )}
          </div>
        </div>
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
      <AnimatedSection className="text-center mb-16">
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

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto space-y-8">
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
