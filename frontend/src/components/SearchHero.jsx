import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

const EXAMPLES = [
  "How many AirPods were sold this year?",
  "Latest Tesla robotaxi updates",
  "Top 5 AI coding tools in 2026",
  "Which company is leading humanoid robots?"
];

export default function SearchHero({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
        <Sparkles size={16} />
        <span>Context.dev Web Intelligence</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Deep Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Simplified.</span>
      </h1>
      
      <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
        Ask any complex question. We'll crawl multiple sources, extract the facts, and deliver a clean, verified answer.
      </p>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative glass rounded-2xl flex items-center p-2 pl-4">
          <Search className="text-slate-400" size={24} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none outline-none text-lg px-4 py-3 text-white placeholder-slate-500"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Research
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            onClick={() => onSearch(ex)}
            className="text-xs text-slate-400 glass glass-hover px-4 py-2 rounded-full"
          >
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
}
