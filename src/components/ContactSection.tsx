import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-2xl mx-auto text-center">
        <Mail className="w-10 h-10 text-primary text-glow-primary mx-auto mb-6" />
        <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4">
          JOIN THE <span className="text-accent text-glow-accent">QUEST</span>
        </h2>
        <p className="font-pixel-body text-xl text-muted-foreground mb-10">
          Subscribe for updates, beta access, and exclusive pixel art drops.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-card border-4 border-border font-pixel-body text-lg text-foreground px-4 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="font-pixel text-xs bg-primary text-primary-foreground px-6 py-3 pixel-border-primary hover:bg-primary/80 transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
