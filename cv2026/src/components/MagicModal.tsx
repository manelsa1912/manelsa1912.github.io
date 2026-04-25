import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,  
  Button,
  Chip,
  Link
} from "@heroui/react";
import { 
  Sparkles, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Code2 
} from "lucide-react";

interface MagicModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const portfolioItems = [
  {
    title: "The Mantis Playing Cards - Butterfly Magic Store",
    subtitle: "Product Engineering",
    image: "/mantis.jpg",
    techs: ["Adobe Suite", "Blender 3D", "Supply Chain Management"],
    description: "Physical design and product engineering project sold globally. Highlight: International production management and rigorous quality control.",
    link: "https://www.butterflymagicstore.com/blog/mantis-playing-cards-new-marked-deck/",
    color: "from-emerald-500/20 to-primary/20"
  },
  {
    title: "Psychic Survival Kit - Peter Turner",
    subtitle: "Tarot Card Design & Creative Direction",
    image: "/tarot.png",
    techs: ["Illustration", "QR Integration", "Print Production"],
    description: "Design completo das cartas de Tarot para o kit de Peter Turner. O design integra de forma fluida QR Codes como feature central, unindo o físico ao digital.",
    link: "https://www.kickstarter.com/projects/missingpiecedeck/psychic-survival-kit-peter-turner/description",
    color: "from-primary/20 to-purple-500/20"
  },
  {
    title: "Beyond Fantasy - Sean Devine",
    subtitle: "Book Cover Design",
    image: "/beyond_fantasy.jpg",
    techs: ["Graphic Design", "Typography", "Print Layout"],
    description: "Design da capa (dust jacket) para o livro de Sean Devine. O conceito foi inspirado no clássico 'Effective Card Magic' de Bill Simon, trazendo um ar nostálgico e elegante para a magia moderna.",
    link: "https://www.youtube.com/watch?v=j4D08FlFftQ",
    color: "from-blue-600/20 to-indigo-900/40"
  }
];

export const MagicModal = ({ isOpen, onOpenChange }: MagicModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [isOpen, currentSlide, nextSlide]);

  return (
    <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="5xl"
        scrollBehavior="inside"
        classNames={{
          wrapper: "z-[9999]",
          backdrop: "bg-black/50 backdrop-blur-md z-[9998]",
          base: "bg-[#0a0a0a] border border-white/10 text-white shadow-2xl m-2 sm:m-4 md:m-16 rounded-3xl relative overflow-hidden h-[90vh]",
          header: "border-b border-white/5 p-4 sm:p-6 z-20 bg-[#0a0a0a]/80 backdrop-blur-md",
          footer: "border-t border-white/5 p-4 z-20 bg-[#0a0a0a]",
          closeButton: "absolute right-4 top-4 hover:bg-white/10 active:bg-white/20 transition-colors z-[10000]",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex gap-3 items-center">
                <div className="p-2 bg-primary/20 rounded-lg shrink-0">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-lg sm:text-xl font-black italic tracking-tight truncate">Magic & Design Portfolio</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-default-400 font-bold">Slide {currentSlide + 1}/{portfolioItems.length}</span>
                </div>
              </ModalHeader>

              <ModalBody className="p-0 overflow-hidden">
                <div className="relative w-full h-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
                  
                  {/* COLUNA VISUAL: Em mobile ocupa altura limitada para dar espaço ao texto */}
                  <div className={`w-full lg:w-[55%] h-[35vh] sm:h-[35vh] lg:h-full min-h-[300px] relative bg-gradient-to-br ${portfolioItems[currentSlide].color} flex items-center justify-center overflow-hidden transition-colors duration-1000 shrink-0`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full p-4 sm:p-8 flex items-center justify-center"
                      >
                        <div className="relative w-full h-full bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                          {portfolioItems[currentSlide].image ? (
                            <img 
                              src={portfolioItems[currentSlide].image} 
                              alt={portfolioItems[currentSlide].title}
                              className="w-full h-full object-contain p-2 sm:p-4" 
                            />
                          ) : (
                            <Code2 size={60} className="text-primary opacity-20" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-white/5 opacity-40 pointer-events-none" />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navegação Manual: Mais compacta em mobile */}
                    <div className="absolute bottom-4 right-4 flex gap-2 z-30">
                      <Button isIconOnly radius="full" size="sm" variant="flat" className="bg-black/60 border border-white/10 backdrop-blur-md text-white sm:size-md" onClick={prevSlide}>
                        <ChevronLeft size={18} />
                      </Button>
                      <Button isIconOnly radius="full" size="sm" variant="flat" className="bg-black/60 border border-white/10 backdrop-blur-md text-white sm:size-md" onClick={nextSlide}>
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  </div>

                  {/* COLUNA DE TEXTO: Scrollable em mobile para o botão nunca ficar preso fora da vista */}
                  <div className="w-full lg:w-[45%] p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-[#0a0a0a] overflow-y-auto lg:overflow-visible">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-5 sm:space-y-8"
                      >
                        <div className="space-y-1 md:space-y-3">
                          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black italic text-white uppercase break-words pt-2">
                            {portfolioItems[currentSlide].title.split(' - ')[0]}
                            {portfolioItems[currentSlide].title.includes(' - ') && (
                                <>
                                    <br/>
                                    <span className="text-primary not-italic font-light text-sm lg:text-3xl opacity-80 ml-2 sm:ml-0">
                                        {portfolioItems[currentSlide].title.split(' - ')[1]}
                                    </span>
                                </>
                            )}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {portfolioItems[currentSlide].techs.map(tool => (
                            <Chip key={tool} size="sm" variant="flat" className="bg-white/5 text-default-400 border border-white/5 text-[9px] font-bold uppercase">
                              {tool}
                            </Chip>
                          ))}
                        </div>

                        <p className="text-sm lg:text-base text-default-500 leading-relaxed font-medium italic border-l-2 border-primary/20 pl-4">
                          {portfolioItems[currentSlide].description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                          <Button 
                            as={Link}
                            href={portfolioItems[currentSlide].link}
                            isExternal
                            color="primary"
                            variant="shadow"
                            size="lg"
                            className="w-full sm:w-auto font-black italic px-8 shadow-primary/20"
                            endContent={<ExternalLink size={18} />}
                          >
                            View Project
                          </Button>
                          
                          <div className="flex gap-2">
                            {portfolioItems.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/10'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </ModalBody>

              <ModalFooter className="hidden sm:flex justify-between items-center py-3 px-6">
                <p className="text-[10px] text-default-400 font-medium tracking-wider">
                  © 2026 MANUEL SÁ — DESIGN & CODE
                </p>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <p className="text-[9px] text-primary/60 font-bold uppercase tracking-[0.2em]">
                        Auto-playing
                    </p>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
};