import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { Heart, ShoppingCart, Eye, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const WishlistSheet = () => {
  const { 
    items, 
    isOpen, 
    openWishlist, 
    closeWishlist, 
    removeItem,
    clearWishlist,
    getTotalItems 
  } = useWishlistStore();
  
  const { addItem: addToCart } = useCartStore();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      size: "M", // Default size
      color: "#000000", // Default color
    });

    toast({
      title: "Added to Cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleViewProduct = (id: number) => {
    navigate(`/product/${id}`);
    closeWishlist();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => open ? openWishlist() : closeWishlist()}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-primary relative">
          <Heart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs h-5 w-5 flex items-center justify-center animate-pulse-neon">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg bg-card/95 backdrop-blur-lg border-border">
        <SheetHeader className="space-y-4">
          <SheetTitle className="font-orbitron font-bold text-2xl gradient-text flex items-center gap-2">
            <Heart className="h-6 w-6" />
            Wishlist
          </SheetTitle>
          {items.length > 0 && (
            <div className="flex justify-between items-center">
              <Badge className="bg-secondary/20 text-secondary">
                {getTotalItems()} {getTotalItems() === 1 ? 'Item' : 'Items'}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearWishlist}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </div>
          )}
        </SheetHeader>

        <div className="flex-1 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-orbitron font-bold text-lg">Your wishlist is empty</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Save items you love for later!
                </p>
              </div>
              <Button variant="hero" onClick={closeWishlist}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-muted/20 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-orbitron font-bold text-sm">{item.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-primary font-orbitron font-bold text-sm">
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline">{item.category}</Badge>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span>{item.rating}</span>
                          <span className="text-muted-foreground">({item.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAddToCart(item)}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleViewProduct(item.id)}
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WishlistSheet;