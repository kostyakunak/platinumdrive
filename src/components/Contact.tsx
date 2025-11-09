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
      className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-[1500ms] ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-block px-6 py-2 border border-amber-400/30 text-xs tracking-[0.3em] text-amber-400 mb-8">
            {t('contact.label')}
          </div>
          <h3 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6">
            {t('contact.title')}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {t('contact.desc')}
            <br />
            {t('contact.desc2')}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-[1500ms] delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-amber-400" />
            <p className="text-sm tracking-widest text-gray-400 mb-2">{t('contact.phone')}</p>
            <p className="text-white font-light">+39 02 1234 5678</p>
          </div>

          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-amber-400" />
            <p className="text-sm tracking-widest text-gray-400 mb-2">{t('contact.email')}</p>
            <p className="text-white font-light">info@platinumdrive.it</p>
          </div>

          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-amber-400" />
            <p className="text-sm tracking-widest text-gray-400 mb-2">{t('contact.address')}</p>
            <p className="text-white font-light">Via Montenapoleone 22-18, Milano</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 border border-amber-400/50 flex items-center justify-center">
              <span className="text-xs font-light tracking-widest text-amber-400">PD</span>
            </div>
            <span className="tracking-wider">PLATINUM DRIVE</span>
          </div>
          <p className="tracking-wider">{t('footer.copyright')}</p>
        </div>
      </div>
    </section>
  );
}
