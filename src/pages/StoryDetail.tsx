import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Clock, User, Calendar, BookOpen, Share2, Heart, Star } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allAnimeStories } from "@/data/storyData";

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  const story = allAnimeStories.find(s => s.id === id);

  useEffect(() => {
    if (id) {
      // Load saved data from localStorage
      const savedLike = localStorage.getItem(`story-liked-${id}`);
      const savedLikeCount = localStorage.getItem(`story-likes-${id}`);
      const savedRating = localStorage.getItem(`story-rating-${id}`);
      const savedUserRating = localStorage.getItem(`story-user-rating-${id}`);

      setIsLiked(savedLike === 'true');
      setLikeCount(parseInt(savedLikeCount || '0'));
      setRating(parseFloat(savedRating || '4.5'));
      setUserRating(parseInt(savedUserRating || '0'));
    }
  }, [id]);

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Cerita tidak ditemukan</h1>
          <Button onClick={() => navigate('/stories')} className="bg-gradient-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Story List
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    const newLiked = !isLiked;
    const newLikeCount = newLiked ? likeCount + 1 : Math.max(0, likeCount - 1);
    
    setIsLiked(newLiked);
    setLikeCount(newLikeCount);
    
    localStorage.setItem(`story-liked-${id}`, newLiked.toString());
    localStorage.setItem(`story-likes-${id}`, newLikeCount.toString());
    
    toast({
      title: newLiked ? "Story disukai!" : "Like dibatalkan",
      description: newLiked ? "Terima kasih atas dukungannya!" : "Like telah dihapus",
    });
  };

  const handleRating = (newRating: number) => {
    setUserRating(newRating);
    // Calculate new average rating (simplified)
    const newAverage = ((rating * 10) + newRating) / 11;
    setRating(Math.round(newAverage * 10) / 10);
    
    localStorage.setItem(`story-user-rating-${id}`, newRating.toString());
    localStorage.setItem(`story-rating-${id}`, newAverage.toString());
    
    toast({
      title: "Rating tersimpan!",
      description: `Anda memberikan rating ${newRating} bintang`,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: story.title,
          text: story.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link tersalin!",
        description: "Link cerita telah disalin ke clipboard",
      });
    }
  };

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 text-foreground leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  // Related stories (same category)
  const relatedStories = allAnimeStories
    .filter(s => s.category === story.category && s.id !== story.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Story Header */}
      <section className="py-8 bg-gradient-to-br from-anime-pink/10 to-anime-purple/10">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/stories')}
            className="mb-6 hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Stories
          </Button>
          
          <div className="max-w-4xl">
            <Badge className="bg-anime-pink/20 text-anime-pink border-anime-pink/30 mb-4">
              {story.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              {story.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 animate-fade-in">
              {story.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {story.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(story.publishDate).toLocaleDateString('id-ID')}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {story.readTime}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                {rating}/5 ({likeCount} likes)
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleLike}
                variant="outline"
                className={`${isLiked ? 'bg-red-500/20 text-red-500 border-red-500/30' : ''} hover-scale`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Disukai' : 'Suka'} ({likeCount})
              </Button>
              
              <Button onClick={handleShare} variant="outline" className="hover-scale">
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  {formatContent(story.content)}
                </div>
              </CardContent>
            </Card>

            {/* Rating Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
              <CardHeader>
                <CardTitle>Berikan Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Rating Anda:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className="hover:scale-110 transition-transform"
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            star <= userRating 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Klik bintang untuk memberikan rating pada cerita ini
                </p>
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {story.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="hover-scale">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Related Stories */}
            {relatedStories.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Cerita Serupa</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedStories.map((relatedStory) => (
                    <Card key={relatedStory.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover-scale">
                      <CardHeader className="pb-3">
                        <Badge className="bg-anime-pink/20 text-anime-pink border-anime-pink/30 mb-2 w-fit">
                          {relatedStory.category}
                        </Badge>
                        <CardTitle className="text-base leading-tight">
                          {relatedStory.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedStory.excerpt}
                        </p>
                        <Link to={`/story/${relatedStory.id}`}>
                          <Button size="sm" className="w-full bg-gradient-primary">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Baca
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoryDetail;