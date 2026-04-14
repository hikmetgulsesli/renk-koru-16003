// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumProps {}

export function BosDurum(props: BosDurumProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="bg-[#0b1326] dark:bg-[#0b1326] bg-gradient-to-b from-[#131b2e] to-transparent fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
      <div className="text-2xl font-black text-[#adc6ff] tracking-tight font-headline">Renk Koru</div>
      <div className="flex items-center gap-4">
      <button className="text-[#adc6ff] hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform duration-300">
      <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
      </button>
      <button className="text-[#adc6ff] hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform duration-300">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </nav>
      </header>
      {/*  Main Canvas  */}
      <main className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
      {/*  Background Ambient Accents  */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      {/*  Empty State Container  */}
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-8">
      {/*  Visual Graphic Anchor (Clinical/Editorial Style)  */}
      <div className="relative group">
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
      <div className="relative w-48 h-48 bg-surface-container-low rounded-full flex items-center justify-center border border-outline-variant/15">
      {/*  Glassmorphism Ring  */}
      <div className="absolute inset-4 rounded-full border border-outline-variant/10 backdrop-blur-sm"></div>
      <span className="material-symbols-outlined text-8xl text-outline-variant/40" data-icon="history" style={{fontVariationSettings: "'wght' 200"}}>history</span>
      {/*  Floating Data Points Decoration  */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-secondary/40 rounded-full"></div>
      <div className="absolute bottom-8 left-4 w-2 h-2 bg-primary/40 rounded-full"></div>
      </div>
      </div>
      {/*  Content  */}
      <div className="space-y-4">
      <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">
                          Henüz bir test yapmadın.
                      </h1>
      <p className="font-body text-on-surface-variant leading-relaxed text-lg opacity-80">
                          Renk görüşünü profesyonel klinik standartlarda test etmek ve sonuçlarını kaydetmek için hemen başla!
                      </p>
      </div>
      {/*  Primary CTA  */}
      <div className="w-full pt-4">
      <button className="group relative w-full h-[64px] rounded-xl overflow-hidden transition-all duration-300 active:scale-95 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#adc6ff] to-[#4d8eff]"></div>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="relative font-headline font-bold text-[#0b1326] text-lg flex items-center justify-center gap-3">
      <span className="material-symbols-outlined" data-icon="play_circle" style={{fontVariationSettings: "'FILL' 1"}}>play_circle</span>
                              İlk Testine Başla
                          </span>
      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)] rounded-t-[2rem]">
      {/*  Tab: Test  */}
      <a className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all font-['Inter'] text-[10px] font-medium tracking-wide" href="#">
      <span className="material-symbols-outlined text-2xl mb-1" data-icon="visibility">visibility</span>
                  Test
              </a>
      {/*  Tab: Geçmiş (Active State)  */}
      <a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#0b1326] rounded-2xl px-5 py-2 Active: scale-95 duration-300 ease-in-out font-['Inter'] text-[10px] font-medium tracking-wide" href="#">
      <span className="material-symbols-outlined text-2xl mb-1" data-icon="history" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
                  Geçmiş
              </a>
      {/*  Tab: Bilgi  */}
      <a className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all font-['Inter'] text-[10px] font-medium tracking-wide" href="#">
      <span className="material-symbols-outlined text-2xl mb-1" data-icon="info">info</span>
                  Bilgi
              </a>
      </nav>
    </>
  );
}
