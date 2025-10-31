import { Heart, Users, Award, Clock } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: 'Natural Healing',
      description: 'Experience the power of nature-based therapies',
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
      title: 'Flexible Hours',
      description: 'Open 7 days a week for your convenience',
    },
  ];

  const therapies = [
    'Colon Hydrotherapy',
    'Yojan Therapy',
    'Body Mind Relaxation',
    'Acupuncture Therapy',
    'Cupping Therapy',
    'Kati Snanam',
  ];

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

    {/* Therapy Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {therapies.map((therapy, index) => (
    <div
      key={index}
      className="relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
      style={{ backgroundImage: "url('/4w.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>

      <div className="relative p-6 text-white">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
          <span className="text-green-600 group-hover:text-white font-bold text-xl">
            {index + 1}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{therapy}</h3>
        <p>
          Experience the healing benefits of this traditional therapy
        </p>
      </div>
    </div>
  ))}
</div>


    {/* View All Button */}
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
  {/* Green overlay for contrast */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Begin Your Healing Journey?
    </h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Book your appointment today and take the first step towards natural wellness
    </p>
    <button className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 animate-pulse">
      Book an Appointment
    </button>
  </div>
</section>


    </div>
  );
}
