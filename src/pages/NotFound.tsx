import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
      
      <div className="relative z-10">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-anime-pink/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-anime-purple/15 rounded-full animate-float delay-1000 blur-sm"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-8xl md:text-9xl font-bold text-white/20 mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Oops! Page not found
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The anime you're looking for seems to have disappeared into another dimension. 
              Let's help you find your way back!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 h-auto">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Home
                </Button>
              </Link>
              <Link to="/#popular">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 h-auto"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse Anime
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
