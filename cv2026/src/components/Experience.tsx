import { motion } from "framer-motion";
import { Card, CardBody, Chip, Divider, Link } from "@heroui/react";
import { Briefcase, ExternalLink, Sparkles, Binary, GraduationCap, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="exp" className="py-20">
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        <Briefcase className="text-primary" size={40} /> {t('exp_title')}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CARD PRINCIPAL: WISE CROP */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
        >
          <Card className="bg-default-100/40 border-none shadow-none h-full rounded-[12px] overflow-hidden">
            <CardBody className="p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Chip color="primary" variant="flat" size="sm" className="mb-4 uppercase font-bold rounded-full p-2">
                    {t('wisecrop_period')}
                  </Chip>
                  <h3 className="text-4xl font-bold italic tracking-tight">Full-Stack Developer</h3>
                  <Link 
                    href="https://www.wisecrop.com" 
                    isExternal 
                    className="text-primary font-medium text-lg flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    Wisecrop <ExternalLink size={18} />
                  </Link>
                </div>
                <div className="bg-primary/10 p-6 rounded-[32px] hidden sm:block">
                    <Code2 size={40} className="text-primary" />
                </div>
              </div>

              <Divider className="mb-8 opacity-50" />

              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-5 p-5 rounded-[24px] bg-background/60 border border-divider/40">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shrink-0">
                      {i}
                    </div>
                    <p className="text-sm text-default-600 leading-relaxed">
                        {t(`wisecrop_task${i}`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {["React", "Django", "Python", "AWS", "Git", "SQL", "TypeScript"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-primary text-white px-5 py-2 rounded-full shadow-md shadow-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* COLUNA LATERAL */}
        <div className="flex flex-col gap-8">
          
          {/* CARD CCG - ESTÁGIO */}
          <Card className="bg-primary text-primary-foreground p-6 md:p-10 flex-1 relative overflow-hidden border-none rounded-[12px] shadow-xl shadow-primary/20 min-h-fit">
            <div className="z-10 relative h-full flex flex-col">
              
              {/* Header: Ícone e Título lado a lado */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 w-fit rounded-[18px]">
                  <Binary size={22} className="text-white"/>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black italic text-white leading-none">Internship</h4>
                  <p className="">
                      
                  </p>
                  <Link 
                    href="https://www.ccg.pt" 
                    isExternal 
                    className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 mt-1"
                  >
                    CCG/ZGDV <ExternalLink className="ml-1" size={15} />
                  </Link>
                </div>
              </div>
              
              {/* Descrição */}
              <p className="text-sm text-white/90 leading-relaxed font-medium mb-8">
                {t('ccg_desc')}
              </p>

              {/* Footer */}
              <div className="mt-auto flex gap-2 items-center">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md shrink-0">
                    <GraduationCap size={18} className="text-white" />
                </div>
                <div className="flex-1 bg-white/10 rounded-full h-9 flex items-center px-4 text-[10px] font-bold tracking-tighter uppercase text-white whitespace-nowrap">
                    React / JWT / Crypto
                </div>
              </div>
            </div>
          </Card>

          {/* CARD DESIGN & MAGIC */}
          <Card className="bg-default-900 dark:bg-transparent text-white p-10 flex-1 relative overflow-hidden border-none rounded-[12px]">
            <div className="z-10 relative">
              <div className="flex gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                    <Sparkles size={20} className="text-white"/>
                </div>
              </div>
              <h4 className="text-2xl font-black italic mb-3">Magic & Design</h4>
              <p className="text-xs text-default-400 leading-relaxed italic">
                {t('exp_freelance_design_desc')}
              </p>
            </div>
            
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
          </Card>  
        </div>
      </div>
    </section>
  );
};