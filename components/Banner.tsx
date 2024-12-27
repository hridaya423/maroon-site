'use client'
import { useState, useEffect } from 'react';
import { Skull, X } from 'lucide-react';

const UpdatesBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="sticky top-0 z-50">
      <div className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20' 
          : 'bg-black'
      }`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-red-950/20" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 opacity-10" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 group">
                <div className="relative flex items-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
                  <Skull className="relative w-4 h-4 text-red-500" />
                </div>
                
                <span className="text-gray-300 text-sm">
                  Ahoy matey! New treasures await in Maroon v1.1
                </span>
                
                <a 
                  href="/updates" 
                  className="inline-flex items-center text-red-500 hover:text-red-400 text-sm group/link"
                >
                  <span className="border-b border-dashed border-red-500 group-hover/link:border-red-400">
                    View the Loot
                  </span>
                  <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                className="absolute right-4 group p-1.5"
              >
                <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/30 rounded-lg transition-colors duration-300" />
                <X className="relative w-4 h-4 text-red-500/70 group-hover:text-red-500 transition-colors duration-200" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default UpdatesBanner;
