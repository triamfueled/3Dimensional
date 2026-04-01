import { CheckCircle, Clock, DollarSign, MapPin, Briefcase } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Reliable & Responsive',
    description: 'We show up on time, return your calls, and keep you informed every step of the way. Your time matters to us.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Workmanship',
    description: 'We take pride in every detail and stand behind our work. Our reputation is built on delivering exceptional results.',
  },
  {
    icon: DollarSign,
    title: 'Honest Pricing',
    description: 'No hidden fees or surprise charges. We provide clear, upfront estimates so you know exactly what to expect.',
  },
  {
    icon: MapPin,
    title: 'Local & Dependable',
    description: 'We are your neighbors, invested in this community. Our local presence means we are here when you need us.',
  },
  {
    icon: Briefcase,
    title: 'Wide Range of Services',
    description: 'From quick repairs to complete renovations, we handle diverse projects so you only need one trusted contractor.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose 3Dimensional Empire
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are more than just a construction company—we are your dedicated partner in making your home or business better.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and provide you with a free, no-obligation estimate.
              Experience the difference that quality craftsmanship and honest service make.
            </p>
            <a
              href="tel:5615371294"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Call 561-537-1294
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
