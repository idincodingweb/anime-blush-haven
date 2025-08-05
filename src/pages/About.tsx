import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Code, 
  Sparkles, 
  Users, 
  Play, 
  Star,
  Github,
  Mail,
  Globe
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "High Quality Streaming",
      description: "Watch your favorite anime in HD quality with smooth streaming experience."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Reviews",
      description: "Share your thoughts and read reviews from fellow anime enthusiasts."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Curated Collection",
      description: "Carefully selected anime series from various genres and time periods."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Friendly",
      description: "Clean, modern interface designed for the best viewing experience."
    }
  ];

  const stats = [
    { number: "1000+", label: "Anime Episodes" },
    { number: "50+", label: "Different Series" },
    { number: "10K+", label: "Happy Users" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-anime-pink/20 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-anime-purple/15 rounded-full animate-float delay-1000 blur-sm"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About 
                <span className="bg-gradient-to-r from-anime-pink to-anime-coral bg-clip-text text-transparent">
                  AnimeStream
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Your ultimate destination for discovering and watching amazing anime series
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that anime is more than just entertainment—it's an art form that brings people together, 
                tells incredible stories, and creates lasting memories. Our mission is to provide the best platform 
                for anime lovers to discover, watch, and discuss their favorite series.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 bg-gradient-card hover:shadow-card-anime transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Meet the Developer
                </h2>
                <p className="text-xl text-muted-foreground">
                  Passion-driven development meets anime love
                </p>
              </div>

              <Card className="p-8 bg-gradient-card shadow-card-anime">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Developer Avatar */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-glow">
                      II
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-card flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Developer Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      Idin Iskandar
                    </h3>
                    <p className="text-lg text-primary mb-4 font-medium">
                      Full Stack Developer & Anime Enthusiast
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Halo! Saya Idin Iskandar, seorang developer yang passionate dengan teknologi web modern 
                      dan anime. Website AnimeStream ini dibuat dengan cinta untuk komunitas anime Indonesia. 
                      Dengan menggunakan React, TypeScript, dan Tailwind CSS, saya menciptakan pengalaman 
                      streaming yang modern dan user-friendly.
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                      {["React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "UI/UX Design"].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Contact Links */}
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:text-primary" />
                        GitHub
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group"
                      >
                        <Mail className="w-4 h-4 mr-2 group-hover:text-primary" />
                        Email
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group"
                      >
                        <Globe className="w-4 h-4 mr-2 group-hover:text-primary" />
                        Portfolio
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built with Modern Technology
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                AnimeStream menggunakan teknologi web terdepan untuk memberikan pengalaman terbaik
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: "React", desc: "UI Framework" },
                  { name: "TypeScript", desc: "Type Safety" },
                  { name: "Tailwind CSS", desc: "Styling" },
                  { name: "Vite", desc: "Build Tool" }
                ].map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      {tech.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-anime-coral/20 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-anime-lavender/25 rounded-full animate-float delay-1000 blur-sm"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Watching?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan penonton anime lainnya dan nikmati koleksi terbaik kami
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Watching Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 h-auto"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Collection
              </Button>
            </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;