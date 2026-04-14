// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Giriş Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GirisEkraniProps {}

export function GirisEkrani(props: GirisEkraniProps) {
  return (
    <>
      {/*  Top Navigation Bar  */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1326] dark:bg-[#0b1326] bg-gradient-to-b from-[#131b2e] to-transparent">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
      <div className="text-2xl font-black text-[#adc6ff] tracking-tight font-headline">
                      Renk Koru
                  </div>
      <div className="flex items-center gap-4">
      <button className="text-[#dae2fd] opacity-70 hover:opacity-80 transition-opacity scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
      </button>
      <button className="text-[#dae2fd] opacity-70 hover:opacity-80 transition-opacity scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </nav>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-32 relative">
      {/*  Hero Background Glow  */}
      <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
      {/*  Central Aesthetic Visual (Ishihara-inspired abstract eye)  */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center mb-12">
      {/*  Abstract Dot Pattern Container  */}
      <div className="absolute inset-0 rounded-full surface-container-lowest overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-12 gap-1 w-full h-full opacity-60">
      {/*  Generating a pseudo-random looking dot pattern via background-image  */}
      <div className="col-span-full h-full w-full" data-alt="abstract composition of vibrant multi-colored dots of varying sizes forming an organic circular pattern reminiscent of a clinical color vision test plate" style={{backgroundImage: "radial-gradient(circle, #4ae176 2px, transparent 2.5px), radial-gradient(circle, #ff5451 1.5px, transparent 2px), radial-gradient(circle, #adc6ff 3px, transparent 3.5px)", backgroundSize: "15px 15px, 20px 20px, 25px 25px"}}></div>
      </div>
      </div>
      {/*  Central Focal Eye Detail  */}
      <div className="z-10 w-48 h-48 md:w-64 md:h-64 rounded-full glass-panel flex items-center justify-center border border-outline-variant/10 shadow-2xl">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary-container p-1 shadow-[0_0_50px_rgba(173,198,255,0.3)]">
      <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center overflow-hidden">
      <span className="material-symbols-outlined text-primary text-6xl md:text-8xl" data-icon="visibility" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Copy Section  */}
      <div className="text-center max-w-2xl z-20">
      <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight leading-tight">
                      Renkleri Keşfet, <span className="text-primary">Gözlerini Koru.</span>
      </h1>
      <p className="text-on-surface-variant text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-lg mx-auto">
                      Klinik hassasiyetle hazırlanmış modern renk körlüğü testleri ile görüşünüzü kontrol edin.
                  </p>
      </div>
      {/*  Primary CTA  */}
      <div className="w-full max-w-xs z-20">
      <button className="w-full h-16 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform duration-300">
                      Başla
                      <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
      </button>
      </div>
      {/*  Info Cards Bento Row  */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-16 z-20">
      <div className="surface-container-low p-5 rounded-xl border border-outline-variant/5">
      <div className="flex items-center gap-3 mb-2">
      <span className="material-symbols-outlined text-primary text-xl" data-icon="history">history</span>
      <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest font-label">Son Test</span>
      </div>
      <div className="text-on-surface font-headline font-bold text-lg">2 gün önce</div>
      </div>
      <div className="surface-container-low p-5 rounded-xl border border-outline-variant/5">
      <div className="flex items-center gap-3 mb-2">
      <span className="material-symbols-outlined text-secondary text-xl" data-icon="verified">verified</span>
      <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest font-label">Doğruluk</span>
      </div>
      <div className="text-on-surface font-headline font-bold text-lg">%100 Başarı</div>
      </div>
      </div>
      </main>
      {/*  Bottom Navigation Bar  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl rounded-t-[2rem] border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)]">
      <a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#0b1326] rounded-2xl px-5 py-2 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Test</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Geçmiş</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="info">info</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Bilgi</span>
      </a>
      </nav>
    </>
  );
}
