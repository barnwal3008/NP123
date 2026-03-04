import { Signal, Wifi, BatteryFull } from 'lucide-react';

export default function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flex items-center justify-between px-6 py-1 text-text text-[12px] font-semibold tracking-tight">
      <span>{time}</span>
      <div className="flex items-center gap-[5px]">
        <Signal size={12} strokeWidth={2.5} />
        <Wifi size={13} strokeWidth={2.5} />
        <BatteryFull size={15} strokeWidth={2} />
      </div>
    </div>
  );
}
