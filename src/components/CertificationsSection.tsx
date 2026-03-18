import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "OSCP – Offensive Security Certified Professional", issuer: "Offensive Security", year: "2023" },
  { name: "CEH – Certified Ethical Hacker", issuer: "EC-Council", year: "2022" },
  { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2022" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2021" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const CertificationsSection = () => (
  <section id="certifications" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Certifications
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
          >
            <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-mono text-sm font-semibold text-foreground">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
