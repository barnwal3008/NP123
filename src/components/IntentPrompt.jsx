import { MessageCircle, Coffee, Briefcase, BookOpen, MoreHorizontal, X, Sparkles } from 'lucide-react';

const intentOptions = [
  { id: 'messages', label: 'Check messages', icon: MessageCircle, bg: 'bg-blue-100/80', text: 'text-blue-700', iconBg: 'bg-blue-200/60' },
  { id: 'break', label: 'Quick break', icon: Coffee, bg: 'bg-orange-100/70', text: 'text-orange-700', iconBg: 'bg-orange-200/60' },
  { id: 'work', label: 'Work task', icon: Briefcase, bg: 'bg-emerald-100/70', text: 'text-emerald-700', iconBg: 'bg-emerald-200/60' },
  { id: 'learn', label: 'Learn something', icon: BookOpen, bg: 'bg-violet-100/70', text: 'text-violet-700', iconBg: 'bg-violet-200/60' },
  { id: 'other', label: 'Other', icon: MoreHorizontal, bg: 'bg-gray-100/80', text: 'text-gray-600', iconBg: 'bg-gray-200/60' },
];

export default function IntentPrompt({ onSelect, onSkip }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] animate-fade-in" onClick={onSkip} />

      {/* Bottom Sheet */}
      <div className="relative w-full bg-white rounded-t-[28px] px-5 pt-3 pb-5 animate-slide-up z-10 shadow-[0_-8px_40px_rgba(0,0,0,0.1)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className="w-9 h-[4px] bg-gray-200/80 rounded-full" />
        </div>

        {/* Header with icon */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(99,102,241,0.12)]">
            <Sparkles size={18} className="text-indigo-500" />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h2 className="text-[16px] font-semibold text-text leading-tight">
              What's your intent?
            </h2>
            <p className="text-[12px] text-text-secondary/60 mt-0.5 leading-snug">
              Stay aligned with why you picked up your phone
            </p>
          </div>
          <button
            onClick={onSkip}
            className="p-1.5 -mr-1 -mt-0.5 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={16} className="text-text-secondary/40" />
          </button>
        </div>

        {/* Intent Options — vertical list for cleaner layout */}
        <div className="flex flex-col gap-[6px]">
          {intentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option)}
                className={`flex items-center gap-3 w-full px-3.5 py-[11px] rounded-2xl transition-all duration-150 active:scale-[0.98] ${option.bg}`}
              >
                <div className={`w-8 h-8 rounded-xl ${option.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon size={16} strokeWidth={2} className={option.text} />
                </div>
                <span className={`text-[13px] font-semibold ${option.text}`}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skip */}
        <button
          onClick={onSkip}
          className="w-full mt-3 py-2 text-[12px] text-text-secondary/40 hover:text-text-secondary/70 font-medium transition-colors rounded-xl"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
