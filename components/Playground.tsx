/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { Ship, Terminal } from 'lucide-react';

const DEFAULT_CODE = `bark "Ahoy matey!"`;

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
  const [showWelcome, setShowWelcome] = useState(true);
  const [history, setHistory] = useState<string[]>([DEFAULT_CODE]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const moduleLoader = useCallback(async (pyodideInstance: any, signal: AbortSignal) => {
    const responses = await Promise.all(
      MAROON_MODULES.map(module => 
        fetch(`https://raw.githubusercontent.com/hridaya423/maroon/master/src/${module}`, { signal })
          .then(r => r.text())
          .then(content => ({ module, content }))
      )
    );

    responses.forEach(({ module, content }) => {
      pyodideInstance.FS.writeFile(`/maroon/${module}`, content);
    });
  }, []);

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
  
    const initializePyodide = async () => {
      try {
        if (!window.loadPyodide) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }
  
        const pyodideInstance = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
          stdout: (msg: string) => setOutput(prev => [...prev, msg]),
          stderr: (msg: string) => setOutput(prev => [...prev, `☠️ ${msg}`])
        });
        pyodideInstance.FS.mkdir('/maroon');
        pyodideInstance.FS.writeFile('/maroon/__init__.py', '');
        await Promise.all([
          pyodideInstance.loadPackage(['regex']),
          moduleLoader(pyodideInstance, abortController.signal)
        ]);
        await pyodideInstance.runPythonAsync(`
  import sys
  import importlib.util
  sys.path.insert(0, "/maroon")
  spec = importlib.util.spec_from_file_location("maroon", "/maroon/__init__.py")
  maroon = importlib.util.module_from_spec(spec)
  sys.modules["maroon"] = maroon
  spec.loader.exec_module(maroon)
  ${MAROON_MODULES.map(module => {
    const name = module.replace('.py', '');
    return `
  spec_${name} = importlib.util.spec_from_file_location(
      "maroon.${name}",
      "/maroon/${module}"
  )
  mod_${name} = importlib.util.module_from_spec(spec_${name})
  sys.modules["maroon.${name}"] = mod_${name}
  spec_${name}.loader.exec_module(mod_${name})`;
  }).join('\n')}
  from maroon.interpreter import PirateInterpreter
  interpreter = PirateInterpreter()
        `);
  
        if (isMounted) {
          setPyodide(pyodideInstance);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted && err instanceof Error && err.name !== 'AbortError') {
          setOutput(prev => [
            ...prev,
            `☠️ ${err instanceof Error ? err.message : 'Initialization failed'}`,
            '💡 Ensure stable network connection and try refreshing'
          ]);
          setLoading(false);
        }
      }
    }
    initializePyodide();
    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [moduleLoader]);
  const executeCode = async () => {
    if (!pyodide || loading) return;
    setShowWelcome(false);
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
        'plus', 'minus', 'power', 'and', 'or', 'not', 'true', 'false',
        'while', 'plunder', 'each', 'from', 'repeat', 'times', 'choose',
        'case', 'default', 'brace', 'impact', 'dialect', 'import', 'return'
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
        'split_loot', 'join_crew', 'check_type', 'assert_type', 'is_list_of_type'
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
                'sails with|with|each|from|times|choose|case|default|impact': 'keyword.control'
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
        const snippets = [
          {
            label: 'voyage',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
              'voyage ${1:name}:',
              '    ${2:bark "Hello"}',
              'end voyage'
            ].join('\n'),
            documentation: 'Create a new function',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'function-call',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: '${1:func} sails with ${2:args}',
            documentation: 'Call a function',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'list',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'list of ${1:items}',
            documentation: 'Create a list'
          }
        ];
  
        const keywords = [
          'voyage', 'end', 'be', 'bark', 'if', 'then', 'else',
          'add', 'to', 'list', 'of', 'modulo', 'times', 'divided_by',
          'plus', 'minus', 'power', 'and', 'or', 'not', 'true', 'false'
        ].map(k => ({
          label: k,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: k
        }));
  
        const functions = [
          'count_booty', 'plunder', 'abandon', 'type_of', 'debug_chest',
          'sqrt', 'abs', 'round', 'roll_dice', 'random_float', 'random_pick',
          'flip_coin', 'random_sample', 'normal_random', 'log', 'roll_multiple',
          'factorial', 'sin', 'cos', 'tan', 'exp', 'mean', 'median', 'sum',
          'map', 'filter', 'reduce', 'shuffle', 'weighted_choice', 'shout',
          'split_loot', 'join_crew'
        ].map(f => ({
          label: f,
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: f
        }));
  
        return {
          suggestions: [...snippets, ...keywords, ...functions]
        };
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

  const clearOutput = useCallback(() => setOutput([]), []);

  const handleUndo = () => {
    setHistoryIndex(prev => {
      const newIndex = Math.max(prev - 1, 0);
      setCode(history[newIndex]);
      return newIndex;
    });
  };
  
  const handleRedo = () => {
    setHistoryIndex(prev => {
      const newIndex = Math.min(prev + 1, history.length - 1);
      setCode(history[newIndex]);
      return newIndex;
    });
  };
  
  const handleCodeChange = (value: string = '') => {
    setCode(value);
    setHistory(prev => [...prev.slice(0, historyIndex + 1), value]);
    setHistoryIndex(prev => prev + 1);
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
            <div className="flex gap-2">
            <button
              onClick={handleUndo}
              disabled={historyIndex === 0}
              className="px-3 sm:px-4 py-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900/70 transition-colors duration-200 flex items-center text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Undo</span>
              <span className="sm:hidden">↩</span>
            </button>
            <button
              onClick={handleRedo}
              disabled={historyIndex === history.length - 1}
              className="px-3 sm:px-4 py-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900/70 transition-colors duration-200 flex items-center text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Redo</span>
              <span className="sm:hidden">↪</span>
            </button>
            <button 
              onClick={clearOutput}
              className="px-3 sm:px-4 py-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900/70 transition-colors duration-200 flex items-center text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Clear Output</span>
              <span className="sm:hidden">Clear</span>
            </button>
          </div>
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 p-0.5 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-b-xl">
          <div className="relative bg-black/95 rounded-t-xl md:rounded-tl-xl md:rounded-tr-none p-4 h-[300px] sm:h-[400px] md:h-[500px]">
            <Editor
              height="100%"
              defaultLanguage="maroon"
              value={code}
              onChange={handleCodeChange}
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
                suggestOnTriggerCharacters: true,
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
              {showWelcome && (
                <div className="text-red-400 italic animate-pulse">
                  Try out the example code by clicking Run Code
                </div>
              )}
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
