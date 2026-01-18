'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-slate-950 dark:to-black text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 gradient-text">GadgetHub</h3>
            <p className="text-gray-400 mb-4">Discover the latest smart gadgets for a smarter life.</p>
            <div className="flex gap-3">
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-2 rounded-lg transition-all hover:scale-110 duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-all hover:scale-110 duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-all hover:scale-110 duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-all hover:scale-110 duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-800 p-2 rounded-lg transition-all hover:scale-110 duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                  → Items
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                  → Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">
                  → Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Categories
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/items?category=Smartphones" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">→ Smartphones</a></li>
              <li><a href="/items?category=Laptops" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">→ Laptops</a></li>
              <li><a href="/items?category=Wearables" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">→ Wearables</a></li>
              <li><a href="/items?category=Tablets" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2">→ Tablets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>Anonto@gadgethub.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+8801407******</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>123 Tech St, Silicon Valley</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="gradient-text font-semibold">GadgetHub</span>. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">Made with <span className="text-red-500">❤️</span> by GadgetHub Team</p>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-30"></div>
      </div>
    </footer>
  );
}
