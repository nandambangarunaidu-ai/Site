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
      className="fixed w-full top-0 z-50 shadow-md"
      style={{ backgroundColor: '#C74375' }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ================= LOGO + TITLE ================= */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/logo-w.svg"
              alt="Wellness & Cure"
              className="h-16 w-auto"
            />

            <div className="flex flex-col justify-center leading-tight -ml-6">
              <h3 className="font-brand font-extrabold text-white uppercase tracking-wide text-sm sm:text-base">
                RAMMOHAN WELLNESS &
              </h3>
              <p className="font-brand font-extrabold text-white uppercase tracking-wide text-sm sm:text-base -mt-1">
                NATURE CURE HOSPITAL
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
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

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="md:hidden p-2 text-white w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="relative bg-gradient-to-b from-green-700 to-emerald-600 text-white p-6 h-full overflow-auto">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex flex-col space-y-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  }}
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
    </nav>
  );
}
