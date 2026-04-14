// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Seviye Seçimi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SeviyeSecimiProps {}

export function SeviyeSecimi(props: SeviyeSecimiProps) {
  return (
    <>
      {/*  Top Navigation Bar  */}
      <header className="bg-[#0b1326] dark:bg-[#0b1326] sticky top-0 z-50 bg-gradient-to-b from-[#131b2e] to-transparent">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
      <div className="text-2xl font-black text-[#adc6ff] tracking-tight font-headline">Renk Koru</div>
      <div className="flex items-center gap-4">
      <button className="material-symbols-outlined text-[#adc6ff] hover:opacity-80 transition-opacity active:scale-90 duration-300" data-icon="leaderboard">leaderboard</button>
      <button className="material-symbols-outlined text-[#adc6ff] hover:opacity-80 transition-opacity active:scale-90 duration-300" data-icon="settings">settings</button>
      </div>
      </nav>
      </header>
      <main className="max-w-screen-xl mx-auto px-6 pt-8">
      {/*  Hero Section  */}
      <header className="mb-12">
      <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">Test Seviyesi Seçin</h1>
      <p className="text-on-surface-variant text-lg max-w-2xl">Vizyonunuzu en hassas şekilde ölçmek için size en uygun zorluk derecesini belirleyin.</p>
      </header>
      {/*  Difficulty Selection Cards  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {/*  Easy Card  */}
      <div className="group flex flex-col bg-surface-container-low rounded-[2rem] p-8 transition-all hover:bg-surface-container-high border border-outline-variant/10">
      <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-secondary text-4xl" data-icon="palette">palette</span>
      </div>
      <h3 className="font-headline text-2xl font-bold mb-3">Kolay</h3>
      <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                          Temel renk paletleri ve yüksek kontrastlı geçişler. Renk körlüğü başlangıç taraması için uygundur.
                      </p>
      <div className="mt-auto">
      <button className="w-full h-16 rounded-xl bg-surface-container-highest text-on-surface font-semibold active-scale hover:bg-surface-bright transition-colors">
                              Seç
                          </button>
      </div>
      </div>
      {/*  Medium Card (Recommended)  */}
      <div className="group relative flex flex-col bg-surface-container rounded-[2rem] p-8 transition-all border-2 border-primary/30 shadow-[0_0_40px_rgba(173,198,255,0.1)]">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-primary-container rounded-full text-on-primary text-xs font-bold tracking-widest uppercase">
                          Önerilen
                      </div>
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-primary text-4xl" data-icon="medical_services">medical_services</span>
      </div>
      <h3 className="font-headline text-2xl font-bold mb-3">Orta</h3>
      <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                          Standart klinik testler ve Ishihara bazlı plakalar. Günlük hayattaki renk algısını simüle eder.
                      </p>
      <div className="mt-auto">
      <button className="w-full h-16 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold active-scale shadow-lg shadow-primary/20">
                              Seç
                          </button>
      </div>
      </div>
      {/*  Hard Card  */}
      <div className="group flex flex-col bg-surface-container-low rounded-[2rem] p-8 transition-all hover:bg-surface-container-high border border-outline-variant/10">
      <div className="w-16 h-16 rounded-2xl bg-tertiary-container/10 flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-tertiary text-4xl" data-icon="blur_on">blur_on</span>
      </div>
      <h3 className="font-headline text-2xl font-bold mb-3">Zor</h3>
      <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                          Mikro-ton değişimleri ve düşük doygunluklu gradyanlar. Profesyonel düzeyde hassasiyet ölçümü.
                      </p>
      <div className="mt-auto">
      <button className="w-full h-16 rounded-xl bg-surface-container-highest text-on-surface font-semibold active-scale hover:bg-surface-bright transition-colors">
                              Seç
                          </button>
      </div>
      </div>
      </div>
      {/*  Info Area: D-15 Standards  */}
      <section className="bg-surface-container-low rounded-[2.5rem] overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
      <div className="md:w-1/2 p-8 md:p-12">
      <h2 className="font-headline text-3xl font-bold mb-6">Nasıl Test Ediyoruz?</h2>
      <div className="space-y-6">
      <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-secondary text-xl" data-icon="check_circle">check_circle</span>
      </div>
      <div>
      <h4 className="font-bold mb-1">D-15 Klinik Standartları</h4>
      <p className="text-on-surface-variant text-sm">Farnsworth-Munsell D-15 dikotomik test algoritmasını kullanarak kesin sonuçlar üretiyoruz.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-xl" data-icon="science">science</span>
      </div>
      <div>
      <h4 className="font-bold mb-1">Bilimsel Yaklaşım</h4>
      <p className="text-on-surface-variant text-sm">Spektral duyarlılık eğrileri baz alınarak hazırlanan dijital renk plakaları.</p>
      </div>
      </div>
      </div>
      </div>
      <div className="md:w-1/2 min-h-[300px] relative">
      <img alt="Color testing abstract" className="absolute inset-0 w-full h-full object-cover" data-alt="Abstract macro shot of vibrant colored paint swirls merging in water with soft cinematic lighting and bokeh effects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSkmqaYoNF5f_rqtZ7XZDMQuG7KXtgcoctVeu58_U2BkVz8zXXg3zWnxVqDFwgfb8ST0clCdTyz7iO3WzXVCQXWa0AKb01sbyOTQC0JcMNVLU2NmFePI6bkwkIUvVtbKOvuWLcnBWz-OecJska2JDsDNasvcMmqGEquz582GegwoX8qsrcuFKZAZuPQfC_RY77jwU5lsuiQxYEzeXrEEazBbM2Ptn46TaohwNzN450C5OCnWSeKJzygsoODaRi2Z_bJ8VnkPYMfPc"/ />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent md:block hidden"></div>
      </div>
      </div>
      </section>
      </main>
      {/*  Bottom Navigation Bar  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)] rounded-t-[2rem]">
      <div className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer">
      <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">Test</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">Geçmiş</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer">
      <span className="material-symbols-outlined" data-icon="info">info</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide mt-1">Bilgi</span>
      </div>
      </nav>
    </>
  );
}
