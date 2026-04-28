import { 
  Card, CardBody, Chip, Accordion, AccordionItem, Button, Link 
} from "@heroui/react";
import { GraduationCap, FileText, ExternalLink, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TaskShowcase, type ProjectImage } from "./TaskShowcase";

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

  const isepImages: ProjectImage[] = [
    { id: 1, src: "/pipeline.png", label: "Jenkins Pipeline" },
    { id: 2, src: "/weekly-menu-suggest-plan-2.png", label: "Calendar menu" },
    { id: 3, src: "/dashboard-2.png", label: "Dashboard example" },
    { id: 4, src: "/componentDiagram.png", label: "Component Diagram" },
  ];

  return (
    <section id="edu" className="py-20 pb-40 md:py-0">
      <h2 className="text-4xl font-black mb-8 md:mb-12 flex items-center gap-4">
        <GraduationCap className="text-primary" size={40} /> {t('nav_edu')}
      </h2>

      <div className="grid grid-cols-1 gap-8">
        
        {/* CARD MESTRADO (ISEP) - LARGURA TOTAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <Card className="bg-primary text-white border-none shadow-xl shadow-primary/20 rounded-[12px] overflow-hidden">
            <CardBody className="p-6 md:p-10">
              {/* Layout em Grid: Texto à esquerda, Imagens à direita em Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Coluna Esquerda: Info e Projetos */}
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col gap-4 mb-6">
                    <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-white/20 text-white w-fit p-2">
                      2024 — {t('present')}
                    </Chip>
                    <div className="flex items-center gap-4">
                      <div className="p-2 md:p-3 bg-white/20 w-fit rounded-[14px] backdrop-blur-md border border-white/10">
                        <GraduationCap size={22} className="text-white"/>
                      </div>
                      <div>
                        <h4 className="text-3xl md:text-4xl font-black italic leading-none">{t('edu_master_title')}</h4>
                        <p className="text-sm font-bold uppercase tracking-[1px] text-white/60 mt-1">
                          ISEP - Porto
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed mb-6 bg-white/10 rounded-xl p-4 border border-white/5">
                    {t('edu_master_desc')}
                  </p>

                  <Accordion variant="light" className="px-0">
                    <AccordionItem
                      key="1"
                      aria-label="Technical Projects"
                      title={<span className="text-[10px] font-black uppercase tracking-widest text-white/80">{t('edu_view_projects')}</span>}
                      startContent={<FileText size={18} className="text-white" />}
                      className="bg-default-100/20 border border-white/10 rounded-[18px] px-4"
                      indicator={<ChevronDown size={18} className="text-white" />}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
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

                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Software Quality", "Cloud Systems", "Scalability", "DDD", "Security"].map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Coluna Direita: Showcase de Imagens */}
                <div className="flex items-center justify-center rounded-2xl border border-white/5">
                  <TaskShowcase images={isepImages} />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* CARD LICENCIATURA (FEUP) - LARGURA TOTAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <Card className="bg-default-100/40 border-none shadow-none p-6 md:p-10 relative overflow-hidden rounded-[12px]">
            <div className="z-10 relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              <div className="flex-1">
                <Chip variant="flat" size="sm" className="flex uppercase font-bold rounded-full bg-primary/20 text-primary-900 w-fit p-2 mb-5">
                  2021 — 2023
                </Chip>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 w-fit rounded-[14px] border border-primary/5">
                    <Code2 size={22} className="text-primary"/>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black italic text-default-900 leading-none">{t('edu_bachelor_label')}</h4>
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-default-500 mt-1">
                      FCUP/FEUP - Porto
                    </p>
                  </div>
                </div>

                <p className="text-[14px] bg-default-200/50 rounded-xl text-default-600 leading-relaxed p-4 italic max-w-3xl">
                  {t('edu_bachelor_desc')}
                </p>
              </div>

              <div className="w-full md:w-80">
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
        </motion.div>

      </div>
    </section>
  );
};

const Code2 = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
  </svg>
);