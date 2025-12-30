import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-semibold text-foreground">
          Studio
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#about" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="outline" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
