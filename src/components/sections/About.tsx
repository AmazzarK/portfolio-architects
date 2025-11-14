import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ {t('about_intro')} ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
              {t('about_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              {t('about_p1')}
            </p>
            <p className="text-foreground/80">
              {t('about_p2')}
            </p>
            <p className="text-foreground/80">
              {t('about_p3')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold font-mono mb-2">6+</div>
              <div className="text-sm text-muted-foreground font-mono">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-mono mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-mono">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-mono mb-2">200+</div>
              <div className="text-sm text-muted-foreground font-mono">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-mono mb-2">40%</div>
              <div className="text-sm text-muted-foreground font-mono">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
