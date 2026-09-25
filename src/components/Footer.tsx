import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#121212] bg-[#F5F4EE] py-16 px-4 sm:px-6 lg:px-12 text-[#121212]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono">
        <div className="md:col-span-4">
          <div className="text-sm font-bold tracking-tight text-[#121212] uppercase mb-2">
            AVANT-GARDE ATLAS 1890—1940
          </div>
          <p className="text-[#525252] leading-relaxed max-w-sm">
            An interactive digital atlas and editorial archive dedicated to the major artistic, architectural, graphic, and design movements of the early 20th century.
          </p>
          <div className="mt-4 text-[#8C8C88] text-[11px]">
            ARCHIVAL IDENTIFIER // AGA-2026-EU
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="font-bold uppercase tracking-wider text-[#121212] mb-2">
            Typographic Colophon
          </div>
          <p className="text-[#525252] leading-relaxed">
            Set in IBM Plex Sans (Grotesk) and IBM Plex Mono. Designed strictly under Swiss International Typographic principles with mathematical grids, asymmetry, and restrained primary accents.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="font-bold uppercase tracking-wider text-[#121212] mb-2">
            Canonical Coordinates
          </div>
          <ul className="text-[#525252] space-y-1">
            <li>Weimar / Dessau / Berlin (Bauhaus)</li>
            <li>Leiden / Utrecht (De Stijl)</li>
            <li>Moscow / Vitebsk (Constructivism)</li>
            <li>Paris / Poissy (Purism & Cubism)</li>
            <li>Como / Milan (Rationalism & Futurism)</li>
          </ul>
        </div>

        <div className="md:col-span-2 text-right">
          <div className="font-bold uppercase tracking-wider text-[#121212] mb-2">
            Curatorial Stance
          </div>
          <span className="text-[#525252] block">
            Form Follows Function
          </span>
          <span className="text-[#8C8C88] text-[10px] block mt-1">
            Zero Decorative Superfluity
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#DDDCD4] flex flex-col sm:flex-row justify-between items-center text-xs text-[#8C8C88] font-mono">
        <div>
          © 1890—1940 DIGITAL MONOGRAPH ARCHIVE. ALL CANONICAL MOVEMENTS DOCUMENTED.
        </div>
        <div className="mt-2 sm:mt-0">
          DESIGNED FOR CONTEMPORARY CULTURAL INSTITUTIONS
        </div>
      </div>
    </footer>
  );
};
