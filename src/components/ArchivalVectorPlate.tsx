import React from 'react';
import { KeyWork } from '../types/atlas';

interface ArchivalVectorPlateProps {
  type: KeyWork['svgGraphicType'];
  className?: string;
  caption?: string;
  showLabels?: boolean;
}

export const ArchivalVectorPlate: React.FC<ArchivalVectorPlateProps> = ({
  type,
  className = 'w-full h-64',
  caption,
  showLabels = true
}) => {
  const renderSvg = () => {
    switch (type) {
      case 'bauhaus-building':
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#F4F4EE] select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bauhaus-window-grid" width="12" height="12" patternUnits="userSpaceOnUse">
                <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#222222" strokeWidth="0.5" strokeOpacity="0.35" />
              </pattern>
            </defs>
            {/* Background coordinate grid */}
            <line x1="20" y1="310" x2="580" y2="310" stroke="#121212" strokeWidth="1.5" />
            <text x="30" y="332" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">ELEVATION 01 // DESSAU WORKSHOP WING — W. GROPIUS 1925—1926</text>
            
            {/* Main glass curtain-wall facade */}
            <rect x="70" y="70" width="310" height="240" fill="#E8E8E0" stroke="#121212" strokeWidth="1.5" />
            <rect x="75" y="75" width="300" height="230" fill="url(#bauhaus-window-grid)" />
            
            {/* Structural reinforced concrete floor slabs behind glass */}
            <line x1="75" y1="130" x2="375" y2="130" stroke="#121212" strokeWidth="2.5" />
            <line x1="75" y1="190" x2="375" y2="190" stroke="#121212" strokeWidth="2.5" />
            <line x1="75" y1="250" x2="375" y2="250" stroke="#121212" strokeWidth="2.5" />
            
            {/* Connecting bridge over street */}
            <rect x="380" y="90" width="160" height="85" fill="#DDDCD4" stroke="#121212" strokeWidth="1.5" />
            <line x1="380" y1="115" x2="540" y2="115" stroke="#121212" strokeWidth="1" />
            <line x1="380" y1="145" x2="540" y2="145" stroke="#121212" strokeWidth="1" />
            
            {/* Support pilotis beneath bridge */}
            <line x1="420" y1="175" x2="420" y2="310" stroke="#121212" strokeWidth="4" />
            <line x1="490" y1="175" x2="490" y2="310" stroke="#121212" strokeWidth="4" />
            
            {/* Iconic vertical "BAUHAUS" lettering along wall */}
            <g transform="translate(45, 95)">
              <text x="0" y="0" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">B</text>
              <text x="0" y="24" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">A</text>
              <text x="0" y="48" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">U</text>
              <text x="0" y="72" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">H</text>
              <text x="0" y="96" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">A</text>
              <text x="0" y="120" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">U</text>
              <text x="0" y="144" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="16" fill="#D82B2B" letterSpacing="0.2em">S</text>
            </g>
            
            {/* Dimension marks */}
            <line x1="60" y1="70" x2="60" y2="310" stroke="#999" strokeWidth="0.75" strokeDasharray="3 3" />
            <text x="25" y="195" fontFamily="IBM Plex Mono" fontSize="8" fill="#737373" transform="rotate(-90 25 195)">21.40 m</text>
          </svg>
        );

      case 'rietveld-chair':
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#F4F4EE] select-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="310" x2="560" y2="310" stroke="#121212" strokeWidth="1" strokeOpacity="0.4" />
            <text x="40" y="335" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">SPATIAL PROJECTION // G. RIETVELD 1918 — NEO-PLASTIC PLANES</text>

            {/* Blue Seat Plane */}
            <polygon points="180,210 370,180 430,225 240,260" fill="#2563EB" stroke="#121212" strokeWidth="1.5" />
            
            {/* Red Backrest Plane canted back */}
            <polygon points="270,90 350,75 300,280 220,295" fill="#DC2626" stroke="#121212" strokeWidth="1.5" />

            {/* Black Frame Rails with Yellow End-Grain Caps */}
            {/* Front vertical upright */}
            <rect x="210" y="190" width="14" height="120" fill="#18181B" stroke="#121212" strokeWidth="1" />
            <rect x="210" y="190" width="14" height="6" fill="#FACC15" />

            {/* Back vertical upright */}
            <rect x="380" y="150" width="14" height="160" fill="#18181B" stroke="#121212" strokeWidth="1" />
            <rect x="380" y="150" width="14" height="6" fill="#FACC15" />

            {/* Left horizontal armrest */}
            <polygon points="160,170 380,135 390,145 170,180" fill="#18181B" stroke="#121212" strokeWidth="1" />
            <polygon points="160,170 170,170 170,180 160,180" fill="#FACC15" />

            {/* Right horizontal armrest */}
            <polygon points="230,220 450,185 460,195 240,230" fill="#18181B" stroke="#121212" strokeWidth="1" />
            <polygon points="450,185 460,185 460,195 450,195" fill="#FACC15" />

            {/* Diagonal brace */}
            <line x1="200" y1="280" x2="390" y2="210" stroke="#18181B" strokeWidth="8" strokeLinecap="square" />

            {/* Orthogonal coordinate axes */}
            <g transform="translate(480, 80)">
              <line x1="0" y1="60" x2="0" y2="0" stroke="#737373" strokeWidth="1" />
              <line x1="0" y1="60" x2="60" y2="60" stroke="#737373" strokeWidth="1" />
              <line x1="0" y1="60" x2="-40" y2="90" stroke="#737373" strokeWidth="1" />
              <text x="65" y="64" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373">X</text>
              <text x="-4" y="-8" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373">Y</text>
              <text x="-52" y="98" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373">Z</text>
            </g>
          </svg>
        );

      case 'tatlin-tower':
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#F4F4EE] select-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="310" x2="560" y2="310" stroke="#121212" strokeWidth="1" />
            <text x="40" y="335" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">TECTONIC STRUCTURAL MODEL // TATLIN 1920 — 23.5° INCLINATION</text>

            {/* Central tilted structural spine (23.5 degrees) */}
            <line x1="260" y1="310" x2="390" y2="40" stroke="#DC2626" strokeWidth="4" />
            <line x1="280" y1="310" x2="410" y2="40" stroke="#DC2626" strokeWidth="2.5" />

            {/* Outer twin-helix spiral framework */}
            <path d="M 180 310 C 200 240, 420 250, 410 200 C 400 160, 260 170, 310 120 C 350 80, 400 80, 410 40" 
                  fill="none" stroke="#18181B" strokeWidth="3" />
            <path d="M 210 310 C 240 260, 450 270, 440 210 C 430 170, 300 180, 340 130 C 370 90, 420 90, 425 40" 
                  fill="none" stroke="#18181B" strokeWidth="1.5" strokeDasharray="4 2" />

            {/* Steel lattice diagonals */}
            <g stroke="#18181B" strokeWidth="1" strokeOpacity="0.6">
              <line x1="200" y1="280" x2="350" y2="270" />
              <line x1="220" y1="250" x2="380" y2="240" />
              <line x1="260" y1="210" x2="390" y2="190" />
              <line x1="280" y1="170" x2="370" y2="160" />
              <line x1="300" y1="130" x2="390" y2="120" />
              <line x1="330" y1="90" x2="400" y2="80" />
            </g>

            {/* Inner suspended geometric glass volumes */}
            {/* Cube (Legislature, 1 rev/year) */}
            <rect x="250" y="230" width="70" height="60" fill="#E5E7EB" fillOpacity="0.8" stroke="#121212" strokeWidth="1.5" transform="rotate(-15 285 260)" />
            {/* Pyramid (Executive, 1 rev/month) */}
            <polygon points="310,170 345,130 380,170" fill="#CBD5E1" fillOpacity="0.8" stroke="#121212" strokeWidth="1.5" transform="rotate(-12 345 150)" />
            {/* Cylinder (Information / Radio, 1 rev/day) */}
            <rect x="345" y="80" width="40" height="35" rx="5" fill="#E2E8F0" fillOpacity="0.9" stroke="#121212" strokeWidth="1.5" transform="rotate(-8 365 97)" />

            {/* Dynamic red diagonal wedge */}
            <polygon points="120,120 180,100 150,150" fill="#DC2626" />
            <text x="110" y="90" fontFamily="IBM Plex Mono" fontSize="9" fill="#DC2626" fontWeight="600">FAKTURA // ТЕКТОНИКА</text>
          </svg>
        );

      case 'malevich-square':
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#FAF9F5] select-none" xmlns="http://www.w3.org/2000/svg">
            <text x="40" y="335" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">NON-OBJECTIVE SPACE // K. MALEVICH 1915 — THE ZERO OF FORM</text>

            {/* Infinite cosmic white canvas with floating geometric planes */}
            {/* The Black Square */}
            <rect x="220" y="80" width="160" height="160" fill="#0A0A0A" />

            {/* Subtle Suprematist companion vectors */}
            {/* Red Dynamic Bar */}
            <rect x="130" y="190" width="130" height="24" fill="#DC2626" transform="rotate(-28 195 202)" />
            {/* Blue Cross Bar */}
            <rect x="360" y="70" width="90" height="16" fill="#1D4ED8" transform="rotate(35 405 78)" />
            <rect x="395" y="35" width="20" height="90" fill="#1D4ED8" transform="rotate(35 405 78)" />
            {/* Pale ochre circle */}
            <circle cx="450" cy="240" r="30" fill="#FACC15" fillOpacity="0.9" />

            {/* Corner Icon Placement Marker */}
            <path d="M 520 40 L 560 40 L 560 80" fill="none" stroke="#737373" strokeWidth="1" strokeDasharray="3 3" />
            <text x="460" y="35" fontFamily="IBM Plex Mono" fontSize="8" fill="#737373">EASTERN APSE CORNER</text>
          </svg>
        );

      case 'mondrian-grid':
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#FAF9F5] select-none" xmlns="http://www.w3.org/2000/svg">
            <text x="40" y="335" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">NEO-PLASTIC EQUILIBRIUM // P. MONDRIAN — ASYMMETRICAL CARTESIAN GRID</text>

            {/* Outer canvas frame */}
            <rect x="160" y="50" width="280" height="250" fill="#FFFFFF" stroke="#121212" strokeWidth="2" />

            {/* Primary Red Major Block */}
            <rect x="250" y="50" width="190" height="170" fill="#DC2626" />

            {/* Primary Blue Corner Block */}
            <rect x="160" y="250" width="60" height="50" fill="#2563EB" />

            {/* Primary Yellow Edge Block */}
            <rect x="380" y="250" width="60" height="50" fill="#FACC15" />

            {/* Heavy Black Dividing Rules */}
            <line x1="250" y1="50" x2="250" y2="300" stroke="#121212" strokeWidth="10" />
            <line x1="160" y1="220" x2="440" y2="220" stroke="#121212" strokeWidth="10" />
            <line x1="160" y1="250" x2="440" y2="250" stroke="#121212" strokeWidth="6" />
            <line x1="220" y1="220" x2="220" y2="300" stroke="#121212" strokeWidth="6" />
            <line x1="380" y1="220" x2="380" y2="300" stroke="#121212" strokeWidth="8" />
          </svg>
        );

      case 'corbusier-villa':
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#F4F4EE] select-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="310" x2="560" y2="310" stroke="#121212" strokeWidth="1.5" />
            <text x="40" y="335" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">VILLA SAVOYE // LE CORBUSIER 1929 — THE FIVE POINTS OF ARCHITECTURE</text>

            {/* Roof Solarium Curves */}
            <path d="M 230 110 C 230 80, 290 80, 290 110 L 370 110 C 370 90, 420 90, 420 110 Z" fill="#E2E8F0" stroke="#121212" strokeWidth="1.5" />

            {/* Pristine White Box (First Floor) */}
            <rect x="120" y="110" width="360" height="100" fill="#FFFFFF" stroke="#121212" strokeWidth="2" />

            {/* Continuous Ribbon Windows (Fenêtres en longueur) */}
            <rect x="120" y="145" width="360" height="24" fill="#334155" stroke="#121212" strokeWidth="1" />
            <line x1="180" y1="145" x2="180" y2="169" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="240" y1="145" x2="240" y2="169" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="300" y1="145" x2="300" y2="169" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="360" y1="145" x2="360" y2="169" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="420" y1="145" x2="420" y2="169" stroke="#E2E8F0" strokeWidth="1" />

            {/* Ground floor curved glass for car turning radius (Minimum 1927 Voisin car circle) */}
            <path d="M 180 210 L 180 290 C 180 310, 340 310, 360 210 Z" fill="#CBD5E1" stroke="#121212" strokeWidth="1.5" />

            {/* Reinforced concrete pilotis lifting building off ground */}
            <line x1="140" y1="210" x2="140" y2="310" stroke="#121212" strokeWidth="5" />
            <line x1="220" y1="210" x2="220" y2="310" stroke="#121212" strokeWidth="5" />
            <line x1="300" y1="210" x2="300" y2="310" stroke="#121212" strokeWidth="5" />
            <line x1="380" y1="210" x2="380" y2="310" stroke="#121212" strokeWidth="5" />
            <line x1="460" y1="210" x2="460" y2="310" stroke="#121212" strokeWidth="5" />

            {/* Architectural Callout Annotations */}
            <text x="140" y="85" fontFamily="IBM Plex Mono" fontSize="8" fill="#737373">01 PILOTIS</text>
            <text x="440" y="85" fontFamily="IBM Plex Mono" fontSize="8" fill="#737373">02 ROOF GARDEN</text>
            <text x="490" y="160" fontFamily="IBM Plex Mono" fontSize="8" fill="#737373">04 RIBBON WINDOW</text>
          </svg>
        );

      case 'tschichold-poster':
      default:
        return (
          <svg viewBox="0 0 600 360" className="w-full h-full bg-[#FAF9F5] select-none" xmlns="http://www.w3.org/2000/svg">
            <text x="40" y="335" fontFamily="IBM Plex Mono" fontSize="9" fill="#737373" letterSpacing="0.1em">ELEMENTARY TYPOGRAPHY // J. TSCHICHOLD 1928 — ASYMMETRIC SIGNAL SYSTEM</text>

            {/* Vermilion Signal Circle */}
            <circle cx="170" cy="130" r="55" fill="#E11D48" />

            {/* Stark Horizontal Black Bars */}
            <rect x="140" y="195" width="340" height="12" fill="#0A0A0A" />
            <rect x="220" y="215" width="260" height="4" fill="#0A0A0A" />

            {/* Bold Grotesk Headline */}
            <text x="140" y="105" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="28" fill="#0A0A0A" letterSpacing="-0.02em">
              DIE NEUE
            </text>
            <text x="140" y="140" fontFamily="IBM Plex Sans" fontWeight="700" fontSize="28" fill="#0A0A0A" letterSpacing="-0.02em">
              TYPOGRAPHIE
            </text>

            {/* Asymmetric DIN Margin & Body Blocks */}
            <text x="240" y="240" fontFamily="IBM Plex Mono" fontSize="10" fill="#121212" letterSpacing="0.05em">
              KOLUMNE A // RECHTWINKLIGKEIT
            </text>
            <text x="240" y="258" fontFamily="IBM Plex Sans" fontSize="11" fill="#525252">
              Keine Zierleisten. Keine Symmetrie.
            </text>
            <text x="240" y="274" fontFamily="IBM Plex Sans" fontSize="11" fill="#525252">
              Funktionale Information für das Maschinenzeitalter.
            </text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative border border-[#E5E4DF] bg-[#FAF9F5] flex flex-col ${className}`}>
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        {renderSvg()}
      </div>
      {caption && showLabels && (
        <div className="px-4 py-2 border-t border-[#E5E4DF] bg-[#F7F6F2] flex items-center justify-between text-xs text-[#737373]">
          <span className="font-mono text-[11px] uppercase tracking-wider">{caption}</span>
          <span className="font-mono text-[10px] text-[#A8A79E]">ARCHIVE ID: {type.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};
