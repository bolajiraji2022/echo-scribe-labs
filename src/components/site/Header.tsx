import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/90b9af9d-d624-460c-a6c2-69d5a7149945.png" alt="Otomato automation logo" className="h-8 w-auto" loading="lazy" />
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-6 md:flex">
            <a href="#process" className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline">Process</a>
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline">Features</a>
            <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline">Services</a>
            <a href="#faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#cta" className="hidden md:block">
              <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-8">Contact</Button>
            </a>
            <a href="#cta">
              <Button variant="hero" size="sm" className="text-xs px-3 py-1 h-8">Book a Demo</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
