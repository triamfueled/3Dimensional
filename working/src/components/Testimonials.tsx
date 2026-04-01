import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Johnson',
    location: 'Palm Beach County',
    text: 'Great work, great price, and man does he work fast!!!',
    rating: 5,
  },
  {
    name: 'Sarah Martinez',
    location: 'West Palm Beach',
    text: 'We hired 3Dimensional Empire for a complete bathroom remodel and couldn\'t be happier. They were professional, on time, and the quality of work exceeded our expectations. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    location: 'Boynton Beach',
    text: 'I\'ve used them for multiple projects now—from fence repair to kitchen updates. They\'re honest, reliable, and their craftsmanship is top-notch. It\'s rare to find a contractor you can truly trust.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our reputation is built on the satisfaction of our clients. Here is what they have to say about working with us.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-orange-500 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-8">
              Join our growing list of satisfied customers and experience the 3Dimensional Empire difference.
            </p>
            <a
              href="tel:5615371294"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
