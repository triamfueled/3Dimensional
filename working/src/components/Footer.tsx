import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3D</span>
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">3Dimensional Empire</div>
                  <div className="text-xs text-gray-400">Construction & Handyman</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for quality construction, remodeling, and handyman services. Built right, fixed right, done with pride.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:5615371294" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>561-537-1294</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>172 SW N Wakefield Circle</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Handyman Repairs</li>
                <li>Remodeling & Renovations</li>
                <li>Carpentry & Framing</li>
                <li>Drywall & Painting</li>
                <li>Flooring Installation</li>
                <li>Outdoor Projects</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-orange-500 font-semibold mb-2">This is a Demo Website</p>
              <p className="text-gray-300">
                Contact <span className="text-white font-bold">Tony Rodriguez</span> at{' '}
                <a href="tel:6463589361" className="text-orange-500 hover:text-orange-400 font-semibold">
                  646-358-9361
                </a>{' '}
                to discuss your future website.
              </p>
            </div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} 3Dimensional Empire Construction & Handyman Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
