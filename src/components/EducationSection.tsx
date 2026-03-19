import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Information Technology & Management - GPA: 3.88/4.00",
    school: "Illinois Institute of Technology",
    year: "2024 – 2026",
    description: "Focus on computer security, information security, grc, computer forensics, network security, and secure software development.",
  },
  {
    degree: "Bachelor of Engineering in Information Technology - GPA: 9.86/10.00",
    school: "University of Mumbai",
    year: "2021 – 2023",
    description: "Specialized in blockchain, AI, information security, and web development. Ranked 2nd university-wide.",
  },
  {
    degree: "Diploma in Information Technology - Grade: 96.50%",
    school: "Vidyalankar Polytechnic",
    year: "2017 – 2020",
    description: "Built foundational skills in programming, networking, databases, and computer systems. Ranked 1st university-wide.",
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
                <p className="text-md text-muted-foreground mt-2">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
