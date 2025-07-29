import { Star, Play, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Anime } from "@/data/animeData";
import { Link } from "react-router-dom";

interface AnimeCardProps {
  anime: Anime;
  index?: number;
}

const AnimeCard = ({ anime, index = 0 }: AnimeCardProps) => {
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
    <div
      className="group relative bg-gradient-card rounded-2xl overflow-hidden hover:shadow-card-anime transition-all duration-500 hover:-translate-y-2 animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={anime.thumbnail}
          alt={anime.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="icon"
              className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm group-hover:scale-110 transition-all duration-300"
            >
              <Play className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={`${getStatusColor(anime.status)} border font-medium`}>
            {anime.status}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute top-3 left-3 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{anime.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {anime.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {anime.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{anime.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{anime.episodes} eps</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {anime.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Watch Button */}
        <Link to={`/anime/${anime.id}`}>
          <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group-hover:scale-105">
            <Play className="w-4 h-4 mr-2" />
            Watch Now
          </Button>
        </Link>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default AnimeCard;