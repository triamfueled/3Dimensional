const projects = [
  {
    title: 'Kitchen Remodel',
    category: 'Renovation',
    description: 'Complete kitchen transformation with custom cabinetry and modern finishes',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Deck Construction',
    category: 'Outdoor',
    description: 'Spacious composite deck with custom railing and integrated lighting',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bathroom Renovation',
    category: 'Remodeling',
    description: 'Full bathroom update with tile work, vanity, and modern fixtures',
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Hardwood Flooring',
    category: 'Flooring',
    description: 'Beautiful oak hardwood installation throughout main living areas',
    image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Fence Installation',
    category: 'Outdoor',
    description: 'Privacy fence with decorative posts and professional-grade materials',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Interior Painting',
    category: 'Finishing',
    description: 'Whole-home interior paint refresh with premium finishes',
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a look at some of our recently completed projects. Each one represents our commitment to quality and customer satisfaction.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg">
              These are just a few examples of our work. Every project receives the same attention to detail and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
