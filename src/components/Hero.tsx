import { Button } from "@/components/ui/button";
import { Play, Star, Calendar } from "lucide-react";
import heroImage from "@/assets/anime-hero.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Anime Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-anime-pink/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-anime-purple/15 rounded-full animate-float delay-1000 blur-sm"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-anime-coral/25 rounded-full animate-float delay-2000 blur-sm"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Featured Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Featured Anime</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Amazing
            <span className="block bg-gradient-to-r from-anime-pink to-anime-coral bg-clip-text text-transparent">
              Anime Series
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tonton ribuan anime terbaik dengan kualitas HD. Dari action epic hingga romance yang menyentuh hati.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-10 text-white/80">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span className="text-sm font-medium">1000+ Episodes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">4.9 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Updated Daily</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 h-auto animate-glow-pulse"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 h-auto"
            >
              Browse Library
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;