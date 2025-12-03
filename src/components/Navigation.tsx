import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-cover bg-center shadow-md"
      style={{ backgroundImage: "url('/1w.jpg')" }}
    >
      {/* Optional overlay for better contrast */}
      <div className="bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer">
              <div className="flex items-center space-x-3">
                <img src="/logo-w.svg" alt="Wellness & Cure" className="h-10 md:h-12 w-auto" />
                <div className="hidden sm:block">
                  <h3 className="text-lg font-bold text-white">Wellness & Cure</h3>
                  <p className="text-xs text-gray-400">Nature Hospital</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-green-300'
                      : 'text-white hover:text-green-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white w-11 h-11 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)} />
            <div className="relative bg-gradient-to-b from-green-700 to-emerald-600 text-white p-6 h-full overflow-auto">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xl py-3 px-2 rounded transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-white/10 text-white'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
