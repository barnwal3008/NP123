import { ArrowLeft, PlayCircle, BookmarkPlus, Hourglass } from 'lucide-react';

export default function DriftNudge({ intent, sessionTime, onReturn, onContinue, onSaveForLater }) {
  const minutes = Math.floor(sessionTime / 60);

  // Context-aware messages based on intent
  const contextMessages = {
    messages: {
      headline: 'Came to check messages…',
      sub: 'But you\u2019ve been scrolling Instagram for',
      nudge: 'Your messages might still be waiting.',
    },
    break: {
      headline: 'Quick break stretched out',
      sub: 'Your 5-min break has been going for',
      nudge: 'Breaks work best when they\u2019re short.',
    },
    work: {
      headline: 'Work can wait? Maybe not.',
      sub: 'You switched to Instagram',
      nudge: 'Your work task is still on pause.',
    },
    learn: {
      headline: 'Wanted to learn something…',
      sub: 'But Instagram got in the way for',
      nudge: 'There\u2019s still time to learn today.',
    },
    other: {
      headline: 'Got a bit sidetracked',
      sub: 'You\u2019ve been on Instagram for',
      nudge: 'It happens \u2014 let\u2019s refocus.',
    },
  };

  const fallback = {
    headline: 'Time flew by',
    sub: 'You\u2019ve been scrolling for',
    nudge: 'It\u2019s easy to lose track \u2014 no judgment.',
  };

  const ctx = contextMessages[intent?.id] || fallback;

  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] animate-fade-in" />

      {/* Nudge Card */}
      <div className="relative w-full bg-white rounded-t-[28px] px-5 pt-4 pb-6 animate-slide-up z-10 shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className="w-9 h-[4px] bg-gray-200/80 rounded-full" />
        </div>

        {/* Context card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-2xl p-4 mb-4 border border-amber-100/50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/80 flex items-center justify-center shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
              <Hourglass size={18} className="text-amber-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-amber-900 leading-snug">
                {ctx.headline}
              </p>
              <p className="text-[11px] text-amber-700/70 mt-0.5 leading-snug">
                {ctx.sub}
              </p>
            </div>
          </div>

          {/* Time badge */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 h-[6px] bg-white/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((minutes / 15) * 100, 100)}%` }}
              />
            </div>
            <span className="text-[13px] font-bold text-amber-800 tabular-nums shrink-0">
              {minutes} min
            </span>
          </div>
        </div>

        {/* Supportive nudge text */}
        <p className="text-[12px] text-text-secondary/60 text-center mb-4 leading-relaxed px-2">
          {ctx.nudge}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-[6px]">
          <button
            onClick={onReturn}
            className="flex items-center justify-center gap-2 w-full py-[12px] bg-primary text-white rounded-2xl text-[13px] font-semibold transition-all duration-150 active:scale-[0.98] shadow-[0_2px_8px_rgba(26,115,232,0.25)]"
          >
            <ArrowLeft size={15} strokeWidth={2.2} />
            {intent ? `Back to: ${intent.label}` : 'Return to task'}
          </button>

          <div className="flex gap-[6px]">
            <button
              onClick={onSaveForLater}
              className="flex items-center justify-center gap-1.5 flex-1 py-[11px] bg-gray-100/80 text-text-secondary rounded-2xl text-[12px] font-medium transition-all duration-150 active:scale-[0.98]"
            >
              <BookmarkPlus size={14} strokeWidth={1.8} />
              Save for later
            </button>
            <button
              onClick={onContinue}
              className="flex items-center justify-center gap-1.5 flex-1 py-[11px] bg-gray-50/80 text-text-secondary/50 rounded-2xl text-[12px] font-medium transition-all duration-150 active:scale-[0.98]"
            >
              <PlayCircle size={14} strokeWidth={1.8} />
              Keep scrolling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
