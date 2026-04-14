// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Oyun Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OyunEkraniProps {}

export function OyunEkrani(props: OyunEkraniProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="bg-[#0b1326] dark:bg-[#0b1326] bg-gradient-to-b from-[#131b2e] to-transparent sticky top-0 z-50">
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
      {/*  Game Content Canvas  */}
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-6 py-8 flex flex-col gap-10">
      {/*  Progress Header  */}
      <div className="space-y-4">
      <div className="flex justify-between items-end">
      <div className="space-y-1">
      <p className="text-on-surface-variant font-label text-sm tracking-wider">TEST AŞAMASI</p>
      <h1 className="text-3xl font-headline font-extrabold text-on-surface">Soru 1/10</h1>
      </div>
      <div className="text-primary font-headline font-bold text-xl">10%</div>
      </div>
      <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full w-[10%] bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500"></div>
      </div>
      </div>
      {/*  Main Test Layout  */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/*  Left: Ishihara Plate Section  */}
      <div className="lg:col-span-7 flex flex-col items-center gap-8">
      <div className="relative group">
      {/*  Glass Background for clinical focus  */}
      <div className="absolute -inset-8 bg-surface-container-low rounded-full blur-3xl opacity-50"></div>
      {/*  The Plate  */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-surface-container-lowest p-6 shadow-2xl flex items-center justify-center overflow-hidden">
      {/*  Ishihara Decorative Image  */}
      <div className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of an Ishihara color blindness test plate with varying shades of green and orange dots forming the number 7 clinical sharpness" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASDXH-ORVOwGiTYH_ouEFCiXYdjWx7-9-UDa5UAxluy3tgtc8BUmp5vaCz06hpuhtl-eR10v0oYCnmRP1q6Z6ERvW7f0lO7Ul6eaCuzQmw2eZ4QopIDjiWco-8GE6klJTJI7aqIwX5i7lu3yaLAuj3t1MoXS_4xhGp6i-KwrbXr_0BOLBcJmTzyYSuC2rl7MwWO7ke6GG7hsC7vR-vEXbEYJeXMin1sfY08gSsc7ePYXmPN-Y6qKl14wvT7ERYQG1kxQAeX1h34B8')"}}>
      </div>
      {/*  Overlay for clinical feel  */}
      <div className="absolute inset-0 border-[16px] border-surface-container-lowest rounded-full pointer-events-none"></div>
      </div>
      </div>
      {/*  Status Labels  */}
      <div className="flex gap-4">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/15">
      <span className="material-symbols-outlined text-secondary text-sm" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
      <span className="text-xs font-label font-semibold text-on-surface uppercase tracking-widest">Klinik Doğruluk</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/15">
      <span className="material-symbols-outlined text-primary text-sm" data-icon="visibility" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
      <span className="text-xs font-label font-semibold text-on-surface uppercase tracking-widest">Ishihara Modu</span>
      </div>
      </div>
      </div>
      {/*  Right: Input Panel Section  */}
      <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="bg-surface-container-low rounded-[2rem] p-8 shadow-xl">
      <div className="mb-8">
      <div className="text-center pb-4">
      <span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">Cevabınızı Girin</span>
      </div>
      {/*  Answer Display  */}
      <div className="h-24 bg-surface-container-highest rounded-2xl flex items-center justify-center border-b-2 border-primary">
      <span className="text-5xl font-headline font-black text-on-primary-fixed tracking-tighter">—</span>
      </div>
      </div>
      {/*  Numeric Keyboard Bento  */}
      <div className="grid grid-cols-3 gap-3">
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">1</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">2</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">3</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">4</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">5</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">6</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">7</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">8</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">9</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">Göremiyorum</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest hover:bg-surface-bright text-on-surface text-2xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">0</button>
      <button className="h-16 flex items-center justify-center bg-surface-container-highest/50 hover:bg-error-container/20 text-error text-xl font-headline font-bold rounded-2xl transition-all active:scale-95 duration-200">Sil</button>
      </div>
      {/*  Action Buttons  */}
      <div className="mt-8">
      <button className="w-full h-16 bg-gradient-to-br from-[#adc6ff] to-[#4d8eff] text-[#002e6a] font-headline font-extrabold text-xl rounded-2xl shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.96] duration-300">
                                  Gönder
                              </button>
      </div>
      </div>
      <div className="px-4 text-center">
      <p className="text-on-surface-variant text-xs leading-relaxed opacity-60">
                              En iyi sonuçlar için ekran parlaklığınızın %50'nin üzerinde olduğundan ve gece modunun kapalı olduğundan emin olun.
                          </p>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar Suppressed for Task-Focused Screen (Test)  */}
      {/*  As per Shell Visibility & Relevance: Hide nav shell on Task-Focused Screens  */}
    </>
  );
}
