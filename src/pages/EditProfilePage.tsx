import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AVAILABLE_GENRES = [
  'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 
  'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller'
];

const EditProfilePage: React.FC = () => {
  const { currentUser } = useAuth();
  const { profile, updateProfile, loading } = useProfile();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    display_name: '',
    bio: '',
    avatar_url: '',
    location: '',
    website: '',
    watched_anime: 0,
    favorite_genres: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData({
        display_name: profile.display_name || '',
        bio: profile.bio || '',
        avatar_url: profile.avatar_url || '',
        location: profile.location || '',
        website: profile.website || '',
        watched_anime: profile.watched_anime || 0,
        favorite_genres: profile.favorite_genres || []
      });
    }
  }, [profile]);

  const handleSave = async () => {
    if (!currentUser) return;

    setIsSubmitting(true);
    try {
      const { error } = await updateProfile(formData);
      if (error) {
        toast({
          title: "Error",
          description: "Failed to update profile",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success",
          description: "Profile updated successfully"
        });
        navigate('/profile');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, avatar_url: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleGenre = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      favorite_genres: prev.favorite_genres.includes(genre)
        ? prev.favorite_genres.filter(g => g !== genre)
        : [...prev.favorite_genres, genre]
    }));
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please log in to edit your profile</h1>
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
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Edit Profile</h1>
          <p className="text-xl mb-8">Customize your anime streaming experience</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={formData.avatar_url} />
                  <AvatarFallback className="text-lg">
                    {formData.display_name?.[0]?.toUpperCase() || currentUser.email?.[0]?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                  onClick={() => document.getElementById('avatar-upload')?.click()}
                >
                  <Camera className="w-4 h-4" />
                </Button>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="text-sm text-muted-foreground">Click the camera icon to upload a new avatar</p>
            </div>

            {/* Display Name */}
            <div className="space-y-2">
              <Label htmlFor="display-name">Display Name</Label>
              <Input
                id="display-name"
                value={formData.display_name}
                onChange={(e) => setFormData(prev => ({ ...prev, display_name: e.target.value }))}
                placeholder="Enter your display name"
              />
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Tell us about yourself..."
                className="min-h-[100px]"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Where are you from?"
              />
            </div>

            {/* Website */}
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                placeholder="https://your-website.com"
              />
            </div>

            {/* Watched Anime Count */}
            <div className="space-y-2">
              <Label htmlFor="watched-anime">Anime Watched</Label>
              <Input
                id="watched-anime"
                type="number"
                min="0"
                value={formData.watched_anime}
                onChange={(e) => setFormData(prev => ({ ...prev, watched_anime: parseInt(e.target.value) || 0 }))}
                placeholder="How many anime have you watched?"
              />
            </div>

            {/* Favorite Genres */}
            <div className="space-y-2">
              <Label>Favorite Genres</Label>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_GENRES.map((genre) => (
                  <Button
                    key={genre}
                    variant={formData.favorite_genres.includes(genre) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleGenre(genre)}
                    className="text-xs"
                  >
                    {genre}
                    {formData.favorite_genres.includes(genre) && (
                      <X className="w-3 h-3 ml-1" />
                    )}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Selected: {formData.favorite_genres.length} genres
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Button onClick={handleSave} disabled={isSubmitting} className="flex-1">
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button variant="outline" onClick={() => navigate('/profile')} className="flex-1">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default EditProfilePage;