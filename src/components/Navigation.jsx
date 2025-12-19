import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'border-indigo-500 text-indigo-700' 
                    : 'border-transparent text-neutral-600 hover:border-indigo-200 hover:text-indigo-700'
                }`
              }
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'border-indigo-500 text-indigo-700' 
                    : 'border-transparent text-neutral-600 hover:border-indigo-200 hover:text-indigo-700'
                }`
              }
            >
              {t('about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'border-indigo-500 text-indigo-700' 
                    : 'border-transparent text-neutral-600 hover:border-indigo-200 hover:text-indigo-700'
                }`
              }
            >
              {t('services')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'border-indigo-500 text-indigo-700' 
                    : 'border-transparent text-neutral-600 hover:border-indigo-200 hover:text-indigo-700'
                }`
              }
            >
              {t('contact')}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
