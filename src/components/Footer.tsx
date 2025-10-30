import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Github,
  Mail,
  MapPin,
  Zap
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/shop" },
        { name: "New Arrivals", href: "/shop/new" },
        { name: "Hoodies", href: "/shop/hoodies" },
        { name: "T-Shirts", href: "/shop/tshirts" },
        { name: "Jackets", href: "/shop/jackets" },
        { name: "Sale", href: "/shop/sale" },
      ],
    },
    {
      title: "Create",
      links: [
        { name: "AI Studio", href: "/ai-studio" },
        { name: "Custom Designs", href: "/custom" },
        { name: "Upload Artwork", href: "/upload" },
        { name: "Design Gallery", href: "/gallery" },
        { name: "Commission", href: "/commission" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Monster Manifesto", href: "/manifesto" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Shipping", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/akuma", name: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/akuma", name: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/akuma", name: "YouTube" },
    { icon: Github, href: "https://github.com/akuma", name: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-dark border-t border-border/40 relative overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section with enhanced effects */}
            <div className="lg:col-span-2 space-y-6 group">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Zap className="h-6 w-6 text-primary group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-300" />
                </div>
                <h2 className="text-3xl font-orbitron font-black gradient-text group-hover:scale-105 transition-transform duration-300">
                  AKUMA
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed max-w-md">
                  Monster-inspired streetwear meets cutting-edge AI. 
                  Unleash your inner beast with designs that evolve 
                  with your darkest imagination.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-rajdhani">Monster District, Cyber City</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-rajdhani">hello@akuma.monster</span>
                </div>
              </div>

              {/* Social Links with glow effects */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <div key={social.name} className="relative group">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5 relative z-10" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    </Button>
                    <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="font-orbitron font-bold text-lg text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani font-medium relative group"
                        >
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-muted-foreground font-rajdhani">
              <span>© 2024 Akuma. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm">Powered by AI</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground font-rajdhani">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Floating Glitch Text */}
        <div className="absolute bottom-4 right-4 text-6xl font-orbitron font-black text-foreground/5 pointer-events-none select-none">
          MONSTER
        </div>
      </div>
    </footer>
  );
};

export default Footer;