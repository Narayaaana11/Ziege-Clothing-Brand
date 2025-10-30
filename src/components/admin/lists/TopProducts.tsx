import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { topProductsData } from "@/data/adminMock";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TopProducts = () => {
  return (
    <Card className="bg-background-secondary border-border-secondary shadow-neon-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-orbitron">Top-Selling Products</CardTitle>
        <Button variant="ghost" size="sm" className="text-brand-neon-red hover:text-brand-neon-red/80">
          View All
          <ArrowUpRight className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {topProductsData.map((product, index) => (
            <li key={product.id} className="flex items-center gap-4">
              <Badge variant="outline" className="font-orbitron border-border-secondary">
                #{index + 1}
              </Badge>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-12 w-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-medium truncate">{product.name}</p>
                <p className="text-sm text-text-secondary">
                  Revenue: ₹{product.revenue.toLocaleString("en-IN")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopProducts;