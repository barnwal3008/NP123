import { Timer, Footprints, Phone, BookOpen, Headphones } from 'lucide-react';

const alternatives = [
  { id: 'walk', label: 'Take a short walk', emoji: '🚶', bg: 'bg-green-50/80', border: 'border-green-100/60' },
  { id: 'call', label: 'Call a friend', emoji: '📞', bg: 'bg-blue-50/80', border: 'border-blue-100/60' },
  { id: 'read', label: 'Read an article', emoji: '📖', bg: 'bg-purple-50/80', border: 'border-purple-100/60' },
  { id: 'podcast', label: 'Listen to a podcast', emoji: '🎧', bg: 'bg-amber-50/80', border: 'border-amber-100/60' },
];

export default function AlternativeSuggestions({ onSelect, onDismiss }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/25 animate-fade-in" />

      {/* Suggestion Card */}
      <div className="relative w-full bg-white rounded-t-[24px] px-5 pt-4 pb-5 animate-slide-up z-10 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-3">
          <div className="w-8 h-[3px] bg-gray-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 mb-1">
          <div className="w-9 h-9 rounded-full bg-warn-light flex items-center justify-center shrink-0">
            <Timer size={18} strokeWidth={1.8} className="text-warn" />
          </div>
          <div className="min-w-0 pt-0.5">
            <h3 className="text-[14px] font-semibold text-text leading-snug">
              15 min on Instagram
            </h3>
            <p className="text-[11px] text-text-secondary/60 mt-0.5">
              Try something else for a bit?
            </p>
          </div>
        </div>

        {/* Alternatives */}
        <div className="grid grid-cols-2 gap-2 mt-3.5">
          {alternatives.map((alt) => (
            <button
              key={alt.id}
              onClick={() => onSelect(alt)}
              className={`flex flex-col items-center gap-1.5 py-3 px-3 rounded-2xl border transition-all duration-150 active:scale-[0.96] ${alt.bg} ${alt.border}`}
            >
              <span className="text-[22px] leading-none">{alt.emoji}</span>
              <span className="text-[11px] font-medium text-text/75 text-center leading-snug">
                {alt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className="w-full mt-3 py-1.5 text-[12px] text-text-secondary/40 hover:text-text-secondary font-medium transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
