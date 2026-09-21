import Button3D from "./ui/Button3D";

export default function Community() {
  return (
    <section
      id="info"
      className="relative py-16 md:py-24 px-4 overflow-hidden bg-brand-purple border-b-4 border-black"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-brand-yellow/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-brand-yellow border-[3px] border-black px-4 py-1.5 rounded-xl mb-6 shadow-[0_4px_0_#000] rotate-[-1deg]">
          <span className="font-stumble-sm text-black text-sm">
            🚀 JOIN THE SQUAD
          </span>
        </div>

        <h2 className="font-stumble text-3xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
          SIAP <span className="text-brand-yellow">NGUMPUL</span> BARENG?
        </h2>

        <p className="font-extrabold text-sm md:text-base text-white/90 max-w-xl mx-auto uppercase tracking-wider mb-10">
          Pilih channel favoritmu. Semua anak kampus dan kreator Roblox welcome
          di sini!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button3D
            href="https://discord.gg/"
            external
            variant="yellow"
            size="lg"
            className="w-full sm:w-auto"
          >
            💬 GABUNG DISCORD
          </Button3D>
          <Button3D
            href="https://www.linkedin.com/groups/"
            external
            variant="blue"
            size="lg"
            className="w-full sm:w-auto"
          >
            💼 JOIN LINKEDIN GROUP
          </Button3D>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href="mailto:unnesblok@gmail.com"
            className="group bg-brand-panel border-4 border-black rounded-2xl p-5 shadow-[0_7px_0_#000] hover:-translate-y-1 hover:rotate-1 transition-transform flex items-center gap-4"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-yellow border-[3px] border-black text-3xl shrink-0">
              📧
            </div>
            <div className="text-left">
              <div className="text-[10px] text-gray-400 font-extrabold tracking-widest uppercase">
                EMAIL
              </div>
              <div className="font-stumble-sm text-white text-sm md:text-base break-all">
                unnesblok@gmail.com
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/unnesblok"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-brand-panel border-4 border-black rounded-2xl p-5 shadow-[0_7px_0_#000] hover:-translate-y-1 hover:-rotate-1 transition-transform flex items-center gap-4"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-purple border-[3px] border-black text-3xl shrink-0">
              📸
            </div>
            <div className="text-left">
              <div className="text-[10px] text-gray-400 font-extrabold tracking-widest uppercase">
                INSTAGRAM
              </div>
              <div className="font-stumble-sm text-white text-sm md:text-base">
                @unnesblok
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}