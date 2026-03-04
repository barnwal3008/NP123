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
    <div className="h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-between py-12 text-white">
      {/* Time & Date */}
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-7xl font-light tracking-tight">{time}</h1>
        <p className="text-base font-light text-white/70 mt-2">{date}</p>
      </div>

      {/* Notifications preview */}
      <div className="flex flex-col gap-2 w-full px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 px-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-[10px] font-bold">W</div>
            <span className="text-xs text-white/60">WhatsApp · 2m ago</span>
          </div>
          <p className="text-sm text-white/90">3 new messages from Team</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 px-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center text-[10px] font-bold">G</div>
            <span className="text-xs text-white/60">Gmail · 15m ago</span>
          </div>
          <p className="text-sm text-white/90">Weekly report ready for review</p>
        </div>
      </div>

      {/* Unlock button */}
      <button
        onClick={onUnlock}
        className="flex flex-col items-center gap-2 group"
      >
        <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
          <Fingerprint size={32} className="text-white/80 group-hover:text-white animate-pulse-soft" />
        </div>
        <span className="text-xs text-white/50">Tap to unlock</span>
      </button>
    </div>
  );
}
