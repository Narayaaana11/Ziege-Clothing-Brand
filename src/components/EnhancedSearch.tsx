import { useState, useRef, useEffect } from "react";
import { Search, Filter, X, Sparkles, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const trendingSearches = [
  "Monster Hoodie", "Cyber Collection", "AI Custom", "Neon Style", "Black Aesthetic"
];

const searchSuggestions = [
  { term: "Monster Hoodie Black", category: "Products", results: 12 },
  { term: "Cyber Streetwear", category: "Collections", results: 8 },
  { term: "Custom AI Design", category: "Features", results: 15 },
  { term: "Neon Bomber Jacket", category: "Products", results: 6 }
];

interface EnhancedSearchProps {
  className?: string;
  onSearch?: (query: string) => void;
  value?: string;
  onChange?: (value: string) => void;
}

const EnhancedSearch = ({ className, onSearch, value, onChange }: EnhancedSearchProps) => {
  const [query, setQuery] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    onChange?.(searchQuery);
    onSearch?.(searchQuery);
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={cn("relative w-full max-w-2xl", className)}>
      {/* Search Input */}
      <div className="relative">
        <div className={cn(
          "relative flex items-center transition-all duration-300",
          isFocused ? "scale-105" : "scale-100"
        )}>
          <Search className="absolute left-4 w-5 h-5 text-muted-foreground z-10" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange?.(e.target.value);
            }}
            onFocus={() => {
              setIsOpen(true);
              setIsFocused(true);
            }}
            placeholder="Search for products, collections, or styles..."
            className={cn(
              "pl-12 pr-12 h-14 text-lg bg-background/80 backdrop-blur-sm",
              "border-2 transition-all duration-300",
              isFocused 
                ? "border-primary shadow-lg shadow-primary/20" 
                : "border-border/50 hover:border-border"
            )}
          />
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 w-8 h-8 p-0 hover:bg-destructive/10"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Glow Effect */}
        {isFocused && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl -z-10" />
        )}
      </div>

      {/* Search Dropdown */}
      {isOpen && (
        <Card className="absolute top-full mt-2 w-full z-50 border-2 border-primary/20 bg-background/95 backdrop-blur-md overflow-hidden">
          <div className="p-6">
            {/* Trending Searches */}
            {!query && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Trending Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((trend, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors"
                      onClick={() => handleSearch(trend)}
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      {trend}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Search Suggestions */}
            {query && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Suggestions</span>
                </div>
                <div className="space-y-2">
                  {searchSuggestions
                    .filter(suggestion => 
                      suggestion.term.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => handleSearch(suggestion.term)}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div>
                            <span className="text-sm font-medium">{suggestion.term}</span>
                            <span className="text-xs text-muted-foreground ml-2">
                              in {suggestion.category}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {suggestion.results} results
                        </Badge>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="w-3 h-3 mr-1" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Search
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default EnhancedSearch;