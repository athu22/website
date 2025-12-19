import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Nav items in Marathi
  const navItems = [
    { id: 'home', label: 'मुख्यपृष्ठ' },
    { id: 'about', label: 'आमच्याबद्दल' },
    { id: 'services', label: 'सेवा' },
    { id: 'plans', label: 'प्लॅन' },
    { id: 'contact', label: 'संपर्क' },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerEl = document.querySelector('header');
    const headerOffset = headerEl ? headerEl.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 20;

    window.scrollTo({ top, behavior: 'smooth' });
    setIsMenuOpen(false);
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
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="ml-3">
              <h1 className="text-xl md:text-2xl font-bold text-indigo-900">डिजिटल आमंत्रण</h1>
              <p className="text-xs md:text-sm text-indigo-700">डिजिटल आमंत्रणे</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-indigo-900 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="#contact" 
              className="ml-2 px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
            >
              संपर्क करा
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-900 hover:text-indigo-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">मेनू उघडा</span>
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg mx-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-900 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {item.label}
            </button>
          ))}
          <a 
            href="#contact" 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
          >
            संपर्क करा
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
