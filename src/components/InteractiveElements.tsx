import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const InteractiveOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Mouse follower orb */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Floating orbs with parallax */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-float opacity-60" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export const GlitchOverlay = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 8000 + Math.random() * 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "fixed inset-0 pointer-events-none transition-opacity duration-100",
      isGlitching ? "opacity-100" : "opacity-0"
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-glitch-1" />
      <div className="absolute inset-0 bg-gradient-to-l from-accent/10 via-transparent to-primary/10 animate-glitch-2" />
    </div>
  );
};

export const CyberGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Scanning lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};