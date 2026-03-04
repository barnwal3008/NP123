import { Timer, Footprints, Phone, BookOpen, Headphones, Sparkles } from 'lucide-react';

const alternatives = [
  { id: 'walk', label: 'Take a short walk', icon: Footprints, emoji: '🚶', color: 'from-green-50 to-emerald-50 border-green-200', iconColor: 'text-green-600' },
  { id: 'call', label: 'Call a friend', icon: Phone, emoji: '📞', color: 'from-blue-50 to-sky-50 border-blue-200', iconColor: 'text-blue-600' },
  { id: 'read', label: 'Read a saved article', icon: BookOpen, emoji: '📖', color: 'from-purple-50 to-violet-50 border-purple-200', iconColor: 'text-purple-600' },
  { id: 'podcast', label: 'Listen to a podcast', icon: Headphones, emoji: '🎧', color: 'from-amber-50 to-orange-50 border-amber-200', iconColor: 'text-amber-600' },
];

export default function AlternativeSuggestions({ onSelect, onDismiss }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 animate-fade-in" />

      {/* Suggestion Card */}
      <div className="relative w-full bg-white rounded-t-3xl p-6 pb-8 animate-slide-up z-10">
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-warn-light flex items-center justify-center shrink-0">
            <Timer size={20} className="text-warn" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text">
              You've spent 15 minutes on Instagram
            </h3>
            <p className="text-sm text-text-secondary mt-0.5">
              Want to try something else for a bit?
            </p>
          </div>
        </div>

        {/* Alternatives */}
        <div className="grid grid-cols-2 gap-2.5 mt-5">
          {alternatives.map((alt) => {
            const Icon = alt.icon;
            return (
              <button
                key={alt.id}
                onClick={() => onSelect(alt)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-b border transition-all duration-200 hover:scale-[1.03] active:scale-95 ${alt.color}`}
              >
                <div className="text-2xl">{alt.emoji}</div>
                <span className="text-sm font-medium text-text text-center leading-tight">
                  {alt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className="w-full mt-4 py-2.5 text-sm text-text-secondary hover:text-text font-medium transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
