import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { useState } from "react";
import { X } from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  medium: string;
  image: string;
}

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  const artworks: Artwork[] = [
    { id: 1, title: "Sunset Dreams", medium: "Acrylic on Canvas", image: "/lovable-uploads/artwork1.jpg" },
    { id: 2, title: "Ocean Whispers", medium: "Watercolor", image: "/lovable-uploads/artwork2.jpg" },
    { id: 3, title: "Abstract Thoughts", medium: "Mixed Media", image: "/lovable-uploads/artwork3.jpg" },
    { id: 4, title: "Nature's Palette", medium: "Oil Pastel", image: "/lovable-uploads/artwork4.jpg" },
    { id: 5, title: "Urban Poetry", medium: "Digital Art", image: "/lovable-uploads/artwork5.jpg" },
    { id: 6, title: "Serene Moments", medium: "Acrylic on Canvas", image: "/lovable-uploads/artwork6.jpg" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingShapes />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-muted-foreground mb-16 animate-fade-in font-body">A collection of my creative expressions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => {
            const gradients = ['gradient-flow', 'gradient-creative', 'gradient-warm', 'gradient-soft', 'gradient-peach', 'gradient-mint'];
            const gradient = gradients[index % gradients.length];
            
            return (
              <div
                key={artwork.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-square shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute inset-0 ${gradient} opacity-70 group-hover:opacity-90 transition-slow`} />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/20 group-hover:to-foreground/30 transition-slow" />
                  
                  {/* Artwork number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <span className="text-xs font-bold text-foreground">{artwork.id}</span>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-slow">
                    <div className="transform group-hover:scale-110 transition-bounce">
                      <div className="w-16 h-1 bg-background rounded-full" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 px-2">
                  <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-smooth mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body">{artwork.medium}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedArtwork(null)}
        >
          <div className="max-w-4xl w-full animate-scale-in">
            <div className="bg-card rounded-[3rem] overflow-hidden shadow-2xl relative">
              {/* Close button */}
              <button 
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-bounce"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArtwork(null);
                }}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-video gradient-flow flex items-center justify-center">
                <span className="text-foreground/60 text-lg font-body">Artwork Preview</span>
              </div>
              <div className="p-10">
                <h2 className="text-4xl font-heading font-bold mb-3 text-primary">{selectedArtwork.title}</h2>
                <p className="text-muted-foreground font-body text-lg">{selectedArtwork.medium}</p>
                <div className="mt-6 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
