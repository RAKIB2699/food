import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">FoodShare</h2>
                    <p className="text-sm">
                        Connecting communities through food. Share surplus, reduce waste, and feed more.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/available-foods" className="hover:text-white">Available Foods</a></li>
                        <li><a href="/add-food" className="hover:text-white">Add Food</a></li>
                        <li><a href="/my-requests" className="hover:text-white">My Requests</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Legal</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} FoodShare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;