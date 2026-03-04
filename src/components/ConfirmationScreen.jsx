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
    <div className="h-full bg-gradient-to-b from-[#e6f4ea] via-white to-white flex flex-col items-center justify-center px-8 animate-fade-in relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      {/* Check Icon */}
      <div className="mb-7 animate-scale-in relative z-10">
        <div className="w-[76px] h-[76px] rounded-full bg-accent/[0.08] flex items-center justify-center shadow-[0_4px_20px_rgba(52,168,83,0.12)]">
          <CheckCircle2 size={40} strokeWidth={1.8} className="text-accent" />
        </div>
      </div>

      {/* Message */}
      <h2 className="text-[20px] font-semibold text-text text-center mb-2 relative z-10">
        {msg.title}
      </h2>
      <p className="text-[13px] text-text-secondary/80 text-center leading-relaxed max-w-[250px] relative z-10">
        {msg.tip}
      </p>

      {/* Motivational quote */}
      <div className="mt-8 px-5 py-[18px] bg-white rounded-[20px] border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] max-w-[280px] relative z-10">
        <p className="text-[12px] text-text-secondary/70 text-center italic leading-relaxed">
          "Almost everything will work again if you unplug it for a few minutes — including you."
        </p>
        <p className="text-[11px] text-text-secondary/50 text-center mt-2.5 font-medium">— Anne Lamott</p>
      </div>

      {/* Continue */}
      <button
        onClick={onContinue}
        className="mt-10 flex items-center gap-2.5 px-7 py-[13px] bg-primary text-white rounded-[14px] text-[13px] font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-[0_2px_10px_rgba(26,115,232,0.3)] relative z-10"
      >
        View your insights
        <ArrowRight size={15} strokeWidth={2.2} />
      </button>
    </div>
  );
}
