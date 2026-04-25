import { motion } from "framer-motion";
import { Button, Avatar, Link } from "@heroui/react";
import { Github, Linkedin, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative mt-20">
      <img 
        src="/assinatura.png" 
        alt="" 
        className="h-auto w-auto absolute opacity-10 pointer-events-none dark:block" 
      />
      <img 
        src="/logo.png" 
        alt="" 
        className="h-auto w-auto absolute opacity-10 pointer-events-none invert dark:hidden" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">  
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-6 md:gap-4"
          initial="initial" 
          animate="animate" 
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div 
            variants={fadeIn} 
            className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mt-0 md:mt-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {i18n.language === 'pt' ? 'DISPONÍVEL PARA PROJETOS' : 'AVAILABLE FOR PROJECTS'}
          </motion.div>

          <motion.h1 
            variants={fadeIn} 
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]"
          >
            MANUEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">SÁ</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn} 
            className="text-base md:text-lg text-default-500 max-w-[550px] leading-relaxed italic"
          >
            {t('hero_desc')}
          </motion.p>

          <motion.div variants={fadeIn} className="flex gap-4 pt-2">
            <Button 
                isIconOnly 
                variant="flat" 
                radius="full" 
                as={Link} 
                href="https://github.com/manelsa1912" 
                isExternal // Abre em nova aba
                className="hover:bg-primary hover:text-white transition-all"
            >
              <Github size={22} />
            </Button>
            <Button 
                isIconOnly 
                variant="flat" 
                radius="full" 
                as={Link} 
                href="https://linkedin.com/in/manuel-sá-54a202289" 
                isExternal // Abre em nova aba
                className="hover:bg-primary hover:text-white transition-all"
            >
              <Linkedin size={22} />
            </Button>
            
            {/* Botão de Download do CV (Desktop Visible) */}
           {/*  <Button 
                variant="shadow" 
                color="primary"
                radius="full" 
                as={Link} 
                href="/cv_manuel_sa.pdf" // Caminho do PDF no repositório
                download="Manuel_Sa_CV.pdf"
                startContent={<FileDown size={18} />}
                className="font-bold uppercase text-[10px] tracking-widest px-6"
            >
              Download CV
            </Button> */}
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 flex justify-center relative"
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Avatar 
                src="/manuel.jpeg" 
                name="MS"
                showFallback
                className="w-64 h-64 md:w-80 md:h-80 border-8 border-background shadow-2xl"
                classNames={{
                    img: "opacity-100 object-cover",
                }}
            />
            
            {/* Briefcase flutuante - Agora funcional para Download */}
            <Link 
                href="/cv_manuel_sa.pdf" 
                download="Manuel_Sa_CV.pdf"
                className="absolute -bottom-2 -right-2 bg-background p-3 md:p-4 rounded-2xl shadow-xl border border-divider animate-bounce cursor-pointer hover:scale-110 transition-transform z-20"
            >
              <Briefcase className="text-primary" size={28} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};