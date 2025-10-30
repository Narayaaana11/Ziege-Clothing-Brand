import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating corner accents */}
      <div className="absolute top-20 left-20 w-16 h-16 border-l-2 border-t-2 border-primary/20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border-r-2 border-b-2 border-secondary/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary text-primary neon-glow animate-pulse">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black gradient-text">
            MONSTER DROPS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Unleash your dark side with our latest monster-inspired streetwear collection
          </p>
        </AnimatedSection>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <AnimatedSection 
              key={product.id}
              animation="fade-up"
              delay={index * 100}
              className="w-full"
            >
              <ProductCard {...product} />
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection className="text-center mt-12" animation="fade-in" delay={400}>
          <Link to="/shop">
            <Button variant="hero" size="lg" className="group text-lg px-8 py-4">
              View All Products
              <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProducts;