import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-3xl font-heading font-bold text-foreground hover:text-primary transition-bounce hover:scale-105"
          >
            Ceili Gallagher
          </Link>
          
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium font-body transition-all duration-300 relative group",
                  "after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-1",
                  "after:bg-gradient-to-r after:from-primary after:via-accent after:to-secondary",
                  "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                  "after:rounded-full",
                  "hover:after:scale-x-100 hover:text-primary hover:translate-y-[-2px]",
                  location.pathname === link.path 
                    ? "text-primary after:scale-x-100" 
                    : "text-muted-foreground"
                )}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
