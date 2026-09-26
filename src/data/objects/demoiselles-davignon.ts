import { ArchivalObject } from '../../types/atlas';

export const demoisellesDavignonObject: ArchivalObject = {
  id: 'obj-demoiselles-davignon',
  title: 'Les Demoiselles d\'Avignon',
  creator: 'Pablo Picasso',
  year: 1907,
  movementId: 'cubism',
  category: 'art',
  medium: 'Oil on canvas',
  location: 'MoMA, New York',
  dimensions: '243.9 × 233.7 cm',
  description: 'Five nude figures are compressed into a shallow field of angular, fractured planes, creating a deliberately unstable relationship between figure, space, and viewer.'
  significance: 'A pivotal early work in Picasso’s development toward Cubism, widely discussed for its dramatic break with conventional composition and stable pictorial perspective.'
  provenance: {
    description: { sourceIds: ['moma-cubism'], status: 'documented' },
    significance: { sourceIds: ['moma-cubism'], status: 'documented' },
  },
  graphicType: 'malevich-square'
};
