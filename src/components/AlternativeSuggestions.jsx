import { Timer, Footprints, Phone, BookOpen, Headphones, Sparkles } from 'lucide-react';

const alternatives = [
  {
    id: 'walk',
    label: 'Take a short walk',
    description: '5 min reset for your mind',
    emoji: '🚶',
    bg: 'bg-gradient-to-br from-emerald-50 to-green-50/70',
    border: 'border-emerald-100/60',
    accent: 'text-emerald-700',
  },
  {
    id: 'call',
    label: 'Call a friend',
    description: 'Real connection beats scrolling',
    emoji: '📞',
    bg: 'bg-gradient-to-br from-blue-50 to-sky-50/70',
    border: 'border-blue-100/60',
    accent: 'text-blue-700',
  },
  {
    id: 'read',
    label: 'Read an article',
    description: 'You saved 3 articles this week',
    emoji: '📖',
    bg: 'bg-gradient-to-br from-violet-50 to-purple-50/70',
    border: 'border-violet-100/60',
    accent: 'text-violet-700',
  },
  {
    id: 'podcast',
    label: 'Listen to a podcast',
    description: 'Give your eyes a break',
    emoji: '🎧',
    bg: 'bg-gradient-to-br from-amber-50 to-orange-50/70',
    border: 'border-amber-100/60',
    accent: 'text-amber-700',
  },
];

export default function AlternativeSuggestions({ onSelect, onDismiss }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] animate-fade-in" />

      {/* Suggestion Card */}
      <div className="relative w-full bg-white rounded-t-[28px] px-5 pt-4 pb-6 animate-slide-up z-10 shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className="w-9 h-[4px] bg-gray-200/80 rounded-full" />
        </div>

        {/* Header — contextful limit warning */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50/40 rounded-2xl p-3.5 mb-4 border border-red-100/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/80 flex items-center justify-center shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
              <Timer size={18} className="text-red-500" />
            </div>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-red-900 leading-snug">
                15 minutes on Instagram
              </p>
              <p className="text-[11px] text-red-700/60 mt-0.5">
                You set this as your daily limit
              </p>
            </div>
          </div>
          {/* Progress bar — full */}
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex-1 h-[5px] bg-white/60 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
            </div>
            <span className="text-[10px] font-bold text-red-700/70 shrink-0">100%</span>
          </div>
        </div>

        {/* Suggestion label */}
        <div className="flex items-center gap-1.5 mb-3">
          <Sparkles size={13} className="text-primary/60" />
          <p className="text-[11.5px] font-semibold text-text-secondary/50 uppercase tracking-wider">
            Try instead
          </p>
        </div>

        {/* Alternatives grid */}
        <div className="grid grid-cols-2 gap-2">
          {alternatives.map((alt) => (
            <button
              key={alt.id}
              onClick={() => onSelect(alt)}
              className={`flex flex-col items-start gap-1 p-3 rounded-2xl border transition-all duration-150 active:scale-[0.97] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] ${alt.bg} ${alt.border}`}
            >
              <span className="text-[22px] leading-none">{alt.emoji}</span>
              <span className={`text-[12px] font-semibold ${alt.accent} leading-snug mt-0.5`}>
                {alt.label}
              </span>
              <span className="text-[10px] text-text-secondary/50 leading-snug">
                {alt.description}
              </span>
            </button>
          ))}
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className="w-full mt-3.5 py-1.5 text-[12px] text-text-secondary/40 hover:text-text-secondary font-medium transition-colors"
        >
          Not now, keep scrolling
        </button>
      </div>
    </div>
  );
}
