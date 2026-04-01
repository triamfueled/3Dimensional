import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">3D</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-tight">3Dimensional Empire</div>
              <div className="text-xs text-gray-300">Construction & Handyman</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-orange-500 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-orange-500 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-500 transition-colors">
              Contact
            </button>
            <a
              href="tel:5615371294"
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>561-537-1294</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-500 transition-colors text-left px-4">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-500 transition-colors text-left px-4">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-orange-500 transition-colors text-left px-4">
                Gallery
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-orange-500 transition-colors text-left px-4">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-500 transition-colors text-left px-4">
                Contact
              </button>
              <a
                href="tel:5615371294"
                className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors mx-4"
              >
                <Phone className="w-4 h-4" />
                <span>561-537-1294</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
