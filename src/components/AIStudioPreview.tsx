import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Palette, 
  Upload, 
  Download,
  Wand2
} from "lucide-react";
import { Link } from "react-router-dom";

const AIStudioPreview = () => {
  const designExamples = [
    {
      prompt: "Cyberpunk dragon with neon wings",
      style: "Streetwear",
      colors: ["#ff0066", "#00ffff"],
    },
    {
      prompt: "Glitch monster with digital distortion",
      style: "Minimalist",
      colors: ["#39ff14", "#000000"],
    },
    {
      prompt: "Abstract demon silhouette",
      style: "Gothic",
      colors: ["#ff0066", "#660066"],
    },
  ];

  const features = [
    {
      icon: Wand2,
      title: "AI Generation",
      description: "Describe your vision and watch AI create unique monster designs",
    },
    {
      icon: Palette,
      title: "Color Customization",
      description: "Pick your perfect color scheme from our cyberpunk palette",
    },
    {
      icon: Upload,
      title: "Image Upload",
      description: "Upload your own artwork and let AI transform it into streetwear",
    },
    {
      icon: Download,
      title: "Instant Mockups",
      description: "See your design on hoodies, tees, and jackets in real-time",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-secondary text-secondary cyber-glow">
                <Zap className="h-3 w-3 mr-2" />
                AI Studio
              </Badge>
              <h2 className="text-4xl md:text-6xl font-orbitron font-black">
                <span className="gradient-text">DESIGN</span><br />
                <span className="text-foreground">YOUR</span><br />
                <span className="glitch gradient-text" data-text="MONSTER">MONSTER</span>
              </h2>
              <p className="text-xl text-muted-foreground font-rajdhani leading-relaxed">
                Unleash your creativity with our AI-powered design studio. 
                Transform your darkest visions into wearable art with cutting-edge 
                artificial intelligence.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center neon-glow">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-orbitron font-bold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-rajdhani pl-13">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-studio">
                <Button variant="cyber" size="lg" className="group">
                  <Sparkles className="h-5 w-5" />
                  Try AI Studio
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="neon" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Side - AI Studio Mockup */}
          <div className="space-y-6">
            {/* Main Studio Interface */}
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-orbitron font-bold text-lg">AI Design Studio</h3>
                  <Badge className="bg-primary text-primary-foreground animate-pulse">
                    LIVE
                  </Badge>
                </div>

                {/* Prompt Input */}
                <div className="space-y-3">
                  <label className="text-sm font-rajdhani font-medium text-muted-foreground">
                    Describe your monster design:
                  </label>
                  <div className="relative">
                    <div className="bg-input border border-border rounded-lg p-4 min-h-[80px] text-sm font-rajdhani">
                      <span className="text-primary animate-pulse">|</span>
                      <span className="text-muted-foreground">
                        A fierce cyberpunk dragon with glowing neon scales and digital wings...
                      </span>
                    </div>
                  </div>
                </div>

                {/* Style & Color Options */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-medium text-muted-foreground">
                      Style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Gothic", "Cyber", "Minimal"].map((style) => (
                        <Badge 
                          key={style}
                          variant={style === "Cyber" ? "default" : "outline"}
                          className="cursor-pointer"
                        >
                          {style}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-rajdhani font-medium text-muted-foreground">
                      Colors
                    </label>
                    <div className="flex gap-2">
                      {["#ff0066", "#00ffff", "#39ff14", "#000000"].map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-lg border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button variant="glitch" className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate Design
                </Button>
              </CardContent>
            </Card>

            {/* Design Examples */}
            <div className="grid grid-cols-1 gap-4">
              <h4 className="font-orbitron font-bold text-lg text-center">Recent Creations</h4>
              {designExamples.map((example, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-rajdhani font-medium mb-1">
                        "{example.prompt}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-xs">
                          {example.style}
                        </Badge>
                        <div className="flex gap-1">
                          {example.colors.map((color, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="hover:text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudioPreview;