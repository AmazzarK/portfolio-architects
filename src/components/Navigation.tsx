import { useState, useEffect } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { key: 'about', id: 'about' },
    { key: 'experience', id: 'experience' },
    { key: 'projects', id: 'projects' },
    { key: 'skills', id: 'skills' },
    { key: 'education', id: 'education' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft' : 'bg-transparent'}
    `}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold tracking-tighter hover:text-muted-foreground transition-colors"
          >
            &lt;AK /&gt;
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {t(`nav_${key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
          
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};
