import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ruler, User } from "lucide-react";

const SizeGuide = () => {
  const hoodiesSizes = [
    { size: "XS", chest: "34-36", length: "26", sleeve: "32" },
    { size: "S", chest: "36-38", length: "27", sleeve: "33" },
    { size: "M", chest: "38-40", length: "28", sleeve: "34" },
    { size: "L", chest: "40-42", length: "29", sleeve: "35" },
    { size: "XL", chest: "42-44", length: "30", sleeve: "36" },
    { size: "2XL", chest: "44-46", length: "31", sleeve: "37" }
  ];

  const tshirtSizes = [
    { size: "XS", chest: "32-34", length: "27", shoulder: "16" },
    { size: "S", chest: "34-36", length: "28", shoulder: "17" },
    { size: "M", chest: "36-38", length: "29", shoulder: "18" },
    { size: "L", chest: "38-40", length: "30", shoulder: "19" },
    { size: "XL", chest: "40-42", length: "31", shoulder: "20" },
    { size: "2XL", chest: "42-44", length: "32", shoulder: "21" }
  ];

  const pantsSizes = [
    { size: "28", waist: "28-29", hip: "36-37", inseam: "32" },
    { size: "30", waist: "30-31", hip: "38-39", inseam: "32" },
    { size: "32", waist: "32-33", hip: "40-41", inseam: "32" },
    { size: "34", waist: "34-35", hip: "42-43", inseam: "32" },
    { size: "36", waist: "36-37", hip: "44-45", inseam: "32" },
    { size: "38", waist: "38-39", hip: "46-47", inseam: "32" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary text-primary neon-glow">
            Size Guide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black gradient-text">
            FIND YOUR FIT
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Accurate sizing for the perfect monster look
          </p>
        </AnimatedSection>

        {/* How to Measure */}
        <AnimatedSection className="mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl flex items-center gap-2">
                <Ruler className="h-6 w-6 text-primary" />
                How to Measure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-orbitron font-bold">Chest</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    Measure around the fullest part of your chest, keeping the tape horizontal
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-orbitron font-bold">Waist</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    Measure around your natural waistline, keeping the tape comfortably loose
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-orbitron font-bold">Sleeve</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    Measure from center back neck to wrist with arm slightly bent
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Size Tables */}
        <AnimatedSection>
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <Tabs defaultValue="hoodies" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="hoodies" className="font-orbitron">Hoodies</TabsTrigger>
                  <TabsTrigger value="tshirts" className="font-orbitron">T-Shirts</TabsTrigger>
                  <TabsTrigger value="pants" className="font-orbitron">Pants</TabsTrigger>
                </TabsList>

                <TabsContent value="hoodies">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-orbitron">Size</th>
                          <th className="text-left py-3 px-4 font-orbitron">Chest (in)</th>
                          <th className="text-left py-3 px-4 font-orbitron">Length (in)</th>
                          <th className="text-left py-3 px-4 font-orbitron">Sleeve (in)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hoodiesSizes.map((size, index) => (
                          <tr 
                            key={size.size}
                            className={`border-b border-border/50 hover:bg-primary/5 transition-colors ${
                              index % 2 === 0 ? 'bg-background/50' : ''
                            }`}
                          >
                            <td className="py-3 px-4">
                              <Badge variant="outline">{size.size}</Badge>
                            </td>
                            <td className="py-3 px-4 font-rajdhani">{size.chest}"</td>
                            <td className="py-3 px-4 font-rajdhani">{size.length}"</td>
                            <td className="py-3 px-4 font-rajdhani">{size.sleeve}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="tshirts">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-orbitron">Size</th>
                          <th className="text-left py-3 px-4 font-orbitron">Chest (in)</th>
                          <th className="text-left py-3 px-4 font-orbitron">Length (in)</th>
                          <th className="text-left py-3 px-4 font-orbitron">Shoulder (in)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tshirtSizes.map((size, index) => (
                          <tr 
                            key={size.size}
                            className={`border-b border-border/50 hover:bg-primary/5 transition-colors ${
                              index % 2 === 0 ? 'bg-background/50' : ''
                            }`}
                          >
                            <td className="py-3 px-4">
                              <Badge variant="outline">{size.size}</Badge>
                            </td>
                            <td className="py-3 px-4 font-rajdhani">{size.chest}"</td>
                            <td className="py-3 px-4 font-rajdhani">{size.length}"</td>
                            <td className="py-3 px-4 font-rajdhani">{size.shoulder}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="pants">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-orbitron">Size</th>
                          <th className="text-left py-3 px-4 font-orbitron">Waist (in)</th>
                          <th className="text-left py-3 px-4 font-orbitron">Hip (in)</th>
                          <th className="text-left py-3 px-4 font-orbitron">Inseam (in)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pantsSizes.map((size, index) => (
                          <tr 
                            key={size.size}
                            className={`border-b border-border/50 hover:bg-primary/5 transition-colors ${
                              index % 2 === 0 ? 'bg-background/50' : ''
                            }`}
                          >
                            <td className="py-3 px-4">
                              <Badge variant="outline">{size.size}</Badge>
                            </td>
                            <td className="py-3 px-4 font-rajdhani">{size.waist}"</td>
                            <td className="py-3 px-4 font-rajdhani">{size.hip}"</td>
                            <td className="py-3 px-4 font-rajdhani">{size.inseam}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Fit Guide */}
        <AnimatedSection className="mt-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Fit Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2 text-center">
                  <Badge variant="outline" className="mb-2">Oversized Fit</Badge>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    Relaxed, loose fit. Size down for a more fitted look
                  </p>
                </div>
                <div className="space-y-2 text-center">
                  <Badge variant="outline" className="mb-2">Regular Fit</Badge>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    True to size with comfortable room to move
                  </p>
                </div>
                <div className="space-y-2 text-center">
                  <Badge variant="outline" className="mb-2">Slim Fit</Badge>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    Fitted silhouette. Size up for a more relaxed feel
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SizeGuide;
