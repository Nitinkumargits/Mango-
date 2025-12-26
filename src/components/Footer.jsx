import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const menuSections = [
    {
      title: "National Mango Board",
      links: [
        { name: "About NMB", path: "/about" },
        { name: "Highlights", path: "/highlights" },
        { name: "Nominations", path: "/nominations" },
      ],
    },
    {
      title: "Industry Resources",
      links: [
        { name: "Press Room", path: "/press-room" },
        { name: "Find Suppliers", path: "/suppliers" },
        { name: "Events", path: "/events" },
      ],
    },
    {
      title: "Research Resources",
      links: [
        { name: "Nutrition & Health", path: "/nutrition" },
        { name: "Crop Report", path: "/crop-report" },
        { name: "Postharvest Practices", path: "/postharvest" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "FAQs", path: "/faqs" },
      ],
    },
  ];

  return (
    <footer className="bg-mango-green text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
          {/* Logo */}
          <div className="mb-6 lg:mb-0 lg:flex-1">
            <Link to="/" className="flex justify-center lg:justify-start">
              <div className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Mango</span>
                <span className="text-mango-yellow">.in</span>
              </div>
            </Link>
          </div>

          {/* Newsletter Button */}
          <div className="flex justify-center lg:justify-end">
            <Link
              to="/newsletter"
              className="bg-mango-orange hover:bg-mango-orange-dark text-white font-bold py-3 px-6 rounded-lg uppercase transition-colors shadow-md hover:shadow-lg text-sm md:text-base">
              Signup for Our Newsletter
            </Link>
          </div>
        </div>

        {/* Menu Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-8">
          {menuSections.map((section, index) => (
            <div key={index} className="menu-block">
              <ul className="list-none space-y-3">
                <li>
                  <span className="font-bold text-white text-base md:text-lg block mb-3">
                    {section.title}
                  </span>
                </li>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-white/90 hover:text-white hover:underline transition-colors block text-sm md:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 pt-6 mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright and Links */}
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 text-sm text-white/90">
              <span className="lg:inline-block">
                © 2025 Mango E-commerce All Rights Reserved
              </span>
              <span className="hidden lg:inline text-white/50">|</span>
              <Link
                to="/terms"
                className="hover:text-white hover:underline transition-colors">
                Terms And Conditions
              </Link>
              <span className="hidden lg:inline text-white/50">|</span>
              <Link
                to="/privacy"
                className="hover:text-white hover:underline transition-colors">
                Privacy Policy
              </Link>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                <span>English</span>
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    isLanguageOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isLanguageOpen && (
                <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsLanguageOpen(false)}>
                    <span className="font-semibold">English</span>
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsLanguageOpen(false)}>
                    <span>Español</span>
                    <span className="text-gray-500 text-sm ml-2">
                      (Spanish)
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}></div>
      )}
    </footer>
  );
};

export default Footer;
