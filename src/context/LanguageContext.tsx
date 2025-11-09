import { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.services': 'SERVICES',
    'nav.fleet': 'FLEET',
    'nav.contact': 'CONTACT',
    'nav.book': 'BOOK NOW',
    'hero.select': 'SELECT A CAR',
    'concept.label': 'OUR PHILOSOPHY',
    'concept.title': 'Luxury is not just a car.',
    'concept.highlight': 'It\'s a state of mind.',
    'concept.desc1': 'Platinum Drive is designed for those who appreciate impeccable style and absolute comfort. We don\'t just rent cars — we provide the privilege of driving masterpieces of the automotive industry in the heart of Milan.',
    'concept.desc2': 'Every journey with us is an experience where attention to detail meets Italian elegance. Personal service, confidentiality, and premium quality — this is what sets Platinum Drive apart from ordinary rentals.',
    'services.title': 'SERVICES',
    'services.subtitle': 'Premium service at every step',
    'service.luxury': 'Luxury Car Rentals',
    'service.luxury.desc': 'Exclusive premium-class models for your needs',
    'service.driver': 'Personal Driver',
    'service.driver.desc': 'Professional chauffeurs with impeccable reputation',
    'service.airport': 'Airport Transfers',
    'service.airport.desc': 'VIP transfer from any Milan airport',
    'service.flexible': 'Flexible Rental Terms',
    'service.flexible.desc': 'From a few hours to long-term contracts',
    'service.insurance': 'Full Coverage',
    'service.insurance.desc': 'Maximum protection and peace of mind on the road',
    'service.personal': 'Personalized Service',
    'service.personal.desc': 'Customized service tailored to your requirements',
    'fleet.title': 'FLEET',
    'fleet.subtitle': 'Exclusive collection of premium automobiles',
    'fleet.all': 'ALL',
    'fleet.sedan': 'SEDAN',
    'fleet.suv': 'SUV',
    'fleet.sport': 'SPORT',
    'fleet.perday': '/day',
    'fleet.reserve': 'RESERVE',
    'contact.label': 'CONTACT US',
    'contact.title': 'Didn\'t find the right model?',
    'contact.desc': 'Our manager will select a car matching your style and requirements.',
    'contact.desc2': 'We\'ll find a solution for any task.',
    'contact.button': 'CONTACT US',
    'contact.phone': 'PHONE',
    'contact.email': 'EMAIL',
    'contact.address': 'ADDRESS',
    'footer.copyright': '© 2025 Platinum Drive. All rights reserved.',
  },
  it: {
    'nav.services': 'SERVIZI',
    'nav.fleet': 'FLOTTA',
    'nav.contact': 'CONTATTI',
    'nav.book': 'PRENOTA ORA',
    'hero.select': 'SCEGLI AUTO',
    'concept.label': 'LA NOSTRA FILOSOFIA',
    'concept.title': 'Il lusso non è solo un\'auto.',
    'concept.highlight': 'È uno stato mentale.',
    'concept.desc1': 'Platinum Drive è concepito per coloro che apprezzano lo stile impeccabile e il comfort assoluto. Non affittiamo solo auto — offriamo il privilegio di guidare capolavori dell\'industria automobilistica nel cuore di Milano.',
    'concept.desc2': 'Ogni viaggio con noi è un\'esperienza dove l\'attenzione ai dettagli incontra l\'eleganza italiana. Servizio personale, riservatezza e qualità premium — è ciò che distingue Platinum Drive dagli affitti ordinari.',
    'services.title': 'SERVIZI',
    'services.subtitle': 'Servizio premium ad ogni passaggio',
    'service.luxury': 'Noleggio Auto Lusso',
    'service.luxury.desc': 'Modelli esclusivi di classe premium per le tue esigenze',
    'service.driver': 'Autista Personale',
    'service.driver.desc': 'Autisti professionisti con reputazione impeccabile',
    'service.airport': 'Trasferimenti Aeroporto',
    'service.airport.desc': 'Trasferimento VIP da qualsiasi aeroporto di Milano',
    'service.flexible': 'Noleggio Flessibile',
    'service.flexible.desc': 'Da poche ore a contratti a lungo termine',
    'service.insurance': 'Copertura Completa',
    'service.insurance.desc': 'Protezione massima e tranquillità sulla strada',
    'service.personal': 'Servizio Personalizzato',
    'service.personal.desc': 'Servizio personalizzato adatto ai tuoi requisiti',
    'fleet.title': 'FLOTTA',
    'fleet.subtitle': 'Collezione esclusiva di automobili premium',
    'fleet.all': 'TUTTI',
    'fleet.sedan': 'BERLINA',
    'fleet.suv': 'SUV',
    'fleet.sport': 'SPORT',
    'fleet.perday': '/giorno',
    'fleet.reserve': 'PRENOTA',
    'contact.label': 'CONTATTACI',
    'contact.title': 'Non hai trovato il modello giusto?',
    'contact.desc': 'Il nostro manager selezionerà un\'auto che corrisponda al tuo stile e ai tuoi requisiti.',
    'contact.desc2': 'Troveremo una soluzione per qualsiasi esigenza.',
    'contact.button': 'CONTATTACI',
    'contact.phone': 'TELEFONO',
    'contact.email': 'EMAIL',
    'contact.address': 'INDIRIZZO',
    'footer.copyright': '© 2025 Platinum Drive. Tutti i diritti riservati.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
