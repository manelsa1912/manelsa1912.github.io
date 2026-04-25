import 'leaflet/dist/leaflet.css';
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { MapSection } from "./components/MapSection";
import { Footer } from "./components/Footer";
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6">
        <section className="snap-start h-screen flex flex-col justify-center">
          <Hero />
        </section>
        <section className="snap-start min-h-screen flex flex-col justify-center">
          <Skills />
        </section>
        <section className="snap-start min-h-screen md:py-20">
          <Experience />
        </section>
        <section className="snap-start min-h-screen md:py-20">
          <Education />
        </section>
        <section className="snap-start min-h-screen flex flex-col justify-center">
          <MapSection />
        </section>
      </main>
      <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6 relative z-0 overflow-hidden">
        <img 
          src="/assinatura.png" 
          alt="" 
          className="h-auto w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none dark:block hidden -z-10" 
        />
        <img 
          src="/logo.png" 
          alt="" 
          className="h-auto w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none invert dark:hidden block -z-10" 
        />
        <h2 className="text-4xl md:text-6xl font-black flex-1 flex items-center justify-center text-center gap-4 relative z-10">
          {t('more_comming_soon')}
        </h2>

        <div className="w-full relative z-10">
          <Footer />
        </div>
      </section>
    </div>
  );
}