import { useLanguage, Language } from '@/contexts/LanguageContext';
import { projectsData } from '@/data/content';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Projects = () => {
  const { t, language } = useLanguage();
  const projects = projectsData[language];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ Portfolio ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
              {t('projects_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group p-8 bg-card hover:bg-layer-2 transition-all duration-300 border-border hover:border-foreground/20"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-4">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground mb-4">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                      {t('projects_tech')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs font-mono bg-layer-1 border border-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-border">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
