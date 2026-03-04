import StatusBar from './StatusBar';
import BottomNav from './BottomNav';

export default function PhoneFrame({ children, activeTab, onTabChange, showNav = true }) {
  return (
    <div className="relative w-[375px] h-[812px] bg-white rounded-[44px] overflow-hidden flex flex-col"
      style={{
        boxShadow: `
          0 0 0 1px rgba(0,0,0,0.06),
          0 2px 8px rgba(0,0,0,0.08),
          0 12px 40px rgba(0,0,0,0.12),
          0 40px 80px rgba(0,0,0,0.1)
        `,
        border: '8px solid #1a1a1a',
      }}
    >
      {/* Dynamic Island notch */}
      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-full z-50" />

      {/* Status Bar */}
      <div className="pt-[30px] relative z-40 shrink-0">
        <StatusBar />
      </div>

      {/* Screen Content — clip everything inside */}
      <div className="flex-1 overflow-hidden relative min-h-0">
        {children}
      </div>

      {/* Bottom Nav */}
      {showNav && (
        <div className="shrink-0">
          <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      )}

      {/* Home Indicator */}
      <div className="flex justify-center pb-1.5 pt-0.5 bg-white shrink-0">
        <div className="w-[100px] h-[3px] bg-gray-900/15 rounded-full" />
      </div>
    </div>
  );
}
