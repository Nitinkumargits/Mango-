import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [favoriteCount] = useState(0);
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
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Fresh Mangoes", path: "/mangoes" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    {
      name: "Contact Us",
      path: "/contact",
      submenu: [
        { name: "General Enquiry Form", path: "/contact/general" },
        { name: "Distributors Enquiry Form", path: "/contact/distributors" },
      ],
    },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const topNavItems = [
    { name: "INDUSTRY", path: "/industry" },
    { name: "FOODSERVICE", path: "/foodservice" },
    { name: "RETAIL", path: "/retail" },
    { name: "RESEARCH", path: "/research" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Green Bar */}
      <div className="bg-mango-green text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="font-bold">EN</span>
            <span className="opacity-70">|</span>
            <span className="opacity-70 cursor-pointer hover:opacity-100">
              ES
            </span>
          </div>

          {/* Top Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {topNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:opacity-80 transition-opacity uppercase">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                {/* Mango SVG Icon */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  className="text-mango-orange flex-shrink-0"
                  style={{ minWidth: "40px" }}>
                  <path
                    d="M50 10 C30 10, 15 25, 15 45 C15 55, 20 65, 28 70 C25 75, 25 80, 30 85 C35 90, 42 92, 50 92 C58 92, 65 90, 70 85 C75 80, 75 75, 72 70 C80 65, 85 55, 85 45 C85 25, 70 10, 50 10 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M50 15 C35 15, 22 28, 22 43 C22 50, 25 57, 30 61 C28 65, 28 68, 32 72 C36 76, 42 77, 50 77 C58 77, 64 76, 68 72 C72 68, 72 65, 70 61 C75 57, 78 50, 78 43 C78 28, 65 15, 50 15 Z"
                    fill="#FFD700"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="45"
                    cy="40"
                    rx="8"
                    ry="12"
                    fill="#FF8C00"
                    opacity="0.4"
                  />
                </svg>
                <div className="flex items-baseline relative">
                  <span
                    className="text-3xl md:text-4xl font-bold text-mango-orange relative"
                    style={{
                      fontFamily:
                        '"Brush Script MT", "Lucida Handwriting", cursive, sans-serif',
                      transform: "rotate(-2deg)",
                    }}>
                    Mango
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-mango-green ml-1 self-end">
                    .in
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Main Navigation */}
            <div
              className="hidden lg:flex items-center gap-6"
              ref={dropdownRef}>
              {mainNavItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`font-bold text-sm uppercase transition-colors whitespace-nowrap flex items-center gap-1 ${
                          isActive(item.path)
                            ? "text-mango-green"
                            : "text-mango-green-dark hover:text-mango-green"
                        }`}>
                        {item.name}
                        <FaChevronDown
                          className={`text-xs transition-transform ${
                            openDropdown === index ? "transform rotate-180" : ""
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-mango-yellow-light hover:text-mango-orange transition-colors">
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
                      className={`font-bold text-sm uppercase transition-colors whitespace-nowrap ${
                        isActive(item.path)
                          ? "text-mango-green"
                          : "text-mango-green-dark hover:text-mango-green"
                      }`}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Buy Mangoes Button */}
              <Link
                to="/mangoes"
                className="hidden md:block bg-mango-orange hover:bg-mango-orange-dark text-white font-bold py-2 px-6 rounded-lg uppercase text-sm transition-colors">
                BUY MANGOS
              </Link>

              {/* Favorite Icon with Badge */}
              <button className="relative text-mango-green-dark hover:text-mango-green transition-colors">
                <FaHeart className="text-xl" />
                {favoriteCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-300 text-gray-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {favoriteCount}
                  </span>
                )}
              </button>

              {/* Search Icon */}
              <button className="text-mango-green-dark hover:text-mango-green transition-colors">
                <FaSearch className="text-xl" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-mango-orange hover:bg-gray-100"
                aria-expanded="false">
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {mainNavItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-bold uppercase ${
                        isActive(item.path)
                          ? "text-mango-green bg-mango-yellow-light"
                          : "text-mango-green-dark hover:bg-gray-100"
                      }`}>
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          openDropdown === index ? "transform rotate-180" : ""
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
                            className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-mango-yellow-light hover:text-mango-orange">
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
                    className={`block px-3 py-2 rounded-md text-base font-bold uppercase ${
                      isActive(item.path)
                        ? "text-mango-green bg-mango-yellow-light"
                        : "text-mango-green-dark hover:bg-gray-100"
                    }`}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/mangoes"
              onClick={closeMenu}
              className="block w-full bg-mango-orange hover:bg-mango-orange-dark text-white font-bold py-2 px-6 rounded-lg uppercase text-center mt-4">
              BUY MANGOS
            </Link>
          </div>
        </div>
      )}

      {/* Bottom Color Bar */}
      <div className="h-1 bg-gradient-to-r from-mango-yellow via-mango-orange to-red-500"></div>
    </nav>
  );
};

export default Navbar;
