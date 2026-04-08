import { Gamepad2 } from "lucide-react";

const PixelFooter = () => {
  return (
    <footer className="border-t-4 border-primary py-10 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-pixel text-xs text-primary text-glow-primary">
          <Gamepad2 className="w-5 h-5" />
          PIXELFORGE
        </div>
        <p className="font-pixel-body text-lg text-muted-foreground">
          © 2025 PixelForge Studios. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Twitter", "Discord", "GitHub"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-pixel text-[10px] text-muted-foreground hover:text-primary transition-colors"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
