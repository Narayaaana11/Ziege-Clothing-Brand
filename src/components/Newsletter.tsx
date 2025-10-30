import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Zap, Crown } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, this would send the email to your newsletter service
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "Early Access",
      description: "Get first dibs on limited drops",
    },
    {
      icon: Zap,
      title: "AI Studio Beta",
      description: "Test new AI features before anyone else",
    },
    {
      icon: Crown,
      title: "Exclusive Designs",
      description: "Member-only monster collections",
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-secondary/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-secondary/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Mail className="h-3 w-3 mr-2" />
                    Join the Pack
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-orbitron font-black">
                    <span className="gradient-text">UNLEASH</span><br />
                    <span className="text-foreground">THE LATEST</span><br />
                    <span className="glitch gradient-text" data-text="DROPS">DROPS</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
                    Join the Akuma pack and be the first to hunt down our latest 
                    monster-inspired drops, exclusive AI designs, and special releases.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center neon-glow">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground font-rajdhani">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Newsletter Form */}
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email to join the pack..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-input/50 border-border focus:border-primary font-rajdhani"
                        required
                      />
                      <Button 
                        type="submit" 
                        variant="hero" 
                        className="sm:px-8"
                      >
                        Join Pack
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground font-rajdhani">
                      No spam, just monster drops. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="space-y-4 p-6 bg-primary/10 rounded-lg border border-primary/20 neon-glow">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Gift className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-lg text-primary">
                          Welcome to the Pack!
                        </h3>
                        <p className="text-sm text-muted-foreground font-rajdhani">
                          Check your email for your exclusive welcome gift
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Visual Element */}
              <div className="relative bg-gradient-to-br from-primary/20 via-background/50 to-secondary/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="text-8xl font-orbitron font-black text-foreground/10 animate-pulse">
                      AKUMA
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Mail className="h-16 w-16 text-primary animate-float" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-center space-x-2">
                      {["#ff0066", "#00ffff", "#39ff14"].map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full animate-pulse"
                          style={{ 
                            backgroundColor: color,
                            animationDelay: `${index * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-rajdhani">
                      Join 50K+ monsters worldwide
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-secondary/20 rounded-full animate-float blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;