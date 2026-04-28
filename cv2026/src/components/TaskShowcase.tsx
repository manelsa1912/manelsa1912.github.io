import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Layout } from "lucide-react";

const projectImages = [
  { id: 1, src: "/images/wisecrop-dash.jpg", label: "Dashboard Analytics" },
  { id: 2, src: "/images/wisecrop-map.jpg", label: "GIS Integration" },
  { id: 3, src: "/images/wisecrop-mobile.jpg", label: "Responsive Design" },
];

export const TaskShowcase = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % projectImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative group">
      <div className="relative overflow-hidden bg-black/20 border border-white/10 rounded-[16px] aspect-[2.4/1] shadow-2xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={index}
            src={projectImages[index].src}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full object-cover pt-6"
            alt={projectImages[index].label}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
            <p className="text-[10px] uppercase tracking-[2px] font-bold text-white/70">
                {projectImages[index].label}
            </p>
        </div>
      </div>

      {/* Controlos de Navegação Flutuantes */}
      <button 
        onClick={() => { setDirection(-1); setIndex(index === 0 ? projectImages.length - 1 : index - 1); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-primary/80 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={() => { setDirection(1); setIndex((index + 1) % projectImages.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-primary/80 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots de progresso */}
      <div className="flex justify-center gap-2 mt-4">
        {projectImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
            }}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};