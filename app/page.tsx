import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import StorePreview from "./components/StorePreview";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StorePreview />
        <Community />
      </main>
      <Footer />
    </div>
  );
}