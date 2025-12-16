import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white pt-12 pb-6"
      style={{ backgroundImage: "url('/1w.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/wf.png" alt="Wellness & Cure" className="w-15 h-15 object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in natural healing and holistic wellness. Experience the power of nature's remedies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Near Bus stand, Opposite street to Bhashyam, Subbarao pet, Tadepalligudem-534101, Andrapradesh</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">+91 9966877227 +91 9912177227</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="https://youtube.com/@rwnch?si=E2QRIBN89HRIVkXP" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-8 md:h-8 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/rammohanwnch?igsh=MXUxZnd6cnhwdXlxZA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-8 md:h-8 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/19zkUQJPwA/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-8 md:h-8 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
           <p className="text-gray-400 text-sm">
    &copy; {new Date().getFullYear()}{' '}
    <span className="font-semibold text-white">
      Wellness & Nature Cure Hospital
    </span>
    . All rights reserved.
  </p>
        </div>
      </div>
    </footer>
  );
}
