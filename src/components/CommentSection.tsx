import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MessageCircle, ThumbsUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  text: string;
  rating: number;
  timestamp: Date;
  likes: number;
}

interface CommentSectionProps {
  videoId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ videoId }) => {
  const { currentUser } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${videoId}`);
    if (savedComments) {
      const parsedComments = JSON.parse(savedComments).map((comment: any) => ({
        ...comment,
        timestamp: new Date(comment.timestamp)
      }));
      setComments(parsedComments);
    }
  }, [videoId]);

  // Save comments to localStorage
  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem(`comments-${videoId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const handleSubmitComment = () => {
    if (!newComment.trim() || !currentUser) return;

    const comment: Comment = {
      id: Date.now().toString(),
      userId: currentUser.uid,
      userName: currentUser.displayName || 'Anonymous User',
      userAvatar: currentUser.photoURL || undefined,
      text: newComment.trim(),
      rating,
      timestamp: new Date(),
      likes: 0
    };

    const updatedComments = [comment, ...comments];
    saveComments(updatedComments);
    setNewComment('');
    setRating(5);
  };

  const handleLikeComment = (commentId: string) => {
    const updatedComments = comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    saveComments(updatedComments);
  };

  const renderStars = (currentRating: number, interactive = false, onRate?: (rate: number) => void) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < currentRating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={() => interactive && onRate && onRate(index + 1)}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-anime-pink" />
        Comments & Reviews ({comments.length})
      </h3>

      {/* Add Comment Form */}
      {currentUser ? (
        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={currentUser.photoURL || undefined} />
              <AvatarFallback className="bg-anime-pink text-white">
                {currentUser.displayName?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Rating
                </label>
                <div className="flex items-center gap-1">
                  {renderStars(rating, true, setRating)}
                </div>
              </div>
              <Textarea
                placeholder="Share your thoughts about this anime..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="resize-none"
                rows={3}
              />
              <Button 
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-gradient-primary hover:shadow-glow"
              >
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 text-center">
          <p className="text-muted-foreground mb-4">Please login to leave a comment</p>
          <Button className="bg-gradient-primary">Login to Comment</Button>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 animate-fade-in">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={comment.userAvatar} />
                  <AvatarFallback className="bg-anime-purple text-white">
                    {comment.userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{comment.userName}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {renderStars(comment.rating)}
                        </div>
                        <span>•</span>
                        <span>{comment.timestamp.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground mb-3 leading-relaxed">{comment.text}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-anime-pink transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;