import { MessageCircle, Coffee, Briefcase, BookOpen, MoreHorizontal, X } from 'lucide-react';

const intentOptions = [
  { id: 'messages', label: 'Check messages', icon: MessageCircle, color: 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100/80 hover:border-blue-200' },
  { id: 'break', label: 'Quick break', icon: Coffee, color: 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100/80 hover:border-amber-200' },
  { id: 'work', label: 'Work task', icon: Briefcase, color: 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100/80 hover:border-green-200' },
  { id: 'learn', label: 'Learn something', icon: BookOpen, color: 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100/80 hover:border-purple-200' },
  { id: 'other', label: 'Other', icon: MoreHorizontal, color: 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100/80 hover:border-gray-200' },
];

export default function IntentPrompt({ onSelect, onSkip }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] animate-fade-in" onClick={onSkip} />

      {/* Bottom Sheet */}
      <div className="relative w-full bg-white rounded-t-[28px] p-6 pb-7 animate-slide-up z-10 shadow-[0_-8px_40px_rgba(0,0,0,0.08)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-5">
          <div className="w-9 h-[3.5px] bg-gray-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1 pr-2">
            <h2 className="text-[17px] font-semibold text-text leading-snug">
              What are you opening your phone for?
            </h2>
            <p className="text-[13px] text-text-secondary/80 mt-1 leading-relaxed">
              Setting an intent helps you stay focused
            </p>
          </div>
          <button
            onClick={onSkip}
            className="p-2 -mr-1 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X size={17} className="text-text-secondary/60" />
          </button>
        </div>

        {/* Intent Chips */}
        <div className="flex flex-wrap gap-2 mt-5">
          {intentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option)}
                className={`flex items-center gap-2 px-4 py-[10px] rounded-full border text-[13px] font-medium transition-all duration-200 active:scale-[0.96] shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${option.color}`}
              >
                <Icon size={15} strokeWidth={2} />
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Skip */}
        <button
          onClick={onSkip}
          className="w-full mt-5 py-2 text-[13px] text-text-secondary/60 hover:text-text-secondary font-medium transition-colors"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
