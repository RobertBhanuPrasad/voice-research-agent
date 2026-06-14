import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchHero from './components/SearchHero';
import ResearchProgress from './components/ResearchProgress';
import AnswerCard from './components/AnswerCard';
import StatsGrid from './components/StatsGrid';
import SourcePanel from './components/SourcePanel';
import ImageGallery from './components/ImageGallery';
import Timeline from './components/Timeline';
import FollowupQuestions from './components/FollowupQuestions';

function App() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [progressStage, setProgressStage] = useState(0);

  const startResearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setQuery(searchQuery);
    setIsSearching(true);
    setReport(null);
    setError(null);
    setProgressStage(1); // Understanding query

    try {
      // Simulate progress stages
      const stages = [
        { time: 1000, stage: 2 }, // Finding sources
        { time: 2500, stage: 3 }, // Scraping content
        { time: 4000, stage: 4 }, // Extracting numbers
        { time: 5500, stage: 5 }, // Verifying
        { time: 7000, stage: 6 }, // Generating report
      ];

      stages.forEach(({ time, stage }) => {
        setTimeout(() => {
          if (isSearching) setProgressStage(stage);
        }, time);
      });

      const response = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) throw new Error('Research failed');

      const data = await response.json();
      setReport(data);
    } catch (err) {
      console.error(err);
      setError('Failed to complete research. Please try again.');
    } finally {
      setIsSearching(false);
      setProgressStage(0);
    }
  };

  const handleReset = () => {
    setReport(null);
    setQuery('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-slate-100">
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleReset}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-bold">
            CR
          </div>
          <span className="font-bold text-xl tracking-tight">Context Studio</span>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20 relative z-10">
        <AnimatePresence mode="wait">
          {!isSearching && !report && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-20"
            >
              <SearchHero onSearch={startResearch} />
            </motion.div>
          )}

          {isSearching && (
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-20"
            >
              <ResearchProgress stage={progressStage} query={query} />
            </motion.div>
          )}

          {error && !isSearching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 text-center text-red-400 glass p-8 rounded-2xl max-w-lg mx-auto"
            >
              <p>{error}</p>
              <button 
                onClick={() => setError(null)}
                className="mt-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                Try Again
              </button>
            </motion.div>
          )}

          {report && !isSearching && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-5xl mx-auto space-y-6"
            >
              <div className="flex justify-between items-end mb-8">
                <h1 className="text-3xl font-bold">{report.query}</h1>
                <button 
                  onClick={handleReset}
                  className="px-4 py-2 text-sm glass glass-hover rounded-xl text-slate-300"
                >
                  New Research
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <AnswerCard 
                    answer={report.answer} 
                    confidence={report.confidence} 
                    note={report.accuracy_note} 
                    highlights={report.highlights}
                  />
                  {report.key_stats && report.key_stats.length > 0 && (
                    <StatsGrid stats={report.key_stats} />
                  )}
                  {report.timeline && report.timeline.length > 0 && (
                    <Timeline events={report.timeline} />
                  )}
                </div>
                <div className="space-y-6">
                  <SourcePanel sources={report.sources} />
                  {report.images && report.images.length > 0 && (
                    <ImageGallery images={report.images} />
                  )}
                  {report.followups && report.followups.length > 0 && (
                    <FollowupQuestions questions={report.followups} onSearch={startResearch} />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
