import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Concept from './components/Concept';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [arrowOpacity, setArrowOpacity] = useState(0.7);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Find the Concept section (second block)
      const conceptSection = document.querySelector('section:nth-of-type(2)');
      if (!conceptSection) return;
      
      const conceptTop = conceptSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Start fading when Concept section top reaches 80% of viewport height
      // Fully hide when Concept section top reaches -100% of viewport height (well past the top)
      // This creates a longer fade range for smoother disappearance
      const fadeStartPoint = windowHeight * 0.8; // Start fading when Concept top is at 80% of screen
      const fadeEndPoint = -windowHeight * 1.0; // Fully hidden when Concept top is at -100% of screen (scrolled well past)
      
      // Calculate progress based on Concept's top position
      let progress = 0;
      
      // If Concept is completely scrolled past (top is way below viewport), always hide
      if (conceptTop < fadeEndPoint || conceptTop < -windowHeight * 1.5) {
        progress = 1;
      } else if (conceptTop > fadeStartPoint) {
        // Concept not yet reached fade start point, show arrow
        progress = 0;
      } else {
        // Calculate progress between fadeStart and fadeEnd
        progress = (fadeStartPoint - conceptTop) / (fadeStartPoint - fadeEndPoint);
        progress = Math.max(0, Math.min(1, progress));
      }
      
      // Set opacity: 0.7 when progress is 0, 0 when progress is 1
      setArrowOpacity(0.7 * (1 - progress));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <Concept />
      <Services />
      <Fleet />
      <Contact />

      <div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 transition-opacity duration-500"
        style={{ opacity: arrowOpacity }}
      >
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
}

export default App;
