import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_education: 'Education',
    nav_contact: 'Contact',
    hero_title: 'Software Engineer',
    hero_subtitle: 'Full-Stack Developer & AI Enthusiast',
    hero_description: 'Crafting scalable web applications and AI-powered solutions with 6+ years of experience. Passionate about building elegant, high-performance systems that solve real-world problems.',
    hero_cta: 'View My Work',
    hero_contact: 'Get In Touch',
    hero_download_cv: 'Download CV',
    about_title: 'About Me',
    about_intro: 'The Journey',
    about_p1: 'I\'m a full-stack developer with a passion for creating innovative solutions that bridge technology and user needs. With over 6 years of experience, I\'ve developed and deployed 15+ production applications, each one pushing the boundaries of what\'s possible.',
    about_p2: 'My expertise spans modern web technologies, AI integration, and Web3 solutions. I\'ve led development teams, mentored 200+ young developers, and consistently delivered projects that exceed performance benchmarks by up to 40%.',
    about_p3: 'What drives me is the intersection of elegant code and meaningful impact. Whether it\'s building real-time fire detection systems, educational platforms, or scalable web applications, I approach each project as an opportunity to learn, innovate, and make a difference.',
    experience_title: 'Professional Journey',
    experience_present: 'Present',
    projects_title: 'Featured Work',
    projects_tech: 'Technologies',
    projects_view: 'View Project',
    skills_title: 'Technical Arsenal',
    education_title: 'Education & Growth',
    certifications_title: 'Certifications & Learning',
    volunteering_title: 'Community Impact',
    languages_title: 'Languages',
    lang_native: 'Native',
    lang_fluent: 'Fluent',
    lang_professional: 'Professional',
    lang_intermediate: 'Intermediate',
    contact_title: 'Let\'s Connect',
    contact_subtitle: 'Ready to Build Something Amazing',
    contact_description: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack developer, an AI integration specialist, or a technical mentor, let\'s talk.',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_location: 'Location',
    contact_linkedin: 'LinkedIn',
    contact_github: 'GitHub',
    footer_rights: 'All rights reserved',
    footer_built: 'Built with precision & passion',
  },
  fr: {
    nav_about: 'À propos',
    nav_experience: 'Expérience',
    nav_projects: 'Projets',
    nav_skills: 'Compétences',
    nav_education: 'Formation',
    nav_contact: 'Contact',
    hero_title: 'Ingénieure Logiciel',
    hero_subtitle: 'Développeuse Full-Stack & Passionnée d\'IA',
    hero_description: 'Création d\'applications web évolutives et de solutions alimentées par l\'IA avec plus de 6 ans d\'expérience. Passionnée par la construction de systèmes élégants et performants qui résolvent des problèmes réels.',
    hero_cta: 'Voir Mes Réalisations',
    hero_contact: 'Me Contacter',
    hero_download_cv: 'Télécharger CV',
    about_title: 'À Propos',
    about_intro: 'Mon Parcours',
    about_p1: 'Je suis une développeuse full-stack passionnée par la création de solutions innovantes qui comblent le fossé entre la technologie et les besoins des utilisateurs. Avec plus de 6 ans d\'expérience, j\'ai développé et déployé plus de 15 applications en production, chacune repoussant les limites du possible.',
    about_p2: 'Mon expertise couvre les technologies web modernes, l\'intégration de l\'IA et les solutions Web3. J\'ai dirigé des équipes de développement, encadré plus de 200 jeunes développeurs et constamment livré des projets dépassant les benchmarks de performance jusqu\'à 40%.',
    about_p3: 'Ce qui me motive, c\'est l\'intersection entre un code élégant et un impact significatif. Qu\'il s\'agisse de construire des systèmes de détection d\'incendie en temps réel, des plateformes éducatives ou des applications web évolutives, j\'aborde chaque projet comme une opportunité d\'apprendre, d\'innover et de faire la différence.',
    experience_title: 'Parcours Professionnel',
    experience_present: 'Présent',
    projects_title: 'Projets Phares',
    projects_tech: 'Technologies',
    projects_view: 'Voir le Projet',
    skills_title: 'Arsenal Technique',
    education_title: 'Formation & Croissance',
    certifications_title: 'Certifications & Apprentissage',
    volunteering_title: 'Impact Communautaire',
    languages_title: 'Langues',
    lang_native: 'Langue Maternelle',
    lang_fluent: 'Courant',
    lang_professional: 'Professionnel',
    lang_intermediate: 'Intermédiaire',
    contact_title: 'Connectons-nous',
    contact_subtitle: 'Prêts à Construire Quelque Chose d\'Incroyable',
    contact_description: 'Je suis toujours ouverte à discuter de nouveaux projets, d\'idées créatives ou d\'opportunités pour faire partie de votre vision. Que vous ayez besoin d\'une développeuse full-stack, d\'une spécialiste de l\'intégration IA ou d\'une mentore technique, discutons-en.',
    contact_email: 'Email',
    contact_phone: 'Téléphone',
    contact_location: 'Localisation',
    contact_linkedin: 'LinkedIn',
    contact_github: 'GitHub',
    footer_rights: 'Tous droits réservés',
    footer_built: 'Conçu avec précision & passion',
  },
  de: {
    nav_about: 'Über mich',
    nav_experience: 'Erfahrung',
    nav_projects: 'Projekte',
    nav_skills: 'Fähigkeiten',
    nav_education: 'Bildung',
    nav_contact: 'Kontakt',
    hero_title: 'Software-Ingenieurin',
    hero_subtitle: 'Full-Stack-Entwicklerin & KI-Enthusiastin',
    hero_description: 'Entwicklung skalierbarer Webanwendungen und KI-gestützter Lösungen mit über 6 Jahren Erfahrung. Leidenschaftlich für den Aufbau eleganter, leistungsstarker Systeme, die reale Probleme lösen.',
    hero_cta: 'Meine Arbeit Ansehen',
    hero_contact: 'Kontakt Aufnehmen',
    hero_download_cv: 'Lebenslauf Herunterladen',
    about_title: 'Über Mich',
    about_intro: 'Meine Reise',
    about_p1: 'Ich bin eine Full-Stack-Entwicklerin mit einer Leidenschaft für die Schaffung innovativer Lösungen, die Technologie und Benutzerbedürfnisse verbinden. Mit über 6 Jahren Erfahrung habe ich mehr als 15 Produktionsanwendungen entwickelt und bereitgestellt, jede einzelne erweitert die Grenzen des Möglichen.',
    about_p2: 'Meine Expertise umfasst moderne Webtechnologien, KI-Integration und Web3-Lösungen. Ich habe Entwicklungsteams geleitet, über 200 junge Entwickler betreut und konsequent Projekte geliefert, die Leistungsbenchmarks um bis zu 40% übertreffen.',
    about_p3: 'Was mich antreibt, ist die Schnittstelle zwischen elegantem Code und bedeutungsvoller Wirkung. Ob es sich um den Aufbau von Echtzeit-Branderkennungssystemen, Bildungsplattformen oder skalierbaren Webanwendungen handelt, ich betrachte jedes Projekt als Gelegenheit zum Lernen, Innovieren und einen Unterschied zu machen.',
    experience_title: 'Beruflicher Werdegang',
    experience_present: 'Heute',
    projects_title: 'Ausgewählte Projekte',
    projects_tech: 'Technologien',
    projects_view: 'Projekt Ansehen',
    skills_title: 'Technisches Arsenal',
    education_title: 'Bildung & Wachstum',
    certifications_title: 'Zertifikate & Weiterbildung',
    volunteering_title: 'Community-Engagement',
    languages_title: 'Sprachen',
    lang_native: 'Muttersprache',
    lang_fluent: 'Fließend',
    lang_professional: 'Professionell',
    lang_intermediate: 'Mittelstufe',
    contact_title: 'Lass Uns Verbinden',
    contact_subtitle: 'Bereit, Etwas Erstaunliches Zu Bauen',
    contact_description: 'Ich bin immer offen für Diskussionen über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Vision zu werden. Ob Sie eine Full-Stack-Entwicklerin, eine KI-Integrationsspezialistin oder eine technische Mentorin benötigen, lassen Sie uns sprechen.',
    contact_email: 'E-Mail',
    contact_phone: 'Telefon',
    contact_location: 'Standort',
    contact_linkedin: 'LinkedIn',
    contact_github: 'GitHub',
    footer_rights: 'Alle Rechte vorbehalten',
    footer_built: 'Mit Präzision & Leidenschaft gebaut',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
