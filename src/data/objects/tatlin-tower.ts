import { ArchivalObject } from '../../types/atlas';

export const tatlinTowerObject: ArchivalObject = {
  id: 'obj-tatlin-tower',
  title: 'Monument to the Third International (Architectural Model)',
  creator: 'Vladimir Tatlin',
  year: 1920,
  movementId: 'constructivism',
  category: 'architecture',
  medium: 'Wood, steel wire, cardboard, glass models',
  location: 'Petrograd / Moscow, Soviet Russia',
  dimensions: 'Planned 400 m height (model 5 m)',
  description: 'An unbuilt monumental spiral project conceived as a dynamic steel-and-glass structure containing rotating geometric volumes for the institutions of the Third International.',
  significance: 'One of the best-known architectural propositions associated with early Soviet Constructivism, combining monumentality, engineering imagery, movement, and institutional function.',
  provenance: {
    description: {
      sourceIds: ['moma-constructivism'],
      status: 'editorial-synthesis',
    },
    significance: {
      sourceIds: ['moma-constructivism'],
      status: 'documented',
    },
  },
  graphicType: 'tatlin-tower'
};
