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
    <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center justify-between py-10 text-white relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Time & Date */}
      <div className="flex flex-col items-center pt-14 relative z-10">
        <h1 className="text-[72px] font-extralight tracking-tight leading-none">{time}</h1>
        <p className="text-[15px] font-light text-white/50 mt-3 tracking-wide">{date}</p>
      </div>

      {/* Notifications preview */}
      <div className="flex flex-col gap-2.5 w-full px-5 relative z-10">
        <div className="bg-white/[0.07] backdrop-blur-xl rounded-[18px] p-3.5 px-4 border border-white/[0.06]">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-[22px] h-[22px] rounded-full bg-[#25d366] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">W</span>
            </div>
            <span className="text-[11px] text-white/40 font-medium">WhatsApp · 2m ago</span>
          </div>
          <p className="text-[13px] text-white/85 font-normal leading-snug">3 new messages from Team</p>
        </div>
        <div className="bg-white/[0.07] backdrop-blur-xl rounded-[18px] p-3.5 px-4 border border-white/[0.06]">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-[22px] h-[22px] rounded-full bg-[#4285f4] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">G</span>
            </div>
            <span className="text-[11px] text-white/40 font-medium">Gmail · 15m ago</span>
          </div>
          <p className="text-[13px] text-white/85 font-normal leading-snug">Weekly report ready for review</p>
        </div>
      </div>

      {/* Unlock button */}
      <button
        onClick={onUnlock}
        className="flex flex-col items-center gap-3 group relative z-10"
      >
        <div className="p-4 rounded-full bg-white/[0.08] backdrop-blur-sm group-hover:bg-white/[0.15] transition-all duration-400 group-hover:scale-105 animate-glow">
          <Fingerprint size={30} className="text-white/70 group-hover:text-white transition-colors duration-300 animate-pulse-soft" />
        </div>
        <span className="text-[11px] text-white/30 font-medium tracking-wider uppercase">Tap to unlock</span>
      </button>
    </div>
  );
}
