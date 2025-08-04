import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Comment {
  id: string;
  user_id: string;
  video_id: string;
  content: string;
  rating: number | null;
  likes: number;
  created_at: string;
  profiles?: {
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

export const useComments = (videoId: string) => {
  const { currentUser } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('video_id', videoId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching comments:', error);
      } else {
        // Fetch profiles separately for now
        const commentsWithProfiles = await Promise.all(
          (data || []).map(async (comment) => {
            const { data: profile } = await supabase
              .from('profiles')
              .select('display_name, avatar_url')
              .eq('id', comment.user_id)
              .single();
            
            return { ...comment, profiles: profile };
          })
        );
        setComments(commentsWithProfiles as Comment[]);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (content: string, rating?: number) => {
    if (!currentUser) return { error: 'Not authenticated' };

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert({
          user_id: currentUser.id,
          video_id: videoId,
          content,
          rating: rating || null
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding comment:', error);
        return { error };
      }

      // Fetch the profile separately to avoid relation issues
      const { data: profile } = await supabase
        .from('profiles')
        .select('display_name, avatar_url')
        .eq('id', currentUser.id)
        .single();

      const commentWithProfile = { 
        ...data, 
        profiles: profile
      } as Comment;

      setComments(prev => [commentWithProfile, ...prev]);
      return { data: commentWithProfile };
    } catch (error) {
      console.error('Error adding comment:', error);
      return { error };
    }
  };

  const likeComment = async (commentId: string) => {
    if (!currentUser) return { error: 'Not authenticated' };

    try {
      // Check if already liked
      const { data: existingLike } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('user_id', currentUser.id)
        .eq('comment_id', commentId)
        .single();

      if (existingLike) {
        // Unlike
        await supabase
          .from('comment_likes')
          .delete()
          .eq('user_id', currentUser.id)
          .eq('comment_id', commentId);
      } else {
        // Like
        await supabase
          .from('comment_likes')
          .insert({
            user_id: currentUser.id,
            comment_id: commentId
          });
      }

      fetchComments();
    } catch (error) {
      console.error('Error liking comment:', error);
      return { error };
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return {
    comments,
    loading,
    addComment,
    likeComment,
    refetch: fetchComments
  };
};