// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sonuç Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SonucEkraniProps {}

export function SonucEkrani(props: SonucEkraniProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <nav className="bg-[#0b1326] flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto bg-gradient-to-b from-[#131b2e] to-transparent">
      <div className="text-2xl font-black text-[#adc6ff] tracking-tight font-headline">Renk Koru</div>
      <div className="flex items-center gap-4">
      <button className="text-[#dae2fd] opacity-70 hover:opacity-80 transition-opacity scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined">leaderboard</span>
      </button>
      <button className="text-[#dae2fd] opacity-70 hover:opacity-80 transition-opacity scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 max-w-lg mx-auto w-full">
      {/*  Celebration Header  */}
      <div className="text-center mb-10">
      <div className="inline-flex items-center justify-center p-3 rounded-full bg-secondary/10 text-secondary mb-4">
      <span className="material-symbols-outlined text-4xl" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
      </div>
      <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Test Tamamlandı!</h1>
      <p className="text-on-surface-variant text-lg">Mükemmel bir performans sergilediniz.</p>
      </div>
      {/*  Score Display (Clinical Precision Card)  */}
      <div className="w-full bg-surface-container-low rounded-[2rem] p-8 mb-8 relative overflow-hidden text-center">
      {/*  Tonal Layering Instead of Borders  */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
      <div className="text-on-surface-variant font-label text-sm uppercase tracking-widest mb-2">TOPLAM SKOR</div>
      <div className="font-headline text-7xl font-black text-primary tracking-tighter mb-4">100 Puan</div>
      {/*  Achievement Badge  */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 text-secondary border border-secondary/10 backdrop-blur-sm">
      <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
      <span className="font-bold text-sm">%100 Başarı Oranı</span>
      </div>
      </div>
      {/*  Detail Grid  */}
      <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-outline-variant/15">
      <div className="flex flex-col items-center">
      <span className="text-on-surface-variant text-xs mb-1">Süre</span>
      <div className="flex items-center gap-1.5 text-on-surface font-semibold">
      <span className="material-symbols-outlined text-primary text-sm">timer</span>
      <span>01:45 dk</span>
      </div>
      </div>
      <div className="flex flex-col items-center">
      <span className="text-on-surface-variant text-xs mb-1">Doğruluk</span>
      <div className="flex items-center gap-1.5 text-on-surface font-semibold">
      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
      <span>10/10</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Feedback Card  */}
      <div className="w-full bg-surface-container-highest rounded-xl p-6 mb-10 flex items-start gap-4">
      <div className="bg-primary/10 p-2 rounded-lg text-primary">
      <span className="material-symbols-outlined">psychology</span>
      </div>
      <div>
      <h3 className="font-headline font-bold text-on-surface mb-1">Harika iş!</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">
                          Renk algınız standartların üzerinde görünüyor. Spektrumlar arası geçişleri yakalama hızınız profesyonel düzeyde.
                      </p>
      </div>
      </div>
      {/*  Actions  */}
      <div className="w-full flex flex-col gap-4">
      <button className="w-full min-h-[64px] bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#0b1326] rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-[0.96] transition-transform duration-300">
      <span className="material-symbols-outlined">replay</span>
                      Tekrar Oyna
                  </button>
      <button className="w-full min-h-[64px] bg-surface-container-highest text-on-surface rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-[0.96] transition-transform duration-300">
      <span className="material-symbols-outlined">home</span>
                      Ana Sayfaya Dön
                  </button>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)] rounded-t-[2rem]">
      <button className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all">
      <span className="material-symbols-outlined">visibility</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">Test</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#0b1326] rounded-2xl px-5 py-2 scale-95 duration-300 ease-in-out">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">Geçmiş</span>
      </button>
      <button className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all">
      <span className="material-symbols-outlined">info</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">Bilgi</span>
      </button>
      </nav>
      {/*  Subtle Background Elements for Asymmetry  */}
      <div className="fixed top-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </>
  );
}
