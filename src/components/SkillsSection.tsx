import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Scripting",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL", "PHP", "Bash"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Security Tools & Platforms",
    skills: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "DVWA", "Kali Linux"],
  },
  {
    title: "Security Competencies",
    skills: ["Penetration Testing", "OWASP Top 10", "Vulnerability Assessment", "Incident Response", "Shell Scripting"],
  },
  {
    title: "GRC & Compliance",                                                         
    skills: ["Security Policy Development", "Risk Assessment", "Regulatory Compliance", "HIPPA", "GDPR", "SOC 2", "PDPA"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
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

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Skills
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
          >
            <h3 className="font-mono text-sm font-semibold text-primary mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-sm text-xs font-mono bg-secondary text-secondary-foreground border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
