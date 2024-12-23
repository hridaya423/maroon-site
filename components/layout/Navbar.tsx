'use client'
import { useState, useEffect } from 'react';
import { Github, Menu, X, Scroll, Anchor, Ship, Code } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20 border-b border-red-900/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <Link href="/"><img 
                src="/maroon-logo.png" 
                alt="Maroon" 
                className="relative h-10 transform group-hover:scale-105 transition-all duration-300" 
              />
              </Link>
            </div>

            <div className="hidden md:flex space-x-8 text-gray-300">
              {[
                { href: "/features", icon: Anchor, label: "Features" },
                { href: "/docs", icon: Scroll, label: "Docs" },
                { href: "/examples", icon: Code, label: "Examples" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative px-4 py-2 rounded-lg hover:bg-red-950/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center space-x-2">
                    <Icon className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span className="group-hover:text-red-500 transition-colors duration-300">{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/hridaya423/maroon"
              className="group relative px-4 py-2 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 border border-red-900/50 rounded-lg group-hover:border-red-500 transition-colors duration-300" />
              <div className="relative flex items-center space-x-2 text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                <Github className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                <span>GitHub</span>
              </div>
            </a>
            <a href="/docs">
            <button className="relative group px-6 py-2">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:from-red-500 group-hover:to-red-700" />
              <div className="relative flex items-center space-x-2 text-white">
                <Ship className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Get Started</span>
              </div>
            </button>
            </a>
          </div>

          <button 
            className="md:hidden relative group p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/30 rounded-lg transition-colors duration-300" />
            {isMobileMenuOpen ? (
              <X className="relative w-6 h-6 transform rotate-0 hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="relative w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md border-b border-red-900/20 transition-all duration-500 ${
        isMobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden border-none'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {["Features", "Docs", "Learn", "Explore", "GitHub"].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-red-950/30 transition-all duration-300"
            >
              <div className="text-red-500">
                {item === "GitHub" ? <Github className="w-5 h-5" /> : <Anchor className="w-5 h-5" />}
              </div>
              <span className="text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                {item}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};