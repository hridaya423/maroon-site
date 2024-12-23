import React from 'react';
import { Terminal, Ship, Compass, Skull, Anchor, Package, BookOpen, Hash, Code } from 'lucide-react';

export default function MaroonDocs() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">

        <div className="text-center mb-16">
          <h1 className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 blur-2xl opacity-50 animate-pulse" />
            <span className="relative text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              Maroon Documentation
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Master the art of pirate programming 🏴‍☠️
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Compass className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Quick Start</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`# Your first Maroon program
treasure be "Ahoy, World!"
bark treasure

# Basic arithmetic
gold be 5
silver be 3
total be gold plus silver
bark total  # Outputs: 8`}
              </code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Variables & Types",
              icon: <Package className="w-8 h-8 text-red-500" />,
              content: [
                "Numbers (integers & floats)",
                "Strings with double quotes",
                "Booleans (true/false)",
                "Lists"
              ]
            },
            {
              title: "Operators",
              icon: <Hash className="w-8 h-8 text-red-500" />,
              content: [
                "plus, minus, times",
                "divided_by, modulo, power",
                "equals, greater_than, less_than",
                "and, or, not"
              ]
            },
            {
              title: "Built-in Functions",
              icon: <Code className="w-8 h-8 text-red-500" />,
              content: [
                "bark (print output)",
                "count_booty (length)",
                "plunder (max value)",
                "abandon (min value)"
              ]
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-center text-white mb-4">
                {feature.title}
              </h3>
              <ul className="text-gray-400 space-y-2">
                {feature.content.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Skull className="w-4 h-4 mr-2 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Anchor className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Functions</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Function Definition</h4>
                <pre className="bg-black/50 rounded-md p-4 text-sm">
                  <code>{`voyage calculate_treasure(gold, silver):
    total be gold plus silver
    bark "Total treasure:" total
end voyage

calculate_treasure sails with 100, 50`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Ship className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Control Flow</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Conditional Statements</h4>
                <pre className="bg-black/50 rounded-md p-4 text-sm">
                  <code>{`treasure be 100

if treasure be greater_than 50, then
    bark "Rich pirate!"
else
    bark "Keep searching!"

# Comparison operators:
# equals, greater_than, less_than
# greater_or_equal, less_or_equal`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Working with Lists</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# Create a list
loot be list of "gold", "silver", "gems"

# Add to list
add "diamond" to loot

# Access elements
first_item be loot[0]

# List operations
size be count_booty sails with loot
best be plunder sails with loot
worst be abandon sails with loot`}</code>
            </pre>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <Terminal className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Debug Tools</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# View current variable state
debug_chest

# Type checking
type_val be type_of sails with treasure
bark type_val  # Outputs: number`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}