import { MessageCircle, Coffee, Briefcase, BookOpen, MoreHorizontal, X } from 'lucide-react';

const intentOptions = [
  { id: 'messages', label: 'Check messages', icon: MessageCircle, color: 'bg-blue-50 text-blue-700 border-blue-100' },
  { id: 'break', label: 'Quick break', icon: Coffee, color: 'bg-amber-50 text-amber-700 border-amber-100' },
  { id: 'work', label: 'Work task', icon: Briefcase, color: 'bg-green-50 text-green-700 border-green-100' },
  { id: 'learn', label: 'Learn something', icon: BookOpen, color: 'bg-purple-50 text-purple-700 border-purple-100' },
  { id: 'other', label: 'Other', icon: MoreHorizontal, color: 'bg-gray-50 text-gray-600 border-gray-100' },
];

export default function IntentPrompt({ onSelect, onSkip }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 animate-fade-in" onClick={onSkip} />

      {/* Bottom Sheet */}
      <div className="relative w-full bg-white rounded-t-[24px] px-5 pt-4 pb-5 animate-slide-up z-10 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-3">
          <div className="w-8 h-[3px] bg-gray-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-0.5">
          <div className="flex-1 pr-3">
            <h2 className="text-[15px] font-semibold text-text leading-snug">
              What are you opening your phone for?
            </h2>
            <p className="text-[12px] text-text-secondary/70 mt-0.5">
              Setting an intent helps you stay focused
            </p>
          </div>
          <button
            onClick={onSkip}
            className="p-1.5 -mr-1 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X size={16} className="text-text-secondary/50" />
          </button>
        </div>

        {/* Intent Chips */}
        <div className="flex flex-wrap gap-[7px] mt-3.5">
          {intentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option)}
                className={`flex items-center gap-1.5 px-3 py-[7px] rounded-full border text-[12px] font-medium transition-all duration-150 active:scale-[0.96] ${option.color}`}
              >
                <Icon size={13} strokeWidth={2} />
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Skip */}
        <button
          onClick={onSkip}
          className="w-full mt-3.5 py-1.5 text-[12px] text-text-secondary/50 hover:text-text-secondary font-medium transition-colors"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
