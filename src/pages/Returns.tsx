import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { RotateCcw, Package, CreditCard, Calendar, CheckCircle, XCircle } from "lucide-react";

const Returns = () => {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Contact us within 30 days of delivery",
      icon: Package
    },
    {
      step: 2,
      title: "Pack Your Items",
      description: "Items must be unworn with original tags",
      icon: RotateCcw
    },
    {
      step: 3,
      title: "Ship It Back",
      description: "Use the prepaid return label we provide",
      icon: Package
    },
    {
      step: 4,
      title: "Get Refunded",
      description: "Refund processed within 5-7 business days",
      icon: CreditCard
    }
  ];

  const eligible = [
    "Unworn and unwashed items",
    "Original tags still attached",
    "Original packaging included",
    "Returned within 30 days",
    "Proof of purchase provided"
  ];

  const notEligible = [
    "Sale or clearance items",
    "Custom AI-designed items",
    "Worn or washed items",
    "Items without original tags",
    "Items returned after 30 days"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary text-primary neon-glow">
            Returns & Exchanges
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black gradient-text">
            EASY RETURNS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Not satisfied? We offer hassle-free returns within 30 days
          </p>
        </AnimatedSection>

        {/* 30-Day Guarantee */}
        <AnimatedSection className="mb-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-orbitron font-black gradient-text">
                  30-Day Money Back Guarantee
                </h2>
              </div>
              <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
                Try our monster gear risk-free. If you're not completely satisfied, 
                return it within 30 days for a full refund.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Return Process */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-orbitron font-black gradient-text text-center mb-8">
            HOW IT WORKS
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <Card key={step.step} className="bg-card/50 backdrop-blur-sm border-border text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-2 border-primary/20">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-primary">
                      {step.step}
                    </Badge>
                  </div>
                  <h3 className="font-orbitron font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Eligibility */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <AnimatedSection animation="fade-up">
            <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Eligible for Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligible.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-rajdhani">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
              <CardHeader>
                <CardTitle className="font-orbitron flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Not Eligible
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notEligible.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-rajdhani">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-orbitron font-bold">Need to Return Something?</h3>
              <p className="text-muted-foreground font-rajdhani">
                Contact our customer service team to start your return process
              </p>
              <Button variant="hero" size="lg">
                Start Return Request
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Returns;
