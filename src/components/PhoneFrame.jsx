import StatusBar from './StatusBar';
import BottomNav from './BottomNav';

export default function PhoneFrame({ children, activeTab, onTabChange, showNav = true }) {
  return (
    <div className="relative w-[375px] h-[812px] bg-white rounded-[44px] shadow-2xl overflow-hidden border-[8px] border-gray-800 flex flex-col">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-gray-800 rounded-b-2xl z-50" />

      {/* Status Bar */}
      <div className="pt-7">
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
        <div className="w-32 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
