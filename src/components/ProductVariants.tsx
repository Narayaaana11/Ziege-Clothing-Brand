import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductVariantsProps {
  sizes: string[];
  colors: { name: string; value: string }[];
  selectedSize?: string;
  selectedColor?: string;
  onSizeChange?: (size: string) => void;
  onColorChange?: (color: string) => void;
  className?: string;
}

const ProductVariants = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
  className
}: ProductVariantsProps) => {
  const [internalSize, setInternalSize] = useState(selectedSize || sizes[0] || "");
  const [internalColor, setInternalColor] = useState(selectedColor || colors[0]?.value || "");

  const currentSize = selectedSize !== undefined ? selectedSize : internalSize;
  const currentColor = selectedColor !== undefined ? selectedColor : internalColor;

  const handleSizeChange = (size: string) => {
    if (selectedSize === undefined) {
      setInternalSize(size);
    }
    onSizeChange?.(size);
  };

  const handleColorChange = (color: string) => {
    if (selectedColor === undefined) {
      setInternalColor(color);
    }
    onColorChange?.(color);
  };

  return (
    <Card className={cn("bg-card/50 backdrop-blur-sm border border-border", className)}>
      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* Size Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-rajdhani font-semibold">Size</Label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={currentSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => handleSizeChange(size)}
                className={cn(
                  "min-w-[3rem] h-10 font-rajdhani font-semibold transition-all duration-200",
                  currentSize === size
                    ? "bg-primary text-primary-foreground shadow-neon"
                    : "hover:border-primary hover:text-primary"
                )}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-rajdhani font-semibold">Color</Label>
          <div className="space-y-3">
            {/* Color Swatches */}
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange(color.value)}
                  className={cn(
                    "relative w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110",
                    currentColor === color.value
                      ? "border-primary shadow-neon"
                      : "border-border hover:border-primary/50"
                  )}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {currentColor === color.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check 
                        className={cn(
                          "h-4 w-4",
                          // Use white for dark colors, black for light colors
                          color.value === "#FFFFFF" || color.value.toLowerCase().includes("white")
                            ? "text-black" 
                            : "text-white"
                        )} 
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Selected Color Name */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-rajdhani">Selected:</span>
              <Badge variant="outline" className="font-rajdhani">
                {colors.find(c => c.value === currentColor)?.name || "None"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Stock Status */}
        <div className="pt-2 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-rajdhani">Availability:</span>
            <Badge className="bg-accent/20 text-accent border-accent/30">
              In Stock
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductVariants;