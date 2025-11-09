import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [darkened, setDarkened] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
    // Darken image after a short delay
    const darkenTimer = setTimeout(() => {
      setDarkened(true);
    }, 100);
    return () => clearTimeout(darkenTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
          loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
      >
        <div
          className={`absolute inset-0 transition-[filter] duration-[2000ms] ease-in-out ${
            darkened ? 'brightness-50' : 'brightness-100'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury Vehicle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <div
          className={`transition-all duration-[2000ms] delay-500 ease-out ${
            loaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 border-2 border-amber-400 flex items-center justify-center">
              <span className="text-2xl font-light tracking-widest text-amber-400">PD</span>
            </div>
          </div>
          <h2 className="text-7xl md:text-9xl font-extralight tracking-[0.2em] mb-4">
            PLATINUM DRIVE
          </h2>
          <div className="h-px w-24 bg-amber-400 mx-auto mb-4 opacity-60"></div>
        </div>

        <div
          className={`transition-all duration-[2000ms] delay-[1000ms] ease-out ${
            loaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
        >
          <p className="text-sm tracking-[0.25em] text-gray-400 mb-12">
            MILANO
          </p>
        </div>

        <div
          className={`transition-all duration-[2000ms] delay-1000 ease-out ${
            loaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
        >
          <button 
            className="group relative px-12 py-4 overflow-hidden border border-amber-400/40 bg-black/20"
            onClick={() => smoothScrollTo('fleet', 80)}
          >
            {/* Continuous gradient animation on background */}
            <span 
              className="absolute inset-0 opacity-30 animate-gradient-pulse group-hover:animate-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.15), transparent)',
              }}
            ></span>
            
            {/* Animated gradient on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-gradient-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            {/* Animated SVG border */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <rect
                x="0.5"
                y="0.5"
                width="calc(100% - 1px)"
                height="calc(100% - 1px)"
                fill="none"
                stroke="url(#gradient-border)"
                strokeWidth="1"
                strokeDasharray="150 1050"
                strokeDashoffset="1200"
                className="animate-draw-border-infinite"
                rx="0"
              />
            </svg>
            
            {/* Hover effect */}
            <span className="absolute inset-0 bg-white transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></span>
            
            {/* Text */}
            <span className="relative text-white group-hover:text-black transition-colors duration-500 tracking-[0.2em] text-sm font-light z-10">
              {t('hero.select')}
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  );
}
