import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import AnimeGrid from "@/components/AnimeGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategorySection />
      <AnimeGrid />
      <Footer />
    </div>
  );
};

export default Index;
