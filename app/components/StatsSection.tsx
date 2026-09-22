import React from "react";

export default function StatsSection() {
  return (
    <section className="relative w-full animated-chevron-bg py-30 md:py-20 px-3 md:px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Top wavy */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 pointer-events-none">
  <svg
  className="block w-full h-16 md:h-24 text-brand-purple"
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
>
  {/* 1. Fill — bentuk tertutup */}
  <path
    d="M0,120 
       L0,60
       Q180,-40 360,60
       Q540,-40 720,60
       Q900,-40 1080,60
       Q1260,-40 1440,60
       L1440,120 Z"
    fill="currentColor"
    stroke="none"
  />

  {/* 2. Stroke — cuma lengkungan atas */}
  <path
    d="M0,60
       Q180,-40 360,60
       Q540,-40 720,60
       Q900,-40 1080,60
       Q1260,-40 1440,60"
    fill="none"
    stroke="#000"
    strokeWidth="8"
    strokeLinejoin="round"
    strokeLinecap="round"
    vectorEffect="non-scaling-stroke"
  />
</svg>
</div>

      {/* Content — cuma 3 kartu, sejajar di mobile */}
      <div className="relative z-20 w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {/* MEMBER */}
          <div className="btn-3d bg-white border-2 md:border-4 border-black rounded-2xl md:rounded-3xl p-3 md:p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-2xl md:text-5xl mb-1 md:mb-3">👥</div>
            <div className="font-stumble text-xl sm:text-3xl md:text-5xl text-black leading-none">
              N/A
            </div>
            <div className="mt-1 md:mt-3 font-body font-extrabold text-[9px] sm:text-xs md:text-sm text-black/70 uppercase tracking-wider md:tracking-widest">
              Member
            </div>
          </div>

          {/* EVENT / THN */}
          <div className="btn-3d btn-3d-blue border-2 md:border-4 border-black rounded-2xl md:rounded-3xl p-3 md:p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-2xl md:text-5xl mb-1 md:mb-3">🏆</div>
            <div className="font-stumble text-xl sm:text-3xl md:text-5xl text-white leading-none">
              N/A
            </div>
            <div className="mt-1 md:mt-3 font-body font-extrabold text-[9px] sm:text-xs md:text-sm text-white/90 uppercase tracking-wider md:tracking-widest">
              Event / Thn
            </div>
          </div>

          {/* PROJECT DEV */}
          <div className="btn-3d btn-3d-purple border-2 md:border-4 border-black rounded-2xl md:rounded-3xl p-3 md:p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-2xl md:text-5xl mb-1 md:mb-3">⚡</div>
            <div className="font-stumble text-xl sm:text-3xl md:text-5xl text-white leading-none">
              N/A
            </div>
            <div className="mt-1 md:mt-3 font-body font-extrabold text-[9px] sm:text-xs md:text-sm text-white/90 uppercase tracking-wider md:tracking-widest">
              Project Dev
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wavy */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10  pointer-events-none">
  <svg
  className="block w-full h-16 md:h-24 text-brand-blue"
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
>
  {/* 1. Fill — bentuk tertutup */}
  <path
    d="M0,120 
       L0,60
       Q180,-40 360,60
       Q540,-40 720,60
       Q900,-40 1080,60
       Q1260,-40 1440,60
       L1440,120 Z"
    fill="currentColor"
    stroke="none"
  />

  {/* 2. Stroke — cuma lengkungan atas */}
  <path
    d="M0,60
       Q180,-40 360,60
       Q540,-40 720,60
       Q900,-40 1080,60
       Q1260,-40 1440,60"
    fill="none"
    stroke="#000"
    strokeWidth="8"
    strokeLinejoin="round"
    strokeLinecap="round"
    vectorEffect="non-scaling-stroke"
  />
</svg>
</div>
    </section>
  );
}