import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, including your name, email address, shipping address, payment information, and order history. We also automatically collect certain information about your device when you use our website, including your IP address, browser type, and browsing behavior.`
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to process your orders, communicate with you about your purchases, improve our website and services, personalize your shopping experience, and send you marketing communications (with your consent). We may also use your information to comply with legal obligations and protect our rights.`
    },
    {
      title: "Information Sharing",
      content: `We do not sell your personal information. We may share your information with service providers who help us operate our business (such as payment processors and shipping companies), when required by law, or with your consent. All service providers are contractually obligated to protect your information.`
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      title: "Your Rights",
      content: `You have the right to access, correct, or delete your personal information. You can opt out of marketing communications at any time. If you're in the EU or California, you may have additional rights under GDPR or CCPA. Contact us to exercise your rights.`
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, though some features may not function properly if you disable cookies.`
    },
    {
      title: "Children's Privacy",
      content: `Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.`
    },
    {
      title: "Changes to This Policy",
      content: `We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our website constitutes acceptance of the updated policy.`
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
            PRIVACY POLICY
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-rajdhani">
            <Shield className="h-5 w-5" />
            <p className="text-sm">Last Updated: January 2025</p>
          </div>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection className="mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <p className="text-muted-foreground font-rajdhani leading-relaxed">
                At Akuma, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases. Please read this policy carefully. By using our website, you consent to the practices described in this policy.
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
              <h3 className="text-xl font-orbitron font-bold mb-3">Questions About Privacy?</h3>
              <p className="text-muted-foreground font-rajdhani mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <a href="mailto:privacy@akuma.monster" className="text-primary hover:underline font-rajdhani">
                privacy@akuma.monster
              </a>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
