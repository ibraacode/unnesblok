import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import Features from "./components/Features";
import StorePreview from "./components/StorePreview";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <StatsSection />
        <Features />
        <StorePreview />
        <Community />
      </main>
      <Footer />
    </div>
  );
}