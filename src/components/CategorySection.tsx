import { categories } from "@/data/animeData";

const CategorySection = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different genres and find your perfect anime match
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card p-6 hover:shadow-card-anime transition-all duration-500 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Floating Icon Background */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {category.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Hover effect line */}
                <div className="w-0 h-0.5 bg-primary mt-2 group-hover:w-full transition-all duration-300"></div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;