import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Illinois Tech students analyze Russian cyberattack on Ukrainian satellite",
    venue: "Southland Marquee · March 16, 2026",
    link: "https://southlandmarquee.com/stories/675872223-illinois-tech-students-analyze-russian-cyberattack-on-ukrainian-satellite",
  },
  {
    title: "Breaking Down Cyberattacks on the Invisible Battlefield",
    venue: "By Casey Moffitt, IIT News · Oct 21, 2025",
    link: "https://www.iit.edu/news/breaking-down-cyberattacks-invisible-battlefield",
  },
  {
    title: "Invisible Battlefields: Analyzing the Viasat Attack and its Broader Implications",
    venue: "Scientific Bulletin of the “Nicolae Bălcescu” Land Forces Academy, Sibiu, Romania/ Sciendo (De Gruyter) · Jun 23, 2025",
    link: "https://reference-global.com/article/10.2478/bsaft-2025-0007",
  },
  {
    title: "Rodrick: A Voice Assistant Using Python",
    venue: "International Journal of Innovative Research in Computer and Communication Engineering · Jan 31, 2024",
    link: "https://doi.org/10.15680/IJIRCCE.2024.1201065",
  },
  {
    title: "NiftyPlace: An NFT Marektplace Using Blockchain",
    venue: "Springer Singapore · Jul 20, 2023",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-3608-3_21",
  },
    {
    title: "NFT Marektplace Using Blockchain",
    venue: "IEEE · Apr 20, 2023",
    link: "https://ieeexplore.ieee.org/document/10100326",
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
          <span className="text-primary">#</span> Publications & Featured Articles
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
