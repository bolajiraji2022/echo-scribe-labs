import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Company logo" className="h-8 w-8" loading="lazy" />
          <span className="font-display text-lg">Your Company</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use cases</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden md:block">
            <Button variant="outline" size="sm">Contact</Button>
          </a>
          <a href="#cta">
            <Button variant="hero" size="sm">Book a Demo</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
