import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Palette, Shirt, Zap, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Brain,
    title: "Describe Your Vision",
    description: "Tell our AI what you want - mood, style, colors, or even upload inspiration images",
    details: "Our advanced AI understands natural language and visual cues to capture your exact vision",
    color: "primary"
  },
  {
    id: 2,
    icon: Sparkles,
    title: "AI Magic Happens",
    description: "Watch as our AI generates unique designs tailored to your preferences in real-time",
    details: "Powered by cutting-edge machine learning, creating millions of unique combinations",
    color: "secondary"
  },
  {
    id: 3,
    icon: Palette,
    title: "Customize & Perfect",
    description: "Fine-tune colors, adjust elements, and make it perfectly yours with our editing tools",
    details: "Professional-grade customization tools put you in complete control of the final design",
    color: "accent"
  },
  {
    id: 4,
    icon: Shirt,
    title: "Premium Production",
    description: "We craft your design on premium materials and ship it directly to your door",
    details: "Each piece is made to order using sustainable practices and premium quality materials",
    color: "yellow-400"
  }
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            FROM IDEA TO REALITY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered design process makes creating custom clothing as easy as describing your vision
          </p>
        </AnimatedSection>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={step.id}
                  animation="fade-up"
                  delay={index * 200}
                  className="relative"
                >
                  <Card 
                    className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-border/50 bg-background/50 backdrop-blur-sm hover:border-${step.color}/50 hover:shadow-lg hover:shadow-${step.color}/10 ${
                      activeStep === step.id ? `border-${step.color} shadow-lg shadow-${step.color}/20` : ''
                    }`}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Step Number */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-${step.color} text-black text-sm font-bold flex items-center justify-center group-hover:animate-pulse`}>
                        {step.id}
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color}/10 mb-4 group-hover:bg-${step.color}/20 transition-colors duration-300`}>
                        <step.icon className={`w-8 h-8 text-${step.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Expandable Details */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeStep === step.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className={`text-sm text-${step.color} font-medium`}>
                          {step.details}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/50 animate-pulse" />
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.id}
              animation="slide-left"
              delay={index * 150}
            >
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${step.color}/10 flex items-center justify-center`}>
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-6 h-6 rounded-full bg-${step.color} text-black text-sm font-bold flex items-center justify-center`}>
                          {step.id}
                        </span>
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <p className={`text-sm text-${step.color} font-medium`}>{step.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16" delay={800}>
          <Button variant="hero" size="lg" className="group">
            Start Creating Now
            <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};