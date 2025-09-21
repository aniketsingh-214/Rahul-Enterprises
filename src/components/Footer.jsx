import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white mt-16 py-8 border-t border-slate-700/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-slate-900/40"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4 relative z-10">
        <div className="text-sm md:text-base font-medium bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent tracking-wide leading-relaxed max-w-4xl">
          ALL TYPES OF GRAPHICS STICKERS — WATER LABEL STICKER · VASIR FALIM ·
          BIKE SIDE BOX MATCHING STICKER
        </div>

        <div className="text-sm md:text-base text-slate-300 font-medium bg-slate-800/30 px-6 py-2 rounded-lg border border-slate-700/50 backdrop-blur-sm">
          📍 VILLAGE BHOODLI, CHOPANKI ROAD, NEAR KAMDHENU PAINT COMPANY,
          BHIWADI, RAJASTHAN, 301019
        </div>
        <div className="mt-3 pt-3 border-t border-slate-700/50 w-full max-w-2xl">
          <div className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold mx-2">
              Rahul Enterprises
            </span>
            — All rights reserved
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 opacity-50">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </footer>
  );
}
export default Footer;
