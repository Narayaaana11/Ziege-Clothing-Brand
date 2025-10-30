import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const EnhancedHeroEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.querySelector('.hero-section');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dynamic Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 0.3 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 0.25 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-secondary/30 via-secondary/10 to-transparent rounded-full blur-3xl"
        style={{
          transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`,
        }}
      />

      {/* Animated Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5,
            }}
            className="absolute h-px w-full"
            style={{
              top: `${20 + i * 15}%`,
              background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${0.1 - i * 0.015}), transparent)`,
              transformOrigin: 'left',
            }}
          />
        ))}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-0 right-0 w-16 h-0.5 bg-gradient-to-l from-secondary to-transparent" />
        <div className="absolute top-0 right-0 w-0.5 h-16 bg-gradient-to-b from-secondary to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-accent to-transparent" />
        <div className="absolute bottom-0 left-0 w-0.5 h-16 bg-gradient-to-t from-accent to-transparent" />
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute bottom-0 right-0 w-0.5 h-16 bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -100],
            x: [0, (i % 2 === 0 ? 1 : -1) * 30],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
            backgroundColor: i % 3 === 0 
              ? 'hsl(var(--primary))' 
              : i % 3 === 1 
              ? 'hsl(var(--secondary))' 
              : 'hsl(var(--accent))',
          }}
        />
      ))}
    </div>
  );
};
