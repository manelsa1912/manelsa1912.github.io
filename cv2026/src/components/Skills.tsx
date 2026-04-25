import { motion } from "framer-motion";
import { Chip, Link } from "@heroui/react";

const skillList = [
  { name: "React", link: "https://react.dev" },
  { name: "Django", link: "https://www.djangoproject.com" },
  { name: "TypeScript", link: "https://www.typescriptlang.org" },
  { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", link: "https://www.python.org" },
  { name: "Java", link: "https://www.oracle.com/java/" },
  { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "C", link: "https://en.cppreference.com/w/c" },
  { name: "C++", link: "https://isocpp.org/" },
  { name: "Erlang", link: "https://www.erlang.org/" },
  { name: "Haskell", link: "https://www.haskell.org/" },
  { name: "SQL", link: "https://www.postgresql.org" },
  { name: "Docker", link: "https://www.docker.com" },
  { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
  { name: "DDD", link: "https://martinfowler.com/tags/domain%20driven%20design.html" },
  { name: "Tailwind CSS", link: "https://tailwindcss.com" },
  { name: "Git", link: "https://git-scm.com" },
];

export const Skills = () => (
  <section id="skills" className="py-20">
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-6">
      {skillList.map((skill) => (
        <motion.div 
          key={skill.name} 
          whileHover={{ scale: 1.1, rotate: 2 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href={skill.link} 
            isExternal 
            className="p-0"
          >
            <Chip 
              variant="dot" 
              color="primary"
              className="cursor-pointer border-primary/20 py-5 px-4 bg-background/50 backdrop-blur-md font-bold text-xs uppercase tracking-widest"
            >
              {skill.name}
            </Chip>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);