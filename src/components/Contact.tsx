import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
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
      id="contact"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-[1500ms] ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-block px-4 sm:px-6 py-2 border border-amber-400/30 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-amber-400 mb-6 sm:mb-8">
            {t('contact.label')}
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight tracking-wide mb-4 sm:mb-6 px-4">
            {t('contact.title')}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            {t('contact.desc')}
            <br />
            {t('contact.desc2')}
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-3 gap-6 sm:gap-8 transition-all duration-[1500ms] delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-amber-400" />
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-2">{t('contact.phone')}</p>
            <p className="text-white font-light text-sm sm:text-base">+39 02 1234 5678</p>
          </div>

          <div className="text-center">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-amber-400" />
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-2">{t('contact.email')}</p>
            <p className="text-white font-light text-sm sm:text-base break-all">info@platinumdrive.it</p>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-amber-400" />
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-2">{t('contact.address')}</p>
            <p className="text-white font-light text-sm sm:text-base">Via Montenapoleone 22-18, Milano</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16 border-t border-gray-800 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-amber-400/50 flex items-center justify-center">
              <span className="text-[10px] sm:text-xs font-light tracking-widest text-amber-400">PD</span>
            </div>
            <span className="tracking-wider">PLATINUM DRIVE</span>
          </div>
          <p className="tracking-wider text-center md:text-left">{t('footer.copyright')}</p>
        </div>
      </div>
    </section>
  );
}
