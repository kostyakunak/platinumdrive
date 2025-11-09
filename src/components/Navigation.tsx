import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { smoothScrollTo } from '../utils/smoothScroll';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const isScrolled = scrollY > 50;
  const { language, setLanguage, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Scroll to top when modal opens
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border border-amber-400 flex items-center justify-center">
              <span className="text-xs font-light tracking-widest text-amber-400">PD</span>
            </div>
            <h1 className="text-xl font-light tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-500">
              PLATINUM DRIVE
            </h1>
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-wider">
            <button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('services', 80);
              }}
              className="hover:text-gray-400 transition-colors duration-300 relative group"
            >
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('fleet', 80);
              }}
              className="hover:text-gray-400 transition-colors duration-300 relative group"
            >
              {t('nav.fleet')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('contact', 80);
              }}
              className="hover:text-gray-400 transition-colors duration-300 relative group"
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-3">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-2 text-xs tracking-widest transition-all duration-300 ${
                language === 'en'
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('it')}
              className={`px-3 py-2 text-xs tracking-widest transition-all duration-300 ${
                language === 'it'
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              IT
            </button>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <button 
            onClick={openModal}
            className="hidden md:block px-8 py-3 border border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 text-sm tracking-widest text-amber-400"
          >
            {t('nav.book')}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={closeModal}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            className="relative bg-black border border-amber-400/30 max-w-2xl w-full p-8 md:p-12 animate-scale-in my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-extralight tracking-wider mb-2">
                PLATINUM DRIVE
              </h3>
              <p className="text-sm tracking-[0.2em] text-gray-400 mb-6">
                Luxury Car Rental in Milan
              </p>
              <div className="h-px w-24 bg-amber-400/50"></div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-400 mb-1">{t('contact.phone')}</p>
                  <a
                    href="tel:+390212345678"
                    className="text-white font-light hover:text-amber-400 transition-colors duration-300"
                  >
                    +39 02 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-400 mb-1">{t('contact.email')}</p>
                  <a
                    href="mailto:info@platinumdrive.it"
                    className="text-white font-light hover:text-amber-400 transition-colors duration-300"
                  >
                    info@platinumdrive.it
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-400 mb-1">{t('contact.address')}</p>
                  <p className="text-white font-light">
                    Via Montenapoleone 22-18, Milano
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <div className="flex items-center justify-center">
                <span className="text-lg font-light tracking-widest text-amber-400">PD</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
