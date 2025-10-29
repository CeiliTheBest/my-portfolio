import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingShapes />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in font-body">
            I'd love to hear from you! Whether you have a question about my work, 
            want to collaborate, or just want to say hello, feel free to reach out.
          </p>
          
          <div className="gradient-flow p-10 rounded-[3rem] shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-slow">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-medium font-body flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="rounded-2xl border-2 border-border/50 focus:border-primary transition-all h-12 font-body"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium font-body flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="rounded-2xl border-2 border-border/50 focus:border-accent transition-all h-12 font-body"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium font-body flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your inquiry..."
                  required
                  className="rounded-2xl border-2 border-border/50 focus:border-secondary transition-all min-h-[180px] font-body"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full rounded-2xl bg-gradient-to-r from-primary to-accent hover:scale-105 transition-bounce text-white shadow-lg hover:shadow-xl h-14 font-heading text-base"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
          
          <div className="mt-12 gradient-creative p-8 rounded-[3rem] text-center shadow-lg">
            <p className="text-foreground/80 font-body leading-relaxed">
              You can also reach me on social media or via email at{" "}
              <a 
                href="mailto:ceili@example.com" 
                className="text-primary font-semibold hover:underline transition-smooth hover:text-accent"
              >
                ceili@example.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
