"use client";

import Button3D from "./ui/Button3D";

export default function Hero() {
  return (
    <section
      id="mainkan"
      className="relative w-full min-h-[60vh] md:min-h-[75vh] bg-brand-purple overflow-hidden flex flex-col items-center justify-center py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.etsystatic.com/48715412/r/il/0c337f/6862234890/il_fullxfull.6862234890_7842.jpg"
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
            🎮 KOMUNITAS ROBLOX UNNES
          </span>
        </div>

        {/* Title */}
        <h1 className="font-stumble text-4xl sm:text-6xl md:text-7xl leading-[1.05] mb-4">
          <span className="block text-white">UNNES</span>
          <span className="block text-brand-yellow">ROBLOX COMMUNITY</span>
        </h1>

        {/* Subtitle */}
        <p className="font-extrabold text-sm md:text-lg text-white uppercase tracking-wider max-w-2xl mx-auto mb-10 text-shadow-soft">
          Tempat ngumpulnya anak UNNES & kreator Roblox buat Mabar, Diskusi
          Scripting, dan ikut Event seru bareng!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button3D
            href="https://discord.gg/Rq4VcAzqX"
            external
            variant="yellow"
            size="xl"
            className="w-full sm:w-auto"
          >
            🎮 GABUNG DISCORD
          </Button3D>
          <Button3D
            href="https://www.linkedin.com/groups/40978052"
            external
            variant="blue"
            size="xl"
            className="w-full sm:w-auto"
          >
            💼 JOIN LINKEDIN GROUP
          </Button3D>
        </div>
        
      </div>
    </section>
  );
}