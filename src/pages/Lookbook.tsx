import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Lookbook = () => {
  const [selectedSeason, setSelectedSeason] = useState("fw2025");

  const collections = [
    {
      id: "fw2025",
      title: "Fall/Winter 2025",
      subtitle: "URBAN SHADOWS",
      description: "Dark aesthetics meet street culture in our boldest collection yet.",
      hero: "/assets/products/monster-hoodie-black.jpg",
      looks: [
        {
          id: 1,
          title: "Night Stalker",
          image: "/assets/products/monster-hoodie-black.jpg",
          products: ["Monster Hoodie Black", "Tech Cargo Gray"],
          price: "$218"
        },
        {
          id: 2,
          title: "Neon Nights",
          image: "/assets/products/neon-bomber-black.jpg",
          products: ["Neon Bomber Jacket", "Cyber Tee"],
          price: "$247"
        },
        {
          id: 3,
          title: "Street Beast",
          image: "/assets/products/monster-hoodie-red.jpg",
          products: ["Monster Hoodie Red", "Monster Cap"],
          price: "$143"
        },
        {
          id: 4,
          title: "Tech Warrior",
          image: "/assets/products/cyber-tee-white.jpg",
          products: ["Cyber Tee White", "Tech Cargo"],
          price: "$127"
        }
      ]
    }
  ];

  const selectedCollection = collections.find(c => c.id === selectedSeason);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${selectedCollection?.hero})` }}
        />
        
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <AnimatedSection className="text-center space-y-6">
            <Badge variant="outline" className="border-primary text-primary neon-glow">
              Lookbook
            </Badge>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black gradient-text">
              {selectedCollection?.title}
            </h1>
            <p className="text-2xl md:text-3xl font-orbitron text-muted-foreground">
              {selectedCollection?.subtitle}
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              {selectedCollection?.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Looks Grid */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-orbitron font-black gradient-text mb-4">
              COMPLETE THE LOOK
            </h2>
            <p className="text-muted-foreground font-rajdhani text-lg">
              Curated outfits from our latest collection
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedCollection?.looks.map((look, index) => (
              <AnimatedSection 
                key={look.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button variant="hero" size="lg" asChild>
                        <Link to="/shop">
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Shop Look
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Look Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                      <h3 className="text-2xl font-orbitron font-bold text-white">
                        {look.title}
                      </h3>
                      <div className="space-y-1">
                        {look.products.map((product, idx) => (
                          <p key={idx} className="text-white/80 font-rajdhani text-sm">
                            • {product}
                          </p>
                        ))}
                      </div>
                      <p className="text-xl font-orbitron font-bold text-primary">
                        {look.price}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                <Eye className="h-5 w-5 mr-2" />
                View Full Collection
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-orbitron font-black gradient-text mb-4">
              BEHIND THE SCENES
            </h2>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-dark flex items-center justify-center">
                <p className="text-muted-foreground font-rajdhani text-xl">
                  Campaign Video Coming Soon
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
