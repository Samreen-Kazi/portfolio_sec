import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <Terminal className="w-4 h-4 text-primary" />
        <span>© 2026 John Doe. All rights reserved.</span>
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
