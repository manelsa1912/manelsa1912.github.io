import { motion } from "framer-motion";
import { Chip, Link } from "@heroui/react";
import { Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";

// (As listas row1, row2, etc., mantêm-se iguais)
const row1 = [{ name: "React", link: "https://react.dev" }, { name: "Django", link: "https://www.djangoproject.com" }, { name: "TypeScript", link: "https://www.typescriptlang.org" }, { name: "Python", link: "https://www.python.org" }, { name: "PostgreSQL", link: "https://www.postgresql.org" }];
const row2 = [{ name: "Java", link: "https://www.oracle.com/java/" }, { name: "C#", link: "https://learn.microsoft.com/dotnet/csharp/" }, { name: "Spring Boot", link: "https://spring.io" }, { name: "Docker", link: "https://www.docker.com" }, { name: "JavaScript", link: "https://developer.mozilla.org" }];
const row3 = [{ name: "C++", link: "https://isocpp.org/" }, { name: "Erlang", link: "https://www.erlang.org/" }, { name: "Haskell", link: "https://www.haskell.org/" }, { name: "DDD", link: "https://martinfowler.com/tags/domain%20driven%20design.html" }, { name: "Git", link: "https://git-scm.com" }];
const row4 = [{ name: "C", link: "https://en.cppreference.com/w/c" }, { name: "Tailwind", link: "https://tailwindcss.com" }, { name: "Laravel", link: "https://laravel.com" }, { name: "Next.js", link: "https://nextjs.org" }, { name: "MongoDB", link: "https://www.mongodb.com" }];
const row5 = [{ name: "AWS", link: "https://aws.amazon.com" }, { name: "Unit Testing", link: "https://jestjs.io" }, { name: "Microservices", link: "https://microservices.io" }, { name: "Agile/Scrum", link: "https://www.scrum.org" }, { name: "Maven", link: "https://maven.apache.org" }];

const InfiniteRow = ({ items, direction = "left", duration = 30 }: { items: any[], direction?: "left" | "right", duration?: number }) => {
  const duplicatedItems = [...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden py-2">
      <motion.div
        className="flex flex-nowrap gap-4"
        animate={{ x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" } }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((skill, index) => (
          <motion.div key={`${skill.name}-${index}`} whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
            <Link href={skill.link} isExternal className="p-0">
              <Chip variant="dot" color="primary" className="cursor-pointer border-primary/20 py-5 px-4 bg-background/50 backdrop-blur-md font-bold text-xs uppercase tracking-widest">
                {skill.name}
              </Chip>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-[800px] mb-12">
        <h2 className="text-4xl font-black mb-6 flex items-center gap-4 relative z-30">
          <Code2 className="text-primary" size={40} /> {t('nav_skills')}
        </h2>
        <p className="text-default-600 leading-relaxed text-sm md:text-base border-l-2 border-primary/30 pl-4">
          {t('skills_description')}
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent md:via-background/80 z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent md:via-background/80 z-20" />

        <div className="flex flex-col gap-1 relative z-10">
          <InfiniteRow items={row1} direction="left" duration={25} />
          <InfiniteRow items={row2} direction="right" duration={35} />
          <InfiniteRow items={row3} direction="left" duration={45} />
          <InfiniteRow items={row4} direction="right" duration={30} />
          <InfiniteRow items={row5} direction="left" duration={40} />
        </div>
      </div>
    </section>
  );
};