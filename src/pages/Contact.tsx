import { contactDetails, personalInfo } from "@/data/content";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Mail, MapPin, Phone, Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

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
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
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

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    color: "from-[#5227FF] to-[#7c3aed]",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "Let's chat on WhatsApp",
    href: contactDetails.whatsapp,
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactDetails.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactDetails.location)}`,
    color: "from-[#FF6B6B] to-[#ee5a24]",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: contactDetails.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: contactDetails.github,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: contactDetails.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: Download,
    label: "Resume",
    href: "/resume.pdf",
    download: true,
  },
];

const contactMethodVariants = [slideFromLeft, slideFromBottom, slideFromRight];

const Contact = () => {
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
            📬 Let's Connect
          </motion.span>
        </motion.div>
        <motion.h1
          variants={slideFromBottom}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Get in{" "}
          <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h1>
        <motion.p
          variants={slideFromBottom}
          className="text-white/60 max-w-2xl mx-auto text-lg"
        >
          Have a project in mind or just want to say hi? I'd love to hear from
          you. Reach out through any of the channels below.
        </motion.p>
      </AnimatedSection>

      {/* Contact Methods Grid */}
      <AnimatedSection className="max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const isEmail = method.label === "Email";
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={isEmail ? undefined : "_blank"}
                rel="noopener noreferrer"
                variants={contactMethodVariants[index]}
                className="group relative p-6 rounded-2xl border border-white/10 hover:border-[#5227FF]/40 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="p-3 bg-[#5227FF]/10 rounded-xl w-fit mb-4 group-hover:bg-[#5227FF]/20 transition-colors">
                    <method.icon className="w-6 h-6 text-[#a78bfa]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {method.label}
                  </h3>
                  <p className="text-white/60 text-sm break-all">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Contact Form + Social */}
      <AnimatedSection className="max-w-4xl mx-auto">
        <motion.div
          variants={slideFromBottom}
          className="p-6 sm:p-10 lg:p-12 rounded-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Background shimmer */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-[#5227FF]/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <motion.h2
              variants={scaleUp}
              className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center"
            >
              Let's Build Something{" "}
              <span className="text-[#a78bfa]">Together</span>
            </motion.h2>
            <motion.p
              variants={slideFromBottom}
              className="text-white/60 mb-8 max-w-md mx-auto text-center"
            >
              I'm {personalInfo.name}, always open to exciting projects,
              collaborations, and new opportunities.
            </motion.p>

            {/* Contact Form */}
            <ContactForm />

            {/* Social Icons */}
            <motion.div
              variants={containerVariants}
              className="flex justify-center gap-4 mt-10 pt-8 border-t border-white/10"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.download ? undefined : "_blank"}
                  rel={social.download ? undefined : "noopener noreferrer"}
                  download={social.download || undefined}
                  className="group relative p-3 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-xl text-white/70 hover:text-[#5227FF] hover:border-[#5227FF]/40 transition-all"
                  variants={scaleUp}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  {social.download && (
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#5227FF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Floating Decorations */}
      <motion.div
        className="fixed top-1/4 right-10 w-72 h-72 bg-[#5227FF]/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-1/4 left-10 w-64 h-64 bg-[#a78bfa]/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
};

export default Contact;
