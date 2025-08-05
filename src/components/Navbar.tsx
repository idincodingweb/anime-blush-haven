import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Categories", path: "/#categories" },
    { name: "Popular", path: "/#popular" },
    { name: "About", path: "/about" },
    ...(currentUser ? [{ name: "Profile", path: "/profile" }] : []),
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:animate-glow-pulse transition-all duration-300">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-anime-pink to-anime-coral bg-clip-text text-transparent">
              AnimeStream
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-anime-pink relative group ${
                  isActive(link.path)
                    ? "text-anime-pink"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-anime-pink transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <User className="w-4 h-4 text-anime-pink" />
                  <span className="text-sm font-medium text-white">{currentUser.email}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleLogout}
                  className="hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 border-white/30 text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white">
                Login to Watch
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors px-2 py-1 rounded-md ${
                    isActive(link.path)
                      ? "text-anime-pink bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {currentUser ? (
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10">
                    <User className="w-4 h-4 text-anime-pink" />
                    <span className="text-sm font-medium text-white">{currentUser.email}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 border-white/30 text-white"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="default" 
                  className="bg-gradient-primary mt-4 w-full text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Login to Watch
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;