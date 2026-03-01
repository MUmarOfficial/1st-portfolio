import { useForm } from "react-hook-form";
import { motion, type Variants } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

function getButtonStyle(status: SubmitStatus): string {
  switch (status) {
    case "success":
      return "bg-green-600/30 border border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.2)]";
    case "error":
      return "bg-red-600/30 border border-red-500/40";
    default:
      return "bg-[#5227FF]/20 border border-[#5227FF]/40 hover:bg-[#5227FF]/40 hover:border-[#5227FF]/60 hover:shadow-[0_0_30px_rgba(82,39,255,0.4)]";
  }
}

function renderButtonContent(status: SubmitStatus) {
  switch (status) {
    case "sending":
      return (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Sending...
        </>
      );
    case "success":
      return (
        <>
          <CheckCircle className="w-5 h-5" />
          Message Sent!
        </>
      );
    case "error":
      return (
        <>
          <AlertCircle className="w-5 h-5" />
          Failed. Try Again
        </>
      );
    default:
      return (
        <>
          <Send className="w-5 h-5" />
          Send Message
        </>
      );
  }
}

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const inputBaseClasses =
    "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[#5227FF]/60 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(82,39,255,0.15)]";

  const errorClasses = "border-red-500/50 focus:border-red-500/70";

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-5"
      noValidate
    >
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div variants={fieldVariants}>
          <label
            htmlFor="name"
            className="block text-white/70 text-sm font-medium mb-2"
          >
            Full Name <span className="text-[#a78bfa]">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={`${inputBaseClasses} ${errors.name ? errorClasses : ""}`}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
              maxLength: { value: 50, message: "Name must be under 50 characters" },
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message: "Name can only contain letters, spaces, hyphens and apostrophes",
              },
            })}
          />
          {errors.name && (
            <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label
            htmlFor="email"
            className="block text-white/70 text-sm font-medium mb-2"
          >
            Email Address <span className="text-[#a78bfa]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={`${inputBaseClasses} ${errors.email ? errorClasses : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </motion.div>
      </div>

      {/* Phone & Subject Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div variants={fieldVariants}>
          <label
            htmlFor="phone"
            className="block text-white/70 text-sm font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+92 300 1234567"
            className={`${inputBaseClasses} ${errors.phone ? errorClasses : ""}`}
            {...register("phone", {
              pattern: {
                value: /^[+]?[\d\s()-]{7,20}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label
            htmlFor="subject"
            className="block text-white/70 text-sm font-medium mb-2"
          >
            Subject <span className="text-[#a78bfa]">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project Collaboration"
            className={`${inputBaseClasses} ${errors.subject ? errorClasses : ""}`}
            {...register("subject", {
              required: "Subject is required",
              minLength: { value: 3, message: "Subject must be at least 3 characters" },
              maxLength: { value: 100, message: "Subject must be under 100 characters" },
            })}
          />
          {errors.subject && (
            <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject.message}
            </p>
          )}
        </motion.div>
      </div>

      {/* Message */}
      <motion.div variants={fieldVariants}>
        <label
          htmlFor="message"
          className="block text-white/70 text-sm font-medium mb-2"
        >
          Message <span className="text-[#a78bfa]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project or idea..."
          className={`${inputBaseClasses} resize-none ${errors.message ? errorClasses : ""}`}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
            maxLength: { value: 1000, message: "Message must be under 1000 characters" },
          })}
        />
        {errors.message && (
          <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message.message}
          </p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fieldVariants} className="pt-2">
        <motion.button
          type="submit"
          disabled={isSubmitting || submitStatus === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-medium text-white transition-all duration-300 cursor-pointer
            ${getButtonStyle(submitStatus)}
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {renderButtonContent(submitStatus)}
        </motion.button>
      </motion.div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-sm text-center sm:text-left"
        >
          Thank you! Your message has been sent successfully. I'll get back to
          you soon.
        </motion.p>
      )}
      {submitStatus === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm text-center sm:text-left"
        >
          Something went wrong. Please try again or reach out directly via
          email.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
