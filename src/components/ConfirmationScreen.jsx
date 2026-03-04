import { CheckCircle2, ArrowRight } from 'lucide-react';

const messages = {
  walk: { title: 'Taking a short walk', tip: 'A brief walk can reset your focus and boost creativity.' },
  call: { title: 'Calling a friend', tip: 'Social connection is one of the best ways to recharge.' },
  read: { title: 'Reading time', tip: 'Reading helps your mind shift into a calmer state.' },
  podcast: { title: 'Listening mode', tip: 'Audio content gives your eyes a rest while keeping you engaged.' },
};

export default function ConfirmationScreen({ selectedAlternative, onContinue }) {
  const msg = messages[selectedAlternative?.id] || {
    title: 'Nice choice',
    tip: 'Taking a short break can help reset your focus.',
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#e6f4ea] via-white to-white flex flex-col items-center justify-center px-8 animate-fade-in overflow-hidden">
      {/* Check Icon */}
      <div className="mb-5 animate-scale-in">
        <div className="w-[64px] h-[64px] rounded-full bg-accent/[0.08] flex items-center justify-center">
          <CheckCircle2 size={34} strokeWidth={1.8} className="text-accent" />
        </div>
      </div>

      {/* Message */}
      <h2 className="text-[18px] font-semibold text-text text-center mb-1.5">
        {msg.title}
      </h2>
      <p className="text-[12px] text-text-secondary/70 text-center leading-relaxed max-w-[230px]">
        {msg.tip}
      </p>

      {/* Quote */}
      <div className="mt-6 px-4 py-3.5 bg-white rounded-2xl border border-black/[0.04] shadow-[0_1px_8px_rgba(0,0,0,0.03)] max-w-[260px]">
        <p className="text-[11px] text-text-secondary/60 text-center italic leading-relaxed">
          "Almost everything will work again if you unplug it for a few minutes — including you."
        </p>
        <p className="text-[10px] text-text-secondary/40 text-center mt-2 font-medium">— Anne Lamott</p>
      </div>

      {/* Continue */}
      <button
        onClick={onContinue}
        className="mt-8 flex items-center gap-2 px-6 py-[11px] bg-primary text-white rounded-xl text-[12px] font-semibold transition-all duration-150 active:scale-[0.98] shadow-[0_1px_6px_rgba(26,115,232,0.25)]"
      >
        View your insights
        <ArrowRight size={14} strokeWidth={2.2} />
      </button>
    </div>
  );
}
