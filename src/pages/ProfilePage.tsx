import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useFavorites } from '@/hooks/useFavorites';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { MapPin, Globe, Mail, Calendar, Heart, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();
  const { profile, loading } = useProfile();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
            <Button onClick={() => navigate('/login')}>
              Go to Login
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading profile...</div>
        </div>
        <Footer />
      </div>
    );
  }

  const animeCount = favorites.filter(f => f.content_type === 'anime').length;
  const storyCount = favorites.filter(f => f.content_type === 'story').length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">User Profile</h1>
          <p className="text-xl mb-8">Manage your anime streaming experience</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Header */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profile?.avatar_url || ''} />
                    <AvatarFallback className="text-2xl">
                      {profile?.display_name?.[0]?.toUpperCase() || currentUser.email?.[0]?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">
                      {profile?.display_name || 'Anonymous User'}
                    </h1>
                    <p className="text-muted-foreground mb-4">
                      {profile?.bio || 'No bio available'}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Recently'}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Play className="w-4 h-4 mr-1" />
                        {profile?.watched_anime || 0} anime watched
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Heart className="w-4 h-4 mr-1" />
                        {animeCount + storyCount} favorites
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => navigate('/edit-profile')}>
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                <div className="flex items-center mt-1">
                  <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>{currentUser.email}</span>
                </div>
              </div>
              
              {profile?.location && (
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                  <div className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              )}
              
              {profile?.website && (
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Website</Label>
                  <div className="flex items-center mt-1">
                    <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {profile.website}
                    </a>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Favorite Genres */}
          <Card>
            <CardHeader>
              <CardTitle>Favorite Genres</CardTitle>
            </CardHeader>
            <CardContent>
              {profile?.favorite_genres && profile.favorite_genres.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.favorite_genres.map((genre, index) => (
                    <Badge key={index} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No favorite genres selected</p>
              )}
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Anime Watched:</span>
                <span className="font-semibold">{profile?.watched_anime || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Favorite Anime:</span>
                <span className="font-semibold">{animeCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Favorite Stories:</span>
                <span className="font-semibold">{storyCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Favorites:</span>
                <span className="font-semibold">{animeCount + storyCount}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;