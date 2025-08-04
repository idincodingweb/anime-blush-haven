import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { animeData } from "@/data/animeData";
import { 
  Star, 
  Calendar, 
  Users, 
  Play, 
  Heart, 
  Share2, 
  Download,
  ChevronLeft,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import CommentSection from "@/components/CommentSection";

const VideoDetail = () => {
  const { id } = useParams();
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const anime = animeData.find(a => a.id === id);

  useEffect(() => {
    // Simulate video loading and auto-play delay
    const timer = setTimeout(() => {
      setIsVideoLoading(false);
      // Show content after video starts loading
      setTimeout(() => {
        setShowContent(true);
      }, 1500); // Delay to allow auto-play to start
    }, 2000); // Initial loading delay

    return () => clearTimeout(timer);
  }, []);

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Anime not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const renderStars = (rating: number, interactive = false, size = "w-5 h-5") => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} cursor-pointer transition-colors ${
              star <= rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
            onClick={interactive ? () => setUserRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Video Player Section */}
        <section className="relative bg-black">
          <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            {/* Video Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              {isVideoLoading ? (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading video...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${anime.youtubeId}?autoplay=1&controls=1&rel=0&mute=1`}
                  title={anime.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {!showContent ? (
              // Loading Skeleton
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <Skeleton className="h-12 w-3/4" />
                  <div className="flex gap-4">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                  <div className="flex gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="h-8 w-16" />
                    ))}
                  </div>
                  <Skeleton className="h-32 w-full" />
                </div>
                <div className="space-y-6">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-64 w-full" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Title and Meta */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        {anime.title}
                      </h1>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setIsLiked(!isLiked)}
                          className={isLiked ? "text-red-500 border-red-500" : ""}
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share2 className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {/* Rating and Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <div className="flex items-center space-x-2">
                        {renderStars(Math.floor(anime.rating))}
                        <span className="font-semibold text-foreground">{anime.rating}</span>
                        <span className="text-muted-foreground">(1,234 reviews)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{anime.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{anime.episodes} episodes</span>
                      </div>
                      <Badge className={`${getStatusColor(anime.status)} border font-medium`}>
                        {anime.status}
                      </Badge>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {anime.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {anime.description}
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Stats */}
                  <div className="bg-gradient-card rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Genre</span>
                        <span className="text-foreground font-medium capitalize">{anime.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <span className="text-foreground font-medium capitalize">{anime.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Episodes</span>
                        <span className="text-foreground font-medium">{anime.episodes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Release Year</span>
                        <span className="text-foreground font-medium">{anime.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating</span>
                        <span className="text-foreground font-medium">{anime.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Watch Actions */}
                  <div className="bg-gradient-card rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Watch Options</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-primary">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Watching
                      </Button>
                      <Button variant="outline" className="w-full">
                        Add to Watchlist
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Episode
                      </Button>
                    </div>
                  </div>

                  {/* Related Anime */}
                  <div className="bg-gradient-card rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">You Might Also Like</h3>
                    <div className="space-y-4">
                      {animeData
                        .filter(a => a.category === anime.category && a.id !== anime.id)
                        .slice(0, 3)
                        .map((relatedAnime) => (
                          <Link
                            key={relatedAnime.id}
                            to={`/anime/${relatedAnime.id}`}
                            className="flex items-center space-x-3 group hover:bg-secondary/30 p-2 rounded-lg transition-colors"
                          >
                            <img
                              src={relatedAnime.thumbnail}
                              alt={relatedAnime.title}
                              className="w-16 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {relatedAnime.title}
                              </h4>
                              <div className="flex items-center space-x-1 mt-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-muted-foreground">{relatedAnime.rating}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Comments Section */}
        {showContent && (
          <section className="py-20 bg-background/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <CommentSection videoId={id || ''} />
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VideoDetail;