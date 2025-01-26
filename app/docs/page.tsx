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
                New in v1.2
              </h2>
              <span className="animate-pulse bg-red-500/10 px-3 py-1 rounded-full text-red-400 text-sm">
                NEW
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <Languages className="w-5 h-5 mr-2 text-red-500" />
                  Default Parameters & Functions
                </h3>
                <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                  <code>{`# Functions with default values
voyage sail_to(destination, speed be 10):
    bark "Sailing to", destination, 
         "at", speed, "knots!"
end voyage

sail_to sails with "Tortuga"
sail_to sails with "Havana", 15`}</code>
                </pre>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <Filter className="w-5 h-5 mr-2 text-red-500" />
                  List Operations 
                </h3>
                <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                  <code>{`# Map, Filter, Reduce operations
numbers be list of 1, 2, 3, 4, 5
doubled be map sails with numbers, "double"
evens be filter sails with numbers, "is_even"

# New list features
shuffled be shuffle sails with original
weighted be weighted_choice sails with 
  options, weights`}</code>
                </pre>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <Clover className="w-5 h-5 mr-2 text-red-500" />
                  String Operations
                </h3>
                <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                  <code>{`# New string operations
bark shout sails with "ahoy matey!"

# Split strings
treasure_str be "gold,silver,gems"
loot be split_loot sails with 
  treasure_str, ","

# Join strings
crew be list of "Jack", "Anne", "Mary"
bark join_crew sails with crew, " & "`}</code>
                </pre>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <RefreshCw className="w-5 h-5 mr-2 text-red-500" />
                  Import & Modularity
                </h3>
                <pre className="bg-black/50 rounded-md p-4 text-sm mb-4">
                  <code>{`# Import functionality
import map
import treasure_utils

# Use imported functions
find_treasure sails with
chart_course sails with "Tortuga"`}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6 bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <Hash className="w-5 h-5 mr-2 text-red-500" />
                Enhanced Features
              </h3>
              <pre className="bg-black/50 rounded-md p-4 text-sm">
                <code>{`# Fixed parser issues
random_sample sails with crew, 2
random_float sails with 1, 10
flip_coin sails with

# Parentheses support
result be (5 plus 3) times 2

# First mate now inactive by default
revive_first_mate  # To enable

# Fixed plunder loop
plunder each sailor from crew:
    bark "Welcome aboard", sailor
end plunder`}</code>
              </pre>
            </div>
          </div>
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

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Terminal className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Debug & Type System</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# View current variable state
debug_chest

# Type checking and conversion
type_val be type_of sails with treasure
to_int sails with "42"
to_float sails with "3.14"
to_str sails with 123`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Hash className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Advanced Math Operations</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# Basic Math
result be (5 plus 3) times 2
power_val be 2 power 3
sqrt sails with 16
abs sails with -42
round sails with 3.7

# Trigonometry & Complex Math
sin sails with 1
cos sails with 2
tan sails with 3
exp sails with 1
log sails with 2
factorial sails with 5

# Comparisons & Logic
result be x greater_or_equal y
result be x less_or_equal y
result be not (x equals y)
condition be a and b
condition be a or b`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <RefreshCw className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Advanced List Operations</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# Statistical Operations
mean sails with list of 1, 2, 3
median sails with list of 1, 2, 3, 1, 2
sum sails with list of 1, 2, 3, 6

# Pattern Operations
coins be list of 1, 2, 3 where each times 2
big_coins be coins where it greater_than 5

# List Transformations
double_values be map sails with numbers, "double"
even_numbers be filter sails with numbers, "is_even"
total be reduce numbers with result plus it

# Random Operations
shuffled be shuffle sails with crew
sample be random_sample sails with crew, 3
chosen be random_pick sails with options
weighted be weighted_choice sails with 
  options, weights`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Languages className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Error Handling & Flow Control</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# Error Handling
brace for impact:
    bark "Attempting dangerous waters"
if capsized, bark "Error, Capsized!"

# Switch Statements
choose x:
    case 1: bark "one"
    case 2: bark "two"
    default: bark "unknown"
end choose

# Loop Control
while counter be less_than 3:
    bark counter
end while

plunder each coin from treasure_chest:
    bark coin
end plunder

repeat 3 times:
    bark "BOOM!"
end repeat`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Hash className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Random Operations</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# Basic Random
roll_dice sails with 20
flip_coin sails with
random_float sails with 10,20
random_pick sails with crew

# Advanced Random
roll_multiple sails with 3, 6
normal_random sails with 0, 1
random_sample sails with crew, 3`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Languages className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Dialects & String Operations</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <pre className="bg-black/50 rounded-md p-4 text-sm">
              <code>{`# Custom dialects
dialect Caribbean:
    "shout" be "bark"
    "expedition" be "voyage"
end dialect

# String Operations
text be shout sails with "hello"
parts be split_loot sails with "a,b,c", ","
result be join_crew sails with crew, " & "`}</code>
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}