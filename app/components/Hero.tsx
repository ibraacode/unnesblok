"use client";

import Button3D from "./ui/Button3D";

export default function Hero() {
  return (
    <section
      id="mainkan"
      className="relative w-full min-h-[60vh] md:min-h-[75vh] bg-brand-purple overflow-hidden flex flex-col items-center justify-center border-b-4 border-black py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80"
          alt="UNNES Roblox Community Action"
          className="w-full h-full object-cover brightness-75 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/60 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Badge */}
        <div className="inline-block bg-brand-yellow border-[3px] border-black px-4 py-1.5 rounded-xl mb-6 shadow-[0_4px_0_#000] rotate-[-2deg]">
          <span className="font-stumble-sm text-black text-sm md:text-base">
            🎮 KOMUNITAS ROBLOX ANAK KAMPUS
          </span>
        </div>

        {/* Title */}
        <h1 className="font-stumble text-4xl sm:text-6xl md:text-7xl leading-[1.05] mb-4">
          <span className="block text-white">UNNES</span>
          <span className="block text-brand-yellow">ROBLOX COMMUNITY</span>
        </h1>

        {/* Subtitle */}
        <p className="font-extrabold text-sm md:text-lg text-white uppercase tracking-wider max-w-2xl mx-auto mb-10 text-shadow-soft">
          Tempat ngumpulnya anak kampus & kreator Roblox buat Mabar, Diskusi
          Scripting, dan ikut Event seru bareng!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button3D
            href="https://discord.gg/"
            external
            variant="yellow"
            size="xl"
            className="w-full sm:w-auto"
          >
            🎮 GABUNG DISCORD
          </Button3D>
          <Button3D
            href="https://www.linkedin.com/groups/"
            external
            variant="blue"
            size="xl"
            className="w-full sm:w-auto"
          >
            💼 JOIN LINKEDIN GROUP
          </Button3D>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
          {[
            { label: "MEMBER", value: "200+", color: "text-brand-yellow" },
            { label: "EVENT / THN", value: "12+", color: "text-white" },
            { label: "PROJECT DEV", value: "30+", color: "text-brand-yellow" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-brand-panel border-[3px] border-black rounded-2xl px-2 py-3 md:px-4 md:py-5 shadow-[0_5px_0_#000]"
            >
              <div className={`font-stumble text-xl md:text-3xl ${s.color}`}>
                {s.value}
              </div>
              <div className="text-[9px] md:text-xs text-gray-300 font-extrabold tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}