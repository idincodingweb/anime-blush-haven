import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface WatchHistoryItem {
  id: string;
  user_id: string;
  video_id: string;
  progress: number;
  watched_at: string;
}

export const useWatchHistory = () => {
  const { currentUser } = useAuth();
  const [watchHistory, setWatchHistory] = useState<WatchHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWatchHistory = async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('watch_history')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('watched_at', { ascending: false });

      if (error) {
        console.error('Error fetching watch history:', error);
      } else {
        setWatchHistory(data || []);
      }
    } catch (error) {
      console.error('Error fetching watch history:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateWatchProgress = async (videoId: string, progress: number) => {
    if (!currentUser) return { error: 'Not authenticated' };

    try {
      const { data, error } = await supabase
        .from('watch_history')
        .upsert({
          user_id: currentUser.id,
          video_id: videoId,
          progress,
          watched_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        console.error('Error updating watch progress:', error);
        return { error };
      }

      setWatchHistory(prev => {
        const filtered = prev.filter(item => item.video_id !== videoId);
        return [data, ...filtered];
      });
      return { data };
    } catch (error) {
      console.error('Error updating watch progress:', error);
      return { error };
    }
  };

  const getVideoProgress = (videoId: string) => {
    const item = watchHistory.find(item => item.video_id === videoId);
    return item?.progress || 0;
  };

  useEffect(() => {
    fetchWatchHistory();
  }, [currentUser]);

  return {
    watchHistory,
    loading,
    updateWatchProgress,
    getVideoProgress,
    refetch: fetchWatchHistory
  };
};