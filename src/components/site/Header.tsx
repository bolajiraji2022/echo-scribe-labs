import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/b8b8fab3-8770-4677-a752-ee163a4fb4e4.png" alt="Otomato automation logo" className="h-10 w-10" loading="lazy" />
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-6 md:flex">
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline">Features</a>
            <a href="#use-cases" className="text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline">Use Cases</a>
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
