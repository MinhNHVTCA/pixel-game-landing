import heroImage from "@/assets/hero-pixel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay">
      {/* Background */}
      <img
        src={heroImage}
        alt="Pixel art fantasy landscape"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-pixel text-xs md:text-sm text-primary text-glow-primary mb-6 animate-blink">
          ▶ PRESS START ◀
        </p>
        <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-6">
          PIXEL<span className="text-primary text-glow-primary">FORGE</span>
          <br />
          <span className="text-accent text-glow-accent text-lg md:text-2xl lg:text-3xl">STUDIOS</span>
        </h1>
        <p className="font-pixel-body text-xl md:text-3xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Crafting legendary pixel adventures since 2020. We build worlds one pixel at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#games"
            className="font-pixel text-xs bg-primary text-primary-foreground px-8 py-4 pixel-border-primary hover:bg-primary/80 transition-colors inline-block"
          >
            OUR GAMES
          </a>
          <a
            href="#about"
            className="font-pixel text-xs border-4 border-secondary text-secondary px-8 py-4 hover:bg-secondary/10 transition-colors inline-block"
          >
            LEARN MORE
          </a>
        </div>

        {/* Pixel decorations */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
