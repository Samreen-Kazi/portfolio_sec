import { motion } from "framer-motion";
import { User, MapPin, Mail } from "lucide-react";
import profilePhoto from "@/assets/SamreenKazi.jpg";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> About Me
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Photo + text */}
        <motion.div
          className="md:col-span-2 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="shrink-0">
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg">
              <img
                src={profilePhoto}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a developer and cybersecurity enthusiast with a passion for creating
              robust, secure web applications. My journey spans full-stack development,
              penetration testing, and security research.
            </p>
            <p>
              I love working at the intersection of development and security — building
              things and then trying to break them. This dual perspective helps me write
              more resilient code and identify risks early.
            </p>
          </div>
        </motion.div>

        {/* Info cards */}
        <div className="space-y-4">
          {[
            { icon: User, label: "Name", value: "Samreen Kazi" },
            { icon: Mail, label: "Email", value: "samreenkazi17@gmail.com" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 rounded-lg border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-2">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground">{item.label}</span>
              </div>
              <p className="text-muted-foreground text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
