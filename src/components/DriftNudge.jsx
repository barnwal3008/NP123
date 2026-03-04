import { Clock, ArrowLeft, PlayCircle, BookmarkPlus } from 'lucide-react';

export default function DriftNudge({ intent, sessionTime, onReturn, onContinue, onSaveForLater }) {
  const minutes = Math.floor(sessionTime / 60);

  return (
    <div className="absolute inset-0 z-40 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 animate-fade-in" />

      {/* Nudge Card */}
      <div className="relative w-full bg-white rounded-t-3xl p-6 pb-8 animate-slide-up z-10">
        {/* Drag Handle */}
        <div className="flex justify-center mb-5">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-nudge flex items-center justify-center">
            <Clock size={28} className="text-primary" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-text">
            Quick check turned into {minutes} minutes
          </h3>
          <p className="text-sm text-text-secondary mt-1.5">
            {intent ? (
              <>Your intent was <span className="font-medium text-primary">"{intent.label}"</span>. Want to get back on track?</>
            ) : (
              <>It's easy to lose track of time. Want to refocus?</>
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={onReturn}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <ArrowLeft size={16} />
            Return to original task
          </button>

          <button
            onClick={onSaveForLater}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary-light text-primary rounded-full text-sm font-semibold hover:bg-primary-light/70 transition-all active:scale-[0.98]"
          >
            <BookmarkPlus size={16} />
            Save for later
          </button>

          <button
            onClick={onContinue}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-sm text-text-secondary font-medium hover:text-text transition-colors"
          >
            <PlayCircle size={16} />
            Continue scrolling
          </button>
        </div>
      </div>
    </div>
  );
}
