import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const InteractiveHeroElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clickRipples, setClickRipples] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100, 
          y: ((e.clientY - rect.top) / rect.height) * 100 
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-section')?.getBoundingClientRect();
      if (rect) {
        const newRipple = {
          id: Date.now(),
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
          timestamp: Date.now()
        };
        setClickRipples(prev => [...prev, newRipple]);
        
        // Remove ripple after animation
        setTimeout(() => {
          setClickRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 2000);
      }
    };

    const heroElement = document.querySelector('.hero-section');
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('click', handleClick);
      heroElement.addEventListener('mouseenter', () => setIsHovering(true));
      heroElement.addEventListener('mouseleave', () => setIsHovering(false));

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('click', handleClick);
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false));
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Interactive Light Beams that follow mouse */}
      <div 
        className={cn(
          "absolute w-px h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent transition-all duration-300",
          isHovering ? "opacity-100" : "opacity-30"
        )}
        style={{ 
          left: `${mousePosition.x}%`,
          transform: 'translateX(-50%)',
          filter: isHovering ? 'blur(0px)' : 'blur(2px)'
        }}
      />
      <div 
        className={cn(
          "absolute w-full h-px bg-gradient-to-r from-secondary/40 via-secondary/20 to-transparent transition-all duration-300",
          isHovering ? "opacity-100" : "opacity-30"
        )}
        style={{ 
          top: `${mousePosition.y}%`,
          transform: 'translateY(-50%)',
          filter: isHovering ? 'blur(0px)' : 'blur(2px)'
        }}
      />

      {/* Click Ripple Effects */}
      {clickRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-primary/50 animate-ping"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
            animationDuration: '2s'
          }}
        />
      ))}

      {/* Hover-activated Energy Pulses */}
      {isHovering && (
        <>
          <div 
            className="absolute w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-gradient-radial from-secondary/10 to-transparent rounded-full animate-pulse"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: '0.5s'
            }}
          />
        </>
      )}

      {/* Interactive Grid Lines */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-500",
        isHovering ? "opacity-30" : "opacity-10"
      )}>
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(52, 211, 153, ${isHovering ? 0.1 : 0.03}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 211, 153, ${isHovering ? 0.1 : 0.03}) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: `${mousePosition.x / 10}px ${mousePosition.y / 10}px`
        }} />
      </div>

      {/* Interactive Floating Orbs */}
      <div 
        className={cn(
          "absolute w-6 h-6 bg-primary/40 rounded-full blur-sm transition-all duration-500",
          isHovering ? "animate-bounce-gentle scale-150" : "animate-float scale-100"
        )}
        style={{
          left: `${20 + mousePosition.x * 0.1}%`,
          top: `${30 + mousePosition.y * 0.1}%`
        }}
      />
      <div 
        className={cn(
          "absolute w-4 h-4 bg-secondary/40 rounded-full blur-sm transition-all duration-700",
          isHovering ? "animate-bounce-gentle scale-150" : "animate-float scale-100"
        )}
        style={{
          left: `${70 - mousePosition.x * 0.1}%`,
          top: `${60 - mousePosition.y * 0.1}%`,
          animationDelay: '1s'
        }}
      />
      <div 
        className={cn(
          "absolute w-5 h-5 bg-accent/40 rounded-full blur-sm transition-all duration-600",
          isHovering ? "animate-bounce-gentle scale-150" : "animate-float scale-100"
        )}
        style={{
          left: `${40 + mousePosition.x * 0.05}%`,
          top: `${80 - mousePosition.y * 0.15}%`,
          animationDelay: '2s'
        }}
      />
    </div>
  );
};