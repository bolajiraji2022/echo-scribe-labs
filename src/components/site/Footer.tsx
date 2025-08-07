const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#use-cases" className="hover:text-foreground">Use cases</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
