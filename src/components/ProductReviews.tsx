import { useState } from "react";
import { Star, ThumbsUp, Verified, Filter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { AnimatedSection } from "./AnimatedSection";

const reviews = [
  {
    id: 1,
    user: { name: "Alex Chen", avatar: "/placeholder.svg", verified: true },
    rating: 5,
    date: "2 days ago",
    title: "Amazing quality and design!",
    content: "The Monster Hoodie exceeded my expectations. The fabric is premium quality and the AI customization feature is mind-blowing. Perfect fit and the design came out exactly as I imagined.",
    likes: 24,
    helpful: true,
    images: [],
    product: "Monster Hoodie Black"
  },
  {
    id: 2,
    user: { name: "Sarah Kim", avatar: "/placeholder.svg", verified: true },
    rating: 5,
    date: "1 week ago", 
    title: "Best streetwear brand!",
    content: "I've ordered multiple items and each one is perfect. The cyber aesthetic is exactly what I was looking for. Fast shipping and excellent customer service.",
    likes: 18,
    helpful: true,
    images: [],
    product: "Cyber Tee Collection"
  },
  {
    id: 3,
    user: { name: "Mike Torres", avatar: "/placeholder.svg", verified: false },
    rating: 4,
    date: "2 weeks ago",
    title: "Great design, sizing runs small",
    content: "Love the design and quality, but I'd recommend ordering one size up. The AI design tool is incredible - created exactly what I wanted.",
    likes: 12,
    helpful: true,
    images: [],
    product: "Neon Bomber Jacket"
  }
];

const ratingDistribution = [
  { stars: 5, count: 156, percentage: 78 },
  { stars: 4, count: 32, percentage: 16 },
  { stars: 3, count: 8, percentage: 4 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 0 }
];

const ProductReviews = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const averageRating = 4.7;
  const totalReviews = 200;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community says about their Akuma experience
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <AnimatedSection animation="slide-right" className="lg:col-span-1">
            <Card className="p-6 h-fit">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.floor(averageRating))}
                </div>
                <p className="text-muted-foreground">
                  Based on {totalReviews} reviews
                </p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm w-6">{item.stars}★</span>
                    <Progress value={item.percentage} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-8">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Filter Options */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={filter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={filter === "5" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("5")}
                  >
                    5 Star
                  </Button>
                  <Button
                    variant={filter === "verified" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("verified")}
                  >
                    <Verified className="w-3 h-3 mr-1" />
                    Verified
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sort Options */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Reviews ({reviews.length})</h3>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-border rounded px-3 py-1 text-sm"
                >
                  <option value="recent">Most Recent</option>
                  <option value="helpful">Most Helpful</option>
                  <option value="rating">Highest Rating</option>
                </select>
              </div>
            </div>

            {/* Reviews */}
            {reviews.map((review, index) => (
              <AnimatedSection 
                key={review.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.user.avatar} />
                          <AvatarFallback>
                            {review.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user.name}</span>
                            {review.user.verified && (
                              <Badge variant="secondary" className="h-5 px-2">
                                <Verified className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Badge */}
                    <Badge variant="outline" className="mb-3">
                      {review.product}
                    </Badge>

                    {/* Review Content */}
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {review.content}
                    </p>

                    {/* Review Actions */}
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Helpful ({review.likes})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}

            {/* Load More */}
            <div className="text-center pt-6">
              <Button variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;