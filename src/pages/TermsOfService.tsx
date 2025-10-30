import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using the Akuma website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time without prior notice.`
    },
    {
      title: "Use of Website",
      content: `You agree to use our website only for lawful purposes. You may not use our website in any way that could damage, disable, overburden, or impair our servers or networks. You may not attempt to gain unauthorized access to any part of our website.`
    },
    {
      title: "Product Information",
      content: `We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, or error-free. We reserve the right to correct any errors and to change or update information at any time without prior notice.`
    },
    {
      title: "Orders and Payment",
      content: `All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Payment must be received before orders are processed. We accept major credit cards and other payment methods as displayed on our website.`
    },
    {
      title: "Intellectual Property",
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Akuma or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`
    },
    {
      title: "AI-Generated Designs",
      content: `For custom AI-generated designs, you grant us a license to use your input to create designs. You retain ownership of approved final designs, but we reserve the right to use anonymized data to improve our AI systems. AI-generated products are final sale and cannot be returned.`
    },
    {
      title: "User Accounts",
      content: `You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.`
    },
    {
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by law, Akuma shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products. Our total liability shall not exceed the amount you paid for the product.`
    },
    {
      title: "Governing Law",
      content: `These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the appropriate courts.`
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-primary text-primary neon-glow">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black gradient-text">
            TERMS OF SERVICE
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-rajdhani">
            <FileText className="h-5 w-5" />
            <p className="text-sm">Last Updated: January 2025</p>
          </div>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection className="mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <p className="text-muted-foreground font-rajdhani leading-relaxed">
                Welcome to Akuma. These Terms of Service govern your use of our website and the purchase of our products. By using our website, you agree to comply with and be bound by these terms. Please review them carefully before making any purchase or using our services.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <AnimatedSection key={section.title} animation="fade-up" delay={index * 50}>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl font-orbitron font-bold gradient-text">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-muted-foreground font-rajdhani leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Contact */}
        <AnimatedSection className="mt-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-orbitron font-bold mb-3">Questions About These Terms?</h3>
              <p className="text-muted-foreground font-rajdhani mb-4">
                If you have any questions about our Terms of Service, please contact us at:
              </p>
              <a href="mailto:legal@akuma.monster" className="text-primary hover:underline font-rajdhani">
                legal@akuma.monster
              </a>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsOfService;
