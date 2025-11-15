import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

export const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadCV = () => {
    const cvMap = {
      en: '/cv-en.pdf',
      fr: '/cv-fr.pdf',
      de: '/cv-de.pdf'
    };
    const cvUrl = cvMap[language];
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `Amazzar_Kaoutar_CV_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8 animate-bounce-in">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-foreground shadow-hard hover:scale-105 transition-transform duration-300">
                <img 
                  src={profileImage} 
                  alt="Amazzar Kaoutar - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-foreground animate-pulse-slow opacity-20" />
            </div>
          </div>

          {/* Name with glitch effect */}
          <div className="space-y-2 animate-zoom-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="inline-block animate-fade-in-left" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                &lt; Hello World /&gt;
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-scale-in hover:scale-105 transition-transform duration-300" 
                style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              Amazzar Kaoutar
            </h1>
            <div className="h-1 w-24 bg-foreground mx-auto animate-slide-in-right" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }} />
          </div>

          {/* Title */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="text-2xl md:text-4xl font-mono font-light tracking-tight hover:text-gradient transition-all duration-300">
              {t('hero_title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              {t('hero_subtitle')}
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
             style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            {t('hero_description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
               style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="group hover:scale-110 transition-transform duration-300"
              size="lg"
            >
              {t('hero_cta')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              {t('hero_contact')}
            </Button>
            <Button 
              onClick={downloadCV}
              variant="outline"
              size="lg"
              className="group hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              {t('hero_download_cv')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up"
               style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <a 
              href="https://github.com/AmazzarK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 hover:-translate-y-1 duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/amazzarkaoutar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 hover:-translate-y-1 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:amazzar.consult@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 hover:-translate-y-1 duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2 hover:border-foreground/40 transition-colors duration-300">
              <div className="w-1 h-2 bg-foreground/40 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
