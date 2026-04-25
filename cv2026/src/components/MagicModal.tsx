import { useState, useEffect } from "react";
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

interface MagicModal {
  isOpen: boolean;
  onOpenChange: () => void;
}

const portfolioItems = [
  {
    title: "The Mantis Playing Cards",
    subtitle: "Product Engineering",
    image: "/mantis.jpg",
    techs: ["Adobe Suite", "Blender 3D", "Supply Chain Management"],
    description: "Physical design and product engineering project sold globally. Highlight: International production management and rigorous quality control.",
    link: "https://www.butterflymagicstore.com/blog/mantis-playing-cards-new-marked-deck/",
    color: "from-emerald-500/20 to-primary/20"
  },
  {
    title: "UI Magic Concepts",
    subtitle: "Creative Direction & UI",
    image: "/ui-magic.jpg",
    techs: ["Figma", "After Effects", "Spline"],
    description: "Exploração de interfaces interativas e motion design para elevar a experiência do utilizador. Focado em criar identidades visuais que comunicam inovação.",
    link: "#",
    color: "from-primary/20 to-purple-500/20"
  }
];

export const MagicModal = ({ isOpen, onOpenChange }: MagicModal) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));

  return (
    <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="5xl"
        classNames={{
          wrapper: "z-[9999] dark:dark",
          backdrop: "bg-black/50 backdrop-blur-md z-[9998]",
          base: "bg-[#0a0a0a] border border-white/10 text-white shadow-2xl m-3 md:m-16 rounded-3xl relative overflow-hidden",
          header: "border-b border-white/5 p-6 z-20 bg-[#0a0a0a]/80 backdrop-blur-md",
          footer: "border-t border-white/5 p-4 z-20 bg-[#0a0a0a]",
          closeButton: "absolute right-4 top-4 hover:bg-white/10 active:bg-white/20 transition-colors z-[10000]",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex gap-3 items-center">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black italic tracking-tight">Magic & Design Portfolio</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-default-400 font-bold">Showcase • Slide {currentSlide + 1}/{portfolioItems.length}</span>
                </div>
              </ModalHeader>

              <ModalBody className="p-0 overflow-hidden">
                <div className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col lg:flex-row">
                  
                  {/* COLUNA VISUAL */}
                  <div className={`w-full lg:w-[60%] min-h-[300px] sm:min-h-[400px] lg:min-h-full relative bg-gradient-to-br ${portfolioItems[currentSlide].color} order-1 lg:order-2 flex items-center justify-center overflow-hidden transition-colors duration-1000`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full p-6 lg:p-12 flex items-center justify-center"
                      >
                        <div className="relative w-full aspect-video lg:aspect-square max-w-[500px] bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
                          {portfolioItems[currentSlide].image ? (
                            <img 
                              src={portfolioItems[currentSlide].image} 
                              alt={portfolioItems[currentSlide].title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Code2 size={80} className="text-primary opacity-20" />
                            </div>
                          )}
                          
                          {/* Overlay de Brilho */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 opacity-60 pointer-events-none" />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Botões de Navegação */}
                    <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 flex gap-2 z-30">
                      <Button isIconOnly radius="full" size="md" variant="flat" className="bg-black/40 border border-white/10 backdrop-blur-md hover:bg-primary/20 text-white" onClick={prevSlide}>
                        <ChevronLeft size={20} />
                      </Button>
                      <Button isIconOnly radius="full" size="md" variant="flat" className="bg-black/40 border border-white/10 backdrop-blur-md hover:bg-primary/20 text-white" onClick={nextSlide}>
                        <ChevronRight size={20} />
                      </Button>
                    </div>
                  </div>

                  {/* COLUNA DE TEXTO */}
                  <div className="w-full lg:w-[40%] p-8 sm:p-10 lg:p-14 flex flex-col justify-center z-10 order-2 lg:order-1 bg-[#0a0a0a]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-6 lg:space-y-8"
                      >
                        <div className="space-y-3">
                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter leading-[0.9] text-white">
                            {portfolioItems[currentSlide].title.split(' - ')[0]} <br/>
                            <span className="text-primary not-italic font-light text-2xl lg:text-3xl opacity-80">
                              {portfolioItems[currentSlide].title.split(' - ')[1]}
                            </span>
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {portfolioItems[currentSlide].techs.map(tool => (
                            <Chip key={tool} size="sm" variant="flat" className="bg-white/5 text-default-400 p-2 border border-white/5 text-[9px] font-bold uppercase">
                              {tool}
                            </Chip>
                          ))}
                        </div>

                        <p className="text-sm lg:text-base text-default-500 leading-relaxed font-medium max-w-sm">
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
                            className="w-full sm:w-auto font-black italic px-10"
                            endContent={<ExternalLink size={18} />}
                          >
                            View Project
                          </Button>
                          
                          <div className="flex gap-2">
                            {portfolioItems.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-10 bg-primary' : 'w-3 bg-white/10'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </ModalBody>

              <ModalFooter className="justify-between items-center">
                <p className="text-[10px] text-default-400 font-medium hidden sm:block">
                  © 2026 Manuel Sá — Design & Code
                </p>
                <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest animate-pulse">
                  Auto-playing showcase
                </p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
};