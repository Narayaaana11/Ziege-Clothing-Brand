import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AIStudioPreview from "@/components/AIStudioPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";
import { InteractiveOrbs, GlitchOverlay, CyberGrid, ParticleField } from "@/components/InteractiveElements";
import { ScrollProgressBar } from "@/components/EnhancedScrollEffects";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import SocialProof from "@/components/SocialProof";
import ProductReviews from "@/components/ProductReviews";
import RecentlyViewed from "@/components/RecentlyViewed";
import EnhancedSearch from "@/components/EnhancedSearch";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <ScrollProgressBar />
      <InteractiveOrbs />
      <GlitchOverlay />
      <CyberGrid />
      <ParticleField />
      <FloatingElements />
      
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,128,0.1),transparent_50%)] pointer-events-none" />
      
      <main className="relative z-10">
        <HeroSection />
        
        <SectionDivider />
        
        {/* Enhanced Search Bar */}
        <section className="py-8 -mt-8 relative z-20">
          <div className="container mx-auto px-6 flex justify-center">
            <EnhancedSearch />
          </div>
        </section>
        
        <SectionDivider />
        <FeaturedProducts />
        <SectionDivider />
        <SocialProof />
        <SectionDivider />
        <RecentlyViewed />
        <SectionDivider />
        <StatsSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ProductReviews />
        <SectionDivider />
        <BrandStorySection />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <ContactForm />
        <SectionDivider />
        <AIStudioPreview />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
