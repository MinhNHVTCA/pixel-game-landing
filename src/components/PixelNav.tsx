import { useState } from "react";
import { Gamepad2, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const PixelNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-4 border-primary">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-pixel text-sm text-primary text-glow-primary">
          <Gamepad2 className="w-6 h-6" />
          <span>PIXELFORGE</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-pixel text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-pixel text-xs bg-primary text-primary-foreground px-4 py-2 pixel-border-primary hover:bg-primary/80 transition-colors"
          >
            PLAY NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-pixel text-xs text-muted-foreground hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default PixelNav;
