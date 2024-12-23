import React from 'react';
import { Ship, Compass, Anchor, Terminal, Sword, Map} from 'lucide-react';

export default function AdvancedExamples() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 blur-2xl opacity-50 animate-pulse" />
            <span className="relative text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              Advanced Maroon Examples
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Master-level code patterns for seasoned pirates 🏴‍☠️
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Map className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Treasure Hunt Game</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <p className="text-gray-400 mb-4">A text-based adventure game showcasing conditionals and list manipulation.</p>
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`# Treasure Hunt Game
map be list of "beach", "cave", "mountain", "forest"
treasure_location be "cave"
attempts be 3

voyage search_location(location):
    if location be equals treasure_location, then
        bark "Ye found the treasure! Victory!"
    else
        remaining be attempts minus 1
        if remaining be equals 0, then
            bark "No more attempts! Game over!"
        else
            bark "Wrong location! Ye have" remaining "attempts left"
        end voyage
end voyage

# Game loop implementation
bark "Welcome to Treasure Hunt!"
bark "Available locations:" map
search_location sails with "beach"`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Ship className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Crew Management System</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <p className="text-gray-400 mb-4">Advanced list operations and function composition.</p>
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`# Crew Management System
crew be list of "Jack", "Anne", "Mary", "William"
skills be list of "navigator", "gunner", "cook", "carpenter"

voyage assign_role(pirate, role):
    bark pirate "be now the" role
end voyage

voyage promote_pirate(pirate):
    current_role be skills[0]
    new_role be skills[1]
    bark pirate "promoted from" current_role "to" new_role
end voyage

# Advanced crew operations
voyage manage_crew():
    for crew_member in crew:
        if crew_member be equals "Jack", then
            assign_role sails with crew_member, "captain"
        else
            assign_role sails with crew_member, "crew"
end voyage`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Sword className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Ship Battle System</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <p className="text-gray-400 mb-4">Complex battle mechanics using arithmetic and conditionals.</p>
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`# Ship Battle System
voyage calculate_damage(cannons, distance):
    base_damage be cannons times 10
    range_modifier be 100 divided_by distance
    total_damage be base_damage times range_modifier
    return total_damage
end voyage

voyage battle_round(attacker_ship, defender_ship):
    attacker_cannons be 12
    battle_distance be 50
    
    damage be calculate_damage sails with attacker_cannons, battle_distance
    
    if damage be greater_than 100, then
        bark "Critical hit!"
        damage be damage times 1.5
    else
        bark "Normal hit"
    end voyage
    
    bark attacker_ship "deals" damage "damage to" defender_ship
end voyage

# Initialize battle
my_ship be "Black Pearl"
enemy_ship be "Royal Fortune"
battle_round sails with my_ship, enemy_ship`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Anchor className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Port Trading System</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <p className="text-gray-400 mb-4">Economic simulation with price calculations and inventory management.</p>
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`# Port Trading System
inventory be list of "rum", "spices", "silk"
prices be list of 10, 50, 100
gold be 1000

voyage calculate_profit(item, quantity, buying_price, selling_price):
    cost be buying_price times quantity
    revenue be selling_price times quantity
    profit be revenue minus cost
    return profit
end voyage

voyage trade_goods(item, quantity):
    item_index be 0  # Find item index in inventory
    item_price be prices[item_index]
    
    if gold be greater_than item_price times quantity, then
        gold be gold minus item_price times quantity
        bark "Traded" quantity "units of" item
        bark "Remaining gold:" gold
    else
        bark "Not enough gold!"
    end voyage

# Execute trade
trade_goods sails with "spices", 5`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Compass className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Weather Prediction System</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <p className="text-gray-400 mb-4">Advanced weather calculations using mathematical operations.</p>
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`# Weather Prediction System
voyage predict_weather(wind_speed, wave_height, clouds):
    danger_score be wind_speed plus wave_height times 2
    
    if clouds be greater_than 80, then
        danger_score be danger_score plus 20
    end voyage
    
    if danger_score be greater_than 50, then
        bark "Storm warning! Danger score:" danger_score
    else
        if danger_score be greater_than 30, then
            bark "Rough seas ahead. Danger score:" danger_score
        else
            bark "Clear sailing! Danger score:" danger_score
        end voyage
    end voyage
    
    return danger_score
end voyage

# Test weather system
wind be 25
waves be 10
cloud_cover be 90
predict_weather sails with wind, waves, cloud_cover`}</code>
            </pre>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <Terminal className="w-6 h-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Navigation Calculator</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
            <p className="text-gray-400 mb-4">Complex navigation calculations with multiple functions.</p>
            <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`# Navigation Calculator
voyage calculate_distance(start_x, start_y, end_x, end_y):
    x_diff be end_x minus start_x
    y_diff be end_y minus start_y
    
    # Using Pythagorean theorem
    distance be sqrt sails with (x_diff times x_diff plus y_diff times y_diff)
    return distance
end voyage

voyage estimate_travel_time(distance, speed, weather_factor):
    base_time be distance divided_by speed
    adjusted_time be base_time times weather_factor
    
    bark "Estimated travel time:" adjusted_time "hours"
    
    if adjusted_time be greater_than 48, then
        bark "Warning: Long journey ahead!"
    end voyage
    
    return adjusted_time
end voyage

# Calculate route
start_x be 0
start_y be 0
end_x be 100
end_y be 150

distance be calculate_distance sails with start_x, start_y, end_x, end_y
bark "Distance to destination:" distance "nautical miles"

speed be 10
weather be 1.5
estimate_travel_time sails with distance, speed, weather`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}