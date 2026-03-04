import { CheckCircle2, ArrowRight } from 'lucide-react';

const messages = {
  walk: { title: 'Taking a short walk', tip: 'A brief walk can help reset your focus and boost creativity.' },
  call: { title: 'Calling a friend', tip: 'Social connection is one of the best ways to recharge.' },
  read: { title: 'Reading time', tip: 'Switching to reading helps your mind shift into a calmer state.' },
  podcast: { title: 'Listening mode', tip: 'Audio content gives your eyes a rest while keeping you engaged.' },
};

export default function ConfirmationScreen({ selectedAlternative, onContinue }) {
  const msg = messages[selectedAlternative?.id] || {
    title: 'Nice choice',
    tip: 'Taking a short break can help reset your focus.',
  };

  return (
    <div className="h-full bg-gradient-to-b from-accent-light via-white to-white flex flex-col items-center justify-center px-8 animate-fade-in">
      {/* Check Icon */}
      <div className="mb-6 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle2 size={44} className="text-accent" />
        </div>
      </div>

      {/* Message */}
      <h2 className="text-xl font-semibold text-text text-center mb-2">
        {msg.title}
      </h2>
      <p className="text-sm text-text-secondary text-center leading-relaxed max-w-[260px]">
        {msg.tip}
      </p>

      {/* Motivational quote */}
      <div className="mt-8 px-5 py-4 bg-white rounded-2xl border border-surface-dark shadow-sm max-w-[280px]">
        <p className="text-xs text-text-secondary text-center italic">
          "Almost everything will work again if you unplug it for a few minutes — including you."
        </p>
        <p className="text-xs text-text-secondary text-center mt-2 font-medium">— Anne Lamott</p>
      </div>

      {/* Continue */}
      <button
        onClick={onContinue}
        className="mt-10 flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all active:scale-[0.98]"
      >
        View your insights
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
