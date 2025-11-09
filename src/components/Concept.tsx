import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Concept() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-[1800ms] ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-block px-6 py-2 border border-amber-400/30 text-xs tracking-[0.3em] text-amber-400 mb-8">
            {t('concept.label')}
          </div>
          <h3 className="text-4xl md:text-6xl font-extralight tracking-wide leading-tight mb-8">
            {t('concept.title')}
            <br />
            {t('concept.highlight') && <span className="text-amber-400 italic">{t('concept.highlight')}</span>}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-6">
            {t('concept.desc1')}
          </p>
          <p className="text-gray-500 text-base leading-relaxed font-light max-w-2xl mx-auto">
            {t('concept.desc2')}
          </p>
        </div>
      </div>
    </section>
  );
}
