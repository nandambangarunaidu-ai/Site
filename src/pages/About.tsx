import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'Committed to the highest standards of natural healthcare and therapeutic practices.',
    },
    {
      icon: Target,
      title: 'Holistic Approach',
      description: 'Addressing the root causes of health issues through integrated natural therapies.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '8', label: 'Specialized Therapies' },
    { number: '15+', label: 'Expert Therapists' },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to healing through nature's wisdom and ancient therapeutic traditions
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Welcome to Wellness & Cure Nature Hospital
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Wellness & Cure Nature Hospital, we believe in the power of natural healing. Our hospital combines ancient therapeutic wisdom with modern understanding to provide comprehensive, holistic healthcare solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded on the principles of natural medicine and patient-centered care, we offer a sanctuary where healing happens through gentle, effective therapies that work with your body's natural ability to heal itself.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified therapists and healthcare professionals is dedicated to helping you achieve optimal health through personalized treatment plans tailored to your unique needs.
              </p>
            </div>
            <div className="relative">
              <img
                src="w.jpg"
                alt="Natural healing therapy"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="ww.jpg"
                alt="Our mission"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, effective natural healthcare that empowers individuals to take control of their health through holistic therapies and compassionate care.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading center for natural healing, where traditional wisdom meets modern wellness, creating a healthier, more balanced community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
