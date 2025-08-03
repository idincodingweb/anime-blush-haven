import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Favorite {
  id: string;
  user_id: string;
  content_type: string;
  content_id: string;
  created_at: string;
}

export const useFavorites = () => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching favorites:', error);
      } else {
        setFavorites(data || []);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = async (contentType: 'anime' | 'story', contentId: string) => {
    if (!currentUser) return { error: 'Not authenticated' };

    try {
      const { data, error } = await supabase
        .from('favorites')
        .insert({
          user_id: currentUser.id,
          content_type: contentType,
          content_id: contentId
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding to favorites:', error);
        return { error };
      }

      setFavorites(prev => [data, ...prev]);
      return { data };
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return { error };
    }
  };

  const removeFromFavorites = async (contentType: 'anime' | 'story', contentId: string) => {
    if (!currentUser) return { error: 'Not authenticated' };

    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', currentUser.id)
        .eq('content_type', contentType)
        .eq('content_id', contentId);

      if (error) {
        console.error('Error removing from favorites:', error);
        return { error };
      }

      setFavorites(prev => prev.filter(fav => 
        !(fav.content_type === contentType && fav.content_id === contentId)
      ));
      return { success: true };
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return { error };
    }
  };

  const isFavorite = (contentType: 'anime' | 'story', contentId: string) => {
    return favorites.some(fav => 
      fav.content_type === contentType && fav.content_id === contentId
    );
  };

  useEffect(() => {
    fetchFavorites();
  }, [currentUser]);

  return {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    refetch: fetchFavorites
  };
};