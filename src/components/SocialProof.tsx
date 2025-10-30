import { useState, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Badge } from "./ui/badge";
import { Star, Users, TrendingUp, Award } from "lucide-react";

const socialProofData = [
  { icon: Users, value: "50K+", label: "Happy Customers", color: "text-primary" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "text-yellow-400" },
  { icon: TrendingUp, value: "95%", label: "Customer Satisfaction", color: "text-green-400" },
  { icon: Award, value: "100+", label: "Design Awards", color: "text-purple-400" }
];

const liveStats = [
  "🔥 Sarah just bought Monster Hoodie in Tokyo",
  "⚡ Mike customized his AI design in New York", 
  "💎 Emma purchased Cyber Tee in London",
  "🎨 Alex created unique design in Berlin",
  "🚀 Lisa ordered Neon Bomber in Paris"
];

const SocialProof = () => {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % liveStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Live Activity Feed */}
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="border-primary/20 bg-primary/5 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
            Live Activity
          </Badge>
          <div className="h-8 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentStat * 32}px)` }}
            >
              {liveStats.map((stat, index) => (
                <p 
                  key={index} 
                  className="h-8 flex items-center justify-center text-sm text-muted-foreground"
                >
                  {stat}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialProofData.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 100}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                {item.value}
              </h3>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimatedSection className="mt-16 text-center" delay={400}>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs">✓</span>
              </div>
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">🚚</span>
              </div>
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">↩</span>
              </div>
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialProof;