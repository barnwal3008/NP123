import { MessageCircle, Coffee, Briefcase, BookOpen, MoreHorizontal, X } from 'lucide-react';

const intentOptions = [
  { id: 'messages', label: 'Check messages', icon: MessageCircle, color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { id: 'break', label: 'Quick break', icon: Coffee, color: 'bg-amber-50 text-amber-600 border-amber-200' },
  { id: 'work', label: 'Work task', icon: Briefcase, color: 'bg-green-50 text-green-600 border-green-200' },
  { id: 'learn', label: 'Learn something', icon: BookOpen, color: 'bg-purple-50 text-purple-600 border-purple-200' },
  { id: 'other', label: 'Other', icon: MoreHorizontal, color: 'bg-gray-50 text-gray-600 border-gray-200' },
];

export default function IntentPrompt({ onSelect, onSkip }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 animate-fade-in" onClick={onSkip} />

      {/* Bottom Sheet */}
      <div className="relative w-full bg-white rounded-t-3xl p-6 pb-8 animate-slide-up z-10">
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <div>
            <h2 className="text-lg font-semibold text-text">
              What are you opening your phone for?
            </h2>
            <p className="text-sm text-text-secondary mt-0.5">
              Setting an intent helps you stay focused
            </p>
          </div>
          <button
            onClick={onSkip}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={18} className="text-text-secondary" />
          </button>
        </div>

        {/* Intent Chips */}
        <div className="flex flex-wrap gap-2.5 mt-5">
          {intentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-[1.03] active:scale-95 ${option.color}`}
              >
                <Icon size={16} />
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Skip */}
        <button
          onClick={onSkip}
          className="w-full mt-5 py-2.5 text-sm text-text-secondary hover:text-text font-medium transition-colors"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
