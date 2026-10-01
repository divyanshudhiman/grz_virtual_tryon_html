import { DemoShowcase } from "./components/DemoShowcase";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { JourneySection } from "./components/JourneySection";
import { PlatformSection } from "./components/PlatformSection";

export default function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-clip supports-[padding:max(0px)]:pb-[env(safe-area-inset-bottom)]">
      <Header />
      <main>
        <Hero />
        <DemoShowcase />
        <FeatureGrid />
        <PlatformSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}
