import { 
  Card, CardBody, Chip, Divider, Accordion, AccordionItem, Button, Link 
} from "@heroui/react";
import { GraduationCap, FileText, ExternalLink, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Education = () => {
  const { t } = useTranslation();

  const reports = {
    master: [
      { title: "DESOFS: Secure API & DDD", link: "https://github.com/manelsa1912/Desfofs2025", type: "Repo" },
      { title: "QSOFT: Performance Lab", link: "https://github.com/manelsa1912/QSOFT2025", type: "Repo" },
      { title: "BioCantinas: Req. Engineering", link: "https://github.com/diogojms2/engreq-biocantinas", type: "Repo" },
      { title: "ODSOFT: DevOps Pipeline", link: "https://github.com/diogojms2/odsoft-project", type: "Repo" },
    ],
    bachelor: [
      { title: "High-Performance TSP Solver (AI class)", link: "https://github.com/DuarteNuno/TSP", type: "C++" },
      { title: "Network Setup & Protocols", link: "https://github.com/PedroCorreia56/RCOm", type: "Code" },
    ]
  };

  return (
    <section id="edu" className="py-20">
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        <GraduationCap className="text-primary" size={40} /> {t('nav_edu')}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CARD MESTRADO (ISEP) */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
        >
        <Card className="bg-primary text-white border-none shadow-xl shadow-primary/20 h-full rounded-[12px] overflow-hidden">
          <CardBody className="p-6 md:p-10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-6">
                <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-white/20 text-white w-fit p-2">
                  2024 — {t('present')}
                </Chip>
                <div className="flex items-center gap-4">
                  <div className="p-2 md:p-3 bg-white/20 w-fit rounded-[14px] backdrop-blur-md border border-white/10">
                    <GraduationCap size={22} className="text-white"/>
                  </div>
                  <div>
                    <h4 className="text-4xl font-black italic leading-none">{t('edu_master_title')}</h4>
                    <p className="text-sm md:text-md font-bold uppercase tracking-[1px] text-default/50 mt-1">
                      ISEP - Porto
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-4 md:p-6 rounded-[24px] hidden sm:block border border-white/10">
                <GraduationCap size={30} className="text-white" />
              </div>
            </div>

            <Divider className="hidden md:block mb-6 opacity-20 bg-white" />
            
            <p className="text-[13px] md:text-sm leading-relaxed mb-6 bg-default/10 rounded-xl p-3">
              {t('edu_master_desc')}
            </p>

            {/* Accordion adaptado ao estilo do primeiro card */}
            <div className="space-y-3">
              <Accordion variant="light" className="px-0">
                <AccordionItem
                  key="1"
                  aria-label="Technical Projects"
                  title={<span className="text-[10px] font-black uppercase tracking-widest text-white/80">{t('edu_view_projects')}</span>}
                  startContent={<FileText size={18} className="text-white" />}
                  className="bg-white/10 border border-white/10 rounded-[18px] px-4"
                  indicator={<ChevronDown size={18} className="text-white" />}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
                    {reports.master.map((report, idx) => (
                      <Button
                        key={idx}
                        as={Link}
                        href={report.link}
                        isExternal
                        variant="flat"
                        size="sm"
                        className="justify-between bg-white text-primary hover:bg-white/90 group rounded-full px-4 h-10 border-none"
                      >
                        <span className="truncate text-[10px] font-black uppercase tracking-tight">{report.title}</span>
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <ExternalLink size={10} className="text-primary" />
                        </div> 
                      </Button>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
              {["Software Quality", "Cloud Systems", "Scalability", "DDD", "Security"].map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white text-primary px-3 py-1.5 rounded-full shadow-md">
                  {tag}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
        </motion.div>

        {/* CARD LICENCIATURA (FEUP) */}
        <Card className="bg-default-100/40 border-none shadow-none p-6 md:p-8 flex-1 relative overflow-hidden rounded-[12px]">
          <div className="z-10 relative h-full flex flex-col">
            {/* Data / Periodo */}
            <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-primary/20 text-primary-900 w-fit p-2 mb-5">
              2021 — 2023
            </Chip>

            {/* Header com Ícone e Título */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 md:p-3 bg-primary/10 w-fit rounded-[14px] border border-primary/5">
                <Code2 size={22} className="text-primary"/>
              </div>
              <div>
                <h4 className="text-3xl font-black italic text-default-900 leading-none">{t('edu_bachelor_label')}</h4>
                <p className="text-sm md:text-md font-bold uppercase tracking-[0.15em] text-default-500 mt-1">
                  FCUP/FEUP - Porto
                </p>
              </div>
            </div>

            {/* Descrição com fundo destacado */}
            <p className="text-[13px] md:text-sm bg-default/20 rounded-xl text-default-600 leading-relaxed mb-6 p-3 italic">
              {t('edu_bachelor_desc')}
            </p>

            {/* Projetos / Accordion (Substituindo a barra de tags do 1º card para manter funcionalidade) */}
            <div className="mt-auto">
              <Accordion className="px-0" variant="light">
                <AccordionItem 
                  key="2" 
                  title={<span className="text-[10px] font-black text-default-600 uppercase tracking-widest">{t('edu_view_projects')}</span>}
                  className="border-t border-divider/40"
                  indicator={<ChevronDown size={14} className="text-default-500" />}
                  startContent={<GraduationCap size={18} className="text-primary" />}
                >
                  <div className="flex flex-col gap-3 pb-4">
                    {reports.bachelor.map((report, idx) => (
                      <Link 
                        key={idx} 
                        href={report.link}
                        isExternal 
                        className="text-[11px] text-default-500 hover:text-primary flex items-center gap-2 font-bold uppercase tracking-tighter transition-colors"
                      >
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <ExternalLink size={10} className="text-primary" />
                        </div> 
                        {report.title}
                      </Link>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};

const Code2 = ({ size, className }: { size: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
    </svg>
);