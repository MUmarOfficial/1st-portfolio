import { personalInfo, techStack, education, certifications, contactDetails } from "@/data/content";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Award, ExternalLink, ArrowLeft, User, MapPin, Mail } from "lucide-react";
import { Link } from "react-router";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

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

const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
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

      {/* Personal Info Card */}
      <AnimatedSection className="max-w-4xl mx-auto mb-12">
        <motion.div
          variants={rotateIn}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#5227FF]/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#5227FF]/20 rounded-lg">
              <User className="w-6 h-6 text-[#a78bfa]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Personal Info
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                {personalInfo.intro}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-[#a78bfa]" />
                <span>{contactDetails.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-[#a78bfa]" />
                <span>{contactDetails.email}</span>
              </div>
              <div className="flex gap-4 mt-4">
                <motion.a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <AnimatedSection>
          <motion.div
            variants={slideFromLeft}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#5227FF]/30 transition-all duration-500 h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5227FF]/20 rounded-lg">
                <Code2 className="w-6 h-6 text-[#a78bfa]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Tech Stack
              </h3>
            </div>
            <div className="space-y-6">
              {techStack.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h4 className="text-white/80 font-medium text-sm mb-3 uppercase tracking-wider">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-lg text-white/80 hover:bg-[#5227FF]/20 hover:text-white transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.1 + toolIndex * 0.03 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Education & Certifications */}
        <div className="space-y-8">
          {/* Education */}
          <AnimatedSection>
            <motion.div
              variants={slideFromRight}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#5227FF]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#5227FF]/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    className="relative pl-6 border-l-2 border-[#5227FF]/30 hover:border-[#5227FF] transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-[#5227FF] rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <h4 className="text-white font-semibold">{edu.degree}</h4>
                    <p className="text-white/60 text-sm">{edu.institution}</p>
                    <p className="text-[#a78bfa] text-xs mt-1">
                      {edu.start} {edu.completed ? `- ${edu.completed}` : "- Present"}
                      {edu.grade && ` • Grade: ${edu.grade}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection>
            <motion.div
              variants={slideFromBottom}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#5227FF]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#5227FF]/20 rounded-lg">
                  <Award className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-[#5227FF]/10 hover:border-[#5227FF]/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {cert.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#5227FF] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

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
