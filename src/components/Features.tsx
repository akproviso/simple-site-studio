import { Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description: "Every pixel is crafted with care. We believe in the power of simplicity and elegance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Performance matters. Our solutions are optimized for speed and efficiency.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security in mind. Your data is always protected and backed up.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            We combine creativity with technology to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:shadow-hover transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
