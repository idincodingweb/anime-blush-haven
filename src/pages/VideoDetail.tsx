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
  User,
  ThumbsUp,
  ThumbsDown,
  Info,
  Image as ImageIcon
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={anime.thumbnail}
          alt={anime.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-16">
        {!showContent ? (
          // Beautiful Loading Skeleton with glassmorphism
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <div className="w-20 h-20 border-4 border-anime-pink border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold text-white mb-2">Loading Experience...</h2>
              <p className="text-white/70">Preparing your anime journey</p>
            </div>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
              <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link to="/">
                  <Button variant="ghost" className="mb-8 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Library
                  </Button>
                </Link>

                {/* Main Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Video Player */}
                  <div className="order-2 lg:order-1">
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-black/50 backdrop-blur-sm shadow-2xl border border-white/10">
                      {isVideoLoading ? (
                        <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 border-4 border-anime-pink border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
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

                  {/* Movie Info */}
                  <div className="order-1 lg:order-2 text-white">
                    {/* Header Tabs */}
                    <div className="flex items-center space-x-8 mb-8">
                      {['Description', 'Playlist', 'Profile', 'Next movie'].map((tab, index) => (
                        <button
                          key={tab}
                          className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                            index === 0 
                              ? 'border-white text-white' 
                              : 'border-transparent text-white/60 hover:text-white/80'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Character Labels */}
                    <div className="mb-8 space-y-4">
                      <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/30">
                        Main Characters
                      </div>
                      <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/30 ml-4">
                        Featured Cast
                      </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                      {anime.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-white/80 mb-6">
                      {anime.title} {/* Japanese/Original title */}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80">
                      <span>{anime.year}</span>
                      <span>•</span>
                      <span className="capitalize">{anime.category}/Fantasy</span>
                      <span>•</span>
                      <span>{anime.episodes} episodes</span>
                    </div>

                    {/* Rating Percentage */}
                    <div className="mb-8">
                      <p className="text-lg mb-2">
                        <span className="text-2xl font-bold text-green-400">
                          {Math.round(anime.rating * 20)}%
                        </span>{' '}
                        menyukai film ini
                      </p>
                      <p className="text-white/60 text-sm">Pengguna google</p>
                    </div>

                    {/* Rating Buttons */}
                    <div className="flex items-center space-x-4 mb-8">
                      <Button
                        size="lg"
                        className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 rounded-full backdrop-blur-sm"
                      >
                        <ThumbsUp className="w-5 h-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded-full backdrop-blur-sm"
                      >
                        <ThumbsDown className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Button 
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 rounded-full px-8"
                      >
                        Ringkasan
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full px-8 backdrop-blur-sm"
                      >
                        Ulasan
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full px-8 backdrop-blur-sm"
                      >
                        Cuplikan dan klip
                      </Button>
                    </div>

                    {/* Description */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <p className="text-white/90 leading-relaxed">
                        {anime.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Screenshot Gallery */}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative group">
                      <img
                        src={anime.thumbnail}
                        alt={`Screenshot ${i}`}
                        className="w-full h-32 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-end">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 rounded-full"
                  >
                    Lihat semua
                    <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Moral Story Section */}
            <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Moral Story</h2>
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                  <p className="text-xl text-white/90 leading-relaxed mb-6">
                    Ingatan manusia memanggilah terbatas. Namun apa yang melekat dalam hati takkan pernah selesai dimakan waktu. Berapapun lamanya, sejauh apapun jaraknya, dan serumit apapun alurnya. Ketulislah dalam hati akan selalu nememu tempat untuk pulang.
                  </p>
                  <p className="text-white/60">
                    Himawari.2022
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Comments Section */}
        {showContent && (
          <section className="relative z-10 py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
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