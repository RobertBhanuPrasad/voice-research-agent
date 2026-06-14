import { Clock } from 'lucide-react';

export default function Timeline({ events }) {
  return (
    <div className="glass p-8 rounded-3xl">
      <h2 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-6 flex items-center gap-2">
        <Clock size={16} />
        Timeline
      </h2>
      
      <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-white/10">
        {events.map((evt, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
            </div>
            <div className="text-xs font-bold text-cyan-400 mb-1">{evt.date}</div>
            <div className="text-sm text-slate-300">{evt.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
