"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#mainkan", label: "MAINKAN" },
  { href: "/#toko", label: "TOKO", badge: "2" },
  { href: "/#pembuat", label: "PEMBUAT KONTEN" },
  { href: "/#info", label: "INFO & TIPS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brand-yellow border-b-4 border-black sticky top-0 z-50 px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black bg-white/80 p-2 rounded-xl border-2 border-black font-bold"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <Link
            href="/"
            className="cursor-pointer transform hover:scale-105 transition-transform flex items-center"
          >
            <div className="bg-brand-panel border-[3px] border-black px-3 py-1.5 rounded-xl shadow-[0_4px_0_#000] flex items-center gap-1">
              <span className="text-brand-yellow font-stumble text-xl md:text-2xl tracking-wider">
                UNNES
              </span>
              <span className="text-white font-stumble text-xl md:text-2xl tracking-wider">
                BLOK
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-stumble text-lg lg:text-xl text-white hover:text-yellow-200 transition-colors nav-link flex items-center"
            >
              {l.label}
              {l.badge && (
                <span className="ml-1 bg-brand-red text-white font-bold text-xs px-1.5 py-0.5 rounded-full border border-black shadow-[0_2px_0_#000]">
                  {l.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* User + Menu */}
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer flex items-center bg-black/10 p-1 rounded-full border-2 border-black shadow-[0_2px_0_#000]">
            <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-brand-yellow">
              <svg
                className="w-6 h-6 text-brand-yellow mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-black shadow">
              2
            </div>
          </div>
          <button className="hidden md:block bg-black/20 hover:bg-black/30 border-2 border-black p-1.5 rounded-xl text-black font-bold">
            ⋮
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-3 pt-3 border-t-2 border-black/20 flex flex-col gap-2 pb-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-stumble text-lg text-white px-2 py-1 bg-black/10 rounded-lg nav-link flex justify-between items-center"
            >
              {l.label}
              {l.badge && (
                <span className="bg-brand-red text-white font-bold text-xs px-2 py-0.5 rounded-full border border-black">
                  {l.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}