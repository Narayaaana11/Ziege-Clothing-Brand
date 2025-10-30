import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { 
  Wand2, 
  Upload, 
  Download, 
  Palette, 
  Zap, 
  Sparkles, 
  RefreshCw,
  Save,
  Share2,
  Eye
} from "lucide-react";

const AIStudioPage = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("cyberpunk");
  const [selectedGarment, setSelectedGarment] = useState("hoodie");
  const [isGenerating, setIsGenerating] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#ff0066");
  const [secondaryColor, setSecondaryColor] = useState("#00ffff");
  const [intensity, setIntensity] = useState([75]);
  const [useCustomPrompt, setUseCustomPrompt] = useState(true);

  const styles = [
    { id: "cyberpunk", name: "Cyberpunk", description: "Neon-lit futuristic aesthetics" },
    { id: "gothic", name: "Gothic", description: "Dark, mysterious designs" },
    { id: "minimal", name: "Minimal", description: "Clean, simple monster forms" },
    { id: "abstract", name: "Abstract", description: "Artistic interpretations" },
    { id: "grunge", name: "Grunge", description: "Raw, textured streetwear" },
    { id: "glitch", name: "Glitch", description: "Digital distortion effects" },
  ];

  const garments = [
    { id: "hoodie", name: "Hoodie", preview: "👕" },
    { id: "tshirt", name: "T-Shirt", preview: "👕" },
    { id: "jacket", name: "Jacket", preview: "🧥" },
    { id: "pants", name: "Pants", preview: "👖" },
    { id: "tank", name: "Tank Top", preview: "👕" },
    { id: "sweatshirt", name: "Sweatshirt", preview: "👕" },
  ];

  const presetPrompts = [
    "Cyberpunk dragon with neon wings and digital scales",
    "Gothic demon with ethereal smoke effects",
    "Glitch monster with pixelated distortion",
    "Abstract creature made of geometric shapes",
    "Minimalist shadow beast silhouette",
    "Neon tiger with electric stripes",
  ];

  const recentDesigns = [
    { id: 1, prompt: "Cyber dragon with holographic scales", style: "Cyberpunk", timestamp: "2 min ago" },
    { id: 2, prompt: "Gothic raven with mystic aura", style: "Gothic", timestamp: "5 min ago" },
    { id: 3, prompt: "Glitch wolf with digital fragments", style: "Glitch", timestamp: "8 min ago" },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 cyber-glow">
            <Zap className="h-3 w-3 mr-2" />
            AI Design Studio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black">
            <span className="gradient-text">CREATE YOUR</span><br />
            <span className="glitch gradient-text" data-text="MONSTER">MONSTER</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Transform your wildest visions into wearable art with our AI-powered design studio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon">
              <CardContent className="p-6">
                <Tabs defaultValue="create" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="create" className="font-rajdhani">Create</TabsTrigger>
                    <TabsTrigger value="upload" className="font-rajdhani">Upload</TabsTrigger>
                  </TabsList>

                  <TabsContent value="create" className="space-y-6">
                    {/* Prompt Input */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="font-rajdhani font-medium">Describe Your Monster</Label>
                        <Switch 
                          checked={useCustomPrompt} 
                          onCheckedChange={setUseCustomPrompt}
                          className="data-[state=checked]:bg-primary"
                        />
                      </div>
                      
                      {useCustomPrompt ? (
                        <Textarea
                          placeholder="A fierce cyberpunk dragon with glowing neon scales and digital wings..."
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="min-h-[100px] bg-input/50 border-border focus:border-primary font-rajdhani resize-none"
                        />
                      ) : (
                        <Select value={prompt} onValueChange={setPrompt}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a preset prompt" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border">
                            {presetPrompts.map((preset, index) => (
                              <SelectItem key={index} value={preset} className="font-rajdhani">
                                {preset}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    {/* Style Selection */}
                    <div className="space-y-3">
                      <Label className="font-rajdhani font-medium">Style</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {styles.map((style) => (
                          <Button
                            key={style.id}
                            variant={selectedStyle === style.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedStyle(style.id)}
                            className="justify-start h-auto p-3 flex-col items-start"
                          >
                            <span className="font-rajdhani font-medium">{style.name}</span>
                            <span className="text-xs text-muted-foreground">{style.description}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Garment Selection */}
                    <div className="space-y-3">
                      <Label className="font-rajdhani font-medium">Garment Type</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {garments.map((garment) => (
                          <Button
                            key={garment.id}
                            variant={selectedGarment === garment.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedGarment(garment.id)}
                            className="flex-col h-auto p-3"
                          >
                            <span className="text-xl mb-1">{garment.preview}</span>
                            <span className="text-xs font-rajdhani">{garment.name}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Color Controls */}
                    <div className="space-y-4">
                      <Label className="font-rajdhani font-medium">Colors</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs text-muted-foreground">Primary</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="color"
                              value={primaryColor}
                              onChange={(e) => setPrimaryColor(e.target.value)}
                              className="w-12 h-8 p-0 border-none"
                            />
                            <Input
                              value={primaryColor}
                              onChange={(e) => setPrimaryColor(e.target.value)}
                              className="flex-1 text-xs font-mono"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs text-muted-foreground">Secondary</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              type="color"
                              value={secondaryColor}
                              onChange={(e) => setSecondaryColor(e.target.value)}
                              className="w-12 h-8 p-0 border-none"
                            />
                            <Input
                              value={secondaryColor}
                              onChange={(e) => setSecondaryColor(e.target.value)}
                              className="flex-1 text-xs font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Intensity Slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <Label className="font-rajdhani font-medium">Monster Intensity</Label>
                        <span className="text-sm text-primary font-rajdhani">{intensity[0]}%</span>
                      </div>
                      <Slider
                        value={intensity}
                        onValueChange={setIntensity}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Generate Button */}
                    <Button 
                      variant="hero" 
                      className="w-full" 
                      size="lg"
                      onClick={handleGenerate}
                      disabled={!prompt || isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="h-5 w-5 mr-2" />
                          Generate Monster
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="upload" className="space-y-6">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div>
                        <h3 className="font-orbitron font-bold mb-2">Upload Your Artwork</h3>
                        <p className="text-sm text-muted-foreground font-rajdhani">
                          Drop your image here or click to browse
                        </p>
                      </div>
                      <Button variant="outline">Choose File</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Designs */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h3 className="font-orbitron font-bold text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Recent Creations
                </h3>
                <div className="space-y-3">
                  {recentDesigns.map((design) => (
                    <div key={design.id} className="p-3 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-xs">{design.style}</Badge>
                        <span className="text-xs text-muted-foreground">{design.timestamp}</span>
                      </div>
                      <p className="text-sm font-rajdhani">{design.prompt}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Preview */}
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg relative overflow-hidden">
                  {isGenerating ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <div className="space-y-2">
                          <p className="font-orbitron font-bold text-lg">Summoning Your Monster...</p>
                          <p className="text-sm text-muted-foreground font-rajdhani">AI is crafting your design</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="text-8xl font-orbitron font-black text-muted-foreground/20">
                          AKUMA
                        </div>
                        <p className="text-muted-foreground font-rajdhani">
                          Your AI-generated design will appear here
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-primary/20 rounded-full animate-float blur-xl"></div>
                  <div className="absolute bottom-12 right-12 w-16 h-16 bg-secondary/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="outline" disabled={isGenerating}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Design
                  </Button>
                  <Button variant="outline" disabled={isGenerating}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" disabled={isGenerating}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="cyber" disabled={isGenerating}>
                    <Eye className="h-4 w-4 mr-2" />
                    3D Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mockup Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {garments.map((garment) => (
                <Card key={garment.id} className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${selectedGarment === garment.id ? 'border-primary shadow-neon' : ''}`}>
                  <CardContent className="p-4 text-center">
                    <div className="aspect-square bg-muted/20 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-3xl">{garment.preview}</span>
                    </div>
                    <p className="text-sm font-rajdhani font-medium">{garment.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudioPage;