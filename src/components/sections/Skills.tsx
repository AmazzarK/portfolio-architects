import { useLanguage, Language } from '@/contexts/LanguageContext';
import { skillsData } from '@/data/content';

export const Skills = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-32 bg-layer-1 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ Tech Stack ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8 hover:scale-105 transition-transform duration-300">
              {t('skills_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground animate-slide-in-right" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.categories.map((category, index) => (
              <div 
                key={index}
                className="space-y-4 p-6 bg-background border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <h3 className="text-lg font-bold font-mono mb-4 pb-2 border-b border-border group-hover:border-foreground/40 transition-colors">
                  {category.title[language]}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className="text-sm text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-foreground/40 rounded-full group-hover:scale-150 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
