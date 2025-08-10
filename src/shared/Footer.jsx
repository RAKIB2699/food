import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-gray-900 text-gray-300 mt-12 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-extrabold text-green-400 mb-3">Foody</h2>
          <p className="text-sm mb-1 italic">Spreading Happiness</p>
          <a href="mailto:foody@gmail.com" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-300">
            foody@gmail.com
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-400 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Available Foods", href: "/availablefood" },
              { label: "Add Food", href: "/addfood" },
              { label: "My Requests", href: "/myfoodrequest" },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Placeholder or extra links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-400 pb-2">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-green-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition-colors duration-300">Contact</a></li>
            <li><a href="/faq" className="hover:text-green-400 transition-colors duration-300">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-400 pb-2">Follow Us</h3>
          <div className="flex space-x-6 text-3xl text-gray-400">
            {[{
              href: "https://facebook.com",
              icon: <FaFacebook />,
              label: "Facebook"
            }, {
              href: "https://twitter.com",
              icon: <FaTwitter />,
              label: "Twitter"
            }, {
              href: "https://instagram.com",
              icon: <FaInstagram />,
              label: "Instagram"
            }, {
              href: "https://github.com",
              icon: <FaGithub />,
              label: "Github"
            }].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-green-400 transform hover:scale-110 transition-transform duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500 select-none">
        © {new Date().getFullYear()} FoodShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
