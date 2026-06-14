import { Globe, ExternalLink } from 'lucide-react';

export default function SourcePanel({ sources }) {
  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
        <Globe size={16} />
        Sources ({sources.length})
      </h2>
      
      <div className="space-y-3">
        {sources.map((s, i) => (
          <a 
            key={i} 
            href={s.url} 
            target="_blank" 
            rel="noreferrer"
            className="block bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-cyan-400 transition">{s.title}</h3>
              <ExternalLink size={14} className="text-slate-500 opacity-0 group-hover:opacity-100 transition" />
            </div>
            <p className="text-xs text-slate-500 line-clamp-2 mb-2">{s.summary}</p>
            <div className="flex justify-between text-[10px] text-slate-600 font-medium">
              <span>{s.publisher}</span>
              <span>{s.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
