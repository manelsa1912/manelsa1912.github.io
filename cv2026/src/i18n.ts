import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        nav_exp: "Experiência",
        nav_edu: "Educação",
        nav_skills: "Skills",
        hero_role: "Full-Stack Developer na Wisecrop",
        hero_desc: "Especializado em React e Django, modernizando fluxos para mais de 2.000 profissionais agrícolas.",
        map_title: "Localizações",
        exp_title: "Experiência Profissional",
        wisecrop_task1: "Redesign completo do fluxo de autenticação.",
        wisecrop_task2: "Otimização de performance UI e queries Django ORM.",
        wisecrop_task3: "Integração de Leaflet e Highcharts.",
      }
    },
    en: {
      translation: {
        nav_exp: "Experience",
        nav_edu: "Education",
        nav_skills: "Skills",
        hero_role: "Full-Stack Developer at Wisecrop",
        hero_desc: "Specialized in React and Django, modernizing workflows for over 2,000 agricultural professionals.",
        map_title: "Locations",
        exp_title: "Professional Experience",
        wisecrop_task1: "Complete redesign of the authentication flow.",
        wisecrop_task2: "UI performance and Django ORM query optimization.",
        wisecrop_task3: "Leaflet and Highcharts integration.",
      }
    }
  },
  lng: "pt",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;