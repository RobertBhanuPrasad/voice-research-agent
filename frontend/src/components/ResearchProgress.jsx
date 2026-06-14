import { CheckCircle, Circle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const STAGES = [
  "Understanding query",
  "Finding relevant sources",
  "Scraping clean content",
  "Extracting numbers",
  "Verifying across sources",
  "Generating report"
];

export default function ResearchProgress({ stage, query }) {
  return (
    <div className="max-w-lg mx-auto glass p-8 rounded-3xl">
      <h2 className="text-xl font-semibold mb-2">Researching</h2>
      <p className="text-slate-400 mb-8 font-medium">"{query}"</p>
      
      <div className="space-y-6">
        {STAGES.map((s, index) => {
          const stepNum = index + 1;
          const isCompleted = stage > stepNum;
          const isCurrent = stage === stepNum;
          
          return (
            <motion.div 
              key={s}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {isCompleted ? (
                  <CheckCircle className="text-emerald-400" size={20} />
                ) : isCurrent ? (
                  <Loader2 className="text-cyan-400 animate-spin" size={20} />
                ) : (
                  <Circle className="text-slate-700" size={20} />
                )}
              </div>
              <span className={`text-sm ${isCompleted ? 'text-slate-300' : isCurrent ? 'text-white font-medium' : 'text-slate-600'}`}>
                {s}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
