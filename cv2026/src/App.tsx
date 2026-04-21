import React from "react";
import { 
  Navbar, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Chip, 
  Divider,
  Avatar
} from "@heroui/react";
import { Github, Linkedin, Mail, Code2, Globe } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

// Assets do Leaflet
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function CVMap() {
  const { t } = useTranslation();
  const points = [
    { pos: [41.1780, -8.5950] as [number, number], title: "FEUP", desc: "Licenciatura" },
    { pos: [41.1765, -8.6045] as [number, number], title: "ISEP", desc: "Mestrado" },
    { pos: [41.1579, -8.6291] as [number, number], title: "Wisecrop", desc: "Trabalho Atual" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Globe size={24} className="text-primary" /> {t('map_title')}
      </h2>
      <div className="h-[400px] w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
        <MapContainer center={[41.17, -8.60]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {points.map((point, idx) => (
            <Marker key={idx} position={point.pos}>
              <Popup>
                <div className="p-1">
                  <h4 className="font-bold text-primary">{point.title}</h4>
                  <p className="text-xs">{point.desc}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pt' ? 'en' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <Navbar isBordered className="bg-transparent backdrop-blur-md">
        <NavbarContent justify="start">
          <div className="flex items-center gap-2">
            <Code2 className="text-primary" />
            <p className="font-bold text-inherit uppercase tracking-wider">Manuel Sá</p>
          </div>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" className="text-sm" href="#exp">{t('nav_exp')}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-sm" href="#edu">{t('nav_edu')}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-sm" href="#skills">{t('nav_skills')}</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <Button 
            isIconOnly 
            variant="light" 
            onClick={toggleLanguage}
            className="mr-2"
          >
            <span className="font-bold text-xs">{i18n.language.toUpperCase()}</span>
          </Button>
          <Button 
            as={Link} 
            color="primary" 
            href="mailto:manelsa1912@gmail.com" 
            variant="flat" 
            size="sm"
            startContent={<Mail size={16}/>}
          >
            Contacto
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Hero Section REESTRUTURADA PARA FOTO */}
      <section className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-[1fr,auto] gap-12 items-center">
        
        {/* Coluna do Texto - Alinhamento à esquerda em MD */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Manuel <span className="text-primary">Sá</span>
          </h1>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-foreground">
              {t('hero_role')}
            </p>
            <p className="text-xl text-default-500 max-w-[600px] leading-relaxed">
              {t('hero_desc')}
            </p>
          </div>
          <div className="flex gap-4">
            <Button 
              as={Link}
              href="https://github.com/manelsa1912"
              target="_blank"
              isIconOnly 
              variant="faded" 
              radius="full"
            >
              <Github size={20} />
            </Button>
            <Button 
              as={Link}
              href="https://linkedin.com/in/manuel-sa-54a202289"
              target="_blank"
              isIconOnly 
              variant="faded" 
              radius="full"
            >
              <Linkedin size={20} />
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative">
            {/* Ornamento de fundo (opcional, dá um toque tech) */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-70"></div>
            
            <Avatar 
              // INSTRUÇÕES PARA A FOTO:
              // 1. Coloque a sua foto (ex: manuel.jpg) na pasta /public
              // 2. Substitua o link abaixo por: src="/manuel.jpg"
              src="https://via.placeholder.com/300x300.png?text=MS" 
              className="w-48 h-48 md:w-64 md:h-64 text-large border-4 border-background shadow-2xl relative z-10"
              isBordered
              color="primary"
            />
          </div>
        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Django", "TypeScript", "Python", "MySQL", "C#", "Docker", "Leaflet", "Highcharts"].map((skill) => (
            <Chip 
              key={skill} 
              variant="flat" 
              color="primary" 
              className="capitalize border-1 border-primary/20"
            >
              {skill}
            </Chip>
          ))}
        </div>
      </section>

      {/* Mapa de Localizações */}
      <CVMap />

      {/* Experiência */}
      <section id="exp" className="py-10">
        <h2 className="text-3xl font-bold mb-10 inline-block border-b-4 border-primary">
          {t('exp_title')}
        </h2>
        <Card className="p-4 border-none bg-default-100/40 backdrop-blur-sm shadow-none">
          <CardHeader className="flex justify-between items-start">
            <div className="flex flex-col">
              <p className="text-xl font-bold">Full-Stack Developer</p>
              <p className="text-primary font-medium">Wisecrop</p>
              <p className="text-small text-default-400 italic">Nov 2023 — {i18n.language === 'pt' ? 'Presente' : 'Present'}</p>
            </div>
            <Chip color="primary" variant="dot">Porto, PT</Chip>
          </CardHeader>
          <Divider className="my-4" />
          <CardBody className="text-default-600 leading-relaxed">
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{t(`wisecrop_task${i}`)}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      {/* Educação */}
      <section id="edu" className="py-10 pb-24">
        <h2 className="text-3xl font-bold mb-10">{t('nav_edu')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-default-50 border-1 border-default-200">
            <CardBody className="p-6">
              <p className="text-primary font-mono text-xs mb-2">2024 — {i18n.language === 'pt' ? 'Presente' : 'Present'}</p>
              <p className="text-lg font-bold">Mestrado em Engenharia de Software</p>
              <p className="text-default-500">ISEP</p>
            </CardBody>
          </Card>
          <Card className="bg-default-50 border-1 border-default-200">
            <CardBody className="p-6">
              <p className="text-primary font-mono text-xs mb-2">2021 — 2023</p>
              <p className="text-lg font-bold">Licenciatura em Engenharia Informática</p>
              <p className="text-default-500">FEUP</p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}