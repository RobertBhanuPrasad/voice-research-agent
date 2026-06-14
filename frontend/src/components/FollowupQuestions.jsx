import { ArrowRight, HelpCircle } from 'lucide-react';

export default function FollowupQuestions({ questions, onSearch }) {
  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
        <HelpCircle size={16} />
        Explore Further
      </h2>
      
      <div className="space-y-2">
        {questions.map((q, i) => (
          <button 
            key={i} 
            onClick={() => onSearch(q)}
            className="w-full text-left bg-white/5 p-3 rounded-xl border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/10 transition group flex justify-between items-center"
          >
            <span className="text-sm text-slate-300 group-hover:text-white transition">{q}</span>
            <ArrowRight size={14} className="text-slate-500 group-hover:text-violet-400 transition" />
          </button>
        ))}
      </div>
    </div>
  );
}
