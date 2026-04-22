import 'leaflet/dist/leaflet.css';
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { MapSection } from "./components/MapSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6 pt-8">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}