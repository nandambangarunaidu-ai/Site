import { useState, useEffect } from 'react';

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
    <div className="relative h-[920px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in">
                {slide.subtitle}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
