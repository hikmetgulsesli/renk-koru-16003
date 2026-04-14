// BottomNavBar Component — US-003
// Extracts the bottom navigation pattern from all existing screens
// Design token values match the color palette from design-tokens.css

interface BottomNavBarProps {
  activeTab: 'test' | 'history' | 'info';
  onTabChange: (tab: 'test' | 'history' | 'info') => void;
}

export function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps): JSX.Element {
  const tabs: Array<{ id: 'test' | 'history' | 'info'; label: string; icon: string }> = [
    { id: 'test', label: 'Test', icon: 'visibility' },
    { id: 'history', label: 'Geçmiş', icon: 'history' },
    { id: 'info', label: 'Bilgi', icon: 'info' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl rounded-t-[2rem] border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex flex-col items-center justify-center
              ${isActive
                ? 'bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#0b1326] rounded-2xl px-5 py-2 transition-all'
                : 'text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer'
              }
            `}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="material-symbols-outlined" data-icon={tab.icon}>{tab.icon}</span>
            <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
