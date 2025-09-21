import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Responsive */}
          <Link to="/" className="flex items-center space-x-3 flex-1" onClick={closeMenu}>
            <img 
              src="https://candymocoffee.com.tr/img/Logo.png" 
              alt="Candy Mo Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 transition-all duration-200"
            />
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                Candy Mo
              </h1>
              <p className="text-xs sm:text-sm text-amber-600 font-medium flex items-center">
                <Coffee size={12} className="mr-1" />
                Coffee & More
              </p>
            </div>
          </Link>
          
          {/* Hamburger Menu Button - Enhanced */}
          <button
            onClick={toggleMenu}
            className="relative p-3 rounded-xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 hover:border-amber-300 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {isMenuOpen ? (
              <X size={24} className="text-amber-700" />
            ) : (
              <Menu size={24} className="text-amber-700" />
            )}
            {/* Menu indicator dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white border-t border-amber-200 shadow-xl">
          <nav className="max-w-6xl mx-auto px-4 py-6">
            <ul className="space-y-5">
              <li>
                <Link 
                  to="/" 
                  className={`block text-lg font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                    isActive('/') 
                      ? 'text-amber-700 bg-amber-50 font-semibold border-l-4 border-amber-500' 
                      : 'text-gray-800 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onClick={closeMenu}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className={`block text-lg font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                    isActive('/menu') 
                      ? 'text-amber-700 bg-amber-50 font-semibold border-l-4 border-amber-500' 
                      : 'text-gray-800 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onClick={closeMenu}
                >
                  Menü
                </Link>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block text-lg font-medium text-gray-800 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200 py-2 px-3 rounded-lg" 
                  onClick={closeMenu}
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block text-lg font-medium text-gray-800 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200 py-2 px-3 rounded-lg" 
                  onClick={closeMenu}
                >
                  İletişim
                </a>
              </li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send/?phone=905393479953&text&type=phone_number&app_absent=0" 
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold"
                  onClick={closeMenu}
                >
                  <Phone size={20} />
                  <span>Hemen Sipariş Ver</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;