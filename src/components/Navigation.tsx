import { Menu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { smoothScrollTo } from '../utils/smoothScroll';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const isScrolled = scrollY > 50;
  const { language, setLanguage, t } = useLanguage();

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
          <button className="hidden md:block px-8 py-3 border border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 text-sm tracking-widest text-amber-400">
            {t('nav.book')}
          </button>
        </div>
      </div>
    </nav>
  );
}
