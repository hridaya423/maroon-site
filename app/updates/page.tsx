'use client'
import React from 'react';
import { Skull, Ship, Anchor, Code } from 'lucide-react';

const UpdatesSection = () => {
    const updates = [
      {
        version: "1.2.0",
        date: "26 January 2024",
        highlights: [
          {
            title: "Playground",
            description: "New Feature in the site! Go play with the maroon language in the maroon playground",
            icon: <Code className="w-6 h-6" />
          },
          {
            title: "Import functionality",
            description: "Modularise your code, ye scurvy scallywag",
            icon: <Ship className="w-6 h-6" />
          },
          {
            title: "New String Operations",
            description: "Quickly change a script with new operations such as shout, split_loot, join_crew",
            icon: <Anchor className="w-6 h-6" />
          }
        ],
        changes: [
          "Allowed functions to have default parameters",
          "Fixed parser issues regarding random sample, random float, flip coin",
          "Added comparisons",
          "Added map, filter, reduce",
          "Fixed list declaration parsing",
          "Added support for parentheses",
          "Changed first mate to be inactive by default",
          "Added shuffle and weighted choice",
          "Fixed issues regarding plunder loop"
        ]
      },
      {
        version: "1.1.0",
        date: "27 December 2024",
        highlights: [
          {
            title: "Pirate Companion",
            description: "Meet First Mate: the companion that helps you fix code with ease!",
            icon: <Skull className="w-6 h-6" />
          },
          {
            title: "Dialects",
            description: "Modify the way yer write code, ye unsatisfied pig",
            icon: <Ship className="w-6 h-6" />
          },
          {
            title: "Shorthand List Comprehensions",
            description: "Quickly create lists with pirate-style comprehensions",
            icon: <Anchor className="w-6 h-6" />
          }
        ],
        changes: [
          "Enhanced error messages",
          "New extra math and randomization features",
          "While loops, For Loops, Repeat Loops",
          "Switch Cases implemented",
          "New Try / Catch mechanism",
          "New easter eggs added 👀"
        ]
      },
      {
        version: "1.0.0",
        date: "23 December 2024",
        highlights: [
          {
            title: "Variables & Types",
            description: "Numbers (integers & floats), Strings with double quotes, Booleans (true/false), Lists",
            icon: <Skull className="w-6 h-6" />
          },
          {
            title: "Operators",
            description: "plus, minus, times, divided_by, modulo, power, equals, greater_than, less_than, and, or, not",
            icon: <Ship className="w-6 h-6" />
          },
          {
            title: "Functions",
            description: "Start voyages to make functions!",
            icon: <Anchor className="w-6 h-6" />
          }
        ],
        changes: [
          "Built in functions",
          "Conditional statements",
          "Lists",
          "Debug Tools",
        ]
      }
    ];
    return (
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent animate-pulse" />
          <div className="absolute inset-0  bg-center opacity-20 animate-float" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 blur-2xl opacity-50 animate-pulse" />
              <span className="relative text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-700 animate-gradient bg-300% hover:scale-105 transform transition-all duration-500">
                Captain&apos;s Log: Updates
              </span>
            </h2>
          </div>
  
          {updates.map((update, index) => (
            <div key={index} className="mb-16">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
                
                <div className="relative bg-black/90 backdrop-blur-xl rounded-xl border border-red-900/50 p-8 transform group-hover:[transform:rotateX(2deg)] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative group">
                      <div className="absolute -inset-1  rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500" />
                      <Skull className="relative w-8 h-8 text-red-500 animate-float" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
                        Version {update.version}
                      </h3>
                      <p className="text-gray-400">{update.date}</p>
                    </div>
                  </div>
  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {update.highlights.map((highlight, i) => (
                      <div key={i} className="group/card relative perspective-1000">
                        <div className="absolute -inset-1 rounded-xl blur opacity-25 group-hover/card:opacity-75 transition duration-500" />
                        <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-6 border border-red-900/100 transform group-hover/card:[transform:rotateX(2deg)] transition-all duration-300">
                          <div className="text-red-500 mb-4 transform group-hover/card:scale-110 transition-transform duration-300 animate-float">
                            {highlight.icon}
                          </div>
                          <h4 className="text-lg font-bold text-red-400 mb-2">{highlight.title}</h4>
                          <p className="text-gray-400">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative group/changes">
                    <div className="absolute -inset-1  rounded-xl blur opacity-25 group-hover/changes:opacity-75 transition duration-1000" />
                    <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-6 border border-red-900/50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-red-400">Ship&apos;s Manifest</h4>
                        <div className="flex space-x-2">
                          {[0, 1, 2].map(i => (
                            <div key={i} className={`w-2 h-2 rounded-full animate-pulse delay-${i * 200}`} 
                                 style={{backgroundColor: ['#ff3b30', '#ffcc00', '#34c759'][i]}} />
                          ))}
                        </div>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {update.changes.map((change, i) => (
                          <li key={i} className="flex items-start gap-2 group/item">
                            <div className="relative mt-1">
                              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-25 group-hover/item:opacity-75 transition duration-300" />
                              <Ship className="relative w-4 h-4 text-red-500 transform group-hover/item:rotate-12 transition-transform duration-300" />
                            </div>
                            <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                              {change}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .delay-200 { animation-delay: 200ms; }
          .delay-400 { animation-delay: 400ms; }
        `}</style>
      </div>
    );
};

export default UpdatesSection;