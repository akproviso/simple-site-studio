import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-6 py-24 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-body mb-8 animate-fade-up">
          Welcome to the future
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-up-delay-1 text-balance max-w-4xl mx-auto leading-tight">
          Crafting Digital
          <span className="block text-accent">Experiences</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-2 leading-relaxed">
          We create beautiful, functional designs that bring your vision to life. 
          Simple, elegant, and built to last.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button variant="hero">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="heroOutline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
