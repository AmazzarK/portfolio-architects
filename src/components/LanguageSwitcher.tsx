import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <div className="flex items-center gap-1 bg-layer-1 rounded p-1">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`
            px-3 py-1 text-xs font-mono font-medium transition-all rounded
            ${language === code 
              ? 'bg-primary text-primary-foreground' 
              : 'text-muted-foreground hover:text-foreground hover:bg-layer-2'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
