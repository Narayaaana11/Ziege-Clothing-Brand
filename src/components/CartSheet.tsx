import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, Plus, Minus, Trash2, Zap } from "lucide-react";

const CartSheet = () => {
  const { 
    items, 
    isOpen, 
    openCart, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    clearCart,
    getTotalItems,
    getTotalPrice 
  } = useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => open ? openCart() : closeCart()}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-primary relative">
          <ShoppingCart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs h-5 w-5 flex items-center justify-center animate-pulse-neon">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg bg-card/95 backdrop-blur-lg border-border">
        <SheetHeader className="space-y-4">
          <SheetTitle className="font-orbitron font-bold text-2xl gradient-text flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            Monster Cart
          </SheetTitle>
          {items.length > 0 && (
            <div className="flex justify-between items-center">
              <Badge className="bg-primary/20 text-primary">
                {getTotalItems()} {getTotalItems() === 1 ? 'Item' : 'Items'}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
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
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-orbitron font-bold text-lg">Your cart is empty</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Time to unleash some monsters!
                </p>
              </div>
              <Button variant="hero" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => {
                  const itemKey = `${item.id}-${item.size}-${item.color}`;
                  return (
                    <div key={itemKey} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-3">
                      <div className="flex items-start gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-muted/20 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 space-y-2">
                          <div>
                            <h4 className="font-orbitron font-bold text-sm">{item.name}</h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-primary font-orbitron font-bold">
                                {item.price}
                              </span>
                              {item.originalPrice && (
                                <span className="text-xs text-muted-foreground line-through">
                                  {item.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Size and Color */}
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">
                              Size: <span className="text-foreground font-medium">{item.size}</span>
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">Color:</span>
                              <div 
                                className="w-4 h-4 rounded-full border border-border"
                                style={{ backgroundColor: item.color }}
                              ></div>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-rajdhani font-bold">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => removeItem(item.id, item.size, item.color)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Separator className="bg-border/50" />

              {/* Cart Summary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-orbitron font-bold text-lg">Total</span>
                  <span className="font-orbitron font-bold text-xl text-primary">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <Button variant="hero" className="w-full" size="lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </div>

                {/* Security Badge */}
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    🔒 Secure Checkout
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;