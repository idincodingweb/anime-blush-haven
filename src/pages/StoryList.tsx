import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Clock, User, Calendar, BookOpen } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allAnimeStories, storyCategories } from "@/data/storyData";

const StoryList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 12;

  const filteredStories = allAnimeStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const currentStories = filteredStories.slice(startIndex, startIndex + storiesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/90 to-indigo-900/80"></div>
      <div className="relative z-10">
        <Navbar />
        
        <section className="relative py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">Anime Stories</h1>
              <p className="text-xl text-white/80 mb-6 animate-fade-in">Koleksi cerita anime terbaik dari berbagai genre</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Cari berdasarkan judul, deskripsi, atau penulis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">Semua Kategori</SelectItem>
                    {storyCategories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentStories.map((story) => (
                <Card key={story.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 hover-scale">
                  <CardHeader className="pb-3">
                    <Badge className="bg-anime-pink/20 text-anime-pink border-anime-pink/30 mb-2 w-fit">
                      {story.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight text-white">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-white/70 mb-4 line-clamp-3">{story.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {story.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {story.readTime}
                      </div>
                    </div>
                    <Link to={`/story/${story.id}`}>
                      <Button size="sm" className="w-full bg-gradient-primary">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Baca Cerita
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className={page === currentPage ? "bg-gradient-primary" : "border-white/30 text-white hover:bg-white/10"}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default StoryList;