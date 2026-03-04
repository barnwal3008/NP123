import { Clock, ArrowLeft, PlayCircle, BookmarkPlus } from 'lucide-react';

export default function DriftNudge({ intent, sessionTime, onReturn, onContinue, onSaveForLater }) {
  const minutes = Math.floor(sessionTime / 60);

  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/25 animate-fade-in" />

      {/* Nudge Card */}
      <div className="relative w-full bg-white rounded-t-[24px] px-5 pt-4 pb-5 animate-slide-up z-10 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-3">
          <div className="w-8 h-[3px] bg-gray-200 rounded-full" />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-3">
          <div className="w-[48px] h-[48px] rounded-full bg-primary-light flex items-center justify-center">
            <Clock size={22} strokeWidth={1.8} className="text-primary" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-4">
          <h3 className="text-[15px] font-semibold text-text leading-snug">
            Quick check turned into {minutes} min
          </h3>
          <p className="text-[12px] text-text-secondary/70 mt-1 leading-relaxed mx-auto max-w-[260px]">
            {intent ? (
              <>Your intent was <span className="font-semibold text-primary">"{intent.label}"</span>. Get back on track?</>
            ) : (
              <>It's easy to lose track of time. Want to refocus?</>
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-1.5">
          <button
            onClick={onReturn}
            className="flex items-center justify-center gap-1.5 w-full py-[11px] bg-primary text-white rounded-xl text-[12px] font-semibold transition-all duration-150 active:scale-[0.98] shadow-[0_1px_6px_rgba(26,115,232,0.25)]"
          >
            <ArrowLeft size={14} strokeWidth={2.2} />
            Return to original task
          </button>

          <button
            onClick={onSaveForLater}
            className="flex items-center justify-center gap-1.5 w-full py-[11px] bg-primary-light/60 text-primary rounded-xl text-[12px] font-semibold transition-all duration-150 active:scale-[0.98]"
          >
            <BookmarkPlus size={14} strokeWidth={2} />
            Save for later
          </button>

          <button
            onClick={onContinue}
            className="flex items-center justify-center gap-1.5 w-full py-2 text-[12px] text-text-secondary/50 font-medium hover:text-text-secondary transition-colors"
          >
            <PlayCircle size={14} strokeWidth={1.8} />
            Continue scrolling
          </button>
        </div>
      </div>
    </div>
  );
}
