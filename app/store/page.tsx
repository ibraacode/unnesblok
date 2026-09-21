import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button3D from "../components/ui/Button3D";

const products = [
  {
    id: 1,
    emoji: "🪙",
    name: "1000 Robux Top-Up",
    price: "Rp 15.000",
    category: "KOIN",
    color: "bg-brand-yellow",
    text: "text-black",
  },
  {
    id: 2,
    emoji: "📦",
    name: "Game Asset Pack",
    price: "Rp 25.000",
    category: "DEV",
    color: "bg-brand-blue",
    text: "text-white",
  },
  {
    id: 3,
    emoji: "✨",
    name: "Exclusive Item Skin",
    price: "Rp 10.000",
    category: "ITEM",
    color: "bg-brand-purple",
    text: "text-white",
  },
  {
    id: 4,
    emoji: "🎨",
    name: "UI Kit Roblox Studio",
    price: "Rp 20.000",
    category: "DEV",
    color: "bg-brand-yellow",
    text: "text-black",
  },
  {
    id: 5,
    emoji: "🎵",
    name: "Sound Pack Premium",
    price: "Rp 12.000",
    category: "ASSET",
    color: "bg-brand-blue",
    text: "text-white",
  },
  {
    id: 6,
    emoji: "🏆",
    name: "VIP Server Pass",
    price: "Rp 30.000",
    category: "PASS",
    color: "bg-brand-purple",
    text: "text-white",
  },
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="pt-12 md:pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-brand-yellow border-[3px] border-black px-4 py-1.5 rounded-xl mb-4 shadow-[0_4px_0_#000] rotate-[-1deg]">
              <span className="font-stumble-sm text-black text-sm">
                🛒 TOKO DIGITAL
              </span>
            </div>
            <h1 className="font-stumble text-4xl sm:text-5xl md:text-6xl text-white mb-3">
              TOKO <span className="text-brand-yellow">UNNESBLOK</span>
            </h1>
            <p className="font-extrabold text-sm md:text-base text-gray-300 max-w-lg mx-auto uppercase tracking-wider">
              Katalog produk digital Roblox — koin, item, dan asset developer.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-brand-panel border-4 border-black rounded-3xl p-5 md:p-6 shadow-[0_10px_0_#000] hover:-translate-y-2 hover:rotate-1 transition-transform"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`${p.color} ${p.text} w-14 h-14 rounded-2xl border-[3px] border-black shadow-[0_4px_0_#000] flex items-center justify-center text-3xl`}
                  >
                    {p.emoji}
                  </div>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-lg bg-brand-dark text-gray-300 border-2 border-black">
                    {p.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-stumble-sm text-white text-lg md:text-xl mb-4 leading-tight">
                  {p.name}
                </h3>

                {/* Price + Button */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-stumble text-brand-yellow text-xl md:text-2xl">
                    {p.price}
                  </span>
                  <button className="btn-3d btn-3d-green text-black font-stumble-sm text-sm px-4 py-2 rounded-lg border-[3px] border-black uppercase tracking-wider hover:scale-105 active:scale-95">
                    BELI
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="font-extrabold text-sm text-gray-400 mb-4 uppercase tracking-wider">
              Ingin jual asset atau jadi seller?
            </p>
            <Button3D
              href="mailto:unnesblok@gmail.com"
              external
              variant="yellow"
              size="lg"
            >
              📧 HUBUNGI KAMI
            </Button3D>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}