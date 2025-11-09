import { useEffect, useRef, useState } from 'react';
import { Car, UserCircle, Plane, Clock, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Car,
      title: t('service.luxury'),
      description: t('service.luxury.desc'),
    },
    {
      icon: UserCircle,
      title: t('service.driver'),
      description: t('service.driver.desc'),
    },
    {
      icon: Plane,
      title: t('service.airport'),
      description: t('service.airport.desc'),
    },
    {
      icon: Clock,
      title: t('service.flexible'),
      description: t('service.flexible.desc'),
    },
    {
      icon: Shield,
      title: t('service.insurance'),
      description: t('service.insurance.desc'),
    },
    {
      icon: Sparkles,
      title: t('service.personal'),
      description: t('service.personal.desc'),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-[1500ms] ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h3 className="text-6xl md:text-8xl font-extralight tracking-[0.2em] mb-6">
            {t('services.title')}
          </h3>
          <p className="text-gray-400 text-lg tracking-wider">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group transition-all duration-[1500ms] ease-out ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="border border-gray-800 p-8 h-full hover:border-amber-400 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-amber-400/5 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700"></div>

                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-6 text-amber-400 transition-transform duration-500 group-hover:scale-110" />
                    <h4 className="text-xl font-light tracking-wider mb-3 text-white transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
