import { ArchivalObject } from '../../types/atlas';

export const pavillonEspritNouveauObject: ArchivalObject = {
  id: 'obj-pavillon-esprit-nouveau',
  title: 'Pavillon de l\'Esprit Nouveau',
  creator: 'Le Corbusier & Pierre Jeanneret',
  year: 1925,
  movementId: 'purism',
  category: 'architecture',
  medium: 'Steel frame, industrial glazing, smooth plaster, standardized furnishings',
  location: 'Paris, France (1925 Exposition des Arts Décoratifs)',
  dimensions: 'Full-scale prototype apartment cell (two levels with terrace)',
  description: 'A full-scale prototype dwelling presented at the 1925 Paris exposition, conceived as a standardized housing cell and furnished with industrially produced objects within a controlled modern interior.',
  significance: 'An important demonstration of Le Corbusier and Pierre Jeanneret’s effort to connect standardized housing, modern interiors, and mass-produced furnishings within the broader Purist and L’Esprit Nouveau program.',
  provenance: {
    description: { sourceIds: ['moma-purism'], status: 'editorial-synthesis' },
    significance: { sourceIds: ['moma-purism'], status: 'editorial-synthesis' },
  },
  graphicType: 'corbusier-villa'
};
