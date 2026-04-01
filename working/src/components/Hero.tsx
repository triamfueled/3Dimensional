import { Phone, ClipboardCheck } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-orange-500 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-orange-500 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-white rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              PROFESSIONAL CONSTRUCTION & HANDYMAN SERVICES
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Built Right. Fixed Right.<br />
            <span className="text-orange-500">Done With Pride.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            3Dimensional Empire Construction & Handyman Services provides reliable construction,
            handyman, and home improvement services with exceptional craftsmanship and honest work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:5615371294"
              className="group flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            <button
              onClick={scrollToContact}
              className="group flex items-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <ClipboardCheck className="w-5 h-5" />
              <span>Get a Free Estimate</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-white">
            <Phone className="w-5 h-5 text-orange-500" />
            <a href="tel:5615371294" className="text-2xl font-bold hover:text-orange-500 transition-colors">
              561-537-1294
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
