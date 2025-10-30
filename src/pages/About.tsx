import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  Users, 
  Target, 
  Palette,
  Cpu,
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Instagram
} from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Alex Shadow",
      role: "Founder & Creative Director",
      bio: "Former streetwear designer turned AI visionary. Obsessed with merging human creativity and machine intelligence.",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Maya Cyber",
      role: "AI Design Lead",
      bio: "PhD in Machine Learning, expert in generative AI. Transforms algorithms into wearable art.",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Rex Digital",
      role: "Head of Product",
      bio: "Streetwear veteran with 10+ years building brands. Bridges the gap between tech and fashion.",
      image: "/api/placeholder/200/200",
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push boundaries by combining cutting-edge AI with authentic streetwear culture.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our monsters are our family. Every design reflects the spirit of our underground community.",
    },
    {
      icon: Target,
      title: "Quality Obsessed",
      description: "Premium materials, ethical production, and attention to every detail define our craft.",
    },
    {
      icon: Palette,
      title: "Artistic Expression",
      description: "Every piece tells a story. We believe fashion is the ultimate canvas for self-expression.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Monsters Worldwide" },
    { number: "1M+", label: "AI Designs Generated" },
    { number: "100+", label: "Limited Drops" },
    { number: "25", label: "Countries Reached" },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 neon-glow">
            <Sparkles className="h-3 w-3 mr-2" />
            About Akuma
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black">
            <span className="gradient-text">UNLEASHING</span><br />
            <span className="glitch gradient-text" data-text="MONSTERS">MONSTERS</span><br />
            <span className="gradient-text">SINCE 2024</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-rajdhani leading-relaxed">
            Born from the fusion of artificial intelligence and street culture, Akuma represents 
            the next evolution of fashion. We're not just a brand—we're a movement that empowers 
            individuals to express their darkest, most creative selves through AI-powered design.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-orbitron font-black text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-rajdhani">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-orbitron font-bold gradient-text">
                Our Monster Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-rajdhani text-lg leading-relaxed">
                <p>
                  In the neon-lit corners of the digital underground, Akuma was born. 
                  We saw a world where creativity was limited by human constraints, 
                  where true artistic expression waited to be unleashed through the 
                  power of artificial intelligence.
                </p>
                <p>
                  Our founders, a collective of streetwear rebels and AI visionaries, 
                  believed that the future of fashion lay not in replacing human creativity, 
                  but in amplifying it. They built Akuma as a platform where anyone could 
                  become a designer, where monsters could be born from imagination and algorithms.
                </p>
                <p>
                  Today, Akuma stands at the forefront of the AI fashion revolution, 
                  empowering a global community of monsters to express their unique 
                  darkness through clothing that tells their story.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-background to-secondary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-orbitron font-black text-muted-foreground/20">
                      AKUMA
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-background/80 backdrop-blur-sm">
                      <Cpu className="h-3 w-3 mr-2" />
                      AI-Powered Design Studio
                    </Badge>
                  </div>
                </div>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-float blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
              The principles that guide every design, every drop, and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto neon-glow">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-orbitron font-bold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">
              Meet the Monsters
            </h2>
            <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
              The visionaries behind Akuma's dark magic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-orbitron font-black text-muted-foreground/50">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-lg mb-1">{member.name}</h3>
                    <Badge variant="outline" className="text-xs mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join the Movement */}
        <section className="text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon max-w-4xl mx-auto">
            <CardContent className="p-12 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                  <Users className="h-3 w-3 mr-2" />
                  Join the Pack
                </Badge>
                <h2 className="text-3xl font-orbitron font-bold gradient-text">
                  Ready to Unleash Your Monster?
                </h2>
                <p className="text-xl text-muted-foreground font-rajdhani leading-relaxed max-w-2xl mx-auto">
                  Whether you're a designer, developer, or just someone who believes in the 
                  power of creative expression, there's a place for you in the Akuma universe.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  <Zap className="h-5 w-5 mr-2" />
                  Start Creating
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>

              <Separator className="bg-border/50" />

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Follow our journey
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;