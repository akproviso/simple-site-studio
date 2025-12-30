const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">Studio</h3>
            <p className="font-body text-primary-foreground/70 max-w-md leading-relaxed">
              Creating digital experiences that inspire and connect. 
              Let's build something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="font-body font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-body font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="font-body text-primary-foreground/70">
                hello@studio.com
              </li>
              <li className="font-body text-primary-foreground/70">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-sm text-primary-foreground/50 text-center">
            © 2024 Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
