import { motion } from "framer-motion";
import { Chip } from "@heroui/react";

const skills = ["React", "Django", "TypeScript", "Python", "C#", "SQL", "Docker", "Leaflet", "Highcharts", "Tailwind", "Git", "Erlang", "Laravel", "JWT", "PostgreSQL"];

export const Skills = () => (
  <section id="skills" className="py-20">
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <motion.div key={skill} whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
          <Chip variant="dot" color="primary" className="cursor-default border-primary/20 py-4 px-3 bg-background/50 backdrop-blur-md">
            {skill}
          </Chip>
        </motion.div>
      ))}
    </div>
  </section>
);