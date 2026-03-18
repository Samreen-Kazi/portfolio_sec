import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Security Engineer",
    company: "CyberDefend Inc.",
    period: "2023 – Present",
    description:
      "Lead penetration testing engagements and security architecture reviews for Fortune 500 clients. Built internal tooling to automate vulnerability scanning workflows.",
    skills: ["Penetration Testing", "Cloud Security", "Python"],
  },
  {
    title: "Full-Stack Developer",
    company: "TechNova Solutions",
    period: "2021 – 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Implemented CI/CD pipelines and improved deployment frequency by 3x.",
    skills: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Security Analyst Intern",
    company: "SecureNet Labs",
    period: "2020 – 2021",
    description:
      "Conducted vulnerability assessments and assisted in incident response. Authored internal security best-practice documentation.",
    skills: ["SIEM", "Incident Response", "Network Security"],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2019 – 2020",
    description:
      "Built responsive websites and e-commerce platforms for small businesses. Managed projects end-to-end from design to deployment.",
    skills: ["HTML/CSS", "JavaScript", "WordPress"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Experience
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center gap-4 md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:text-right md:pr-0" : "md:text-left md:pl-0"
                    }`}
                  >
                    <div className="p-5 rounded-lg border border-border bg-card">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground">{exp.title}</h3>
                      <p className="font-mono text-sm text-primary mt-0.5">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                      <div className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? "md:justify-end" : ""}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs font-mono rounded-sm bg-secondary text-secondary-foreground border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
