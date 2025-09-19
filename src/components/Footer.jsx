import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-12 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-2">
        <div className="text-sm">
          ALL TYPES OF GRAPHICS STICKERS — WATER LABEL STICKER · WASIR FALIM · BIKE SIDE BOX MATCHING STICKER
        </div>
        <div className="text-sm text-gray-300">
          VILLAGE BHOODLI, CHOPANKI ROAD, NEAR KAMDHENU PAINT COMPANY, BHIWADI, RAJASTHAN, 301019.
        </div>
        <div className="mt-1 text-sm text-gray-400">© {new Date().getFullYear()} Rahul Enterprises.</div>
      </div>
    </footer>
  );
}
export default Footer;
