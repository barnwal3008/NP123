import { Fingerprint } from 'lucide-react';

export default function LockScreen({ onUnlock }) {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });
  const date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center justify-between py-8 text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-16 -left-16 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-32 -right-16 w-40 h-40 bg-purple-500/8 rounded-full blur-3xl" />

      {/* Time & Date */}
      <div className="flex flex-col items-center pt-10 relative z-10">
        <h1 className="text-[64px] font-extralight tracking-tight leading-none">{time}</h1>
        <p className="text-[13px] font-light text-white/45 mt-2">{date}</p>
      </div>

      {/* Notifications */}
      <div className="flex flex-col gap-2 w-full px-5 relative z-10">
        <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl p-3 px-3.5 border border-white/[0.05]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">W</span>
            </div>
            <span className="text-[10px] text-white/35 font-medium">WhatsApp · 2m ago</span>
          </div>
          <p className="text-[12px] text-white/80 leading-snug">3 new messages from Team</p>
        </div>
        <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl p-3 px-3.5 border border-white/[0.05]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">G</span>
            </div>
            <span className="text-[10px] text-white/35 font-medium">Gmail · 15m ago</span>
          </div>
          <p className="text-[12px] text-white/80 leading-snug">Weekly report ready for review</p>
        </div>
      </div>

      {/* Unlock */}
      <button
        onClick={onUnlock}
        className="flex flex-col items-center gap-2 group relative z-10"
      >
        <div className="p-3.5 rounded-full bg-white/[0.07] group-hover:bg-white/[0.12] transition-all duration-300 group-hover:scale-105 animate-glow">
          <Fingerprint size={26} className="text-white/60 group-hover:text-white/90 transition-colors duration-300 animate-pulse-soft" />
        </div>
        <span className="text-[10px] text-white/25 font-medium tracking-wider uppercase">Tap to unlock</span>
      </button>
    </div>
  );
}
