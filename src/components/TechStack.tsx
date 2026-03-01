import { techStack } from "@/data/content";
import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2 } from "lucide-react";

// Map tool names to logo filenames in /Logos/
const logoMap: Record<string, string> = {
  HTML5: "html5.webp",
  CSS3: "css3.webp",
  JavaScript: "javascript.webp",
  TypeScript: "typescript.webp",
  React: "react.webp",
  "Tailwind CSS": "tailwindcss.webp",
  "Shadcn/UI": "shadcnui.webp",
  DaisyUI: "daisyui.webp",
  MUI: "mui.webp",
  Bootstrap: "bootstrap.webp",
  "Framer Motion": "framer-motion.webp",
  Redux: "redux.webp",
  "Context API": "context-api.webp",
  "React Router": "react-router.webp",
  "React Hook Form": "react-hook-form.webp",
  Playwright: "playwright.webp",
  Vitest: "vitest.webp",
  "Testing Library": "testing-library.webp",
  Git: "git.webp",
  GitHub: "github.webp",
  "GitHub Actions": "github-actions.webp",
  Vercel: "vercel.webp",
  Netlify: "netlify.webp",
  sonarqube: "sonarqube.webp",
  Cloudflare: "cloudflare.webp",
  Ubuntu: "ubuntu.webp",
  Linux: "linux.webp",
  Prettier: "prettier.webp",
  eslint: "eslint.webp",
  Vite: "vite.webp",
  NPM: "npm.webp",
  Figma: "figma.webp",
  Canva: "canva.webp",
  Groq: "groq.svg",
  "Google GenAI": "google-genai.svg",
  Anthropic: "anthropic.svg",
  OpenAI: "openai.svg",
  xAI: "xai.svg",
};

const rotatingWords = ["Learn", "Adapt", "Improve", "Build", "Ship"];

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const categoryTitleVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const toolItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

// Animated category row with scroll-triggered animations
const CategoryRow = ({
  category,
  tools,
}: {
  category: string;
  tools: string[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 items-start"
    >
      {/* Category title — left */}
      <motion.h3
        variants={categoryTitleVariants}
        className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white/90 md:pt-2"
      >
        {category}
      </motion.h3>

      {/* Tools grid — right */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {tools.map((tool) => {
          const logo = logoMap[tool];
          return (
            <motion.div
              key={tool}
              variants={toolItemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/6 hover:border-[#5227FF]/30 hover:bg-[#5227FF]/6 transition-colors duration-300 backdrop-blur-sm cursor-default"
            >
              {logo && (
                <img
                  src={`/Logos/${logo}`}
                  alt={tool}
                  className="w-8 h-8 object-contain shrink-0"
                  loading="lazy"
                />
              )}
              <span className="text-white/80 text-sm sm:text-base font-medium truncate">
                {tool}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-80px" });
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
            Skills
          </span>
        </motion.span>

        {/* Main heading */}
        <motion.div variants={headerVariants} className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-[#a78bfa]" />
            <span className="text-sm sm:text-base font-semibold uppercase tracking-widest text-white/60">
              My Stack
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-mono">
            Skills
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

        {/* Rotating words tagline */}
        <motion.p
          variants={headerVariants}
          className="text-sm sm:text-base font-mono uppercase tracking-[0.3em] text-white/50 flex items-center justify-center gap-2"
        >
          I constantly try to{" "}
          <span className="inline-block w-22 text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-block font-bold text-white"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>
      </motion.div>

      {/* Category rows */}
      <div className="space-y-12">
        {techStack.map(({ category, tools }) => (
          <CategoryRow key={category} category={category} tools={tools} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
