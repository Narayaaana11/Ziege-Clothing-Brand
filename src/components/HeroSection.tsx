import { Button } from "@/components/ui/button";
import { EnhancedHeroEffects } from "@/components/EnhancedHeroEffects";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
// import heroBackground from "@/assets/hero-background.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InteractiveHeroElements } from "@/components/InteractiveHeroElements";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section scan-lines">
      {/* Background Image with Overlay
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,128,0.15),transparent_70%)]" />
      </div> */}

      {/* Enhanced Effects */}
      <EnhancedHeroEffects />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Enhanced Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm shimmer"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-rajdhani font-semibold tracking-wide text-primary">
              AI-Powered Custom Designs
            </span>
          </motion.div>

          {/* Hero Title with Glitch Effect */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glitch mb-6 text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl xl:text-8xl text-glow"
            data-text="ZIEGE"
          >
            <span className="gradient-text">ZIEGE</span>
            <br />
            <span className="text-foreground">INNER MONSTER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground font-rajdhani font-medium md:text-xl"
          >
            Cyberpunk streetwear meets AI customization. Create unique designs that express your digital rebellion.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <MagneticButton strength={0.2}>
              <Link to="/shop">
                <Button size="lg" variant="hero" className="w-full sm:w-auto group hover-lift shimmer">
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link to="/ai-studio">
                <Button size="lg" variant="cyber" className="w-full sm:w-auto group hover-lift shimmer">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Design with AI
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Features */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 max-w-4xl mx-auto px-4 sm:px-0">
              <div className="text-center space-y-3 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto neon-glow group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-lg sm:text-xl">AI Custom Designs</h3>
                <p className="text-muted-foreground text-sm sm:text-base font-rajdhani leading-relaxed">
                  Generate unique monster-inspired designs with our AI studio
                </p>
              </div>
              <div className="text-center space-y-3 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto cyber-glow group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
                </div>
                <h3 className="font-orbitron font-bold text-lg sm:text-xl">Premium Quality</h3>
                <p className="text-muted-foreground text-sm sm:text-base font-rajdhani leading-relaxed">
                  High-quality streetwear crafted for the modern monster
                </p>
              </div>
              <div className="text-center space-y-3 group sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto animate-pulse-neon group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </div>
                <h3 className="font-orbitron font-bold text-lg sm:text-xl">Limited Drops</h3>
                <p className="text-muted-foreground text-sm sm:text-base font-rajdhani leading-relaxed">
                  Exclusive releases that sell out fast - join the hunt
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Interactive Hero Elements */}
      <InteractiveHeroElements />

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full animate-float blur-xl opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-secondary rounded-full animate-float blur-xl opacity-25" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-accent rounded-full animate-float blur-xl opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/5 rounded-full animate-pulse-neon blur-2xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-secondary/5 rounded-full animate-pulse-neon blur-2xl" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Interactive Light Beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Dynamic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/5 right-1/5 w-3 h-3 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/5 left-2/3 w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '6s' }}></div>
      </div>
      
      {/* Interactive Holographic Grid Overlay - responds to hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,128,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,255,255,0.05)_180deg,transparent_360deg)] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
    </section>
  );
};

export default HeroSection;