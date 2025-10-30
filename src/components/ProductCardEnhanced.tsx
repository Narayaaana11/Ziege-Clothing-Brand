import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, ShoppingCart, Star, Zap } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useRecentlyViewed } from "@/store/recentlyViewedStore";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { AnimatedSection } from "@/components/AnimatedSection";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isNew?: boolean;
  isAICustomizable?: boolean;
  rating: number;
  reviews: number;
}

export const ProductCardEnhanced = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isAICustomizable,
  rating,
  reviews,
}: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#000000");
  
  const addToCart = useCartStore((state) => state.addItem);
  const { isInWishlist, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  const { addItem: addToRecentlyViewed } = useRecentlyViewed();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    addToCart({
      id,
      name,
      price,
      originalPrice,
      image,
      size: selectedSize,
      color: selectedColor,
    });

    toast({
      title: "Added to cart! 🛒",
      description: `${name} (${selectedSize}) has been added to your cart.`,
    });
    
    setIsLoading(false);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
      toast({
        title: "Removed from wishlist",
        description: `${name} has been removed from your wishlist.`,
        variant: "destructive",
      });
    } else {
      addToWishlist({
        id,
        name,
        price,
        image,
        category,
        rating,
        reviews,
      });
      toast({
        title: "Added to wishlist! 💖",
        description: `${name} has been added to your wishlist.`,
      });
    }
  };

  const handleView = () => {
      addToRecentlyViewed({
        id: id.toString(),
        name,
        price: typeof price === 'string' ? parseFloat(price.replace('$', '')) : price,
        image: image || "",
      });
  };

  return (
    <AnimatedSection>
      <Card className="group perspective-card border-animate border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 overflow-hidden relative shimmer">
        <div className="relative overflow-hidden rounded-t-lg">
          {/* Image */}
          <div className="aspect-square relative overflow-hidden">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <LoadingSpinner />
              </div>
            )}
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {isNew && (
                <Badge className="bg-primary text-primary-foreground animate-pulse">
                  NEW
                </Badge>
              )}
              {isAICustomizable && (
                <Badge className="bg-secondary text-secondary-foreground">
                  <Zap className="h-3 w-3 mr-1" />
                  AI
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={handleWishlistToggle}
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isInWishlist(id) ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`}
              />
            </Button>

            {/* Quick Actions */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Link to={`/product/${id}`} onClick={handleView} className="flex-1">
                <Button variant="neon" size="sm" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Quick View
                </Button>
              </Link>
              <Button 
                variant="hero" 
                size="sm" 
                onClick={handleAddToCart}
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Category */}
          <p className="text-xs font-rajdhani font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </p>

          {/* Name */}
          <h3 className="font-orbitron font-bold text-lg group-hover:text-primary transition-all duration-300 hover-glow">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) 
                      ? 'fill-primary text-primary' 
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-rajdhani">
              {rating} ({reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-bold text-lg text-primary">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through font-rajdhani">
                {originalPrice}
              </span>
            )}
          </div>

          {/* Size Selection */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-rajdhani text-muted-foreground">Size:</span>
            <div className="flex gap-1">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 text-xs rounded border transition-colors ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};