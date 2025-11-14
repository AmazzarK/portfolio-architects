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
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ Timeline ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
              {t('experience_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-foreground rounded-full" />
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-foreground/80">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
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
