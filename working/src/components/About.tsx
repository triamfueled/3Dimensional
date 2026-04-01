import { Award, Shield, Hammer } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Trusted Local Construction Partner
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At 3Dimensional Empire Construction & Handyman Services, we bring years of experience
                and unwavering dedication to every project we undertake. From minor repairs to major
                renovations, we treat your home or business with the same care and attention we'd give our own.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commitment to quality craftsmanship and honest, transparent service has made us a
                trusted name in the community. We believe in doing the job right the first time,
                standing behind our work, and building lasting relationships with our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need a quick handyman fix or a complete remodel, we bring the same level
                of professionalism, expertise, and attention to detail to every job. Your satisfaction
                isn't just our goal—it's our guarantee.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Craftsmanship</h3>
                  <p className="text-gray-700">
                    Every project is executed with precision, skill, and a commitment to excellence
                    that shows in the finished work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Honest & Dependable</h3>
                  <p className="text-gray-700">
                    We provide upfront pricing, clear communication, and reliable service you can
                    count on from start to finish.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Focused</h3>
                  <p className="text-gray-700">
                    As a local business, we're invested in our community and take pride in serving
                    our neighbors with integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
