import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useRecentlyViewed } from "@/store/recentlyViewedStore";
import { ShoppingCart, Heart, Eye, Sparkles, Star, Zap, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";
import QuickViewModal from "@/components/QuickViewModal";

interface ProductCardProps extends Product {
  onAddToComparison?: (product: Product) => void;
  showCompareButton?: boolean;
}

const ProductCard = (product: ProductCardProps) => {
  const { 
    id, 
    name, 
    price, 
    originalPrice, 
    image, 
    isNew, 
    isAICustomizable,
    sizes,
    colors,
    category,
    rating,
    reviews,
    onAddToComparison,
    showCompareButton = false
  } = product;

  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addItem } = useCartStore();
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore();
  const { addItem: addToRecentlyViewed } = useRecentlyViewed();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      originalPrice,
      image: image || "",
      size: sizes[0] || "M", // Default to first available size
      color: colors[0]?.value || "#000000", // Default to first available color
    });

    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleQuickView = () => {
    setIsQuickViewOpen(true);
  };

  const handleViewProduct = () => {
    // Add to recently viewed
    addToRecentlyViewed({
      id: id.toString(),
      name,
      price: typeof price === 'string' ? parseFloat(price.replace('$', '')) : price,
      image: image || ""
    });
    navigate(`/product/${id}`);
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id,
      name,
      price,
      originalPrice,
      image,
      category,
      isNew,
      isAICustomizable,
      rating,
      reviews
    });

    toast({
      title: "Added to Wishlist!",
      description: `${name} has been added to your wishlist.`,
    });
  };

  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon overflow-hidden w-full">
      <div className="relative">
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2 z-10">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground animate-pulse-neon text-xs">
              NEW
            </Badge>
          )}
          {isAICustomizable && (
            <Badge className="bg-gradient-primary text-primary-foreground text-xs">
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
              AI
            </Badge>
          )}
        </div>

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/20 group-hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Quick Actions - Hidden on mobile, shown on hover for desktop */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-1 sm:space-x-2 touch-none pointer-events-none group-hover:pointer-events-auto">
            <Button 
              size="icon" 
              variant="secondary" 
              className="hover:scale-110 transition-transform text-xs sm:text-sm p-2 sm:p-3"
              onClick={handleQuickView}
              title="Quick View"
            >
              <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className={`hover:scale-110 transition-transform text-xs sm:text-sm p-2 sm:p-3 ${isInWishlist(id) ? 'text-primary' : ''}`}
              onClick={handleAddToWishlist}
              disabled={isInWishlist(id)}
              title={isInWishlist(id) ? "In Wishlist" : "Add to Wishlist"}
            >
              <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${isInWishlist(id) ? 'fill-current' : ''}`} />
            </Button>
            {showCompareButton && onAddToComparison && (
              <Button 
                size="icon" 
                variant="secondary" 
                className="hover:scale-110 transition-transform text-xs sm:text-sm p-2 sm:p-3"
                onClick={() => onAddToComparison(product)}
                title="Add to Compare"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            )}
            <Button 
              size="icon" 
              variant="hero" 
              className="hover:scale-110 transition-transform text-xs sm:text-sm p-2 sm:p-3"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>

          {/* Mobile Touch Actions - Visible on mobile */}
          <div className="sm:hidden absolute bottom-2 right-2 flex space-x-1">
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8 shadow-lg"
              onClick={handleAddToWishlist}
              disabled={isInWishlist(id)}
            >
              <Heart className={`h-3 w-3 ${isInWishlist(id) ? 'fill-current text-primary' : ''}`} />
            </Button>
            <Button 
              size="icon" 
              variant="hero" 
              className="w-8 h-8 shadow-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {/* Category */}
        <Badge variant="outline" className="text-xs">
          {category}
        </Badge>

        {/* Product Name */}
        <h3 
          className="font-orbitron font-bold text-base sm:text-lg group-hover:text-primary transition-colors cursor-pointer line-clamp-2" 
          onClick={handleViewProduct}
        >
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
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl font-orbitron font-bold text-primary">
            {price}
          </span>
          {originalPrice && (
            <span className="text-xs sm:text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button - Hidden on mobile (using mobile touch actions instead) */}
        <Button 
          variant="outline" 
          className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden sm:flex" 
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>

        {/* Mobile Quick View Button */}
        <Button 
          variant="outline" 
          className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 sm:hidden" 
          onClick={handleQuickView}
        >
          <Zap className="h-4 w-4 mr-2" />
          Quick View
        </Button>
      </CardContent>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </Card>
  );
};

export { ProductCard };