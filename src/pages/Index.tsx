import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import AnimeGrid from "@/components/AnimeGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
      
      <div className="relative z-10">
      <Navbar />
      <Hero />
      <CategorySection />
      <AnimeGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
