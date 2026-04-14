// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarProps {}

export function Ayarlar(props: AyarlarProps) {
  return (
    <>
      {/*  Top Navigation Shell  */}
      <header className="bg-[#0b1326] dark:bg-[#0b1326] bg-gradient-to-b from-[#131b2e] to-transparent sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
      <div className="text-2xl font-black text-[#adc6ff] tracking-tight font-headline">Renk Koru</div>
      <div className="flex gap-4 items-center">
      <button className="text-[#dae2fd] opacity-70 hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform duration-300">
      <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
      </button>
      <button className="text-[#adc6ff] font-bold hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform duration-300">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 pt-8 pb-32">
      {/*  Settings Header Section  */}
      <section className="mb-10">
      <h1 className="font-headline text-4xl font-extrabold text-on-surface mb-2 tracking-tight">Ayarlar</h1>
      <p className="text-on-surface-variant body-lg">Uygulama deneyiminizi kişiselleştirin ve tercihlerinizi yönetin.</p>
      </section>
      {/*  Settings Container  */}
      <div className="space-y-4">
      {/*  App Settings Group  */}
      <div className="bg-surface-container-low rounded-xl p-2">
      <div className="px-4 py-3">
      <span className="text-primary font-bold text-xs tracking-widest font-headline uppercase">GENEL</span>
      </div>
      {/*  Toggle Item: Sound Effects  */}
      <div className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-high rounded-xl transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
      </div>
      <div>
      <p className="font-medium text-on-surface">Ses Efektleri</p>
      <p className="text-xs text-on-surface-variant">Test sırasında geri bildirim seslerini çal.</p>
      </div>
      </div>
      <div className="relative inline-flex items-center cursor-pointer">
      <input checked="" className="sr-only peer" type="checkbox"/ />
      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      </div>
      </div>
      {/*  Toggle Item: Dark Mode  */}
      <div className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-high rounded-xl transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
      </div>
      <div>
      <p className="font-medium text-on-surface">Karanlık Mod</p>
      <p className="text-xs text-on-surface-variant">Göz yorgunluğunu azaltmak için koyu renkler kullan.</p>
      </div>
      </div>
      <div className="relative inline-flex items-center cursor-pointer">
      <input checked="" className="sr-only peer" type="checkbox"/ />
      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      </div>
      </div>
      {/*  Dropdown Item: Language  */}
      <div className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-high rounded-xl transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="language">language</span>
      </div>
      <div>
      <p className="font-medium text-on-surface">Dil: Türkçe</p>
      <p className="text-xs text-on-surface-variant">Uygulama arayüz dili.</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </div>
      </div>
      {/*  Accessibility Group  */}
      <div className="bg-surface-container-low rounded-xl p-2">
      <div className="px-4 py-3">
      <span className="text-primary font-bold text-xs tracking-widest font-headline uppercase">ERİŞİLEBİLİRLİK</span>
      </div>
      <div className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-high rounded-xl transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="accessibility_new">accessibility_new</span>
      </div>
      <div>
      <p className="font-medium text-on-surface">Erişilebilirlik Yardımı</p>
      <p className="text-xs text-on-surface-variant">Renkli görme bozuklukları için optimize edilmiş modlar.</p>
      </div>
      </div>
      <div className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox"/ />
      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
      </div>
      </div>
      </div>
      {/*  Information Group  */}
      <div className="bg-surface-container-low rounded-xl p-2">
      <div className="px-4 py-3">
      <span className="text-primary font-bold text-xs tracking-widest font-headline uppercase">BİLGİ VE YASAL</span>
      </div>
      <a className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-high rounded-xl transition-colors group" href="#">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="info">info</span>
      </div>
      <p className="font-medium text-on-surface">Hakkında</p>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </a>
      <a className="flex items-center justify-between px-4 py-4 hover:bg-surface-container-high rounded-xl transition-colors group" href="#">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
      </div>
      <p className="font-medium text-on-surface">Kullanım Koşulları</p>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
      </a>
      </div>
      {/*  Destructive Action  */}
      <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-error-container text-on-error-container font-bold rounded-xl transition-transform active:scale-95 mb-12">
      <span className="material-symbols-outlined" data-icon="logout">logout</span>
                      Oturumu Kapat
                  </button>
      </div>
      {/*  Visual Decoration / Spectrum Graphic  */}
      <div className="mt-8 opacity-20 relative h-32 w-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 blur-3xl opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 rounded-full border-4 border-primary/20 animate-pulse"></div>
      </div>
      </div>
      </main>
      {/*  Bottom Navigation Shell  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)] rounded-t-[2rem]">
      <button className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all Active:scale-95 duration-300 ease-in-out">
      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Test</span>
      </button>
      <button className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all Active:scale-95 duration-300 ease-in-out">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Geçmiş</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#0b1326] rounded-2xl px-5 py-2 transition-all Active:scale-95 duration-300 ease-in-out">
      <span className="material-symbols-outlined" data-icon="settings" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Bilgi</span>
      </button>
      </nav>
    </>
  );
}
