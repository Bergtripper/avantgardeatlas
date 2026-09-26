import { ArchivalObject } from '../../types/atlas';

export const secessionBuildingObject: ArchivalObject = {
  id: 'obj-secession-building',
  title: 'Secession Exhibition Building',
  creator: 'Joseph Maria Olbrich',
  year: 1898,
  movementId: 'vienna-secession',
  category: 'architecture',
  medium: 'White plaster, gilded wrought iron laurel leaves, limestone',
  location: 'Vienna, Austria',
  dimensions: 'Exhibition pavilion with 9 m dome',
  description: 'A compact white exhibition pavilion organized around clear geometric masses and crowned by its distinctive gilded laurel dome, designed as the new association’s own venue for contemporary art.'
  significance: 'The purpose-built home of the Vienna Secession and a central architectural statement of the association’s break with the conservative Künstlerhaus and its commitment to new exhibition practices.',
  provenance: {
    description: { sourceIds: ['vienna-secession-history'], status: 'documented' },
    significance: { sourceIds: ['vienna-secession-history'], status: 'documented' },
  },
  graphicType: 'secession-building'
};
