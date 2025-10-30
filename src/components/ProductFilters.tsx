import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, X, Filter } from "lucide-react";
import { categories } from "@/data/products";

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  features: string[];
  rating: number;
  availability: string[];
}

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  className?: string;
}

const ProductFilters = ({ filters, onFiltersChange, onClearFilters, className }: ProductFiltersProps) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    size: false,
    color: false,
    features: false,
    rating: false,
    availability: false,
  });

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36", "38", "40", "One Size"];
  const availableColors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#DC2626" },
    { name: "Gray", value: "#6B7280" },
    { name: "Navy", value: "#1E40AF" },
    { name: "Green", value: "#10B981" },
    { name: "Purple", value: "#7C3AED" },
  ];
  
  const availableFeatures = [
    "Glow-in-the-dark",
    "AI Customizable",
    "Eco-friendly",
    "Water-resistant",
    "Premium cotton",
    "Japanese design",
    "Limited edition",
  ];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    const currentArray = filters[key] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray);
  };

  const hasActiveFilters = () => {
    return (
      filters.categories.length > 0 ||
      filters.sizes.length > 0 ||
      filters.colors.length > 0 ||
      filters.features.length > 0 ||
      filters.rating > 0 ||
      filters.availability.length > 0 ||
      filters.priceRange[0] > 0 ||
      filters.priceRange[1] < 300
    );
  };

  return (
    <Card className={`bg-card/50 backdrop-blur-sm border-border ${className}`}>
      <CardHeader className="space-y-0 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="font-orbitron font-bold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          {hasActiveFilters() && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-destructive hover:text-destructive"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Categories */}
        <Collapsible open={openSections.category} onOpenChange={() => toggleSection('category')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-orbitron font-bold">Category</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openSections.category ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            {categories.slice(1).map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <Checkbox
                  id={category.value}
                  checked={filters.categories.includes(category.value)}
                  onCheckedChange={() => toggleArrayFilter('categories', category.value)}
                />
                <label htmlFor={category.value} className="text-sm font-rajdhani">
                  {category.name}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator className="bg-border/50" />

        {/* Price Range */}
        <Collapsible open={openSections.price} onOpenChange={() => toggleSection('price')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-orbitron font-bold">Price Range</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-3">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilter('priceRange', value)}
              max={300}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator className="bg-border/50" />

        {/* Size */}
        <Collapsible open={openSections.size} onOpenChange={() => toggleSection('size')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-orbitron font-bold">Size</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openSections.size ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            <div className="grid grid-cols-3 gap-2">
              {availableSizes.map((size) => (
                <Badge
                  key={size}
                  variant={filters.sizes.includes(size) ? "default" : "outline"}
                  className="cursor-pointer text-center justify-center hover:bg-primary hover:text-primary-foreground"
                  onClick={() => toggleArrayFilter('sizes', size)}
                >
                  {size}
                </Badge>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator className="bg-border/50" />

        {/* Colors */}
        <Collapsible open={openSections.color} onOpenChange={() => toggleSection('color')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-orbitron font-bold">Colors</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openSections.color ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            <div className="grid grid-cols-4 gap-3">
              {availableColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => toggleArrayFilter('colors', color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    filters.colors.includes(color.value)
                      ? "border-primary shadow-neon"
                      : "border-muted hover:border-primary/50"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator className="bg-border/50" />

        {/* Features */}
        <Collapsible open={openSections.features} onOpenChange={() => toggleSection('features')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-orbitron font-bold">Features</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openSections.features ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            {availableFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={filters.features.includes(feature)}
                  onCheckedChange={() => toggleArrayFilter('features', feature)}
                />
                <label htmlFor={feature} className="text-sm font-rajdhani">
                  {feature}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;