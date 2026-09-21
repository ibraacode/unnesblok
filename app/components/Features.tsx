import Button3D from "./ui/Button3D";

const features = [
  {
    emoji: "🎮",
    title: "MABAR SERU",
    desc: "Sesi main bareng tiap minggu — dari obby, horror, sampe competitive. Cocok buat cari temen se-server.",
    color: "bg-brand-yellow",
    text: "text-black",
  },
  {
    emoji: "⚡",
    title: "SCRIPTING & DEV",
    desc: "Belajar Lua, bikin map, share asset, dan kolaborasi project Roblox Studio bareng developer lain.",
    color: "bg-brand-blue",
    text: "text-white",
  },
  {
    emoji: "🏆",
    title: "EVENT & TURNAMEN",
    desc: "Tournament internal, game jam, dan showcase project. Menang hadiah, portofolio, & networking.",
    color: "bg-brand-purple",
    text: "text-white",
  },
];

export default function Features() {
  return (
    <section
      id="pembuat"
      className="bg-brand-blue py-16 md:py-24 px-4 relative border-b-4 border-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-white border-[3px] border-black px-4 py-1.5 rounded-xl mb-4 shadow-[0_4px_0_#000] rotate-[1deg]">
            <span className="font-stumble-sm text-black text-sm">
              ✨ KEGIATAN KOMUNITAS
            </span>
          </div>
          <h2 className="font-stumble text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            APA YANG KITA <span className="text-brand-yellow">LAKUIN?</span>
          </h2>
          <p className="font-extrabold text-sm md:text-base text-white/90 max-w-xl mx-auto mt-4 uppercase tracking-wider">
            Tiga pilar utama yang bikin UNNES Roblox Community jadi tempat
            nongkrong digital favorit.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} ${f.text} border-4 border-black rounded-3xl p-6 md:p-8 shadow-[0_10px_0_#000] transform hover:-translate-y-2 hover:rotate-1 transition-transform`}
            >
              <div className="text-5xl md:text-6xl mb-4 drop-shadow-lg">
                {f.emoji}
              </div>
              <h3 className="font-stumble text-2xl md:text-3xl mb-3">
                {f.title}
              </h3>
              <p className="font-bold text-sm md:text-base leading-relaxed opacity-95">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button3D href="/store" variant="yellow" size="lg">
            🛒 INTIP TOKO KAMI
          </Button3D>
        </div>
      </div>
    </section>
  );
}