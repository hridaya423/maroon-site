import React from 'react';
import { Terminal, Ship, Compass, Skull, Anchor, Package, BookOpen, Hash, Code, Clover, Languages, Filter, RefreshCw } from 'lucide-react';

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
        <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-6 mx-auto mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
              New in v1.1
            </h2>
            <span className="animate-pulse bg-red-500/10 px-3 py-1 rounded-full text-red-400 text-sm">
              NEW
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <RefreshCw className="w-5 h-5 mr-2 text-red-500" />
                Loop Enhancements
              </h3>
              <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                <code>{`# While loops with comparisons
while counter be less_than 3 bark counter

# Plunder (forEach) loops
plunder each coin from treasure_chest:
    bark coin
end plunder

# Simple repeat loops
repeat 3 times bark "BOOM!"`}</code>
              </pre>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <Clover className="w-5 h-5 mr-2 text-red-500" />
                Error Handling
              </h3>
              <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                <code>{`brace for impact:
    bark "Attempting dangerous waters"
if capsized, bark "Error, Capsized!"`}</code>
              </pre>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <Filter className="w-5 h-5 mr-2 text-red-500" />
                Advanced List Operations
              </h3>
              <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                <code>{`# Map with inline operations
coins be list of 1, 2, 3 where each times 2

# Filter lists
big_coins be coins where it greater_than 5

# Reduce operation
total be reduce coins with result plus it`}</code>
              </pre>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <Languages className="w-5 h-5 mr-2 text-red-500" />
                Dialects & String Operations
              </h3>
              <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                <code>{`# Custom dialects
dialect Caribbean:
    "shout" be "bark"
    "expedition" be "voyage"
end dialect

# String operations
greeting be "hello world" upper
words be greeting split " "
sentence be words join ", "`}</code>
              </pre>
            </div>
          </div>

           <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <RefreshCw className="w-5 h-5 mr-2 text-red-500" />
                Math & Randomization
              </h3>
              <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                <code>{`bark roll_dice sails with 20
bark random_float sails with
bark random_float sails with 10, 20

crew be list of 1, 2, 3, 4, 5
bark random_pick sails with crew
bark random_sample sails with crew, 3
bark normal_random sails with

# Math operations 
x be 5
bark factorial sails with x

angle be 3.14159
bark sin sails with angle
bark cos sails with angle
bark tan sails with angle

bark exp sails with 2
bark log sails with 10
bark log sails with 8, 2

# Statistical operations
numbers be list of 2, 4, 6, 8, 10
bark mean sails with numbers
bark median sails with numbers
bark sum sails with numbers

# Gaming functions
bark flip_coin sails with
bark roll_multiple sails with 3, 6
bark roll_multiple sails with 2, 20`}</code>
              </pre>
            </div>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <h3 className="flex items-center text-lg font-semibold mb-4">
              <Hash className="w-5 h-5 mr-2 text-red-500" />
              Switch Statements
            </h3>
            <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
              <code>{`choose x:
    case 1: bark "one"
    case 2: bark "two"
    default: bark "unknown"
end choose`}</code>
            </pre>
          </div>
        </div>
      <div className="grid gap-4">
        </div>
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
