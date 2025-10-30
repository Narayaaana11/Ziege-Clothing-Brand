import { useState } from "react";
import { X, Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

interface ProductComparisonProps {
  products: Product[];
}

const ProductComparison = ({ products }: ProductComparisonProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const addToComparison = (product: Product) => {
    if (selectedProducts.length >= 3) {
      toast({
        title: "Comparison Limit",
        description: "You can compare up to 3 products at once.",
        variant: "destructive",
      });
      return;
    }

    if (selectedProducts.some(p => p.id === product.id)) {
      toast({
        title: "Already Added",
        description: "This product is already in your comparison.",
      });
      return;
    }

    setSelectedProducts([...selectedProducts, product]);
    toast({
      title: "Added to Comparison",
      description: `${product.name} has been added to comparison.`,
    });
  };

  const removeFromComparison = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setSelectedProducts([]);
    toast({
      title: "Comparison Cleared",
      description: "All products have been removed from comparison.",
    });
  };

  return (
    <>
      {/* Comparison Button - Fixed position */}
      {selectedProducts.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="hero"
                className="relative shadow-neon animate-pulse-neon"
              >
                Compare ({selectedProducts.length})
                {selectedProducts.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                    {selectedProducts.length}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl w-full max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="gradient-text font-orbitron">Product Comparison</span>
                  <Button variant="ghost" size="sm" onClick={clearComparison}>
                    Clear All
                  </Button>
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProducts.map((product) => (
                  <Card key={product.id} className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 z-10"
                      onClick={() => removeFromComparison(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <CardContent className="p-4 space-y-4">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-orbitron font-bold">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Category</h4>
                          <Badge variant="outline">{product.category}</Badge>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-1">Rating</h4>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span>{product.rating}</span>
                            <span className="text-muted-foreground">({product.reviews})</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-1">Sizes</h4>
                          <div className="flex flex-wrap gap-1">
                            {product.sizes.slice(0, 3).map((size) => (
                              <Badge key={size} variant="outline" className="text-xs">
                                {size}
                              </Badge>
                            ))}
                            {product.sizes.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{product.sizes.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-1">Features</h4>
                          <div className="space-y-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                                <Zap className="h-3 w-3 text-primary" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-1 flex-wrap">
                          {product.isNew && (
                            <Badge className="bg-primary text-primary-foreground">New</Badge>
                          )}
                          {product.isAICustomizable && (
                            <Badge className="bg-gradient-primary text-primary-foreground">
                              AI Custom
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {/* Add to comparison buttons for products */}
      <div className="hidden">
        {products.map((product) => (
          <Button
            key={product.id}
            variant="outline"
            size="sm"
            onClick={() => addToComparison(product)}
            disabled={selectedProducts.some(p => p.id === product.id)}
          >
            <Plus className="h-4 w-4 mr-1" />
            Compare
          </Button>
        ))}
      </div>
    </>
  );
};

export default ProductComparison;