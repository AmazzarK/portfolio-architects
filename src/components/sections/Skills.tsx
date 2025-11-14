import { useLanguage, Language } from '@/contexts/LanguageContext';
import { skillsData } from '@/data/content';

export const Skills = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-32 bg-layer-1 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ Tech Stack ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
              {t('skills_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.categories.map((category, index) => (
              <div 
                key={index}
                className="space-y-4 p-6 bg-background border border-border hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-lg font-bold font-mono mb-4 pb-2 border-b border-border">
                  {category.title[language]}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-foreground/40 rounded-full" />
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
