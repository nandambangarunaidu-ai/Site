import { Droplet } from 'lucide-react';
import { useEffect } from 'react';
import services from '../data/services';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const icons = [Droplet];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white py-16 bg-cover bg-center bg-black/40"
        style={{ backgroundImage: "url('/1w.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our comprehensive range of natural therapies designed to heal, rejuvenate, and restore your body's natural balance
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service) => {
              const Icon = icons[0];
              return (
                <div key={service.slug} className="rounded-2xl overflow-hidden bg-white shadow-sm h-full flex flex-col">
                  <div className="h-44 md:h-56 lg:h-64 relative flex-shrink-0">
                    <img
                      src={service.heroImage || '/sv.jpeg'}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute left-6 bottom-6 text-white">
                      <h3 className="text-lg md:text-2xl font-semibold drop-shadow">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <div className="flex space-x-4">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p
                          className="leading-relaxed text-gray-600 mb-4 text-sm md:text-base overflow-hidden"
                          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                        >
                          {service.short}
                        </p>

                        <div className="mt-auto text-right">
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition-all min-h-[44px]"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sv.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Not Sure Which Therapy is Right for You?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Our expert doctors and experienced wellness consultants are here to help you choose the perfect treatment plan tailored to your specific needs and health goals.
              </p>
              <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-block">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
