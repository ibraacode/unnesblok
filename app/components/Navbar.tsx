"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="bg-brand-yellow border-b-4 border-black fixed top-0 left-0 right-0 z-[999] px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo + Icon */}
        <Link
          href="/"
          className="cursor-pointer transform hover:scale-105 transition-transform flex items-center shrink-0"
        >
          <div className="bg-brand-panel border-[3px] border-black px-3 py-1.5 rounded-xl shadow-[0_4px_0_#000] flex items-center gap-2">
            {/* Logo image — diwarnai kuning via CSS filter */}
            <img
              src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png"
              alt="UNNESBLOK Logo"
              width={28}
              height={28}
              className="w-6 h-6 md:w-7 md:h-7 logo-yellow object-contain"
              loading="eager"
            />
            <span className="text-brand-yellow font-stumble text-xl md:text-2xl tracking-wider">
              UNNES
            </span>
            <span className="text-white font-stumble text-xl md:text-2xl tracking-wider">
              BLOK
            </span>
          </div>
        </Link>

        {/* Desktop Nav — sama seperti sebelumnya */}
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

        {/* Right Cluster */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Profile */}
          <div className="relative cursor-pointer flex items-center bg-black/10 p-1 rounded-full border-2 border-black shadow-[0_2px_0_#000]">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-brand-yellow">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-brand-yellow mt-1"
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

          {/* ⋮ (desktop) */}
          <button className="hidden md:block bg-black/20 hover:bg-black/30 border-2 border-black p-1.5 rounded-xl text-black font-bold">
            ⋮
          </button>

          {/* Burger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black bg-white/80 hover:bg-white p-2 rounded-xl border-2 border-black font-bold shadow-[0_3px_0_#000] active:shadow-[0_1px_0_#000] active:translate-y-[2px] transition-all"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
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
              className="font-stumble text-lg text-white px-3 py-2 bg-black/10 hover:bg-black/20 rounded-lg nav-link flex justify-between items-center transition-colors"
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