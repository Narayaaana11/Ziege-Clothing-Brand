import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Truck, Package, Zap, Globe, Shield, Clock } from "lucide-react";

const Shipping = () => {
  const shippingMethods = [
    {
      icon: Zap,
      name: "Express Shipping",
      time: "1-2 Business Days",
      price: "$19.99",
      description: "Get your monster gear lightning fast"
    },
    {
      icon: Truck,
      name: "Standard Shipping",
      time: "3-5 Business Days",
      price: "$9.99",
      description: "Reliable delivery at an affordable price"
    },
    {
      icon: Package,
      name: "Free Shipping",
      time: "5-7 Business Days",
      price: "Free on orders over $100",
      description: "Enjoy free delivery on qualifying orders"
    },
    {
      icon: Globe,
      name: "International",
      time: "7-14 Business Days",
      price: "Calculated at checkout",
      description: "We ship to over 50 countries worldwide"
    }
  ];

  const regions = [
    { name: "United States", time: "3-5 days", cost: "$9.99" },
    { name: "Canada", time: "5-7 days", cost: "$14.99" },
    { name: "Europe", time: "7-10 days", cost: "$19.99" },
    { name: "Asia Pacific", time: "10-14 days", cost: "$24.99" },
    { name: "Rest of World", time: "14-21 days", cost: "$29.99" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary text-primary neon-glow">
            Shipping Information
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black gradient-text">
            DELIVERY OPTIONS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Fast, reliable shipping to unleash your monster gear worldwide
          </p>
        </AnimatedSection>

        {/* Shipping Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {shippingMethods.map((method, index) => (
            <AnimatedSection key={method.name} animation="fade-up" delay={index * 100}>
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-orbitron mb-1">{method.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-rajdhani">
                          {method.time}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {method.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-rajdhani">{method.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Regional Shipping */}
        <AnimatedSection className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl">Shipping by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regions.map((region) => (
                  <div key={region.name} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-rajdhani font-medium">{region.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-rajdhani">{region.time}</span>
                      </div>
                      <span className="font-orbitron font-bold text-primary">{region.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Important Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection animation="fade-up" delay={0}>
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center h-full">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold">Secure Packaging</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  All orders are carefully packaged with eco-friendly materials
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center h-full">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold">Order Tracking</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Track your package every step of the way with real-time updates
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center h-full">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold">Processing Time</h3>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  Orders ship within 1-2 business days after purchase
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
