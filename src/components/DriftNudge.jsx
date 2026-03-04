import { Clock, ArrowLeft, PlayCircle, BookmarkPlus } from 'lucide-react';

export default function DriftNudge({ intent, sessionTime, onReturn, onContinue, onSaveForLater }) {
  const minutes = Math.floor(sessionTime / 60);

  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] animate-fade-in" />

      {/* Nudge Card */}
      <div className="relative w-full bg-white rounded-t-[28px] p-6 pb-7 animate-slide-up z-10 shadow-[0_-8px_40px_rgba(0,0,0,0.1)]">
        {/* Drag Handle */}
        <div className="flex justify-center mb-5">
          <div className="w-9 h-[3.5px] bg-gray-200 rounded-full" />
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-5">
          <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-b from-primary-light to-blue-50 flex items-center justify-center shadow-[0_2px_12px_rgba(26,115,232,0.15)]">
            <Clock size={26} strokeWidth={1.8} className="text-primary" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <h3 className="text-[17px] font-semibold text-text leading-snug">
            Quick check turned into {minutes} minutes
          </h3>
          <p className="text-[13px] text-text-secondary/80 mt-2 leading-relaxed max-w-[280px] mx-auto">
            {intent ? (
              <>Your intent was <span className="font-semibold text-primary/90">"{intent.label}"</span>. Want to get back on track?</>
            ) : (
              <>It's easy to lose track of time. Want to refocus?</>
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onReturn}
            className="flex items-center justify-center gap-2 w-full py-[13px] bg-primary text-white rounded-[14px] text-[13px] font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-[0_2px_8px_rgba(26,115,232,0.3)]"
          >
            <ArrowLeft size={15} strokeWidth={2.2} />
            Return to original task
          </button>

          <button
            onClick={onSaveForLater}
            className="flex items-center justify-center gap-2 w-full py-[13px] bg-primary-light/70 text-primary rounded-[14px] text-[13px] font-semibold hover:bg-primary-light transition-all duration-200 active:scale-[0.98]"
          >
            <BookmarkPlus size={15} strokeWidth={2} />
            Save for later
          </button>

          <button
            onClick={onContinue}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-[13px] text-text-secondary/60 font-medium hover:text-text-secondary transition-colors mt-0.5"
          >
            <PlayCircle size={15} strokeWidth={1.8} />
            Continue scrolling
          </button>
        </div>
      </div>
    </div>
  );
}
