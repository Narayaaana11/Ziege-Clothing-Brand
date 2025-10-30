import { motion } from "framer-motion";

export const FloatingElements = () => {
  return (
    <>
      {/* Animated vertical lines */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-1/4 left-4 w-[2px] h-16 bg-gradient-to-b from-primary/30 to-transparent rounded-full pointer-events-none z-50"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed top-1/2 right-4 w-[2px] h-12 bg-gradient-to-b from-secondary/30 to-transparent rounded-full pointer-events-none z-50"
      />
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed bottom-1/4 left-8 w-[1px] h-8 bg-gradient-to-t from-accent/30 to-transparent rounded-full pointer-events-none z-50"
      />

      {/* Floating corner accents */}
      <motion.div
        animate={{ 
          rotate: [0, 90, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed top-20 right-20 w-16 h-16 border-r border-t border-primary/20 pointer-events-none z-50"
      />
      
      <motion.div
        animate={{ 
          rotate: [0, -90, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed bottom-20 left-20 w-16 h-16 border-l border-b border-secondary/20 pointer-events-none z-50"
      />
    </>
  );
};
