import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MessageSquare, Download } from "lucide-react";
import { Link } from "react-router";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const ContactCTA = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
        >
            {/* Background glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#5227FF]/8 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="relative max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: smoothEase }}
            >
                {/* Badge */}
                <motion.span
                    className="inline-block px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/20 rounded-full text-[#a78bfa] text-xs sm:text-sm font-medium backdrop-blur-md mb-6 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.5, ease: smoothEase }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Mail className="w-3.5 h-3.5 inline-block mr-2 -mt-0.5" />
                    Get In Touch
                </motion.span>

                {/* Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.7, ease: smoothEase }}
                >
                    <span className="text-white">Let's </span>
                    <span className="bg-linear-to-r from-[#5227FF] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
                        Work Together
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-white/50 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6, ease: smoothEase }}
                >
                    Have a project in mind or want to discuss an idea? I'd love to hear
                    from you. Let's build something amazing together.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6, ease: smoothEase }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/contact"
                            className="relative px-8 py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-md border overflow-hidden inline-flex items-center gap-2 cursor-pointer bg-[#5227FF]/20 border-[#5227FF]/40 text-white hover:bg-[#5227FF]/40 hover:border-[#5227FF]/60 hover:shadow-[0_0_30px_rgba(82,39,255,0.4)]"
                        >
                            <MessageSquare className="w-4 h-4" />
                            Contact Me
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.span>
                        </Link>
                    </motion.div>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative p-4 rounded-xl bg-white/5 border border-white/20 text-white/90 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 backdrop-blur-md cursor-pointer"
                    >
                        <Download className="w-5 h-5" />
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#5227FF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Resume
                        </span>
                    </motion.a>
                </motion.div>

                {/* Decorative floating dots */}
                <motion.div
                    className="absolute top-10 left-10 w-2 h-2 bg-[#5227FF]/40 rounded-full hidden lg:block"
                    animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-3 h-3 bg-[#a78bfa]/30 rounded-full hidden lg:block"
                    animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-[#7c3aed]/50 rounded-full hidden lg:block"
                    animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
            </motion.div>
        </section>
    );
};

export default ContactCTA;
