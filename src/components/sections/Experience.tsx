import { useLanguage, Language } from '@/contexts/LanguageContext';
import { experienceData } from '@/data/content';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const { t, language } = useLanguage();
  const experiences = experienceData[language];

  return (
    <section id="experience" className="py-32 bg-layer-1 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ Timeline ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8 hover:scale-105 transition-transform duration-300">
              {t('experience_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground animate-slide-in-right" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-border pb-12 last:pb-0 group hover:border-foreground/40 transition-colors animate-fade-in-left"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-foreground rounded-full group-hover:scale-150 group-hover:shadow-lg transition-all duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-foreground transition-colors">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm group-hover:text-foreground/80 transition-colors">
                        <Briefcase className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap group-hover:text-foreground transition-colors">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-foreground/80">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 hover:text-foreground hover:translate-x-2 transition-all duration-300">
                        <span className="text-muted-foreground mt-1.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
