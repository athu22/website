import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.jpeg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Nav items (Desktop only)
  const navItems = [
    { id: 'home', label: 'मुख्यपृष्ठ' },
    { id: 'about', label: 'आमच्याबद्दल' },
    { id: 'services', label: 'सेवा' },
    { id: 'plans', label: 'प्लॅन' },
    { id: 'contact', label: 'संपर्क' },
  ];

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerEl = document.querySelector('header');
    const headerOffset = headerEl ? headerEl.offsetHeight : 0;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      headerOffset -
      20;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    scrollToSection(id);
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-white py-4 border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="ml-3">
              <h1 className="text-xl md:text-2xl font-bold text-indigo-900">
                डिजिटल आमंत्रण
              </h1>
              <p className="text-xs md:text-sm text-indigo-700">
                डिजिटल आमंत्रणे
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-indigo-900 hover:bg-indigo-50 hover:text-indigo-700 transition"
              >
                {item.label}
              </button>
            ))}

            <a
              href="tel:+919975595925"
              className="ml-2 px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2"
            >
              📞 संपर्क करा
            </a>
          </nav>

          {/* Mobile: ONLY Call Button */}
          <div className="md:hidden flex items-center">
            <a
              href="tel:+919975595925"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm flex items-center gap-2 shadow-md active:scale-95 transition"
            >
              📞 संपर्क करा
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
