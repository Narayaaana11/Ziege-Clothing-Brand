import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      
      {/* Center glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Animated dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="w-2 h-2 rounded-full bg-primary animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
