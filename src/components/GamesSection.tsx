import game1 from "@/assets/game1.jpg";
import game2 from "@/assets/game2.jpg";
import game3 from "@/assets/game3.jpg";

const games = [
  {
    title: "DRAGON QUEST",
    genre: "RPG",
    image: game1,
    description: "Epic pixel RPG with 100+ hours of adventure",
    color: "text-destructive" as const,
  },
  {
    title: "STAR BLASTER",
    genre: "SHOOTER",
    image: game2,
    description: "Fast-paced space shooter with endless waves",
    color: "text-pixel-cyan" as const,
  },
  {
    title: "PIXEL JUMP",
    genre: "PLATFORMER",
    image: game3,
    description: "Classic platformer with 200 handcrafted levels",
    color: "text-pixel-orange" as const,
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-primary text-glow-primary mb-4">
            ★ SELECT YOUR GAME ★
          </p>
          <h2 className="font-pixel text-xl md:text-3xl text-foreground">
            OUR <span className="text-accent text-glow-accent">GAMES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              className="group bg-card pixel-border hover:pixel-border-primary transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="font-pixel text-[10px] bg-background/80 text-primary px-3 py-1">
                    {game.genre}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`font-pixel text-sm ${game.color} mb-3`}>
                  {game.title}
                </h3>
                <p className="font-pixel-body text-lg text-muted-foreground">
                  {game.description}
                </p>
                <button className="mt-4 font-pixel text-[10px] text-primary hover:text-accent transition-colors">
                  ▶ PLAY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
