import { Timer, Footprints, Phone, BookOpen, Headphones } from 'lucide-react';

const alternatives = [
  { id: 'walk', label: 'Take a short walk', icon: Footprints, emoji: '🚶', bg: 'bg-gradient-to-br from-green-50 to-emerald-50/50', border: 'border-green-100/80', ring: 'hover:ring-green-200' },
  { id: 'call', label: 'Call a friend', icon: Phone, emoji: '📞', bg: 'bg-gradient-to-br from-blue-50 to-sky-50/50', border: 'border-blue-100/80', ring: 'hover:ring-blue-200' },
  { id: 'read', label: 'Read a saved article', icon: BookOpen, emoji: '📖', bg: 'bg-gradient-to-br from-purple-50 to-violet-50/50', border: 'border-purple-100/80', ring: 'hover:ring-purple-200' },
  { id: 'podcast', label: 'Listen to a podcast', icon: Headphones, emoji: '🎧', bg: 'bg-gradient-to-br from-amber-50 to-orange-50/50', border: 'border-amber-100/80', ring: 'hover:ring-amber-200' },
];

export default function AlternativeSuggestions({ onSelect, onDismiss }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] animate-fade-in" />

      {/* Suggestion Card */}
      <div className="relative w-full bg-white rounded-t-[28px] p-6 pb-7 animate-slide-up z-10 shadow-[0_-8px_40px_rgba(0,0,0,0.1)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-5">
          <div className="w-9 h-[3.5px] bg-gray-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start gap-3.5 mb-1">
          <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-b from-warn-light to-amber-50 flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(249,171,0,0.15)]">
            <Timer size={20} strokeWidth={1.8} className="text-warn" />
          </div>
          <div className="pt-0.5">
            <h3 className="text-[15px] font-semibold text-text leading-snug">
              You've spent 15 minutes on Instagram
            </h3>
            <p className="text-[13px] text-text-secondary/70 mt-1">
              Want to try something else for a bit?
            </p>
          </div>
        </div>

        {/* Alternatives */}
        <div className="grid grid-cols-2 gap-2.5 mt-5">
          {alternatives.map((alt) => (
            <button
              key={alt.id}
              onClick={() => onSelect(alt)}
              className={`flex flex-col items-center gap-2.5 p-4 pb-3.5 rounded-[18px] border transition-all duration-200 active:scale-[0.96] hover:ring-1 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${alt.bg} ${alt.border} ${alt.ring}`}
            >
              <span className="text-[26px] leading-none">{alt.emoji}</span>
              <span className="text-[12px] font-medium text-text/80 text-center leading-snug">
                {alt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className="w-full mt-4 py-2 text-[13px] text-text-secondary/50 hover:text-text-secondary font-medium transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
