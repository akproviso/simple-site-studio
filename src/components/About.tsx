const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-body mb-6">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              We're passionate about creating meaningful work
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              With years of experience in design and development, we've helped countless 
              businesses transform their digital presence. Our approach combines strategic 
              thinking with creative execution.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              We believe in collaboration, transparency, and delivering results that 
              exceed expectations. Every project is an opportunity to create something 
              truly exceptional.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden">
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-6xl md:text-7xl font-semibold text-foreground">10+</span>
                  <p className="font-body text-muted-foreground mt-2">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-secondary -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
