/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';
import { Terminal, Play, Trash2, Copy, Download, Book } from 'lucide-react';

const DEFAULT_CODE = `# Welcome to the Maroon Playground!
treasure be "Ahoy, World!"
bark treasure

# Let's do some pirate math
gold be 50
silver be 30
total_booty be gold plus silver
bark "Total treasure:" total_booty

# Create a crew list
crew be list of "Jack", "Anne", "Mary"
bark "Crew members:" crew
add "William" to crew
bark "New crew:" crew

# Try a simple function
voyage greet_pirate(name):
    bark "Welcome aboard," name
end voyage

greet_pirate sails with "Captain"`;

export default function MaroonPlayground() {
//   const [code, setCode] = useState(DEFAULT_CODE);
//   const [output, setOutput] = useState('');
//   const [isRunning, setIsRunning] = useState(false);
//   const simulateMaroonExecution = (code) => {
//     const lines = code.split('\n');
//     let output = [];
//     let variables = {};

//     try {
//       lines.forEach(line => {
//         line = line.trim();
//         if (!line || line.startsWith('#')) return;

//         const barkMatch = line.match(/^bark\s+(.+)$/);
//         if (barkMatch) {
//           let value = barkMatch[1];
//           if (value.startsWith('"') && value.endsWith('"')) {
//             output.push(value.slice(1, -1));
//           } else {
//             output.push(`${value}`);
//           }
//           return;
//         }

//         const varMatch = line.match(/^(\w+)\s+be\s+(.+)$/);
//         if (varMatch) {
//           const [_, varName, value] = varMatch;
//           variables[varName] = value;
//           return;
//         }
//         if (line.startsWith('voyage')) {
//           output.push('Function defined');
//           return;
//         }
//         if (line.includes('sails with')) {
//           output.push('Function called');
//           return;
//         }
//       });

//       return output.join('\n');
//     } catch (error) {
//       return `Error: ${error.message}`;
//     }
//   };

//   const handleRun = () => {
//     setIsRunning(true);
//     setOutput('');

//     setTimeout(() => {
//       const result = simulateMaroonExecution(code);
//       setOutput(result);
//       setIsRunning(false);
//     }, 500);
//   };

//   const handleClear = () => {
//     setCode('');
//     setOutput('');
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([code], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'code.maroon';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

  return (
    <div className="min-h-screen bg-black text-white  pt-32 pb-24 px-4">
        WIP
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 blur-2xl opacity-50 animate-pulse" />
            <span className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              Maroon Playground
            </span>
          </h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-red-900/50">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>{isRunning ? 'Running...' : 'Run'}</span>
              </button>
              <button
                onClick={handleClear}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 h-[600px]">
            <div className="border-r border-red-900/50">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 bg-transparent font-mono text-sm text-gray-300 resize-none focus:outline-none"
                spellCheck="false"
              />
            </div>
            
            <div className="bg-black/30">
              <div className="flex items-center p-2 border-b border-red-900/50">
                <Terminal className="w-4 h-4 mr-2 text-red-500" />
                <span className="text-sm text-gray-400">Output</span>
              </div>
              <pre className="p-4 font-mono text-sm text-gray-300 h-[calc(100%-40px)] overflow-auto">
                {output || 'Run your code to see the output here...'}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-900/50 backdrop-blur-xl rounded-lg border border-red-900/50 p-6">
          <div className="flex items-center mb-4">
            <Book className="w-5 h-5 mr-2 text-red-500" />
            <h2 className="text-lg font-semibold text-white">Quick Reference</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <h3 className="font-semibold text-red-500 mb-2">Variables</h3>
              <code>name be value</code>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-2">Print</h3>
              <code>bark value</code>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-2">Functions</h3>
              <code>voyage name(params):</code>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-2">Lists</h3>
              <code>list of item1, item2</code>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-2">Operators</h3>
              <code>plus, minus, times</code>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-2">Function Call</h3>
              <code>name sails with args</code>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
