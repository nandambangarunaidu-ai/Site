import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import services from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold mb-4">Service not found</h2>
        <p className="mb-6">We couldn't find that service. Please return to the services list.</p>
        <Link to="/services" className="text-green-600 font-semibold">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      {/* Hero banner */}
      <section className="relative h-56 md:h-72 lg:h-96 flex items-center">
        <img
          src={service.heroImage || '/sv.jpeg'}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
            {service.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">{service.short}</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Link to="/services" className="text-green-600 font-medium">← Back to Services</Link>
        </div>

        <article className="max-w-none text-lg prose lg:prose-xl">
          {service.content.split('\n\n').map((para, idx) => {
            const t = para.trim();

            // Detect common subheadings from the document
            const headingPattern = /^(What is|Why Choose|Benefits of|The Procedure|Why Choose Us|Book Your|What is |Why Choose |Benefits |The Procedure|-|[A-Za-z]+\svasthi|Cupping Therapy|Foot detox|Hip bath|Accupuncture therapy|Ozone therapy|Steam bath|Shirodhara)/i;

            if (!t) return <p key={idx} />;

            if (headingPattern.test(t) || t.endsWith('?') || (t.length < 60 && /^[A-Za-z0-9 \-\&'()]+$/.test(t))) {
              return (
                <h2 key={idx} className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
                  {t}
                </h2>
              );
            }

            return (
              <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                {t}
              </p>
            );
          })}
        </article>
        <div className="mt-8 text-center">
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all"
          >
            Book Service Now
          </Link>
        </div>
      </main>
    </div>
  );
}
