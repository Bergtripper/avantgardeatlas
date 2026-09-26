import { ArchivalObject } from '../../types/atlas';

export const knifeGrinderObject: ArchivalObject = {
  id: 'obj-knife-grinder',
  title: 'The Knife Grinder (Principle of Glittering)',
  creator: 'Kazimir Malevich',
  year: 1912,
  movementId: 'cubo-futurism',
  category: 'art',
  medium: 'Oil on canvas',
  location: 'Yale University Art Gallery, New Haven',
  dimensions: '79.5 × 66.5 cm',
  description: 'A figure working at a grinding wheel is broken into prismatic, repeated shapes that suggest the movement of hands, tools, pedal, and rotating machinery.'
  significance: 'A representative Cubo-Futurist work in which Malevich combined Cubist faceting with repeated forms used to suggest motion, machinery, and the experience of industrial labor.'
  provenance: {
    description: { sourceIds: ['moma-cubo-futurism-knife-grinder'], status: 'documented' },
    significance: { sourceIds: ['moma-cubo-futurism-knife-grinder'], status: 'documented' },
  },
  graphicType: 'malevich-square'
};
