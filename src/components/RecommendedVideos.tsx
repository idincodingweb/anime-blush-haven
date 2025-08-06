import { useState, useEffect } from "react";
import { Anime, animeData } from "@/data/animeData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface RecommendedVideosProps {
  currentAnimeId: string;
  category?: string;
}

const RecommendedVideos = ({ currentAnimeId, category }: RecommendedVideosProps) => {
  const [recommendations, setRecommendations] = useState<Anime[]>([]);

  useEffect(() => {
    // Get recommendations based on category and rating
    const filtered = animeData
      .filter(anime => anime.id !== currentAnimeId)
      .filter(anime => category ? anime.category === category : true)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);

    // If not enough from same category, add popular ones
    if (filtered.length < 6) {
      const additional = animeData
        .filter(anime => anime.id !== currentAnimeId)
        .filter(anime => !filtered.some(f => f.id === anime.id))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6 - filtered.length);
      
      setRecommendations([...filtered, ...additional]);
    } else {
      setRecommendations(filtered);
    }
  }, [currentAnimeId, category]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "upcoming":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            You Might Also Like
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover more amazing anime series similar to what you're watching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((anime, index) => (
            <Card 
              key={anime.id} 
              className="group bg-black/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={anime.thumbnail}
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link to={`/anime/${anime.id}`}>
                      <Button
                        size="icon"
                        className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm group-hover:scale-110 transition-all duration-300"
                      >
                        <Play className="w-5 h-5 text-white" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <Badge className={`${getStatusColor(anime.status)} border font-medium text-xs`}>
                    {anime.status}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-3 left-3 flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{anime.rating}</span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                  {anime.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {anime.description}
                </p>

                <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                  <span>{anime.year}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{anime.episodes} eps</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {anime.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link to={`/anime/${anime.id}`}>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm"
                  >
                    <Play className="w-3 h-3 mr-2" />
                    Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedVideos;