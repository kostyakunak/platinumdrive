import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type CarCategory = 'all' | 'sedan' | 'suv' | 'sport';

interface Car {
  id: number;
  name: string;
  category: CarCategory;
  price: string;
  image: string;
  specs: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes S-Class',
    category: 'sedan',
    price: '€450',
    specs: 'V8 · 450 HP · AT',
    image: '/images/Mercedes S-Class.jpg',
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'sedan',
    price: '€420',
    specs: 'V6 · 380 HP · AT',
    image: '/images/BMW 7 Series.jpg',
  },
  {
    id: 3,
    name: 'Range Rover Autobiography',
    category: 'suv',
    price: '€550',
    specs: 'V8 · 525 HP · AT',
    image: '/images/Range Rover Autobiography.jpg',
  },
  {
    id: 4,
    name: 'Porsche Cayenne Turbo',
    category: 'suv',
    price: '€580',
    specs: 'V8 · 541 HP · AT',
    image: '/images/Porsche Cayenne Turbo.avif',
  },
  {
    id: 5,
    name: 'Porsche 911 Carrera',
    category: 'sport',
    price: '€750',
    specs: 'H6 · 450 HP · PDK',
    image: '/images/Porsche 911 Carrera.jpg',
  },
  {
    id: 6,
    name: 'Ferrari Roma',
    category: 'sport',
    price: '€1200',
    specs: 'V8 · 620 HP · F1 DCT',
    image: '/images/Ferrari Roma.jpg',
  },
  {
    id: 7,
    name: 'Audi A8 L',
    category: 'sedan',
    price: '€400',
    specs: 'V6 · 340 HP · AT',
    image: '/images/Audi A8 L.jpg.avif',
  },
  {
    id: 8,
    name: 'Lamborghini Huracán',
    category: 'sport',
    price: '€1500',
    specs: 'V10 · 640 HP · LDF',
    image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 9,
    name: 'Rolls-Royce Ghost',
    category: 'sedan',
    price: '€1800',
    specs: 'V12 · 563 HP · AT',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Fleet() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CarCategory>('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCars = activeCategory === 'all'
    ? cars
    : cars.filter(car => car.category === activeCategory);

  const handleReserve = (car: Car, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCar(car);
    setIsModalOpen(true);
    // Scroll to top when modal opens
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
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
    <section
      ref={sectionRef}
      id="fleet"
      className="relative py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-[1500ms] ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h3 className="text-6xl md:text-8xl font-extralight tracking-[0.2em] mb-6">
            {t('fleet.title')}
          </h3>
          <p className="text-gray-400 text-lg tracking-wider mb-12">
            {t('fleet.subtitle')}
          </p>

          <div className="flex justify-center items-center space-x-1 mb-16">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-3 text-sm tracking-widest transition-all duration-500 ${
                activeCategory === 'all'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-gray-700 hover:border-white'
              }`}
            >
              {t('fleet.all')}
            </button>
            <span className="text-gray-600 mx-2">·</span>
            <button
              onClick={() => setActiveCategory('sedan')}
              className={`px-8 py-3 text-sm tracking-widest transition-all duration-500 ${
                activeCategory === 'sedan'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-gray-700 hover:border-white'
              }`}
            >
              {t('fleet.sedan')}
            </button>
            <span className="text-gray-600 mx-2">·</span>
            <button
              onClick={() => setActiveCategory('suv')}
              className={`px-8 py-3 text-sm tracking-widest transition-all duration-500 ${
                activeCategory === 'suv'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-gray-700 hover:border-white'
              }`}
            >
              {t('fleet.suv')}
            </button>
            <span className="text-gray-600 mx-2">·</span>
            <button
              onClick={() => setActiveCategory('sport')}
              className={`px-8 py-3 text-sm tracking-widest transition-all duration-500 ${
                activeCategory === 'sport'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border border-gray-700 hover:border-white'
              }`}
            >
              {t('fleet.sport')}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className={`group relative overflow-hidden transition-all duration-[1500ms] ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[400px] overflow-hidden bg-gray-900">
                <img
                  src={car.image}
                  alt={car.name}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs tracking-[0.3em] text-gray-300 mb-2">
                      {car.specs}
                    </p>
                    <h4 className="text-2xl font-light tracking-wider mb-2">
                      {car.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 text-xl font-light">{car.price}<span className="text-sm text-gray-400">{t('fleet.perday')}</span></span>
                      <button
                        onClick={(e) => handleReserve(car, e)}
                        className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer hover:opacity-80"
                      >
                        <span className="text-sm tracking-wider">{t('fleet.reserve')}</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCar && (
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
                {selectedCar.name}
              </h3>
              <p className="text-amber-400 text-xl font-light mb-4">
                {selectedCar.price} <span className="text-sm text-gray-400">{t('fleet.perday')}</span>
              </p>
              <p className="text-sm tracking-[0.2em] text-gray-400 mb-6">
                {selectedCar.specs}
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
    </section>
  );
}
