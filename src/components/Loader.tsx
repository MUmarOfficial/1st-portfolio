import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated rings */}
        <div className="relative h-24 w-24">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Spinning gradient ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, #7c3aed 30%, #a855f7 50%, #7c3aed 70%, transparent 100%)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner pulsing dot */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated text */}
        <div className="flex items-center gap-1">
          {"Loading".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-sm font-medium tracking-widest text-purple-300/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            >
              {letter}
            </motion.span>
          ))}

          {/* Animated dots */}
          <div className="flex gap-0.5 ml-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1 w-1 rounded-full bg-purple-400/80"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle background glow */}
        <motion.div
          className="absolute -z-10 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
