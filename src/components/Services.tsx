import { services } from "@/data/content";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  LayoutDashboard,
  Code,
  Bug,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

// Map icon names from content to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Code,
  Bug,
  Wrench,
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

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
          Services
        </motion.span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-white">What I </span>
          <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Offer
          </span>
        </h2>

        <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Comprehensive web development and design services tailored to your
          specific needs.
        </p>
      </motion.div>

      {/* Service Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] || Code;

          return (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: smoothEase,
                  },
                },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div>
                  <p className="text-white/70 text-sm font-semibold mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1.5">
                    {service.keyFeatures.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-white/50 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 0.4 + index * 0.1 + i * 0.05,
                          duration: 0.4,
                          ease: smoothEase,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]/60 shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subtle border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-[#5227FF]/0 group-hover:border-[#5227FF]/30 transition-all duration-500 pointer-events-none"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
