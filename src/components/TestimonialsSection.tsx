import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Digital Artist",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "The AI design tool is absolutely mind-blowing. Created the perfect cyberpunk hoodie that matches my aesthetic perfectly.",
    featured: true
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    role: "Streamer",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "Quality is insane! The fabric feels premium and the designs are so unique. Got compliments all night at the gaming convention.",
    featured: false
  },
  {
    id: 3,
    name: "Zara Kim",
    role: "Tech Entrepreneur",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "Finally found clothing that represents my vibe. The limited drops make each piece feel exclusive and special.",
    featured: true
  },
  {
    id: 4,
    name: "Rio Santos",
    role: "Music Producer",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    text: "Akuma isn't just clothing, it's wearable art. The AI customization lets me express my creativity in ways I never imagined.",
    featured: false
  }
];

export const TestimonialsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background cyber-grid" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-pulse">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text relative inline-block">
            WHAT MONSTERS SAY
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who've unleashed their inner monster with our AI-powered designs
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <Card 
                className={`h-full border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden ${
                  testimonial.featured ? 'md:col-span-1 lg:row-span-2' : ''
                } ${hoveredCard === testimonial.id ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                
                <CardContent className="p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_3px_rgba(234,179,8,0.5)]" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground/90 mb-6 flex-grow leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar className="border-2 border-primary/20 group-hover:border-primary/40 transition-colors group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};