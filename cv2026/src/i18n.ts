import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        // Navegação
        nav_exp: "Experiência",
        nav_edu: "Educação",
        nav_skills: "Skills",
        
        // Hero
        hero_desc: "Full-Stack Developer especializado em React e Django. Focado em modernizar sistemas complexos e otimizar a experiência de milhares de utilizadores.",
        // Experiência - Wisecrop
        exp_title: "Percurso Profissional",
        wisecrop_period: "Nov 2023 — Presente",
        wisecrop_task1: "Liderança técnica no redesign do fluxo de autenticação, reduzindo pedidos de suporte em 30%.",
        wisecrop_task2: "Colaboração em ambiente Agile, com foco em Code Reviews e refactoring constante para manter a dívida técnica baixa.",
        wisecrop_task3: "Otimização de performance front-end e melhoria de queries complexas em Django ORM para mais de 2.000 utilizadores ativos.",
        wisecrop_task4: "Integração de visualização de dados (Highcharts) e mapas interativos (Leaflet).",
        
        // CCG (Estágio)
        ccg_label: "Estágio Curricular",
        ccg_desc: "Desenvolvimento de dashboard web para o projeto Eco-Fire, focado em visualização de dados e segurança com JWT.",
        
        // Magic & Design
        exp_freelance_design_desc: "Criação de identidades visuais e engenharia de produto para marcas internacionais. Esta experiência deu-me uma sensibilidade única para UI/UX e detalhe.",
        
        // Educação
        edu_master_title: "Mestrado em Engenharia de Software",
        edu_master_desc: "Foco avançado em Engenharia de Requisitos, Arquiteturas Distribuídas e Segurança. Especialização em sistemas escaláveis e qualidade de software.",
        edu_bachelor_title: "Licenciatura em Engenharia Informática",
        edu_bachelor_label: "Licenciatura em Engenharia Informática",
        edu_bachelor_desc: "Sólida base em Algoritmos, Sistemas Operativos e Redes. Foco em baixo nível e protocolos de rede.",
        edu_view_projects: "Projetos e Repositórios",
        
        // Diversos
        present: "Presente",
        map_info: "Sediado no Grande Porto, a transformar café em código escalável.",
        map_title: "Locais Relevantes",
        more_comming_soon: "Brevemente..."
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
        
// Experiência - Wisecrop
        exp_title: "Professional Journey",
        wisecrop_period: "Nov 2023 — Present",
        wisecrop_task1: "Technical leadership in the authentication flow redesign, reducing support requests by 30%.",
        wisecrop_task2: "Agile collaboration, focusing on Code Reviews and constant refactoring to keep technical debt low.",
        wisecrop_task3: "Front-end performance optimization and Django ORM query improvement for 2,000+ active users.",
        wisecrop_task4: "Integration of data visualization (Highcharts) and interactive maps (Leaflet).",
        
        // CCG (Estágio)
        ccg_label: "Curricular Internship",
        ccg_desc: "Web dashboard development for the Eco-Fire project, focused on data visualization and JWT security.",
        
        // Magic & Design
        exp_freelance_design_desc: "Visual identity design and product engineering for international brands. This background provides a unique UI/UX sensitivity and attention to detail.",
        // Education
        edu_master_title: "Master's in Software Engineering",
        edu_master_desc: "Advanced focus on Requirements Engineering, Distributed Architectures, and Security. Specialization in scalable systems and software quality.",
        edu_bachelor_title: "Bachelor's in Computer Engineering",
        edu_bachelor_label: "Bachelor in Computer Engeneering",
        edu_bachelor_desc: "Strong foundation in Algorithms, Operating Systems, and Networking. Focus on low-level programming and network protocols.",
        edu_view_projects: "Technical Projects & Repos",
        
        // Misc
        present: "Present",
        map_info: "Based in Greater Porto, turning coffee into scalable code.",
        map_title: "Relevant Locations",
        more_comming_soon: "Coming Soon..."
      }
    }
  },
  lng: "en",
  fallbackLng: "pt",
  interpolation: { escapeValue: false }
});

export default i18n;