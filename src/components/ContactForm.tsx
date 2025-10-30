import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Mail, MessageSquare, User, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "support", label: "Customer Support", icon: User },
    { value: "ai", label: "AI Design Help", icon: Zap },
    { value: "collaboration", label: "Collaborations", icon: Mail },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general"
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center space-y-4 mb-12 sm:mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 neon-glow">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black">
            <span className="gradient-text">UNLEASH YOUR</span><br />
            <span className="glitch gradient-text" data-text="QUESTIONS">QUESTIONS</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Ready to join the monster revolution? Drop us a message and let's create something legendary together.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="slide-right" delay={200} className="lg:col-span-1 space-y-6">
            <div className="space-y-8">
              {categories.map((category, index) => (
                <div key={category.value} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-lg mb-1">{category.label}</h3>
                    <p className="text-muted-foreground font-rajdhani text-sm">
                      {category.value === "general" && "Questions about our products, shipping, or brand"}
                      {category.value === "support" && "Need help with your order or technical issues"}
                      {category.value === "ai" && "Get assistance with AI design features and customization"}
                      {category.value === "collaboration" && "Partnership opportunities and brand collaborations"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 space-y-4">
              <h3 className="font-orbitron font-bold text-lg gradient-text">Quick Response Times</h3>
              <div className="space-y-2 text-sm font-rajdhani">
                <div className="flex justify-between">
                  <span>General Inquiries:</span>
                  <span className="text-primary">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Support Issues:</span>
                  <span className="text-secondary">12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Design Help:</span>
                  <span className="text-accent">6 hours</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-left" delay={400} className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-orbitron">
                  <Send className="h-5 w-5 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-rajdhani font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your monster alias"
                        required
                        className="font-rajdhani"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-rajdhani font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="monster@example.com"
                        required
                        className="font-rajdhani"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="font-rajdhani font-medium">Category</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md font-rajdhani focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-rajdhani font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's on your mind?"
                      required
                      className="font-rajdhani"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-rajdhani font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your monster vision..."
                      required
                      rows={6}
                      className="font-rajdhani resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;