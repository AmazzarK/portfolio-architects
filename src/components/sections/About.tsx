import { useLanguage } from '@/contexts/LanguageContext';
import meImage from '@/assets/me.jpg';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ {t('about_intro')} ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8 hover:scale-105 transition-transform duration-300">
              {t('about_title')}
            </h2>
            <div className="h-1 w-32 bg-foreground animate-slide-in-right" />
          </div>

          {/* Image and Text Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Section */}
            <div className="relative group animate-fade-in-left" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="relative overflow-hidden border-4 border-foreground shadow-hard transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={meImage} 
                  alt="Amazzar Kaoutar"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 border-4 border-foreground translate-x-4 translate-y-4 -z-10 transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            </div>

            {/* Text Section */}
            <div className="space-y-6 text-lg leading-relaxed animate-fade-in-right" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <p className="text-foreground/90 hover:text-foreground hover:translate-x-2 transition-all duration-300">
                {t('about_p1')}
              </p>
              <p className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all duration-300">
                {t('about_p2')}
              </p>
              <p className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all duration-300">
                {t('about_p3')}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-bold font-mono mb-2 group-hover:scale-125 group-hover:text-primary transition-all duration-300">6+</div>
              <div className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-300">Years Experience</div>
            </div>
            <div className="text-center group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-bold font-mono mb-2 group-hover:scale-125 group-hover:text-primary transition-all duration-300">15+</div>
              <div className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-300">Projects Delivered</div>
            </div>
            <div className="text-center group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-bold font-mono mb-2 group-hover:scale-125 group-hover:text-primary transition-all duration-300">200+</div>
              <div className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-300">Students Mentored</div>
            </div>
            <div className="text-center group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-4xl font-bold font-mono mb-2 group-hover:scale-125 group-hover:text-primary transition-all duration-300">40%</div>
              <div className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-300">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
