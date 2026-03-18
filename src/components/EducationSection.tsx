import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.S. in Cybersecurity",
    school: "Stanford University",
    year: "2021 – 2023",
    description: "Focus on network security, cryptography, and secure software engineering.",
  },
  {
    degree: "B.S. in Computer Science",
    school: "UC Berkeley",
    year: "2017 – 2021",
    description: "Minor in Mathematics. Dean's List. Research in web application security.",
  },
];

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Education
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />

        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.degree} className="flex gap-4 p-5 rounded-lg border border-border bg-card">
              <div className="p-2 rounded-md bg-secondary border border-border h-fit">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{e.degree}</h3>
                <p className="font-mono text-sm text-primary">{e.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.year}</p>
                <p className="text-sm text-muted-foreground mt-2">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
