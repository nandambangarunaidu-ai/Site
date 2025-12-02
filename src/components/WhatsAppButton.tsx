import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9966877227';
    const message = 'Hello! I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <a
      href={`https://wa.me/9966877227?text=${encodeURIComponent('Hello! I would like to inquire about your services.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50 group flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
      style={{ minWidth: 44, minHeight: 44 }}
    >
      <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
