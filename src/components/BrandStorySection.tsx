import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Target, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "AI-Powered Innovation",
    description: "We harness cutting-edge AI to democratize fashion design"
  },
  {
    icon: Target,
    title: "Precision Craftsmanship",
    description: "Every piece is meticulously crafted for the digital generation"
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Our monsters are family - we grow together, create together"
  },
  {
    icon: Zap,
    title: "Future Forward",
    description: "Pushing boundaries between technology and wearable art"
  }
];

export const BrandStorySection = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-6">
              <Badge variant="outline" className="border-secondary/30 text-secondary bg-secondary/10">
                OUR STORY
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                BORN FROM THE{" "}
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  DIGITAL UNDERGROUND
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In a world where conformity reigns, we saw a different path. Akuma emerged from the digital underground, 
                  where creators, rebels, and visionaries gather to push the boundaries of what's possible.
                </p>
                <p>
                  We believe that everyone has an inner monster waiting to be unleashed - a unique creative force that 
                  deserves to be expressed through what they wear. That's why we built the first AI-powered fashion platform 
                  that turns your wildest ideas into wearable reality.
                </p>
                <p>
                  Every thread tells a story. Every design breaks a rule. Every piece is a statement that says: 
                  <strong className="text-primary"> "I am not like everyone else."</strong>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Button variant="hero" size="lg">
                  Join the Movement
                </Button>
                <Button variant="outline" size="lg">
                  Our Manifesto
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Values Grid */}
          <AnimatedSection animation="slide-left" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                What Drives Us
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className={`group cursor-pointer transition-all duration-300 border-border/50 bg-background/30 backdrop-blur-sm hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 ${
                      hoveredValue === index ? 'scale-105 border-secondary' : ''
                    }`}
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                          <value.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">2024</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground">Vision</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Quote Section */}
        <AnimatedSection animation="fade-in" delay={600} className="mt-20">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground/90 leading-relaxed">
              "Fashion is not just about what you wear. It's about who you choose to become."
            </blockquote>
            <cite className="block mt-4 text-lg text-secondary font-medium">
              — The Akuma Collective
            </cite>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};