import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Star, Calendar, Heart, Settings } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface UserProfile {
  displayName: string;
  bio: string;
  avatar: string;
  favoriteGenres: string[];
  watchedAnime: number;
  joinDate: string;
  location: string;
  website: string;
}

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>({
    displayName: '',
    bio: '',
    avatar: '',
    favoriteGenres: [],
    watchedAnime: 0,
    joinDate: new Date().toLocaleDateString(),
    location: '',
    website: ''
  });

  // Load profile from localStorage
  useEffect(() => {
    if (currentUser) {
      const savedProfile = localStorage.getItem(`profile-${currentUser.uid}`);
      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      } else {
        setProfile(prev => ({
          ...prev,
          displayName: currentUser.displayName || '',
          avatar: currentUser.photoURL || ''
        }));
      }
    }
  }, [currentUser]);


  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Please login to view your profile</h1>
          <Button className="bg-gradient-primary">Login</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-anime-pink/10 to-anime-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              User Profile
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your anime journey and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-anime-pink/30">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback className="bg-anime-pink text-white text-3xl">
                        {profile.displayName.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {profile.displayName || 'Anime Fan'}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {profile.bio || 'No bio available'}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {profile.joinDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{profile.watchedAnime} Anime Watched</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => navigate('/edit-profile')}
                      className="bg-gradient-primary"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-anime-pink" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-muted-foreground">Email</Label>
                    <p className="font-medium">{currentUser.email}</p>
                  </div>
                  {profile.location && (
                    <div>
                      <Label className="text-muted-foreground">Location</Label>
                      <p className="font-medium">{profile.location}</p>
                    </div>
                  )}
                  {profile.website && (
                    <div>
                      <Label className="text-muted-foreground">Website</Label>
                      <a 
                        href={profile.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-anime-pink hover:underline"
                      >
                        {profile.website}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Favorite Genres */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-anime-pink" />
                    Favorite Genres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.favoriteGenres.length === 0 ? (
                      <p className="text-muted-foreground">No favorite genres selected</p>
                    ) : (
                      profile.favoriteGenres.map(genre => (
                        <Badge 
                          key={genre} 
                          className="bg-anime-pink/20 text-anime-pink border-anime-pink/30"
                        >
                          {genre}
                        </Badge>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfilePage;