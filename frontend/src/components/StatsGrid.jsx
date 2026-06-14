import { BarChart3 } from 'lucide-react';

export default function StatsGrid({ stats }) {
  return (
    <div className="glass p-8 rounded-3xl">
      <h2 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-6 flex items-center gap-2">
        <BarChart3 size={16} />
        Key Statistics
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-white/20 transition">
            <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              {stat.value}
            </div>
            <div className="flex justify-between items-center text-xs text-slate-500">
              <span className="truncate max-w-[120px]">{stat.source}</span>
              <span>{stat.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
