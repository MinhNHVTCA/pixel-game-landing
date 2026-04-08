import PixelNav from "@/components/PixelNav";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import PixelFooter from "@/components/PixelFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PixelNav />
      <HeroSection />
      <GamesSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <PixelFooter />
    </div>
  );
};

export default Index;
