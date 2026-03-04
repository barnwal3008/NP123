import { Home, BarChart3, Settings, Clock } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'insights', icon: BarChart3, label: 'Insights' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex items-center justify-around bg-white border-t border-black/[0.04] px-2 pt-1 pb-0.5">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-0 px-3 py-0.5 rounded-2xl transition-all duration-200 ${
              isActive
                ? 'text-primary'
                : 'text-text-secondary/60 hover:text-text-secondary'
            }`}
          >
            <div className={`px-3 py-[3px] rounded-full transition-all duration-200 ${isActive ? 'bg-primary-light' : ''}`}>
              <Icon size={18} strokeWidth={isActive ? 2.2 : 1.7} />
            </div>
            <span className={`text-[9px] leading-tight transition-all duration-200 ${isActive ? 'font-semibold' : 'font-medium'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
