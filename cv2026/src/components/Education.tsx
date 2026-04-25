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
      { title: "High-Performance TSP Solver", link: "https://github.com/DuarteNuno/TSP", type: "C++" },
      { title: "Network Protocols & OS", link: "#", type: "Code" },
      { title: "Data Structures & Algos", link: "#", type: "Study" },
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
          <Card className="bg-default-100/40 border-none shadow-none h-full rounded-[12px] overflow-hidden">
            <CardBody className="p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Chip color="primary" variant="flat" size="sm" className="mb-4 uppercase font-bold rounded-full p-2">
                    2024 — {t('present')}
                  </Chip>
                  <h3 className="text-4xl font-bold italic tracking-tight">{t('edu_master_title')}</h3>
                  <p className="text-primary font-medium text-lg mt-1">ISEP - Porto</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-[32px] hidden sm:block">
                  <GraduationCap size={40} className="text-primary" />
                </div>
              </div>

              <p className="text-default-600 mb-6 italic leading-relaxed">
                {t('edu_master_desc')}
              </p>

              <Divider className="mb-8 opacity-50" />

              <Accordion variant="splitted" className="px-0">
                <AccordionItem
                  key="1"
                  aria-label="Technical Projects"
                  title={<span className="text-sm font-black uppercase tracking-widest text-default-600">{t('edu_view_projects')}</span>}
                  startContent={<FileText size={20} className="text-primary" />}
                  className="bg-background/60 border border-divider/40 shadow-none rounded-[24px] px-4"
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
                        className="justify-between bg-background hover:bg-primary/10 group rounded-full px-4 h-10"
                        endContent={<ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                      >
                        <span className="truncate text-[11px] font-bold uppercase tracking-tight">{report.title}</span>
                        <Chip size="sm" variant="flat" color="primary" className="h-5 text-[9px] font-black border-none">{report.type}</Chip>
                      </Button>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-wrap gap-3 mt-10">
                {["Software Quality", "Cloud Systems", "Scalability", "DDD", "Security"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-primary text-white px-5 py-2 rounded-full shadow-md shadow-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* CARD LICENCIATURA (FEUP) */}
        <Card className="bg-primary text-primary-foreground p-10 flex flex-col relative overflow-hidden border-none rounded-[12px] shadow-xl shadow-primary/20">
          <div className="z-10 h-full flex flex-col">
            <Chip color="secondary" variant="flat" size="sm" className="mb-4 uppercase font-bold rounded-full p-2 dark:text-black">
              2021 — 2023
            </Chip>
            <h3 className="text-4xl font-black mb-2 italic">{t('edu_bachelor_label')}</h3>
            <p className="font-bold uppercase tracking-[0.2em] text-xs opacity-80 mb-8 dark:text-black">FCUP/FEUP - Porto</p>
            
            <p className="text-sm opacity-90 mb-10 leading-relaxed font-medium italic">
              {t('edu_bachelor_desc')}
            </p>

            <div className="mt-auto">
                <Accordion className="p-0">
                    <AccordionItem 
                        key="2" 
                        title={<span className="text-xs font-black text-white uppercase tracking-widest">{t('edu_view_projects')}</span>}
                        className="text-white border-t border-white/20"
                        indicator={<ChevronDown className="text-white" />}
                    >
                        <div className="flex flex-col gap-3 pb-4">
                            {reports.bachelor.map((report, idx) => (
                                <Link 
                                    key={idx} 
                                    href={report.link}
                                    isExternal 
                                    className="text-[11px] text-white/80 hover:text-white flex items-center gap-2 font-bold uppercase tracking-tighter"
                                >
                                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <ExternalLink size={10} />
                                    </div> 
                                    {report.title}
                                </Link>
                            ))}
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
          </div>
          
          <div className="absolute -right-12 -bottom-12 text-white/10 rotate-12">
            <Code2 size={240} />
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