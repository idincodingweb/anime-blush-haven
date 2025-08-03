import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useComments } from '@/hooks/useComments';
import { useProfile } from '@/hooks/useProfile';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CommentSectionProps {
  videoId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ videoId }) => {
  const { currentUser } = useAuth();
  const { profile } = useProfile();
  const { comments, loading, addComment, likeComment } = useComments(videoId);
  const { toast } = useToast();
  
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !newComment.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await addComment(newComment.trim(), rating || undefined);
      if (error) {
        toast({
          title: "Error",
          description: "Failed to post comment",
          variant: "destructive"
        });
      } else {
        setNewComment('');
        setRating(0);
        toast({
          title: "Success",
          description: "Comment posted successfully"
        });
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

  const handleLikeComment = async (commentId: string) => {
    if (!currentUser) {
      toast({
        title: "Login Required",
        description: "Please login to like comments",
        variant: "destructive"
      });
      return;
    }

    await likeComment(commentId);
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (star: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-lg font-semibold">Loading comments...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <MessageCircle className="w-5 h-5" />
        <span className="text-lg font-semibold">Comments ({comments.length})</span>
      </div>

      {currentUser ? (
        <Card>
          <CardContent className="p-4">
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={profile?.avatar_url || ''} />
                  <AvatarFallback>
                    {profile?.display_name?.[0]?.toUpperCase() || currentUser.email?.[0]?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Rate this anime:</span>
                      <div className="flex space-x-1">
                        {renderStars(rating, true, setRating)}
                      </div>
                    </div>
                    <Button type="submit" disabled={!newComment.trim() || isSubmitting}>
                      {isSubmitting ? 'Posting...' : 'Post Comment'}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-muted-foreground mb-4">Please login to leave a comment</p>
            <Button variant="outline">Login</Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={comment.profiles?.avatar_url || ''} />
                  <AvatarFallback>
                    {comment.profiles?.display_name?.[0]?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">
                      {comment.profiles?.display_name || 'Anonymous User'}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                    {comment.rating && (
                      <div className="flex space-x-1">
                        {renderStars(comment.rating)}
                      </div>
                    )}
                  </div>
                  <p className="text-foreground">{comment.content}</p>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLikeComment(comment.id)}
                      className="flex items-center space-x-1"
                    >
                      <Heart className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {comments.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CommentSection;