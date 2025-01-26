'use client'
import { Github, Ship, Scroll, Compass,  MessageSquare, Chrome } from 'lucide-react';

const navigationData = {
  "Ship's Manual": {
    icon: Scroll,
    items: [
      { title: "Quick Start", href: "/docs" },
      { title: "Examples", href: "/examples" },
      { title: "Updates", href: "/updates" },
      { title: "IDE", href: "/ide" },
      
    ],
  },
  "Crew's Quarters": {
    icon: MessageSquare,
    items: [
      { title: "GitHub", href: "https://github.com/hridaya423/maroon" },
      { title: "Website", href: "https://maroon-site.vercel.app" }
    ],
  }
};

const socialLinks = [
  { Icon: Github, href: "https://github.com/hridaya423/maroon" },
  { Icon: Chrome, href: "https://maroon-site.vercel.app" }
];

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-red-500/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-center opacity-20 animate-float" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 to-transparent animate-pulse" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 py-16">
          <div className="col-span-2 md:col-span-1">
            <div className="group relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <img src="/maroon-logo.png" alt="Maroon" className="relative h-10 transform group-hover:scale-105 transition-all duration-300" />
            </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Sail the digital seas with Maroon, where every line of code is an adventure waiting to happen.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group relative p-2 rounded-lg overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <Icon className="relative w-5 h-5 text-gray-400 group-hover:text-red-500 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(navigationData).map(([title, { icon: Icon, items }]) => (
            <div key={title} className="space-y-6">
              <div className="flex items-center space-x-2">
                <Icon className="w-5 h-5 text-red-500 animate-float" />
                <h3 className="text-red-500 font-semibold">{title}</h3>
              </div>
              <ul className="space-y-3">
                {items.map(({ title: itemTitle, href }) => (
                  <li key={itemTitle}>
                    <a
                      href={href}
                      className="group relative flex items-center space-x-2 text-sm text-gray-400 hover:text-red-500 transition-all duration-300"
                    >
                      <Ship className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="relative">
                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-red-500/0 via-red-500/70 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {itemTitle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="relative border-t border-red-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/0 via-red-950/10 to-red-950/0 animate-pulse" />
          <div className="relative px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2024 Maroon. Set sail under MIT License.
              </p>
              <a href="#top" className="group relative px-4 py-2 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-gray-400 group-hover:text-red-500 transform group-hover:rotate-45 transition-all duration-300" />
                  <span className="text-sm text-gray-400 group-hover:text-red-500">Back to Top</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;