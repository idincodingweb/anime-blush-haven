import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Camera, Save, ArrowLeft } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
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

const EditProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
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

  const saveProfile = () => {
    if (currentUser) {
      localStorage.setItem(`profile-${currentUser.uid}`, JSON.stringify(profile));
      toast({
        title: "Profile Updated",
        description: "Your profile has been saved successfully!",
      });
      navigate('/profile');
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile(prev => ({
          ...prev,
          avatar: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Please login to edit your profile</h1>
          <Button className="bg-gradient-primary" onClick={() => navigate('/login')}>Login</Button>
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
              Edit Profile
            </h1>
            <p className="text-xl text-muted-foreground">
              Update your information and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Edit Profile Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => navigate('/profile')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Profile
            </Button>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Edit Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Upload */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-anime-pink/30">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback className="bg-anime-pink text-white text-3xl">
                        {profile.displayName.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <label className="absolute bottom-0 right-0 bg-anime-pink rounded-full p-2 cursor-pointer hover:bg-anime-pink/80 transition-colors">
                      <Camera className="w-4 h-4 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Click the camera icon to upload a new profile picture
                  </p>
                </div>

                {/* Display Name */}
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={profile.displayName}
                    onChange={(e) => setProfile(prev => ({ ...prev, displayName: e.target.value }))}
                    placeholder="Enter your display name"
                  />
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Your location"
                  />
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={profile.website}
                    onChange={(e) => setProfile(prev => ({ ...prev, website: e.target.value }))}
                    placeholder="Your website URL"
                  />
                </div>

                {/* Watched Anime Count */}
                <div className="space-y-2">
                  <Label htmlFor="watchedAnime">Watched Anime Count</Label>
                  <Input
                    id="watchedAnime"
                    type="number"
                    value={profile.watchedAnime}
                    onChange={(e) => setProfile(prev => ({ ...prev, watchedAnime: parseInt(e.target.value) || 0 }))}
                    placeholder="Number of anime watched"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button 
                    onClick={saveProfile} 
                    className="bg-gradient-primary flex-1"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/profile')}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditProfilePage;