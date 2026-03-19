import { motion } from "framer-motion";
import { Download } from "lucide-react";
import resume from "@/assets/resume.pdf";

const ResumeSection = () => (
  <section id="resume" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Resume
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8 mx-auto" />

        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Download my resume for a detailed overview of my experience, skills, and accomplishments.
        </p>

        <a
          href={resume}
          download="resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity box-glow"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
