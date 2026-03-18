import { motion } from "framer-motion";
import { Shield, Code, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Cybersecurity Specialist", "Full-Stack Developer", "Web Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-secondary border border-border">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-border">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-border">
              <Globe className="w-6 h-6 text-primary" />
            </div>
          </div>

          <p className="font-mono text-sm text-primary mb-3">$ whoami</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-foreground">
            John Doe
          </h1>
          <div className="font-mono text-lg md:text-2xl text-muted-foreground h-8 md:h-10">
            <span>{text}</span>
            <span className="animate-blink text-primary">|</span>
          </div>

          <p className="mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Passionate about building secure, scalable web applications and finding vulnerabilities before the bad guys do.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity box-glow"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-md border border-border bg-secondary text-secondary-foreground font-mono text-sm font-medium hover:border-primary transition-colors"
            >
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
