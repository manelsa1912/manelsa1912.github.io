import { 
  Card, CardBody, Chip, Divider, Accordion, AccordionItem, Button, Link 
} from "@heroui/react";
import { GraduationCap, FileText, ExternalLink, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t, i18n } = useTranslation();

  // Dados dos Reports/Projetos (Podes mover isto para um ficheiro de constantes)
  const reports = {
    master: [
      { title: "Requirements Engineering Report", link: "#", type: "PDF" },
      { title: "DDD & Secure API Architecture", link: "#", type: "Repo" },
      { title: "Cyber-Physical Systems DSL", link: "#", type: "PDF" },
    ],
    bachelor: [
      { title: "Laravel Full-stack Project", link: "#", type: "Repo" },
      { title: "TSP Solver (C++) Performance Analysis", link: "#", type: "PDF" },
      { title: "Distributed Erlang Architecture", link: "#", type: "Code" },
    ]
  };

  return (
    <section id="edu" className="py-20">
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        <GraduationCap className="text-primary" size={40} /> {t('nav_edu')}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CARD MESTRADO (ISEP) */}
        <Card className="lg:col-span-2 bg-default-100/40 border-none shadow-none overflow-visible">
          <CardBody className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Chip color="primary" variant="flat" size="sm" className="mb-4">
                  2024 — {t('present')}
                </Chip>
                <h3 className="text-3xl font-bold italic">{t('edu_master_title')}</h3>
                <p className="text-primary font-medium text-lg">ISEP - Porto</p>
              </div>
              <GraduationCap size={60} className="text-primary/10 hidden sm:block" />
            </div>

            <Divider className="mb-6 opacity-50" />

            {/* Dropdown de Reports para Mestrado */}
            <Accordion variant="splitted" className="px-0">
              <AccordionItem
                key="1"
                aria-label="Technical Reports"
                title={<span className="text-sm font-bold text-default-600">Project Repo</span>}
                startContent={<FileText size={18} className="text-primary" />}
                className="bg-background/50 border border-divider shadow-none"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
                  {reports.master.map((report, idx) => (
                    <Button
                      key={idx}
                      as={Link}
                      href={report.link}
                      variant="flat"
                      size="sm"
                      className="justify-between bg-background hover:bg-primary/10 group"
                      endContent={<ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                    >
                      <span className="truncate">{report.title}</span>
                      <Chip size="sm" variant="dot" color="primary" className="h-5 text-[10px]">{report.type}</Chip>
                    </Button>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-wrap gap-2 mt-6">
              {["DDD", "HATEOAS", "DSL", "Secure APIs", "CPS"].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary px-3 py-1 rounded-full border border-primary/10">
                  {tag}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* CARD LICENCIATURA (FEUP) */}
        <Card className="bg-primary text-primary-foreground p-8 flex flex-col group relative overflow-hidden">
          <div className="z-10 h-full flex flex-col">
            <h3 className="text-4xl font-black mb-2 italic">2023</h3>
            <p className="font-bold uppercase tracking-widest text-xs opacity-80 mb-6">Licenciatura FEUP</p>
            
            <p className="text-sm opacity-90 mb-8 leading-relaxed">
              {i18n.language === 'pt' 
                ? "Desenvolvimento focado em sistemas de alto desempenho, redes e arquiteturas distribuídas." 
                : "Development focused on high-performance systems, networks, and distributed architectures."}
            </p>

            <div className="mt-auto">
                <Accordion className="p-0">
                    <AccordionItem 
                        key="2" 
                        title={<span className="text-xs font-bold text-white">Project Repo</span>}
                        className="text-white border-t border-white/20"
                        indicator={<ChevronDown className="text-white" />}
                    >
                        <div className="flex flex-col gap-2 pb-2">
                            {reports.bachelor.map((report, idx) => (
                                <Link 
                                    key={idx} 
                                    href={report.link} 
                                    className="text-xs text-white/80 hover:text-white flex items-center gap-2"
                                >
                                    <ExternalLink size={12} /> {report.title}
                                </Link>
                            ))}
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
          </div>
          {/* Elemento Decorativo */}
          <div className="absolute -right-10 -bottom-10 text-white/10 rotate-12">
            <Code2 size={200} />
          </div>
        </Card>

      </div>
    </section>
  );
};

// Sub-componente opcional para o ícone que faltava no import anterior
const Code2 = ({ size, className }: { size: number, className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
    </svg>
);