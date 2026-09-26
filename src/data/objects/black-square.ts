import { ArchivalObject } from '../../types/atlas';

export const blackSquareObject: ArchivalObject = {
  id: 'obj-black-square',
  title: 'Black Suprematic Square',
  creator: 'Kazimir Malevich',
  year: 1915,
  movementId: 'suprematism',
  category: 'art',
  medium: 'Oil on linen canvas',
  location: 'Tretyakov Gallery, Moscow',
  dimensions: '79.5 × 79.5 cm',
  description: 'A black quadrilateral set against an off-white ground, reducing the image to a minimal relation between geometric form, surface, and surrounding field.',
  significance: 'An emblematic work of Suprematism and of Malevich’s attempt to establish a non-objective art based on geometric form and what he described as pure feeling or perception.',
  provenance: {
    description: { sourceIds: ['moma-suprematism'], status: 'editorial-synthesis' },
    significance: { sourceIds: ['moma-suprematism'], status: 'documented' },
  },
  graphicType: 'malevich-square'
};
