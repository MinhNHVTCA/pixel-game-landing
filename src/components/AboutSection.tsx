const stats = [
  { value: "50+", label: "GAMES RELEASED" },
  { value: "2M+", label: "PLAYERS" },
  { value: "99%", label: "POSITIVE REVIEWS" },
  { value: "24/7", label: "SUPPORT" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="font-pixel text-xs text-accent text-glow-accent mb-4">
          ♦ PLAYER STATS ♦
        </p>
        <h2 className="font-pixel text-xl md:text-3xl text-foreground mb-8">
          ABOUT <span className="text-secondary text-glow-secondary">US</span>
        </h2>
        <p className="font-pixel-body text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          PixelForge Studios is a passionate indie game studio dedicated to creating unforgettable retro gaming experiences. We believe pixels tell the best stories.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card pixel-border p-6">
              <div className="font-pixel text-xl md:text-2xl text-primary text-glow-primary mb-2">
                {stat.value}
              </div>
              <div className="font-pixel text-[8px] md:text-[10px] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
