'use client'
import { Terminal, Ship } from 'lucide-react';

const LandingPage = () => {

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      
      <section className="relative pt-32 pb-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 animate-float" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="space-y-12 text-center">
            <h1 className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 blur-2xl opacity-50 animate-pulse" />
              <span className="relative text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-700 animate-gradient bg-300% hover:scale-105 transform transition-all duration-500">
                Write Code Like a Pirate
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm">
              Set sail with a programming language that brings the adventure of the high seas to your code.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="/docs">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative flex items-center justify-center space-x-2">
                  <Ship className="w-5 h-5 animate-float" />
                  <span className="font-semibold">Get Started</span>
                </span>
              </button>
              </a>
             
            </div>
          </div>

          <div className="mt-16 relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="relative bg-black/90 backdrop-blur-xl p-8 rounded-xl border border-red-900/50 transform group-hover:[transform:rotateX(2deg)] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  {[0, 1, 2].map(i => (
                    <div key={i} className={`w-3 h-3 rounded-full animate-pulse delay-${i * 200}`} 
                         style={{backgroundColor: ['#ff3b30', '#ffcc00', '#34c759'][i]}} />
                  ))}
                </div>
                <Terminal className="w-5 h-5 text-gray-500 animate-float" />
              </div>
              <pre className="text-left overflow-x-auto">
                <code className="text-sm font-mono text-gray-300">
                  {`# Declare your treasure
treasure be 42

# Set sail on a new voyage
voyage greet(name):
    bark name, "welcome to yer ship"
end voyage

# Start the adventure
greet sails with "Captain "`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
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

export default LandingPage;
