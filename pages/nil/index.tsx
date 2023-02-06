import { CtaSection } from "../../components-nil/CtaSection";
import { StatsSection } from "../../components-nil/StatsSection";
import { LogoCloudSection } from "../../components-nil/LogoCloudSection";
import { HeroSection } from "../../components-nil/HeroSection";
import { Header } from "../../components-nil/Header";
import { FeatureSection } from "../../components-nil/FeatureSection";
import { Footer } from "../../components-nil/Footer";
import { AlternatingFeatureSection } from "../../components-nil/AlternatingFeatureSection";


export default function Example() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoCloudSection />
        <AlternatingFeatureSection />
        <FeatureSection />
        {/* <StatsSection /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
