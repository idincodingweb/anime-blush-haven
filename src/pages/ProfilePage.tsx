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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
        <div className="relative z-10">
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
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
        <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading profile...</div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }

  const animeCount = favorites.filter(f => f.content_type === 'anime').length;
  const storyCount = favorites.filter(f => f.content_type === 'story').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-white/5 backdrop-blur-sm text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">User Profile</h1>
            <p className="text-xl mb-8">Manage your anime streaming experience</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Header */}
            <div className="lg:col-span-3">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={profile?.avatar_url || ''} />
                      <AvatarFallback className="text-2xl">
                        {profile?.display_name?.[0]?.toUpperCase() || currentUser.email?.[0]?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center md:text-left">
                      <h1 className="text-3xl font-bold mb-2 text-white">
                        {profile?.display_name || 'Anonymous User'}
                      </h1>
                      <p className="text-white/80 mb-4">
                        {profile?.bio || 'No bio available'}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                        <div className="flex items-center text-sm text-white/70">
                          <Calendar className="w-4 h-4 mr-1" />
                          Joined {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Recently'}
                        </div>
                        <div className="flex items-center text-sm text-white/70">
                          <Play className="w-4 h-4 mr-1" />
                          {profile?.watched_anime || 0} anime watched
                        </div>
                        <div className="flex items-center text-sm text-white/70">
                          <Heart className="w-4 h-4 mr-1" />
                          {animeCount + storyCount} favorites
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => navigate('/edit-profile')} className="bg-gradient-primary">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Personal Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-white/70">Email</Label>
                  <div className="flex items-center mt-1">
                    <Mail className="w-4 h-4 mr-2 text-white/70" />
                    <span className="text-white">{currentUser.email}</span>
                  </div>
                </div>
                
                {profile?.location && (
                  <div>
                    <Label className="text-sm font-medium text-white/70">Location</Label>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-2 text-white/70" />
                      <span className="text-white">{profile.location}</span>
                    </div>
                  </div>
                )}
                
                {profile?.website && (
                  <div>
                    <Label className="text-sm font-medium text-white/70">Website</Label>
                    <div className="flex items-center mt-1">
                      <Globe className="w-4 h-4 mr-2 text-white/70" />
                      <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-anime-pink hover:underline">
                        {profile.website}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Favorite Genres */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Favorite Genres</CardTitle>
              </CardHeader>
              <CardContent>
                {profile?.favorite_genres && profile.favorite_genres.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {profile.favorite_genres.map((genre, index) => (
                      <Badge key={index} variant="secondary" className="bg-anime-pink/20 text-anime-pink border-anime-pink/30">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/70">No favorite genres selected</p>
                )}
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Anime Watched:</span>
                  <span className="font-semibold text-white">{profile?.watched_anime || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Favorite Anime:</span>
                  <span className="font-semibold text-white">{animeCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Favorite Stories:</span>
                  <span className="font-semibold text-white">{storyCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Favorites:</span>
                  <span className="font-semibold text-white">{animeCount + storyCount}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;