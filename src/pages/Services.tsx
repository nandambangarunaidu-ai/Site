import { Droplet, Leaf, Brain, Activity, Circle, Waves } from 'lucide-react';
import { Service } from '../types';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services: Service[] = [
    {
      id: '1',
      name: 'Colon Hydrotherapy',
      description:
        'A gentle internal cleansing that helps eliminate toxins and improve digestive health through the use of purified water.',
      bgImage: '/ch.jpeg',
    },
    {
      id: '2',
      name: 'Yojan Therapy',
      description:
        'Ancient holistic healing technique that balances energy flow throughout the body, promoting overall wellness and vitality.',
      bgImage: '/yt.jpeg',
    },
    {
      id: '3',
      name: 'Body Mind Relaxation Therapy',
      description:
        'Comprehensive relaxation techniques combining meditation, breathing exercises, and gentle movements to reduce stress and anxiety.',
      bgImage: '/bmr.jpeg',
    },
    {
      id: '4',
      name: 'Acupuncture Therapy',
      description:
        'Traditional Chinese medicine practice using fine needles to stimulate specific points on the body for pain relief and healing.',
      bgImage: '/at.jpeg',
    },
    {
      id: '5',
      name: 'Cupping Therapy',
      description:
        'Ancient therapy using suction cups to improve blood flow, reduce inflammation, and promote healing in targeted areas.',
      bgImage: '/ct.jpeg',
    },
    {
      id: '6',
      name: 'Kati Snanam',
      description:
        'Ayurvedic treatment involving therapeutic bathing techniques to cleanse the body and rejuvenate the skin.',
      bgImage: '/ks.jpeg',
    },
    {
      id: '7',
      name: 'Kativasti',
      description:
        'Specialized Ayurvedic therapy for lower back pain using warm medicated oil retained over the affected area.',
      bgImage: '/kv.jpeg',
    },
    {
      id: '8',
      name: 'Jaanu Vasti',
      description:
        'Ayurvedic knee therapy using warm herbal oils to relieve joint pain, stiffness, and improve mobility.',
      bgImage: '/jv.jpeg',
    },
  ];

  const icons = [Droplet, Leaf, Brain, Activity, Circle, Waves, Droplet, Activity];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={service.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  style={{
                    backgroundImage: `url('${service.bgImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="relative p-8 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                        <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1 text-white">
                      <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                      <p className="leading-relaxed">{service.description}</p>
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
                Our experienced therapists are here to help you choose the perfect treatment plan tailored to your specific needs and health goals.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
