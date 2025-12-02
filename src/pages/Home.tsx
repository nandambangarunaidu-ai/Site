import { Heart, Users, Award, Clock } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { Link } from 'react-router-dom';
import services from '../data/services';

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: 'Natural Healing',
      description: 'Experience the power of nature‑based therapies',
    },
    {
      icon: Users,
      title: 'Expert Therapists',
      description: 'Certified professionals with years of experience',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Thousands of satisfied patients across the globe',
    },
    {
      icon: Clock,
      title: 'Trusted Care',
      description: 'Certified practitioners, accreditations, and evidence-informed protocols',
    },
  ];

  // Show the first six services on the home page
  const therapies = services.slice(0, 6);

  // Concise two-line descriptions for Home cards (keeps card height consistent)
  const concise = {
    'abhyanga': 'Warm Ayurvedic oil massage that deeply relaxes muscles and boosts circulation.',
    'colon-hydro-therapy': 'Gentle colonic irrigation to cleanse the large intestine and support digestion.',
    'shirodhara': 'A steady stream of warm oil on the forehead to calm the nervous system and improve sleep.',
    'steambath': 'Moist-heat therapy to open pores, relax muscles, and ease respiratory congestion.',
    'ozone-therapy': 'Controlled medical ozone applications aimed at supporting circulation and immune function.',
    'kati-vasthi': 'Localized warm-oil treatment for targeted lower-back relief and tissue nourishment.',
  } as Record<string, string>;

  return (
    <div>
      <HeroCarousel />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Specialized Therapies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of natural healing therapies designed to restore balance and promote wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {therapies.map((therapy, index) => (
              <div key={therapy.slug} className="rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="h-44 md:h-56 relative">
                  <img
                    src={therapy.heroImage}
                    alt={therapy.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute left-4 bottom-4 bg-white/90 text-gray-900 rounded-full px-3 py-1 font-medium text-sm">
                    {therapy.title}
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 mt-1 text-sm md:text-base">{concise[therapy.slug] ?? therapy.short}</p>
                      <div className="mt-4 text-right">
                        <Link
                          to={`/services/${therapy.slug}`}
                          className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] min-w-[44px]"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105 animate-bounce"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/2w.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards natural wellness
          </p>
          <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 animate-pulse inline-block">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
