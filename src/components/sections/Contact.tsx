import { useLanguage } from '@/contexts/LanguageContext';
import { languagesData } from '@/data/content';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-layer-1 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              [ Get In Touch ]
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-4">
              {t('contact_title')}
            </h2>
            <p className="text-xl font-mono text-muted-foreground mb-8">
              {t('contact_subtitle')}
            </p>
            <div className="h-1 w-32 bg-foreground mx-auto" />
          </div>

          <p className="text-lg text-center text-foreground/80 leading-relaxed mb-12">
            {t('contact_description')}
          </p>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <a 
              href="mailto:amazzar.consult@gmail.com"
              className="flex items-center gap-4 p-6 bg-background border border-border hover:border-foreground/40 transition-all group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{t('contact_email')}</p>
                <p className="font-mono">amazzar.consult@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+212684175510"
              className="flex items-center gap-4 p-6 bg-background border border-border hover:border-foreground/40 transition-all group"
            >
              <Phone className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{t('contact_phone')}</p>
                <p className="font-mono">+212 684-175-510</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-background border border-border">
              <MapPin className="h-6 w-6 text-muted-foreground" />
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{t('contact_location')}</p>
                <p className="font-mono">Casablanca, Morocco</p>
              </div>
            </div>

            <a 
              href="https://linkedin.com/in/amazzarkaoutar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-background border border-border hover:border-foreground/40 transition-all group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{t('contact_linkedin')}</p>
                <p className="font-mono">linkedin.com/in/amazzarkaoutar</p>
              </div>
            </a>
          </div>

          {/* Languages */}
          <div className="pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {t('languages_title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {languagesData.map((lang, index) => (
                <div key={index} className="text-center p-4 bg-background border border-border">
                  <p className="font-bold mb-2">{lang.name}</p>
                  <p className="text-sm font-mono text-muted-foreground">{lang.level[language]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg"
              onClick={() => window.location.href = 'mailto:amazzar.consult@gmail.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
