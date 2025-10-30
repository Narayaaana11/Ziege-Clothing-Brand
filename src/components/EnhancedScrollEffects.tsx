import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/50 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-sm" />
    </div>
  );
};

export const ParallaxContainer = ({ 
  children, 
  speed = 0.5,
  className 
}: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div 
      className={cn("transform transition-transform", className)}
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {children}
    </div>
  );
};

export const ScrollRevealSection = ({ 
  children, 
  className,
  delay = 0 
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-scroll-reveal="${delay}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      data-scroll-reveal={delay}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-16 scale-95",
        className
      )}
    >
      {children}
    </div>
  );
};