import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Card, 
  CardBody, 
  Chip, 
  Link, 
  useDisclosure 
} from "@heroui/react";
import { 
  Briefcase, 
  ExternalLink, 
  Sparkles, 
  Binary, 
  GraduationCap, 
  Code2,
  ChevronDown,
  ChevronUp,
  Building2
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { MagicModal } from "./MagicModal";
import { TaskShowcase, type ProjectImage } from "./TaskShowcase";

export const Experience = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isExpanded, setIsExpanded] = useState(false);

  const wisecropImages: ProjectImage[] = [
    { id: 1, src: "/wcdb.png", label: "Dashboard" },
    { id: 2, src: "/wctr.png", label: "Routes Tool" },
    { id: 3, src: "/reports.png", label: "Custom Reports" },
  ];

  return (
    <section id="exp" className="pt-20 pb-40 md:pt-0 md:pb-0">
      <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-5 flex items-center gap-4 text-default-900">
        <Briefcase className="text-primary" size={32} /> {t('exp_title')}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        
        {/* CARD 1: WISE CROP */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <Card className="bg-primary text-white border-none shadow-xl shadow-primary/20 h-full rounded-[12px] overflow-hidden">
            <CardBody className="p-6 md:p-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-6">
                  <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-white/20 text-white w-fit p-2">
                    {t('wisecrop_period')}
                  </Chip>
                  <div className="flex items-center gap-4">
                    <div className="p-2 md:p-3 bg-white/20 w-fit rounded-[14px] backdrop-blur-md border border-white/10">
                      <Building2 size={22} className="text-white"/>
                    </div>
                    <div>
                      <h4 className="text-4xl font-black italic leading-none">Full-Stack Developer</h4>
                      <Link 
                        href="https://www.wisecrop.com" 
                        isExternal 
                        className="text-sm md:text-md font-bold uppercase tracking-[1px] text-white/70 mt-1 hover:text-white transition-colors"
                      >
                        Wisecrop <ExternalLink className="ml-1" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 p-4 md:p-6 rounded-[24px] hidden sm:block border border-white/10">
                  <Code2 size={30} className="text-white" />
                </div>
              </div>

              <p className="text-[13px] md:text-sm leading-relaxed mb-6 bg-default/10 rounded-xl p-3">
                {t('wisecrop_desc')}
              </p>

               <div className="">
                <TaskShowcase images={wisecropImages} aspect="wide" />
              </div>

              {/* Botão Colapsar - Visível em todos os tamanhos */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-default/20 border border-white/10 px-4 py-3 rounded-full tracking-widest hover:bg-white/20 transition-colors mt-4"
              >
                {isExpanded ? (
                  <><ChevronUp size={14}/> {t('ver_menos')}</>
                ) : (
                  <><ChevronDown size={14}/> {t('ver_tarefas')}</>
                )}
              </button>

              {/* Lista de Tarefas controlada pelo estado isExpanded */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="flex gap-3 p-4 md:p-3 rounded-[18px] bg-white/10 border border-white/5 backdrop-blur-sm hover:bg-white/15 transition-all"
                        >
                          <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-white text-primary flex items-center justify-center font-black text-[10px] md:text-xs shrink-0 shadow-sm">
                            {i}
                          </div>
                          <p className="text-xs md:text-sm text-white/90 leading-tight font-medium self-center">
                            {t(`wisecrop_task${i}`)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              

              <div className="flex flex-wrap gap-2 md:gap-3 mt-8">
                {["React", "Django", "Python", "AWS", "SQL", "TypeScript"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white text-primary px-3 py-1.5 rounded-full shadow-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* COLUNA LATERAL */}
        <div className="flex flex-col gap-4 md:gap-8">
          
          {/* CARD 2: INTERNSHIP */}
          <Card className="bg-default-100/40 border-none shadow-none p-6 md:p-8 flex-1 relative overflow-hidden rounded-[12px]">
            <div className="z-10 relative h-full flex flex-col">
              <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-primary/20 text-primary-900 w-fit p-2 mb-5">
                MAR 2023 — JUL 2023
              </Chip>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 md:p-3 bg-primary/10 w-fit rounded-[14px] border border-primary/5">
                  <Binary size={22} className="text-primary"/>
                </div>
                <div>
                  <h4 className="text-3xl font-black italic text-default-900 leading-none">Internship</h4>
                  <Link 
                    href="https://www.ccg.pt" 
                    isExternal 
                    className="text-sm md:text-md font-bold uppercase tracking-[0.15em] text-default-500 mt-1 hover:text-primary transition-colors"
                  >
                    CCG/ZGDV <ExternalLink className="ml-1" size={15} />
                  </Link>
                </div>
              </div>
              <p className="text-[13px] md:text-sm bg-default-200/50 rounded-xl text-default-600 leading-relaxed mb-6 p-4">
                {t('ccg_desc')}
              </p>
              <div className="mt-auto flex gap-2 items-center mb-7">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div className="flex-1 border border-divider/40 rounded-full h-8 flex items-center px-3 text-[9px] font-bold tracking-tighter uppercase text-default-600 whitespace-nowrap overflow-hidden">
                  React / JWT / Crypto
                </div>
              </div>
            </div>
          </Card>

          {/* CARD 3: MAGIC & DESIGN */}
          <Card 
            isPressable
            onPress={onOpen}
            className="bg-default-900 text-white p-6 md:p-8 flex-1 relative overflow-hidden border-none rounded-[12px] group"
          >
            <div className="z-10 relative h-full flex flex-col justify-start text-left">
              <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-primary/20 text-default-400 w-fit p-2 mb-5">
                JAN 2020 — {t('present')}
              </Chip>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 md:p-3 bg-primary/20 w-fit rounded-[14px] border border-white/5">
                  <Sparkles size={22} className="text-primary"/>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-primary italic leading-none">Magic & Design</h4>
                  <div className="text-sm md:text-md font-bold uppercase tracking-[0.15em] text-default-400 mt-1">
                    Freelance Projects
                  </div>
                </div>
              </div>
              <p className="text-[13px] md:text-sm leading-relaxed mb-6 text-default-400 bg-primary/10 p-4 rounded-xl">
                {t('exp_freelance_design_desc')}
              </p>
              <div className="mt-auto flex items-center gap-2 mb-3 text-[13px] font-black uppercase tracking-widest bg-primary rounded-xl p-3 transition-transform group-hover:translate-x-1">
                {t('click_to_reveal')} <Sparkles size={15} />
              </div>
            </div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-primary/20 blur-3xl rounded-full transition-opacity opacity-50 group-hover:opacity-100" />
          </Card>  
        </div>
      </div>

      <MagicModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
};