const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/b029ee8e-af5c-4f17-b351-e81da06110ed.png" alt="Otomato" className="h-5 w-5" />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Otomato. All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#process" className="hover:text-foreground hover:underline">Process</a>
          <a href="#features" className="hover:text-foreground hover:underline">Features</a>
          <a href="#services" className="hover:text-foreground hover:underline">Services</a>
          <a href="#faq" className="hover:text-foreground hover:underline">FAQ</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
