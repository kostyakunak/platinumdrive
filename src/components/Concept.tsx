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
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-[1800ms] ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-block px-4 sm:px-6 py-2 border border-amber-400/30 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-amber-400 mb-6 sm:mb-8">
            {t('concept.label')}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extralight tracking-wide leading-tight mb-6 sm:mb-8 px-4">
            {t('concept.title')}
            <br />
            {t('concept.highlight') && <span className="text-amber-400 italic">{t('concept.highlight')}</span>}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            {t('concept.desc1')}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto px-4">
            {t('concept.desc2')}
          </p>
        </div>
      </div>
    </section>
  );
}
