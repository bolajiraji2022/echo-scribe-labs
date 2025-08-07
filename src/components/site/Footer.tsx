const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Otomato. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#features" className="hover:text-foreground hover:underline">Features</a>
          <a href="#use-cases" className="hover:text-foreground hover:underline">Use Cases</a>
          <a href="#faq" className="hover:text-foreground hover:underline">FAQ</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
