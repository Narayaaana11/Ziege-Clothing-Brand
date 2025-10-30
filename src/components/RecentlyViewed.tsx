import { useEffect, useState } from "react";
import { Clock, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import { useRecentlyViewed } from "@/store/recentlyViewedStore";

const RecentlyViewed = () => {
  const { items, removeItem, clearAll } = useRecentlyViewed();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(items.length > 0);
  }, [items]);

  if (!isVisible) return null;

  return (
    <section className="py-12 bg-muted/10">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold font-heading">Recently Viewed</h2>
              <Badge variant="secondary">{items.length}</Badge>
            </div>
            {items.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearAll}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.slice(0, 6).map((item, index) => (
              <AnimatedSection 
                key={item.id}
                animation="scale-in"
                delay={index * 50}
              >
                <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="absolute top-2 right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm z-10"
                  >
                    <X className="w-3 h-3" />
                  </Button>

                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardContent className="p-3">
                    <h3 className="font-medium text-sm truncate mb-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold text-sm">
                      ${item.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.viewedAt}
                    </p>
                  </CardContent>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <Button size="sm" className="w-full">
                      View Again
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RecentlyViewed;