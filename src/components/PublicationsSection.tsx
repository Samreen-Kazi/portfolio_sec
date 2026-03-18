import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Detecting XSS Vulnerabilities Using Machine Learning",
    venue: "IEEE Security & Privacy, 2023",
    link: "#",
  },
  {
    title: "A Survey of Zero-Trust Architecture in Modern Web Apps",
    venue: "ACM Computing Surveys, 2022",
    link: "#",
  },
  {
    title: "Automated Threat Modeling for Microservices",
    venue: "USENIX Security Symposium, 2022",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const PublicationsSection = () => (
  <section id="publications" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Publications
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />
      </motion.div>

      <div className="space-y-4">
        {publications.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 group block"
          >
            <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex-1">
              <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{p.venue}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
