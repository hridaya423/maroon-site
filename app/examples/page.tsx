import React from 'react';
import { Ship, Compass, Anchor, Terminal, Sword, Map } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdvancedExamples() {
  const newexamples = [
    {
      "title": "Legendary Treasure Hunt",
      "icon": Map,
      "description": "Epic treasure hunting with dynamic weather, crew management, and advanced game mechanics",
      "code": `# Advanced Treasure Hunt
locations be list of 
    {"name": "Skull Cave", "difficulty": 3, "guards": 5},
    {"name": "Shadow Isle", "difficulty": 4, "guards": 8},
    {"name": "Dragon's Lair", "difficulty": 5, "guards": 10}

crew be list of 
    {"name": "Jack", "strength": 8, "stealth": 7},
    {"name": "Anne", "strength": 7, "stealth": 9}

voyage attempt_heist(location, crew_members):
    brace for impact:
        total_strength be reduce crew_members with result plus it["strength"]
        total_stealth be reduce crew_members with result plus it["stealth"]
        
        choose location["difficulty"]:
            case 3: required_strength be 15
            case 4: required_strength be 20
            case 5: required_strength be 25
            default: throw "Unknown difficulty!"
        end choose
        
        if total_strength be less_than required_strength:
            throw "Crew too weak for this heist!"
        end voyage
        
        success_chance be total_stealth divided_by (location["guards"] times 2)
        roll be random sails with 1, 100
        
        if roll be less_than success_chance:
            bark "Heist successful! Treasure acquired!"
            return true
        else
            bark "Guards spotted us! Retreat!"
            return false
        end voyage
        
    if capsized:
        bark "Heist failed:" capsized
        return false
end voyage

# Game loop
active_location be locations[0]
selected_crew be crew where it["stealth"] greater_than 6

bark "=== LEGENDARY TREASURE HUNT ==="
bark "Location:" active_location["name"]
bark "Difficulty:" active_location["difficulty"]
bark "Guards:" active_location["guards"]

repeat 3 times:
    bark "\nAttempt" it plus 1
    attempt_heist sails with active_location, selected_crew`
    },
    {
      "title": "Naval Battle Royale",
      "icon": Sword,
      "description": "Strategic naval combat with weather effects and crew management",
      "code": `# Naval Battle Royale
ships be list of 
    {"name": "Black Pearl", "health": 100, "cannons": 12, "speed": 8},
    {"name": "Flying Dutchman", "health": 120, "cannons": 10, "speed": 7},
    {"name": "Queen Anne", "health": 90, "cannons": 14, "speed": 9}

weather_effects be list of 
    {"type": "storm", "damage": 10, "speed_penalty": 2},
    {"type": "fog", "accuracy_penalty": 0.5, "speed_penalty": 1},
    {"type": "clear", "bonus": 1.2}

voyage naval_battle(attacker, defender, weather):
    brace for impact:
        # Calculate battle conditions
        base_accuracy be 0.7
        base_damage be attacker["cannons"] times 5
        
        choose weather["type"]:
            case "storm": 
                accuracy be base_accuracy minus 0.2
                damage_modifier be 0.8
            case "fog":
                accuracy be base_accuracy minus 0.3
                damage_modifier be 0.9
            case "clear":
                accuracy be base_accuracy plus 0.1
                damage_modifier be 1.2
            default: throw "Invalid weather condition!"
        end choose
        
        # Battle loop
        while defender["health"] greater_than 0:
            # Calculate hit chance
            hit_roll be random sails with 0, 100
            if hit_roll divided_by 100 be less_than accuracy:
                damage be base_damage times damage_modifier
                defender["health"] be defender["health"] minus damage
                bark attacker["name"] "hits for" damage "damage!"
            else:
                bark attacker["name"] "missed!"
            end voyage
            
            if defender["health"] be less_than 0:
                bark defender["name"] "has been defeated!"
                break
            end voyage
        end while
        
    if capsized:
        bark "Battle error:" capsized
end voyage

# Game initialization
active_weather be weather_effects[random sails with 0, 2]
player_ship be ships[0]
enemy_ship be ships[1]

bark "=== NAVAL BATTLE ROYALE ==="
bark "Weather:" active_weather["type"]
bark player_ship["name"] "VS" enemy_ship["name"]

naval_battle sails with player_ship, enemy_ship, active_weather`
    },
    {
      "title": "Trading Empire",
      "icon": Anchor,
      "description": "Complex trading simulation with market dynamics and port management",
      "code": `# Trading Empire Simulator
ports be list of 
    {"name": "Tortuga", "wealth": 1000, "prices": {"rum": 10, "silk": 50, "spices": 30}},
    {"name": "Nassau", "wealth": 2000, "prices": {"rum": 15, "silk": 45, "spices": 35}},
    {"name": "Havana", "wealth": 3000, "prices": {"rum": 20, "silk": 40, "spices": 40}}

voyage simulate_market():
    # Market fluctuations based on events
    events be list of "storm", "war", "festival", "drought"
    current_event be events[random sails with 0, 3]
    
    choose current_event:
        case "storm": price_modifier be 1.5
        case "war": price_modifier be 2.0
        case "festival": price_modifier be 0.7
        case "drought": price_modifier be 1.3
        default: price_modifier be 1.0
    end choose
    
    return price_modifier
end voyage

voyage trade_goods(port, goods, quantity):
    brace for impact:
        market_modifier be simulate_market()
        
        current_price be port["prices"][goods] times market_modifier
        total_cost be current_price times quantity
        
        if total_cost be greater_than port["wealth"]:
            throw "Port cannot afford this trade!"
        end voyage
        
        # Calculate profit margins
        profit_margin be (current_price minus base_price) divided_by base_price times 100
        
        if profit_margin be greater_than 50:
            bark "Excellent trade! Profit margin:" profit_margin "%"
        else:
            bark "Standard trade. Profit margin:" profit_margin "%"
        end voyage
        
        port["wealth"] be port["wealth"] minus total_cost
        return total_cost
        
    if capsized:
        bark "Trade failed:" capsized
        return 0
end voyage

# Trading simulation
active_port be ports[0]
goods_list be list of "rum", "silk", "spices"

bark "=== TRADING EMPIRE ==="
bark "Port:" active_port["name"]
bark "Available goods:" goods_list

plunder each item from goods_list:
    trade_goods sails with active_port, item, random sails with 1, 10`
    },
    {
      "title": "Pirate Fleet Commander",
      "icon": Ship,
      "description": "Strategic fleet management with dynamic missions and crew assignments",
      "code": `# Fleet Commander System
fleet be list of 
    {"name": "Shadow", "type": "scout", "crew": 20, "combat": 6, "speed": 9},
    {"name": "Thunder", "type": "warship", "crew": 50, "combat": 9, "speed": 6},
    {"name": "Ghost", "type": "merchant", "crew": 30, "combat": 4, "speed": 7}

missions be list of 
    {"type": "raid", "difficulty": 8, "reward": 1000, "required_type": "warship"},
    {"type": "spy", "difficulty": 7, "reward": 800, "required_type": "scout"},
    {"type": "trade", "difficulty": 5, "reward": 600, "required_type": "merchant"}

voyage assign_mission(ship, mission):
    brace for impact:
        if ship["type"] not_equals mission["required_type"]:
            throw "Incorrect ship type for mission!"
        end voyage
        
        success_chance be (ship["combat"] plus ship["speed"]) divided_by 2
        roll be random sails with 1, 10
        
        if roll be less_than success_chance:
            # Mission success calculations
            bonus_reward be mission["reward"] times (roll divided_by 10)
            
            choose mission["type"]:
                case "raid": 
                    reputation_gain be 10
                    bark "Successful raid! Enemy stronghold captured!"
                case "spy":
                    reputation_gain be 5
                    bark "Intelligence gathered successfully!"
                case "trade":
                    reputation_gain be 3
                    bark "Trade route established!"
                default: throw "Unknown mission type!"
            end choose
            
            return {"success": true, "reward": bonus_reward, "reputation": reputation_gain}
        else:
            bark "Mission failed! Ship returning to port..."
            return {"success": false, "reward": 0, "reputation": -2}
        end voyage
        
    if capsized:
        bark "Mission aborted:" capsized
        return {"success": false, "reward": 0, "reputation": -5}
end voyage

# Fleet management simulation
bark "=== PIRATE FLEET COMMANDER ==="
reputation be 0

repeat 5 times:
    bark "\nDay" it plus 1
    available_ship be fleet[random sails with 0, 2]
    current_mission be missions[random sails with 0, 2]
    
    bark "Ship:" available_ship["name"]
    bark "Mission:" current_mission["type"]
    
    result be assign_mission sails with available_ship, current_mission
    reputation be reputation plus result["reputation"]
    
    bark "Current reputation:" reputation`
    },
  ]
  const examples = [
    
    {
      title: "Treasure Hunt Game",
      icon: Map,
      description: "A text-based adventure game showcasing conditionals and list manipulation.",
      code: `# Treasure Hunt Game
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
search_location sails with "beach"`
    },
    {
      title: "Crew Management System",
      icon: Ship,
      description: "Advanced list operations and function composition.",
      code: `# Crew Management System
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
end voyage`
    },
    {
      title: "Ship Battle System",
      icon: Sword,
      description: "Complex battle mechanics using arithmetic and conditionals.",
      code: `# Ship Battle System
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
battle_round sails with my_ship, enemy_ship`
    },
    {
      title: "Port Trading System",
      icon: Anchor,
      description: "Economic simulation with price calculations and inventory management.",
      code: `# Port Trading System
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
trade_goods sails with "spices", 5`
    },
    {
      title: "Weather Prediction System",
      icon: Compass,
      description: "Advanced weather calculations using mathematical operations.",
      code: `# Weather Prediction System
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
predict_weather sails with wind, waves, cloud_cover`
    },
    {
      title: "Navigation Calculator",
      icon: Terminal,
      description: "Complex navigation calculations with multiple functions.",
      code: `# Navigation Calculator
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
estimate_travel_time sails with distance, speed, weather`
    }
  ];

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
        <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-6  mx-auto my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
          New Examples: Update v1.1
        </h2>
        <span className="animate-pulse bg-red-500/10 px-3 py-1 rounded-full text-red-400 text-sm">
          NEW
        </span>
      </div>
      
      <div className="grid gap-4">
      <Accordion type="single" collapsible className="space-y-4">
          {newexamples.map((example, index) => {
            const Icon = example.icon;
            return (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 mr-2 text-red-500" />
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-white">{example.title}</h2>
                      <p className="text-sm text-gray-400 mt-1">{example.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{example.code}</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>



        <Accordion type="single" collapsible className="space-y-4">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 mr-2 text-red-500" />
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-white">{example.title}</h2>
                      <p className="text-sm text-gray-400 mt-1">{example.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <pre className="bg-black/50 rounded-md p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{example.code}</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
