import { CtaBand } from "./components/CtaBand";
import { DemoShowcase } from "./components/DemoShowcase";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { IntroVideo } from "./components/IntroVideo";
import { PlatformSection } from "./components/PlatformSection";

export default function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-clip supports-[padding:max(0px)]:pb-[env(safe-area-inset-bottom)]">
      <Header />
      <main>
        <IntroVideo />
        <div className="hero-glow border-b border-[var(--color-line)]">
          <Hero />
          <DemoShowcase placement="top" />
        </div>
        <PlatformSection />
        <HowItWorksSection />
        <FeatureGrid />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
