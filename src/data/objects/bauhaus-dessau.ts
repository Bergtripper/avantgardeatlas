import { ArchivalObject } from '../../types/atlas';

export const bauhausDessauObject: ArchivalObject = {
  id: 'obj-bauhaus-dessau',
  title: 'Bauhaus Complex Dessau',
  creator: 'Walter Gropius',
  year: 1926,
  movementId: 'bauhaus',
  category: 'architecture',
  medium: 'Reinforced concrete frame, steel sash windows, float glass curtain wall',
  location: 'Dessau, Germany',
  dimensions: '32,000 sq m floor area',
  description: 'A multi-wing school complex composed of differentiated volumes for workshops, teaching, administration, communal spaces, and housing, with the workshop block distinguished by an extensive glazed curtain wall.'
  significance: 'The purpose-built Dessau home of the Bauhaus and a key expression of the school’s evolving relationship between architecture, pedagogy, workshops, and modern construction.'
  provenance: {
    description: { sourceIds: ['bauhaus-archiv-history'], status: 'documented' },
    significance: { sourceIds: ['bauhaus-archiv-history'], status: 'documented' },
  },
  graphicType: 'bauhaus-building'
};
