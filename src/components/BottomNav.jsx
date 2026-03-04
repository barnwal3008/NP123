import { Home, BarChart3, Settings, Clock } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'insights', icon: BarChart3, label: 'Insights' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex items-center justify-around bg-white border-t border-surface-dark px-2 py-1.5">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200 ${
              isActive
                ? 'text-primary'
                : 'text-text-secondary hover:text-text'
            }`}
          >
            <div className={`p-1 rounded-full transition-all duration-200 ${isActive ? 'bg-primary-light' : ''}`}>
              <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
            </div>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
