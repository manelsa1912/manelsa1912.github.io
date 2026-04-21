import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        // Navegação
        nav_exp: "Experiência",
        nav_edu: "Formação",
        nav_skills: "Skills",
        
        // Hero
        hero_desc: "Full-Stack Developer especializado em React e Django. Focado em modernizar sistemas complexos e otimizar a experiência de milhares de utilizadores.",
        
        // Experiência - Wisecrop
        exp_title: "Percurso Profissional",
        wisecrop_task1: "Redesign completo do fluxo de autenticação, reduzindo pedidos de suporte.",
        wisecrop_task2: "Otimização de queries MySQL via Django ORM para tráfego elevado.",
        wisecrop_task3: "Integração de Leaflet e Highcharts para visualização de dados agrícolas.",
        
        // Freelance & Outros
        exp_freelance_design: "Graphic Designer (Freelance)",
        exp_freelance_design_desc: "Criação de identidades visuais e baralhos profissionais para marcas internacionais de magia.",
        exp_magic: "Mágico Profissional",
        exp_magic_desc: "Espetáculos interativos focados na experiência do público e entretenimento.",
        
        // Educação
        edu_master_title: "Mestrado em Engenharia de Software",
        edu_master_desc: "Foco em Engenharia de Requisitos, APIs seguras com DDD e sistemas distribuídos.",
        edu_bachelor_title: "Licenciatura em Engenharia Informática",
        edu_bachelor_desc: "Desenvolvimento Full-stack, redes IPv4 e arquiteturas distribuídas.",
        
        // Diversos
        map_info: "Sediado no Grande Porto, a transformar café em código escalável.",
        present: "Presente"
      }
    },
    en: {
      translation: {
        // Navigation
        nav_exp: "Experience",
        nav_edu: "Education",
        nav_skills: "Skills",
        
        // Hero
        hero_desc: "Full-Stack Developer specialized in React and Django. Focused on modernizing complex systems and optimizing the experience of thousands of users.",
        
        // Experience - Wisecrop
        exp_title: "Professional Journey",
        wisecrop_task1: "Complete redesign of the authentication flow, reducing support requests.",
        wisecrop_task2: "MySQL query optimization via Django ORM for high-traffic views.",
        wisecrop_task3: "Leaflet and Highcharts integration for agricultural data visualization.",
        
        // Freelance & Others
        exp_freelance_design: "Graphic Designer (Freelance)",
        exp_freelance_design_desc: "Visual identity design and professional playing cards for international magic brands.",
        exp_magic: "Professional Magician",
        exp_magic_desc: "Interactive performances focused on audience experience and entertainment.",
        
        // Education
        edu_master_title: "Master's in Software Engineering",
        edu_master_desc: "Focus on Requirements Engineering, Secure APIs with DDD, and distributed systems.",
        edu_bachelor_title: "Bachelor's in Computer Engineering",
        edu_bachelor_desc: "Full-stack development, IPv4 networks, and distributed architectures.",
        
        // Misc
        map_info: "Based in Greater Porto, turning coffee into scalable code.",
        present: "Present"
      }
    }
  },
  lng: "en",
  fallbackLng: "pt",
  interpolation: { escapeValue: false }
});

export default i18n;