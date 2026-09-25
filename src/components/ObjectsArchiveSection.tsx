import React, { useState } from 'react';
import { ArchivalObject, MovementId } from '../types/atlas';
import { ArchivalVectorPlate } from './ArchivalVectorPlate';

interface ObjectsArchiveSectionProps {
  objects: ArchivalObject[];
  onSelectMovement: (id: MovementId) => void;
}

export const ObjectsArchiveSection: React.FC<ObjectsArchiveSectionProps> = ({
  objects,
  onSelectMovement
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedObject, setSelectedObject] = useState<ArchivalObject | null>(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'graphic', label: 'Graphic' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'art', label: 'Art' },
    { id: 'typography', label: 'Typography' },
    { id: 'photography', label: 'Photography' }
  ];

  const eras = [
    { id: 'all', label: 'All Eras' },
    { id: '1890-1910', label: '1890—1910', start: 1890, end: 1910 },
    { id: '1910-1920', label: '1910—1920', start: 1910, end: 1920 },
    { id: '1920-1930', label: '1920—1930', start: 1920, end: 1930 },
    { id: '1930-1940', label: '1930—1940', start: 1930, end: 1940 }
  ];

  // Filtering
  const filteredObjects = objects.filter((obj) => {
    if (selectedCategory !== 'all' && obj.category !== selectedCategory) return false;
    if (selectedEra !== 'all') {
      const eraConfig = eras.find((e) => e.id === selectedEra);
      if (eraConfig && (obj.year < eraConfig.start! || obj.year > eraConfig.end!)) {
        return false;
      }
    }
    return true;
  });

  return (
    <section id="archive-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[#E5E4DF] bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#121212] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              Section 03 // Material Culture & Design Artifacts
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#121212] mt-1">
              Objects Archive
            </h2>
          </div>
          <div className="text-xs font-mono text-[#525252] max-w-md">
            An editorial archive spanning posters, tubular chairs, machine temples, and revolutionary publications. Filter by discipline or historical decade to observe the tectonic transformation.
          </div>
        </div>

        {/* Filter Controls (Segmented functional controls conforming to design constitution) */}
        <div className="mb-8 space-y-3">
          {/* Discipline Filters */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-[#E5E4DF]">
            <span className="font-mono text-xs text-[#8C8C88] uppercase mr-3 shrink-0">Discipline:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap transition-colors border ${
                  selectedCategory === cat.id
                    ? 'bg-[#121212] text-white border-[#121212] font-semibold'
                    : 'bg-[#FAF9F5] text-[#555] border-[#DDDCD4] hover:border-[#121212]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Time Filters */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            <span className="font-mono text-xs text-[#8C8C88] uppercase mr-3 shrink-0">Timeframe:</span>
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`px-3 py-1 text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap transition-colors border ${
                  selectedEra === era.id
                    ? 'bg-[#121212] text-white border-[#121212] font-semibold'
                    : 'bg-[#FAF9F5] text-[#555] border-[#DDDCD4] hover:border-[#121212]'
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex justify-between items-center text-xs font-mono text-[#737373] mb-6">
          <span>SHOWING {filteredObjects.length} CATALOGUED ARTIFACTS</span>
          <span>CLICK ANY ITEM TO INSPECT ARCHIVAL PROVENANCE</span>
        </div>

        {/* Editorial Wall Grid (Asymmetric rhythm rather than generic card clones) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredObjects.map((obj) => (
            <div
              key={obj.id}
              onClick={() => setSelectedObject(obj)}
              className="border border-[#E5E4DF] bg-[#FAF9F5] p-5 flex flex-col justify-between cursor-pointer group hover:border-[#121212] transition-all hover:shadow-xs"
            >
              <div>
                {/* Visual Vector Plate View */}
                <div className="overflow-hidden border border-[#EAE9E4] bg-white mb-4">
                  <ArchivalVectorPlate
                    type={obj.graphicType}
                    className="w-full h-48 transition-transform duration-300 group-hover:scale-[1.02]"
                    showLabels={false}
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-[#737373] mb-1">
                  <span className="uppercase tracking-wider">{obj.category}</span>
                  <span>{obj.year}</span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#121212] group-hover:underline">
                  {obj.title}
                </h3>

                <div className="text-xs text-[#525252] font-mono mt-1">
                  {obj.creator} · {obj.location}
                </div>

                <p className="mt-3 text-xs text-[#555] leading-relaxed line-clamp-3">
                  {obj.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E4DF] flex items-center justify-between text-[11px] font-mono">
                <span className="uppercase text-[#8C8C88]">{obj.movementId}</span>
                <span className="text-[#121212] font-medium group-hover:text-[#D82B2B]">
                  Inspect Plate →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Object Detail Modal / Drawer */}
        {selectedObject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-[#FAF9F5] border border-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedObject(null)}
                className="absolute top-6 right-6 font-mono text-sm uppercase px-3 py-1 border border-[#121212] hover:bg-[#121212] hover:text-white cursor-pointer transition-colors"
              >
                Close ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">
                <div className="md:col-span-6">
                  <ArchivalVectorPlate
                    type={selectedObject.graphicType}
                    className="w-full h-80"
                    caption={`${selectedObject.title} (${selectedObject.year})`}
                  />
                  {selectedObject.dimensions && (
                    <div className="mt-2 font-mono text-[11px] text-[#737373]">
                      DIMENSIONS: {selectedObject.dimensions}
                    </div>
                  )}
                </div>

                <div className="md:col-span-6">
                  <div className="font-mono text-xs uppercase text-[#8C8C88] tracking-wider">
                    {selectedObject.category} // {selectedObject.year}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121212] mt-1">
                    {selectedObject.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#525252] mt-1 font-mono">
                    {selectedObject.creator}
                  </div>
                  <div className="text-xs text-[#737373] mt-0.5">
                    Location: {selectedObject.location}
                  </div>

                  <div className="my-4 border-t border-[#E5E4DF] pt-4">
                    <span className="font-mono text-[10px] text-[#8C8C88] uppercase block mb-1">
                      Medium & Technique
                    </span>
                    <p className="text-xs text-[#333] font-mono">
                      {selectedObject.medium}
                    </p>
                  </div>

                  <div className="my-4">
                    <span className="font-mono text-[10px] text-[#8C8C88] uppercase block mb-1">
                      Historical Significance
                    </span>
                    <p className="text-xs text-[#444] leading-relaxed">
                      {selectedObject.significance}
                    </p>
                  </div>

                  <p className="text-xs text-[#555] leading-relaxed">
                    {selectedObject.description}
                  </p>

                  <div className="mt-8 pt-4 border-t border-[#E5E4DF] flex items-center justify-between">
                    <button
                      onClick={() => {
                        const mId = selectedObject.movementId;
                        setSelectedObject(null);
                        onSelectMovement(mId);
                      }}
                      className="font-mono text-xs font-semibold px-4 py-2 bg-[#121212] text-white hover:bg-[#333] cursor-pointer"
                    >
                      Explore {selectedObject.movementId.toUpperCase()} Monograph →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
