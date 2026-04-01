import { Wrench, Home, Hammer, Paintbrush, Layers, Trees } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Handyman Repairs',
    description: 'Fast, reliable fixes for all your home maintenance needs—from leaky faucets to loose hinges and everything in between.',
  },
  {
    icon: Home,
    title: 'Remodeling & Renovations',
    description: 'Transform your space with expert kitchen and bathroom updates, room additions, and complete home renovations that add value and comfort.',
  },
  {
    icon: Hammer,
    title: 'Carpentry & Framing',
    description: 'Precision framing, custom carpentry, and structural work built to last—creating the solid foundation your project deserves.',
  },
  {
    icon: Paintbrush,
    title: 'Drywall & Painting',
    description: 'Flawless drywall installation and repair paired with professional interior and exterior painting that brings your vision to life.',
  },
  {
    icon: Layers,
    title: 'Flooring',
    description: 'Expert installation of hardwood, laminate, tile, and vinyl flooring that combines durability with beautiful aesthetics.',
  },
  {
    icon: Trees,
    title: 'Outdoor Projects',
    description: 'Quality deck construction, fence installation, patio work, and outdoor improvements that extend your living space.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From minor repairs to major renovations, we handle it all with the same dedication to quality and customer satisfaction.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-8 text-lg">
              Additional services include door and window installation, minor plumbing and electrical help, and more.
            </p>
            <a
              href="tel:5615371294"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Call to Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
