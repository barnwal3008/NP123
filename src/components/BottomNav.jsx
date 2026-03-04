import { Home, BarChart3, Settings, Clock } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'insights', icon: BarChart3, label: 'Insights' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex items-center justify-around bg-white/95 backdrop-blur-sm border-t border-black/[0.04] px-1 pt-1 pb-0.5">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-[2px] px-4 py-1 rounded-2xl transition-all duration-250 ${
              isActive
                ? 'text-primary'
                : 'text-text-secondary/70 hover:text-text-secondary'
            }`}
          >
            <div className={`px-4 py-[5px] rounded-full transition-all duration-250 ${isActive ? 'bg-primary-light' : ''}`}>
              <Icon size={18} strokeWidth={isActive ? 2.3 : 1.7} />
            </div>
            <span className={`text-[10px] transition-all duration-250 ${isActive ? 'font-semibold' : 'font-medium'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
