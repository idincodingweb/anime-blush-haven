import { useState } from "react";
import { animeData, categories } from "@/data/animeData";
import AnimeCard from "./AnimeCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid } from "lucide-react";

const AnimeGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredAnime = animeData
    .filter((anime) => 
      selectedCategory === "all" || anime.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "year":
          return b.year - a.year;
        case "episodes":
          return b.episodes - a.episodes;
        default:
          return 0;
      }
    });

  return (
    <section id="popular" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Anime
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most loved anime series with thousands of episodes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 space-y-4 lg:space-y-0">
          {/* Category Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-gradient-primary" : ""}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-gradient-primary" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Grid className="w-5 h-5" />
              <span className="font-medium">Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-card border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="rating">Rating</option>
              <option value="year">Year</option>
              <option value="episodes">Episodes</option>
            </select>
          </div>
        </div>

        {/* Anime Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAnime.map((anime, index) => (
            <AnimeCard key={anime.id} anime={anime} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-4 h-auto"
          >
            Load More Anime
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnimeGrid;