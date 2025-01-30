/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Ship, Terminal } from 'lucide-react';

const DEFAULT_CODE = `# Declare your treasure
treasure be 42

# Set sail on a new voyage
voyage greet(name):
    bark "Ahoy," name
    bark "Welcome aboard!"
end voyage

# Start the adventure
greet sails with "Captain"`;

const MAROON_MODULES = [
  'exceptions.py',
  'types.py',
  'functions.py',
  'eastereggs.py',
  'dialects.py',
  'firstmate.py',
  'patterns.py',
  'loops.py',
  'switchcase.py',
  'trycatch.py',
  'interpreter.py'
];

declare global {
  interface Window {
    loadPyodide: any;
  }
}

export default function MaroonPlayground() {
  const [output, setOutput] = useState<string[]>([]);
  const [code, setCode] = useState(DEFAULT_CODE);
  const [pyodide, setPyodide] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const initializePyodide = async () => {
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        })
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
          stdout: (msg: string) => setOutput(prev => [...prev, msg]),
          stderr: (msg: string) => setOutput(prev => [...prev, `☠️ ${msg}`])
        });
        pyodide.FS.mkdir('/maroon');
        pyodide.FS.writeFile('/maroon/__init__.py', '');
        await pyodide.runPythonAsync(`
import sys
sys.path.insert(0, "/maroon")
        `)
        await pyodide.loadPackage(['micropip']);
        const micropip = pyodide.pyimport("micropip");
        await micropip.install('regex')
        await Promise.all(MAROON_MODULES.map(async (module) => {
          const response = await fetch(
            `https://raw.githubusercontent.com/hridaya423/maroon/master/src/${module}`
          );
          if (!response.ok) throw new Error(`Failed to fetch ${module}`);
          const content = await response.text();
          pyodide.FS.writeFile(`/maroon/${module}`, content);
          setOutput(prev => [...prev, `✓ Loaded ${module}`]);
        }));

        await pyodide.runPythonAsync(`
import importlib
import sys

if 'maroon' not in sys.modules:
    spec = importlib.util.spec_from_file_location("maroon", "/maroon/__init__.py")
    maroon = importlib.util.module_from_spec(spec)
    sys.modules["maroon"] = maroon
    spec.loader.exec_module(maroon)

for mod in ${JSON.stringify(MAROON_MODULES)}:
    name = mod.removesuffix('.py')
    full_name = f"maroon.{name}"
    if full_name not in sys.modules:
        spec = importlib.util.spec_from_file_location(full_name, f"/maroon/{mod}")
        module = importlib.util.module_from_spec(spec)
        sys.modules[full_name] = module
        spec.loader.exec_module(module)
        `);
        await pyodide.runPythonAsync(`
from maroon.interpreter import PirateInterpreter
interpreter = PirateInterpreter()
        `);

        setPyodide(pyodide);
        setOutput([]);
      } catch (err) {
        setOutput(prev => [...prev, `☠️ Critical Error: ${err}`]);
      } finally {
        setLoading(false);
      }
    }
    initializePyodide();
  }, []);
  const executeCode = async () => {
    if (!pyodide || loading) return;
    setOutput([]);
    try {
      pyodide.FS.writeFile('/input.maroon', code);
      await pyodide.runPythonAsync(`
  try:
      interpreter.run_script('/input.maroon')
  except Exception as e:
      print(f"☠️ Runtime Error: {str(e)}")
      `);
    } catch (err) {
      setOutput(prev => [...prev, `☠️ Execution Failed: ${err}`]);
    } finally {
      pyodide.FS.unlink('/input.maroon');
    }
  }
  const setupMonaco = (monaco: any) => {
    monaco.languages.register({ id: 'maroon' });
    
    monaco.languages.setMonarchTokensProvider('maroon', {
      keywords: [
        'voyage', 'end', 'be', 'bark', 'if', 'then', 'else',
        'add', 'to', 'list', 'of', 'modulo', 'times', 'divided_by',
        'plus', 'minus', 'power', 'and', 'or', 'not', 'true', 'false'
      ],
      operators: [
        'equals', 'greater_than', 'less_than', 'greater_or_equal', 'less_or_equal'
      ],
      builtinFunctions: [
        'count_booty', 'plunder', 'abandon', 'type_of', 'debug_chest',
        'sqrt', 'abs', 'round', 'roll_dice', 'random_float', 'random_pick',
        'flip_coin', 'random_sample', 'normal_random', 'log', 'roll_multiple',
        'factorial', 'sin', 'cos', 'tan', 'exp', 'mean', 'median', 'sum',
        'map', 'filter', 'reduce', 'shuffle', 'weighted_choice', 'shout',
        'split_loot', 'join_crew'
      ],
      tokenizer: {
        root: [
          [/#.*$/, 'comment'],
          [/"([^"\\]|\\.)*"/, 'string'],
          [/\d+\.\d+/, 'number.float'],
          [/\d+/, 'number'],
          [
            /[a-zA-Z_][a-zA-Z0-9_]*/,
            {
              cases: {
                '@keywords': 'keyword',
                '@operators': 'operator',
                '@builtinFunctions': 'builtin',
                'sails|with': 'keyword.control'
              }
            }
          ],
          [/voyage\s+([a-zA-Z_][a-zA-Z0-9_]*)/, ['keyword', 'function']],
          [/(\w+)\s+be/, ['variable', 'keyword']],
          [/[{}()[\]]/, '@brackets'],
          [/\s+/, 'white']
        ]
      }
    });

    monaco.languages.registerCompletionItemProvider('maroon', {
      provideCompletionItems: (model: any, position: any) => {
        const suggestions = [
          ...monaco.languages.getLanguages().find((lang: any) => lang.id === 'maroon')?.keywords.map((k: string) => ({
            label: k,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: k
          })) || [],
          ...monaco.languages.getLanguages().find((lang: any) => lang.id === 'maroon')?.builtinFunctions.map((f: string) => ({
            label: f,
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: f
          })) || []
        ];
        return { suggestions };
      }
    });
    monaco.editor.defineTheme('maroon', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '#ef4444', fontStyle: 'bold' },
        { token: 'operator', foreground: '#f59e0b' },
        { token: 'builtin', foreground: '#22c55e' },
        { token: 'function', foreground: '#3b82f6' },
        { token: 'comment', foreground: '#64748b' },
        { token: 'string', foreground: '#f59e0b' },
        { token: 'number', foreground: '#8b5cf6' },
        { token: 'variable', foreground: '#e879f9' },
        { token: 'keyword.control', foreground: '#f43f5e' }
      ],
      colors: {
        'editor.background': '#000000',
        'editor.lineHighlightBackground': '#1a1a1a',
      }
    });
  };
  return (
<div className="relative group perspective-1000 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse" />
      
      <div className="relative bg-black/90 backdrop-blur-xl rounded-xl border border-red-900/50 transform transition-all duration-300">
        <div className="p-4 sm:p-6 border-b border-red-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
            Maroon Playground
          </h2>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <button 
              onClick={executeCode}
              disabled={loading}
              className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative flex items-center justify-center space-x-2">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 animate-float" />
                <span className="font-semibold text-sm sm:text-base">
                  {loading ? 'Initializing...' : (
                    <>
                      <span className="hidden sm:inline">Run Code</span>
                      <span className="sm:hidden">Run</span>
                    </>
                  )}
                </span>
              </span>
            </button>
            <button 
              onClick={() => setOutput([])}
              className="px-3 sm:px-4 py-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900/70 transition-colors duration-200 flex items-center text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <span className="hidden sm:inline">Clear Output</span>
              <span className="sm:hidden">Clear</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 p-0.5 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-b-xl">
          <div className="relative bg-black/95 rounded-t-xl md:rounded-tl-xl md:rounded-tr-none p-4 h-[300px] sm:h-[400px] md:h-[500px]">
            <Editor
              height="100%"
              defaultLanguage="maroon"
              value={code}
              onChange={(value) => setCode(value || '')}
              theme="maroon"
              options={{ 
                minimap: { enabled: false },
                fontSize: 13,
                scrollBeyondLastLine: false,
                glyphMargin: false,
                lineNumbers: 'on',
                renderLineHighlight: 'gutter',
                automaticLayout: true,
                autoClosingBrackets: 'always',
                autoIndent: 'full',
                formatOnPaste: true,
                formatOnType: true,
                suggestOnTriggerCharacter: true,
              }}
              beforeMount={setupMonaco}
            />
          </div>  
          <div className="bg-black/95 rounded-b-xl md:rounded-bl-none md:rounded-br-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse delay-${i * 200}`} 
                       style={{backgroundColor: ['#ff3b30', '#ffcc00', '#34c759'][i]}} />
                ))}
              </div>
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-float" />
            </div>
            <div className="font-mono space-y-2 overflow-auto h-[250px] sm:h-[350px] md:h-[420px] text-xs sm:text-sm">
              {output.map((line, i) => (
                <div 
                  key={i} 
                  className={`${line.startsWith('☠️') ? 'text-red-400' : 'text-green-400'}`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}