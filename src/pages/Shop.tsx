import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import ProductFilters from "@/components/ProductFilters";
import RecentlyViewed from "@/components/RecentlyViewed";
import SocialProof from "@/components/SocialProof";
import EnhancedSearch from "@/components/EnhancedSearch";
import ProductComparison from "@/components/ProductComparison";
import Breadcrumb from "@/components/Breadcrumb";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 300] as [number, number],
    sizes: [] as string[],
    colors: [] as string[],
    features: [] as string[],
    rating: 0,
    availability: [] as string[],
  });

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb />
        </div>
        {/* Header */}
        <div className="text-center space-y-4 mb-8 sm:mb-12 px-4 sm:px-0">
          <Badge className="bg-primary/20 text-primary border-primary/30 neon-glow">
            Monster Collection
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black">
            <span className="gradient-text">HUNT YOUR</span><br />
            <span className="glitch gradient-text" data-text="STYLE">STYLE</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Discover our complete collection of monster-inspired streetwear
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
          <div className="flex-1 order-1">
            <EnhancedSearch value={searchQuery} onChange={setSearchQuery} />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden order-2 sm:order-1"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters {showFilters ? '(Hide)' : '(Show)'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-0">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} mb-6 lg:mb-0`}>
            <div className="sticky top-20">
              <ProductFilters
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={() => setFilters({
                  categories: [],
                  priceRange: [0, 300],
                  sizes: [],
                  colors: [],
                  features: [],
                  rating: 0,
                  availability: [],
                })}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Showing {filteredProducts.length} products
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} showCompareButton />
                  ))}
                </div>
                <ProductComparison products={filteredProducts} />
              </>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <h3 className="text-lg sm:text-xl font-orbitron font-bold mb-2">No Products Found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Recently Viewed & Social Proof */}
        <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8 px-4 sm:px-0">
          <RecentlyViewed />
          <SocialProof />
        </div>
      </div>
    </div>
  );
};

export default Shop;