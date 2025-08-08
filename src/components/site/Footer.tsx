import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/23fd7aa6-733d-4ebe-acbe-56bde690d62c.png" alt="Otomato" className="h-6 w-auto" />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Otomato. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#process" className="hover:text-foreground hover:underline">Process</a>
            <a href="#features" className="hover:text-foreground hover:underline">Features</a>
            <a href="#services" className="hover:text-foreground hover:underline">Services</a>
            <a href="#faq" className="hover:text-foreground hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
