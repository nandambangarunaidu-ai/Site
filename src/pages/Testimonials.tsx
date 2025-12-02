import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote:
      'I regularly come to take abhyanga at rammohan wellness, I can only say that they are the finest. I instantly feel the change in my aura so I never miss to take it. I thank rammohan wellness for providing these services in a town like this that too at affordable prices.',
    name: 'Mr. Syam',
    role: 'Pranik healer',
  },
  {
    quote:
      'I trust rammohan wellness for their strong commitment towards quality healthcare. They are my go to people for maintaining my health. I regularly visit here for my abhyanga session. This keeps my body movement on point.',
    name: 'Mr. Ravi',
    role: 'Businessman',
  },
  {
    quote:
      'You say health and the first thing that comes to my mind is rammohan wellness. I have been visiting them from the past 8 years. I regularly come here to take abhyanga-shirodhara. This keeps my stress away from my mind and body.',
    name: 'Mr. Subrahmanyam',
    role: 'Stock market trader and investor',
  },
  {
    quote:
      "I had an ACL surgery and my knee movement got restricted even after taking months of physiotherapy at top clinics. I came all the way from Hyderabad just to take the knee mobility treatment and I recovered to the maximum. Young, passionate, committed, ethical, quality team.",
    name: 'Mr. Chandu',
    role: 'Software engineer',
  },
  {
    quote:
      'I severely suffered from neck pain and hands numbness. I was unable to sleep and sit peacefully. Visited many doctors but they couldn\'t heal me. I came here for just 15 days and all my pain and inconveniences are gone. I thank doctor Bhavya Sree and rammohan wellness for their extraordinary service.',
    name: 'Mrs. Ratna Kumari',
    role: 'Housewife',
  },
  {
    quote:
      'My feet became dark and I could not sense the touch due to lack of circulation in legs. After following their treatment and diet plan my glucose levels became normal, sensation returned, and my foot colour improved. They are the best go to hospital for diabetes cure and management.',
    name: 'Mr. Ramu',
    role: 'Businessman',
  },
  {
    quote:
      'I am diabetic for 12 years. Other than fluctuating glucose levels, I also suffered from weakness, bloating and sweating. Doctor suggested ozone therapy and other treatments — the results are shocking; all my issues are normal now.',
    name: 'Mrs. Jayakumari',
    role: 'Government Teacher',
  },
  {
    quote:
      'I am 74 years old. From many years my glucose levels were always above 350. After ozone therapy my levels dropped to 150 for the first time in years. They are the most underrated hospital in the town & one stop solution for diabetes.',
    name: 'Mr. Murthy',
    role: 'Retd. Civil engineer',
  },
  {
    quote:
      'I experienced their full body detox program and travelled 40kms to come here. My body feels like a feather — pricing, hygiene, hospitality and quality are on point. I booked a slot for my friend.',
    name: 'Mr. Pathan Nagu',
    role: 'Govt PCH staff',
  },
  {
    quote:
      'I came all the way from 60kms and all my sacrifice was worth it. I experienced full body detox and my joint issues vanished; my stomach normalized and I feel stress free. Next week I will bring my father.',
    name: 'Mr. Tinej Kumar',
    role: 'Jewellery business',
  },
  {
    quote:
      'I came when I was unable to sleep, sit or walk properly due to sciatica. After 15 days of treatment, not only sciatica but all my pains are gone. I can walk now without support. Thank you Rammohan garu for your service — I recommend everyone with sciatica to come here.',
    name: 'Mr. Sridhar',
    role: 'Politician, businessman & farmer',
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-lg max-w-3xl mx-auto">Real experiences from people who found healing and relief at Ram Mohanu Illness and Nature Cure Hospital.</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start space-x-4">
                <Avatar name={t.name} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                </div>
              </div>

              <blockquote className="mt-4 text-gray-700 leading-relaxed">“{t.quote}”</blockquote>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </main>
    </div>
  );
}
