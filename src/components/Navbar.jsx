import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Fresh Mangoes', path: '/mangoes' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Contact Us',
      path: '/contact',
      submenu: [
        { name: 'General Enquiry Form', path: '/contact/general' },
        { name: 'Distributors Enquiry Form', path: '/contact/distributors' },
      ],
    },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mango-yellow via-mango-orange to-mango-yellow-dark bg-clip-text text-transparent">
                🥭 Mango
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                          isActive(item.path)
                            ? 'text-mango-orange'
                            : 'text-gray-700 hover:text-mango-orange'
                        }`}
                      >
                        {item.name}
                        <FaChevronDown
                          className={`inline-block ml-1 text-xs transition-transform ${
                            openDropdown === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === index && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={() => {
                                  setOpenDropdown(null);
                                  closeMenu();
                                }}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-mango-yellow-light hover:text-mango-orange transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setOpenDropdown(null)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-mango-orange'
                          : 'text-gray-700 hover:text-mango-orange'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-mango-orange hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mango-orange"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                        isActive(item.path)
                          ? 'text-mango-orange bg-mango-yellow-light'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          openDropdown === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-mango-yellow-light hover:text-mango-orange"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.path)
                        ? 'text-mango-orange bg-mango-yellow-light'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-mango-orange'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overlay for mobile dropdown */}
      {isMenuOpen && openDropdown !== null && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpenDropdown(null)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

