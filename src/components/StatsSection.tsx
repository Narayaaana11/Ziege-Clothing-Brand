import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TrendingUp, Users, Palette, Zap } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  {
    icon: Users,
    label: "Active Monsters",
    value: 50000,
    suffix: "+",
    color: "text-primary"
  },
  {
    icon: Palette,
    label: "AI Designs Created",
    value: 250000,
    suffix: "+",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    label: "Satisfaction Rate",
    value: 98,
    suffix: "%",
    color: "text-accent"
  },
  {
    icon: Zap,
    label: "Design Speed",
    value: 30,
    suffix: "s",
    color: "text-yellow-400"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">ACHIEVEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            NUMBERS THAT MATTER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our community of digital rebels continues to grow and create amazing things together
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 150}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-background to-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:animate-pulse`} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      <AnimatedCounter 
                        end={stat.value} 
                        duration={2000}
                        suffix={stat.suffix}
                        className={stat.color}
                      />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Visual Elements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="slide-right" delay={600}>
            <div className="text-center p-6">
              <div className="text-2xl font-bold text-primary mb-2">Lightning Fast</div>
              <div className="text-muted-foreground">AI designs generated in seconds, not hours</div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={700}>
            <div className="text-center p-6">
              <div className="text-2xl font-bold text-secondary mb-2">Premium Quality</div>
              <div className="text-muted-foreground">Each piece crafted with attention to detail</div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-left" delay={800}>
            <div className="text-center p-6">
              <div className="text-2xl font-bold text-accent mb-2">Exclusive Drops</div>
              <div className="text-muted-foreground">Limited editions that sell out fast</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};