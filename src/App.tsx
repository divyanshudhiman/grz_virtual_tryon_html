import { CtaBand } from "./components/CtaBand";
import { DemoShowcase } from "./components/DemoShowcase";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { JourneySection } from "./components/JourneySection";
import { PlatformSection } from "./components/PlatformSection";
import { UseSection } from "./components/UseSection";

export default function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-clip supports-[padding:max(0px)]:pb-[env(safe-area-inset-bottom)]">
      <Header />
      <main>
        {/* 1 · Position + primary CTAs */}
        <Hero />
        {/* 2 · Proof (recorded demos) */}
        <DemoShowcase />
        {/* 3 · Mechanism */}
        <JourneySection />
        {/* 4 · Deployment / roles */}
        <UseSection />
        {/* 5 · Outcomes */}
        <PlatformSection />
        {/* 6 · Business rationale */}
        <FeatureGrid />
        {/* 7 · Conversion (only duplicate primary block) */}
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
