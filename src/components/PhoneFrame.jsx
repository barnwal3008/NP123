import StatusBar from './StatusBar';
import BottomNav from './BottomNav';

export default function PhoneFrame({ children, activeTab, onTabChange, showNav = true }) {
  return (
    <div className="relative w-[375px] h-[812px] bg-white rounded-[48px] overflow-hidden flex flex-col"
      style={{
        boxShadow: `
          0 0 0 1px rgba(0,0,0,0.06),
          0 2px 8px rgba(0,0,0,0.08),
          0 12px 40px rgba(0,0,0,0.15),
          0 40px 80px rgba(0,0,0,0.12),
          inset 0 0 0 1.5px rgba(255,255,255,0.5)
        `,
        border: '10px solid #1a1a1a',
      }}
    >
      {/* Dynamic Island style notch */}
      <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-full z-50">
        <div className="absolute top-[8px] left-[28px] w-[8px] h-[8px] rounded-full bg-gray-800 ring-1 ring-gray-700" />
      </div>

      {/* Status Bar */}
      <div className="pt-[34px] relative z-40">
        <StatusBar />
      </div>

      {/* Screen Content */}
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>

      {/* Bottom Nav */}
      {showNav && (
        <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
      )}

      {/* Home Indicator */}
      <div className="flex justify-center pb-2 bg-white">
        <div className="w-[120px] h-[4px] bg-gray-900/20 rounded-full" />
      </div>
    </div>
  );
}
