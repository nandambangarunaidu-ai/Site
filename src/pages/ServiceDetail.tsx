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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
            {service.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">{service.short}</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Link to="/services" className="text-green-600 font-medium">← Back to Services</Link>
        </div>

        <article className="prose lg:prose-xl max-w-none text-lg">
          {service.content.split('\n\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </main>
    </div>
  );
}
