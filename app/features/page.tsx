/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useRef } from 'react';
import { Terminal, Ship, Anchor, Compass, Map, Code, Shield, Zap, ShipIcon } from 'lucide-react';

const FeaturesPage = () => {


  const features = [
    {
      icon: Code,
      title: "First Mate",
      description: "Your trusty companion who's gonna help you sail through Maroon",
      demo: ``
    },
    {
      icon: Map,
      title: "Dialects",
      description: "Change the syntax to your liking, ye scurvy programmer.",
      demo: `
dialect Caribbean:
    "shout" be "bark"
    "expedition" be "voyage"
    "treasure" be "variable"
    "sail_with" be "sails with"
end dialect

# Define the function
expedition greet(txt):      
    shout txt      
end expedition`
    },
    {
      icon: ShipIcon,
      title: "Function voyages",
      description: "Define functions as voyages, making your code adventures clear and organized.",
      demo: `voyage squared(n):\n result be n times n \n return result`
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-700 mb-6">
              Features That Shine Like Gold
            </h2>
            <p className="text-xl text-gray-300">Discover the treasures that make Maroon unique</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <div className="relative bg-black p-8 rounded-lg border border-red-900/50 h-full transform hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-red-500 mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  
                  <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                    <pre className="text-xs font-mono text-gray-300 overflow-x-auto">
                      <code>{feature.demo}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
            <div className="relative bg-black/90 backdrop-blur-xl p-8 rounded-xl border border-red-900/50 transform group-hover:[transform:rotateX(2deg)] transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Terminal className="w-6 h-6 mr-2 text-red-500" />
                Try It Now
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-300">Experience the power of Maroon with our interactive playground</p>
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    <a href="/ide">
                    <span className="relative flex items-center justify-center space-x-2">
                      <Ship className="w-5 h-5" />
                      <span>Launch Playground</span>
                    </span>
                    </a>
                  </button>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <pre className="text-sm font-mono text-gray-300">
                    <code>{`# Declare your treasure
treasure be 42

# Set sail on a new voyage
voyage greet(name):
    bark "Ahoy," name
    bark "Welcome aboard!"
end voyage

# Start the adventure
greet sails with "Captain"`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default FeaturesPage;