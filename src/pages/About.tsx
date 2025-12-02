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
          <p className="text-xl max-w-3xl mx-auto">Ram Mohanu Illness and Nature Cure Hospital — our journey in natural wellness</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg text-gray-700">
            <p>
              Ram Mohanu Illness and Nature Cure Hospital was established in 2024 by Siri Nandu Varama Rao, whose journey in health and wellness began many years earlier. Before founding the hospital, Rao started a dedicated Yoga Center in Sadepalu Gudunlo, where his commitment to teaching and promoting yoga took shape. By 2009, he was fully engaged in yoga education, and in 2010 he formally began conducting yoga programs in schools, introducing structured yoga instruction to young students. His association with the Patanjali Yoga Center in 2011 further strengthened his foundation in traditional yoga practices.
            </p>

            <p>
              Throughout his journey, Rao emphasized that true health is deeply rooted in one’s diet. He strongly advocated for natural, wholesome foods—especially millets, dry fruits, organic produce, and cold-pressed oils—believing that these elements form the cornerstone of long-term wellness. His philosophy centers on the idea that mindful food choices are essential for achieving and maintaining good health.
            </p>

            <p>
              The hospital’s scope expanded significantly in 2016 with the addition of Viru Teru, a young nature cure doctor, marking the inclusion of broader naturopathy practices. By 2017, the team advanced their expertise by mastering Panchakarma therapy in Kerala, one of Ayurveda’s most respected detoxification systems. Despite challenges in January 2021, including temporary closures by authorities, the team persevered and completed additional courses and certifications, reinforcing their commitment to high professional standards in alternative medicine.
            </p>

            <p>
              Driven by a deep desire to serve society, Rao and his team have continuously worked to promote holistic health. The hospital aims to integrate yoga, Ayurveda, and naturopathy into everyday healthcare, making these traditional practices accessible and acceptable to the wider community. Through outreach, education, and unwavering dedication, they strive to inspire healthier living and empower individuals to embrace natural wellness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
