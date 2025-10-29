import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingShapes />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-flow mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Creative Artist & Designer</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              Portfolio
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-slow font-body">
              Exploring art through color, form, and emotion. 
              Welcome to my creative journey where every piece tells a story.
            </p>
            
            <div className="flex gap-4 justify-center animate-fade-in-slow">
              <Button 
                asChild 
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-bounce text-white shadow-lg hover:shadow-xl"
              >
                <Link to="/gallery" className="flex items-center">
                  View Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-bounce hover:scale-105"
              >
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Works
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-body">Dive into a world of color and creativity</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { gradient: 'gradient-creative', label: 'Abstract Dreams' },
              { gradient: 'gradient-warm', label: 'Sunset Series' },
              { gradient: 'gradient-flow', label: 'Nature Flow' }
            ].map((item, index) => (
              <Link 
                key={index}
                to="/gallery"
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute inset-0 ${item.gradient} opacity-60 group-hover:opacity-80 transition-slow`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/20 group-hover:to-foreground/30 transition-slow" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-slow">
                    <div className="text-center transform group-hover:scale-110 transition-bounce">
                      <p className="text-foreground font-heading font-semibold text-xl mb-2">{item.label}</p>
                      <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-background/50 rounded-full group-hover:scale-125 group-hover:rotate-90 transition-bounce" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto gradient-flow p-12 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-background/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-background/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <Sparkles className="w-12 h-12 text-primary animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Let's Create Together
              </h2>
              
              <p className="text-lg text-foreground/80 mb-10 font-body max-w-2xl mx-auto">
                Interested in collaborating or have questions about my work? 
                I'd love to hear from you and explore how we can bring creative visions to life.
              </p>
              
              <Button 
                asChild 
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-accent hover:scale-110 transition-bounce text-white shadow-lg hover:shadow-2xl"
              >
                <Link to="/contact" className="flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Ceili Gallagher. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
