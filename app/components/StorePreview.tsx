"use client";

import { useState, useEffect } from "react";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  buttonText: string;
}

const bannerData: BannerItem[] = [
  {
    id: 1,
    title: "ASSET DEV PACK!",
    subtitle: "ASSET DEVELOPER ROBLOX STUDIO SIAP PAKAI!",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
    buttonText: "BELI SEKARANG!",
  },
  {
    id: 2,
    title: "ITEM GAME EXCLUSIVE!",
    subtitle: "ITEM SKIN LIMITED DARI KOMUNITAS UNNESBLOK!",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    badge: "HOT",
    buttonText: "BELI SEKARANG!",
  },
];

export default function StorePreview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );

  return (
    <section
      id="toko"
      className="bg-brand-blue py-10 md:py-16 px-4 relative border-b-4 border-black"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center relative">
        {/* Section title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white border-[3px] border-black px-4 py-1.5 rounded-xl mb-3 shadow-[0_4px_0_#000] rotate-[-1deg]">
            <span className="font-stumble-sm text-black text-sm">
              🛒 TOKO DIGITAL
            </span>
          </div>
          <h2 className="font-stumble text-3xl sm:text-4xl md:text-5xl text-white">
            PROMO <span className="text-brand-yellow">SPESIAL!</span>
          </h2>
        </div>

        {/* Arrow Left */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-black p-3 md:p-4 rounded-full border-[3px] border-black shadow-[0_4px_0_#000] font-black text-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Previous"
        >
          ❮
        </button>

        {/* Carousel Card */}
        <div className="w-full max-w-2xl bg-brand-panel border-4 border-black rounded-3xl shadow-[0_10px_0_#000] overflow-hidden">
          {/* Top Section */}
          <div className="relative bg-gradient-to-b from-sky-400 to-blue-600 p-3 md:p-4 border-b-4 border-black">
            <div className="relative bg-white border-[3px] border-black rounded-2xl overflow-hidden shadow-inner h-48 md:h-64 flex items-center justify-center">
              <img
                src={bannerData[currentSlide].image}
                alt={bannerData[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-brand-yellow border-2 border-black px-3 py-1 rounded-xl text-black font-stumble-sm text-sm shadow-[0_2px_0_#000]">
                {bannerData[currentSlide].badge}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-brand-panel p-5 md:p-7 text-center">
            <h3 className="font-stumble text-2xl md:text-3xl text-brand-yellow mb-3">
              {bannerData[currentSlide].title}
            </h3>
            <p className="font-extrabold text-sm md:text-base text-white uppercase tracking-wider mb-6 text-shadow-soft">
              {bannerData[currentSlide].subtitle}
            </p>

            <button className="btn-3d btn-3d-yellow text-black font-stumble text-lg md:text-2xl px-6 md:px-8 py-3 rounded-xl border-[3px] border-black uppercase tracking-wider hover:scale-105 active:scale-95">
              {bannerData[currentSlide].buttonText}
            </button>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-5">
              {bannerData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3.5 h-3.5 rounded-full border-2 border-black transition-all ${
                    currentSlide === idx
                      ? "bg-brand-yellow scale-125 shadow-[0_2px_0_#000]"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Arrow Right */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-black p-3 md:p-4 rounded-full border-[3px] border-black shadow-[0_4px_0_#000] font-black text-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Next"
        >
          ❯
        </button>
      </div>
    </section>
  );
}