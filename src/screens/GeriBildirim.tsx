// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Geri Bildirim
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GeriBildirimProps {}

export function GeriBildirim(props: GeriBildirimProps) {
  return (
    <>
      {/*  Game Background (Simulated)  */}
      <main className="relative w-full h-screen flex flex-col items-center justify-center p-6">
      {/*  Top Nav Anchor  */}
      <header className="fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-[#131b2e] to-transparent">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-xl mx-auto">
      <div className="text-2xl font-black text-[#adc6ff] tracking-tight font-headline">Renk Koru</div>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-[#adc6ff] hover:opacity-80 transition-opacity cursor-pointer scale-95 active:scale-90 transition-transform duration-300">leaderboard</span>
      <span className="material-symbols-outlined text-[#adc6ff] hover:opacity-80 transition-opacity cursor-pointer scale-95 active:scale-90 transition-transform duration-300">settings</span>
      </div>
      </div>
      </header>
      {/*  Simulated Game Canvas  */}
      <div className="text-center mb-12">
      <div className="text-label-md opacity-60 mb-2 font-medium tracking-widest uppercase">Soru 4 / 15</div>
      <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">Hangi numara plakada gizli?</h2>
      {/*  Ishihara Plate Simulation  */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-surface-container-lowest flex items-center justify-center overflow-hidden border-8 border-surface-container-low shadow-2xl">
      <div className="w-full h-full opacity-40 grayscale" data-alt="Abstract colorful circular pattern resembling a medical color blindness test plate with varying dot sizes and vibrant hues." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXT2KuMVbcNFRMgvBjkD7CxS30dLOtPVRBGZpSmVcxYLMEbcT80yoMUvsjqz3kLIqpd4ZXhB5LWLTBzfO8vLgWE4vvwKptgjfpUt938fHZcwLIruevVjzP6CHnPxNvSSNf5QMi8GAyclYbEN-WFV_CmGCwR6WI8_2qWzJPfSrtPNF--oN2g2VQ9cS97U7r_TdgMcGqpafdQT7QJOP5LwUpZT8WkBTPMw92vY0CDoieW-tgRGCc5LtrIu8txFfxFKWQuBDE6HpLRHE')", backgroundSize: "cover"}}></div>
      <div className="absolute font-headline text-8xl font-black text-primary/20">74</div>
      </div>
      </div>
      {/*  Answer Grid  */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
      <div className="bg-surface-container-high p-6 rounded-xl text-center font-bold text-2xl border border-transparent hover:border-primary/30 transition-all cursor-pointer">71</div>
      <div className="bg-surface-container-high p-6 rounded-xl text-center font-bold text-2xl border border-primary/50 bg-primary/10 text-primary">74</div>
      <div className="bg-surface-container-high p-6 rounded-xl text-center font-bold text-2xl border border-transparent hover:border-primary/30 transition-all cursor-pointer">24</div>
      <div className="bg-surface-container-high p-6 rounded-xl text-center font-bold text-2xl border border-transparent hover:border-primary/30 transition-all cursor-pointer">Hiçbiri</div>
      </div>
      {/*  OVERLAY: Success Feedback Modal  */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-surface/40 backdrop-blur-sm">
      {/*  Modal Content  */}
      <div className="relative w-full max-w-lg bg-glass rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-outline-variant/10 flex flex-col items-center text-center">
      {/*  Feedback Icon (Check Mark)  */}
      <div className="mb-8 relative">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-secondary to-on-secondary-fixed-variant rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(74,225,118,0.3)]">
      <span className="material-symbols-outlined text-on-secondary text-5xl md:text-7xl" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div>
      {/*  Decorative Particles  */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 -left-6 w-2 h-2 bg-secondary opacity-50 rounded-full"></div>
      </div>
      {/*  Text Content  */}
      <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-secondary mb-4 tracking-tight">Doğru!</h1>
      <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xs md:max-w-sm">
                          Mükemmel görüş! Renk kontrastını başarıyla ayırt ettin.
                      </p>
      {/*  Action Button  */}
      <button className="group relative w-full py-5 px-8 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center gap-3 text-on-primary font-bold text-xl overflow-hidden transition-all active:scale-95 duration-300">
      <span>Sıradaki Soru</span>
      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
      {/*  Shine Effect  */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
      {/*  Secondary Info  */}
      <div className="mt-6 flex items-center gap-2 text-secondary/80 font-medium">
      <span className="material-symbols-outlined text-sm">stars</span>
      <span className="text-sm tracking-wide">+100 Puan Kazanıldı</span>
      </div>
      </div>
      </div>
      {/*  Bottom NavBar Anchor  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#131b2e]/80 backdrop-blur-xl border-t border-[#424754]/15 shadow-[0_-10px_40px_rgba(218,226,253,0.06)] rounded-t-[2rem] md:hidden">
      <div className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer">
      <span className="material-symbols-outlined">visibility</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Test</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer">
      <span className="material-symbols-outlined">history</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Geçmiş</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#dae2fd] opacity-60 px-5 py-2 hover:bg-[#222a3d] rounded-2xl transition-all cursor-pointer">
      <span className="material-symbols-outlined">info</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-wide">Bilgi</span>
      </div>
      </nav>
      </main>
    </>
  );
}
