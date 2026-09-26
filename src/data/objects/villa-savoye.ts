import { ArchivalObject } from '../../types/atlas';

export const villaSavoyeObject: ArchivalObject = {
  id: 'obj-villa-savoye',
  title: 'Villa Savoye ("Les Heures Claires")',
  creator: 'Le Corbusier & Pierre Jeanneret',
  year: 1929,
  movementId: 'international-style',
  category: 'architecture',
  medium: 'Reinforced concrete, smooth white stucco, horizontal steel ribbon glazing',
  location: 'Poissy, France',
  dimensions: 'Three-level suburban residence',
  description: 'A white rectilinear house raised on reinforced-concrete pilotis and organized around a ramped architectural promenade, with free plan, free facade, ribbon windows, and roof terrace.',
  significance: 'A major built demonstration of Le Corbusier’s Five Points of Architecture and one of the works displayed in connection with MoMA’s 1932 presentation of modern architecture.',
  provenance: {
    description: {
      sourceIds: ['moma-international-style-term'],
      status: 'documented',
    },
    significance: {
      sourceIds: ['moma-modern-architecture-1932', 'moma-international-style-term'],
      status: 'documented',
    },
  },
  graphicType: 'corbusier-villa'
};
