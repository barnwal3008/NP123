import { CheckCircle2, ArrowRight, Heart } from 'lucide-react';

const messages = {
  walk: {
    title: 'Great — going for a walk!',
    tip: 'A brief walk can reset your focus and boost creativity.',
    emoji: '🚶',
  },
  call: {
    title: 'Nice — calling a friend!',
    tip: 'Social connection is one of the best ways to recharge.',
    emoji: '📞',
  },
  read: {
    title: 'Good pick — reading time!',
    tip: 'Reading helps your mind shift into a calmer state.',
    emoji: '📖',
  },
  podcast: {
    title: 'Switching to a podcast!',
    tip: 'Audio content gives your eyes a rest while keeping you engaged.',
    emoji: '🎧',
  },
  return: {
    title: 'Back on track!',
    tip: 'Catching drift early is a superpower. You just used it.',
    emoji: '🎯',
  },
  save: {
    title: 'Saved for later!',
    tip: 'You can come back to it when you\u2019re actually free.',
    emoji: '🔖',
  },
};

export default function ConfirmationScreen({ selectedAlternative, onContinue }) {
  const msg = messages[selectedAlternative?.id] || {
    title: 'Nice choice!',
    tip: 'Taking a short break can help reset your focus.',
    emoji: '✨',
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#e6f4ea] via-[#f0faf3] to-white flex flex-col items-center justify-center px-8 animate-fade-in overflow-hidden relative">
      {/* Ambient orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/[0.06] rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-4 w-32 h-32 bg-primary/[0.04] rounded-full blur-3xl" />

      {/* Emoji + Check badge */}
      <div className="mb-6 animate-scale-in relative">
        <div className="text-[44px] leading-none">{msg.emoji}</div>
        <div className="absolute -bottom-1 -right-1 w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center shadow-[0_2px_6px_rgba(52,168,83,0.3)]">
          <CheckCircle2 size={14} strokeWidth={2.5} className="text-white" />
        </div>
      </div>

      {/* Message */}
      <h2 className="text-[19px] font-bold text-text text-center mb-1.5 relative z-10">
        {msg.title}
      </h2>
      <p className="text-[12.5px] text-text-secondary/70 text-center leading-relaxed max-w-[240px] relative z-10">
        {msg.tip}
      </p>

      {/* Motivational quote card */}
      <div className="mt-7 px-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] max-w-[260px] relative z-10">
        <div className="flex justify-center mb-2">
          <Heart size={14} className="text-red-400/50" />
        </div>
        <p className="text-[11.5px] text-text-secondary/60 text-center italic leading-relaxed">
          "Almost everything will work again if you unplug it for a few minutes — including you."
        </p>
        <p className="text-[10px] text-text-secondary/40 text-center mt-2 font-medium">— Anne Lamott</p>
      </div>

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="mt-8 flex items-center gap-2 px-6 py-[12px] bg-primary text-white rounded-2xl text-[13px] font-semibold transition-all duration-150 active:scale-[0.98] shadow-[0_2px_8px_rgba(26,115,232,0.25)] relative z-10"
      >
        View your insights
        <ArrowRight size={14} strokeWidth={2.2} />
      </button>
    </div>
  );
}
