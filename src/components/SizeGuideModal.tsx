import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Ruler, Info } from "lucide-react";

const SizeGuideModal = () => {
  const apparelSizes = [
    { size: "XS", chest: "32-34", waist: "26-28", length: "26" },
    { size: "S", chest: "36-38", waist: "30-32", length: "27" },
    { size: "M", chest: "40-42", waist: "34-36", length: "28" },
    { size: "L", chest: "44-46", waist: "38-40", length: "29" },
    { size: "XL", chest: "48-50", waist: "42-44", length: "30" },
    { size: "XXL", chest: "52-54", waist: "46-48", length: "31" },
  ];

  const pantsSizes = [
    { size: "28", waist: "28", hip: "36", inseam: "32" },
    { size: "30", waist: "30", hip: "38", inseam: "32" },
    { size: "32", waist: "32", hip: "40", inseam: "32" },
    { size: "34", waist: "34", hip: "42", inseam: "32" },
    { size: "36", waist: "36", hip: "44", inseam: "32" },
    { size: "38", waist: "38", hip: "46", inseam: "32" },
    { size: "40", waist: "40", hip: "48", inseam: "32" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-lg border-border">
        <DialogHeader>
          <DialogTitle className="font-orbitron font-bold text-2xl gradient-text flex items-center gap-2">
            <Ruler className="h-6 w-6" />
            Size Guide
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="apparel" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="apparel">Tops & Hoodies</TabsTrigger>
            <TabsTrigger value="pants">Pants & Bottoms</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
          </TabsList>

          <TabsContent value="apparel" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  All measurements are in inches. For the best fit, measure yourself and compare with our size chart.
                </p>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-orbitron font-bold">Size</TableHead>
                    <TableHead className="font-orbitron font-bold">Chest</TableHead>
                    <TableHead className="font-orbitron font-bold">Waist</TableHead>
                    <TableHead className="font-orbitron font-bold">Length</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apparelSizes.map((size) => (
                    <TableRow key={size.size}>
                      <TableCell className="font-bold">
                        <Badge variant="outline">{size.size}</Badge>
                      </TableCell>
                      <TableCell>{size.chest}"</TableCell>
                      <TableCell>{size.waist}"</TableCell>
                      <TableCell>{size.length}"</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="bg-muted/10 p-4 rounded-lg">
              <h4 className="font-orbitron font-bold mb-2">How to Measure</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
                <li><strong>Waist:</strong> Measure around your natural waistline</li>
                <li><strong>Length:</strong> Measure from shoulder seam to bottom hem</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="pants" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Pants sizes are listed in waist measurements. All our pants have a standard 32" inseam.
                </p>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-orbitron font-bold">Size</TableHead>
                    <TableHead className="font-orbitron font-bold">Waist</TableHead>
                    <TableHead className="font-orbitron font-bold">Hip</TableHead>
                    <TableHead className="font-orbitron font-bold">Inseam</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pantsSizes.map((size) => (
                    <TableRow key={size.size}>
                      <TableCell className="font-bold">
                        <Badge variant="outline">{size.size}</Badge>
                      </TableCell>
                      <TableCell>{size.waist}"</TableCell>
                      <TableCell>{size.hip}"</TableCell>
                      <TableCell>{size.inseam}"</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="bg-muted/10 p-4 rounded-lg">
              <h4 className="font-orbitron font-bold mb-2">How to Measure</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Waist:</strong> Measure around your natural waistline</li>
                <li><strong>Hip:</strong> Measure around the fullest part of your hips</li>
                <li><strong>Inseam:</strong> Measure from crotch to ankle</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-orbitron font-bold text-lg">Caps & Hats</h3>
              <p className="text-muted-foreground">
                Our caps feature adjustable snapback closures and fit head circumferences from 22" to 24" (56cm to 61cm).
              </p>
              
              <div className="bg-muted/10 p-4 rounded-lg">
                <h4 className="font-orbitron font-bold mb-2">Cap Sizing</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li><strong>One Size Fits Most:</strong> 22" - 24" head circumference</li>
                  <li><strong>Adjustable:</strong> Snapback closure for custom fit</li>
                  <li><strong>Material:</strong> Premium cotton twill with structured crown</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Still need help? Contact our style team for personalized sizing advice.
            </div>
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuideModal;