import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Welcome to Wellness & Cure Nature Hospital',
    subtitle: 'Your Journey to Natural Healing Begins Here',
    image: '/c1.jpg',
  },
  {
    title: 'Holistic Therapies for Mind & Body',
    subtitle: 'Experience Ancient Healing Traditions',
    image: '/c2.jpg',
  },
  {
    title: 'Expert Care, Natural Solutions',
    subtitle: 'Personalized Treatment Plans for Your Wellbeing',
    image: '/c3.jpg',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-56 md:h-96 lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white mb-4">
                {slide.subtitle}
              </p>
              <Link to="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 min-h-[44px]">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8 h-3' : 'bg-white bg-opacity-50 w-3 h-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
