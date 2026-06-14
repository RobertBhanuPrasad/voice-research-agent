import { AlertTriangle, Lightbulb } from 'lucide-react';

export default function AnswerCard({ answer, confidence, note, highlights }) {
  const getConfidenceColor = (conf) => {
    if (conf >= 0.8) return 'text-emerald-400';
    if (conf >= 0.6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const confidencePercent = Math.round(confidence * 100);

  return (
    <div className="glass p-8 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm uppercase tracking-wider text-slate-400 font-bold">Estimated Answer</h2>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
          <span className="text-xs text-slate-400">Confidence</span>
          <span className={`text-sm font-bold ${getConfidenceColor(confidence)}`}>{confidencePercent}%</span>
        </div>
      </div>

      <p className="text-xl md:text-2xl leading-relaxed font-medium mb-8">
        {answer}
      </p>

      {note && (
        <div className="flex gap-3 bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl mb-6">
          <AlertTriangle className="text-orange-400 shrink-0" size={20} />
          <p className="text-sm text-orange-200 leading-relaxed">{note}</p>
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-slate-400 mb-3 flex items-center gap-2">
            <Lightbulb size={16} className="text-cyan-400" />
            Highlights
          </h3>
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
