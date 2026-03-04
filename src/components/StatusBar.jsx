import { Signal, Wifi, Battery, BatteryFull } from 'lucide-react';

export default function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flex items-center justify-between px-5 py-1.5 bg-white/80 backdrop-blur-sm text-text text-xs font-medium">
      <span className="font-semibold text-[13px]">{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal size={13} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <BatteryFull size={16} strokeWidth={2} />
      </div>
    </div>
  );
}
