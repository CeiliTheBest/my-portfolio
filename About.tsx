import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingShapes />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in font-body">Artist, dreamer, creator</p>
          
          <div className="space-y-8 animate-fade-in-slow">
            <div className="gradient-flow p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-slow group">
              <p className="text-lg leading-relaxed mb-6 font-body">
                Hi, I'm <span className="font-semibold text-primary">Ceili Gallagher</span>, a teenage artist passionate about exploring creativity through various mediums and styles. 
                My work is a reflection of my journey, emotions, and the world around me.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 font-body">
                I believe that art is a powerful form of self-expression that transcends words. Through my portfolio, 
                I aim to share pieces that resonate with viewers and invite them into my creative process.
              </p>
              
              <p className="text-lg leading-relaxed font-body">
                When I'm not creating art, I'm constantly seeking inspiration from nature, music, and everyday moments. 
                Each piece I create tells a story, and I'm excited to share these stories with you.
              </p>
              
              {/* Decorative element */}
              <div className="mt-8 w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="gradient-warm p-10 rounded-[3rem] shadow-lg hover:shadow-xl transition-slow hover:scale-105 transition-bounce">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-bounce">
                  <div className="w-6 h-6 bg-primary rounded-lg" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">My Approach</h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  I embrace experimentation and believe in the beauty of imperfection. 
                  My creative process is intuitive, allowing each piece to evolve organically.
                </p>
              </div>
              
              <div className="gradient-creative p-10 rounded-[3rem] shadow-lg hover:shadow-xl transition-slow hover:scale-105 transition-bounce">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-bounce">
                  <div className="w-6 h-6 bg-secondary rounded-lg" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-secondary">My Vision</h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  Through my art, I hope to inspire others to see beauty in simplicity 
                  and find courage to express their own creative voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
