import { ArchivalObject } from '../../types/atlas';

export const hotelTasselObject: ArchivalObject = {
  id: 'obj-hotel-tassel',
  title: 'Hôtel Tassel Staircase',
  creator: 'Victor Horta',
  year: 1893,
  movementId: 'art-nouveau',
  category: 'architecture',
  medium: 'Exposed structural cast iron, wrought iron, mosaic tile floor, painted walls',
  location: 'Brussels, Belgium',
  dimensions: 'Interior townhouse stairwell',
  description: 'Slender cast-iron columns blooming into delicate vegetal tendrils that flow uninterrupted into painted wall murals and curving floor mosaics.',
  significance: 'A key early Art Nouveau interior in which architecture, ironwork, stained glass, mosaics, and decorative detail were conceived as an integrated ensemble.',
  provenance: {
    description: {
      sourceIds: ['vam-art-nouveau-international-style'],
      status: 'editorial-synthesis',
    },
    significance: {
      sourceIds: ['vam-art-nouveau-international-style'],
      status: 'documented',
    },
  },
  graphicType: 'secession-building'
};
