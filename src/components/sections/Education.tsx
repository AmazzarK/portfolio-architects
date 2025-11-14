import { useLanguage, Language } from '@/contexts/LanguageContext';
import { educationData, certificationsData, volunteeringData } from '@/data/content';
import { GraduationCap, Award, Users } from 'lucide-react';

export const Education = () => {
  const { t, language } = useLanguage();
  const education = educationData[language];
  const certifications = certificationsData[language];
  const volunteering = volunteeringData[language];

  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Education */}
          <div>
            <div className="mb-12">
              <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                [ Academic Background ]
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
                {t('education_title')}
              </h2>
              <div className="h-1 w-32 bg-foreground" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="p-6 bg-layer-1 border border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-foreground/80">{edu.field}</p>
                      <p className="text-sm text-muted-foreground font-mono">{edu.institution}</p>
                      <span className="text-xs font-mono text-muted-foreground">{edu.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-12">
              <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                [ Continuous Learning ]
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                {t('certifications_title')}
              </h2>
              <div className="h-1 w-32 bg-foreground" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-layer-1 border border-border hover:border-foreground/20 transition-colors"
                >
                  <Award className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{cert.provider}</p>
                    <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <div className="mb-12">
              <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                [ Giving Back ]
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                {t('volunteering_title')}
              </h2>
              <div className="h-1 w-32 bg-foreground" />
            </div>

            <div className="p-8 bg-layer-1 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <Users className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{volunteering.title}</h3>
                  <p className="text-lg text-foreground/80 font-mono mb-1">{volunteering.organization}</p>
                  <span className="text-sm font-mono text-muted-foreground">{volunteering.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-10">
                {volunteering.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-muted-foreground mt-1.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
