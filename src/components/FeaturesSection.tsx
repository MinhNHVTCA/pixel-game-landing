import { Sword, Users, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "PIXEL PERFECT",
    description: "Every sprite hand-crafted with love and precision",
    accent: "text-primary text-glow-primary",
  },
  {
    icon: Users,
    title: "MULTIPLAYER",
    description: "Play with friends in retro co-op adventures",
    accent: "text-secondary text-glow-secondary",
  },
  {
    icon: Zap,
    title: "FAST ACTION",
    description: "60fps gameplay with tight responsive controls",
    accent: "text-accent text-glow-accent",
  },
  {
    icon: Heart,
    title: "INDIE SOUL",
    description: "Made by gamers, for gamers, with passion",
    accent: "text-pixel-pink",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-secondary text-glow-secondary mb-4">
            ◆ POWER UPS ◆
          </p>
          <h2 className="font-pixel text-xl md:text-3xl text-foreground">
            WHY <span className="text-primary text-glow-primary">PIXELFORGE</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-card pixel-border p-6 text-center hover:pixel-border-primary transition-all group"
            >
              <feat.icon className={`w-10 h-10 mx-auto mb-4 ${feat.accent} group-hover:animate-float`} />
              <h3 className="font-pixel text-xs text-foreground mb-3">{feat.title}</h3>
              <p className="font-pixel-body text-lg text-muted-foreground">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
