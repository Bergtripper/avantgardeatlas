import { ArchivalObject } from '../../types/atlas';

export const redBlueChairObject: ArchivalObject = {
  id: 'obj-red-blue-chair',
  title: 'Red and Blue Chair (Rood-blauwe stoel)',
  creator: 'Gerrit Rietveld',
  year: 1918,
  movementId: 'de-stijl',
  category: 'furniture',
  medium: 'Painted beechwood, plywood, primary oil lacquer',
  location: 'Utrecht, Netherlands',
  dimensions: '88 × 66 × 83 cm',
  description: 'Constructed from standardized square-section beech laths and two sheets of plywood. Parts do not interlock with traditional dovetails; they overlap and extend into space.',
  significance: 'A key De Stijl design in which independent linear members and planar surfaces turn furniture into an abstract spatial composition rather than a conventionally enclosed mass.',
  provenance: {
    description: {
      sourceIds: ['moma-de-stijl-term'],
      status: 'editorial-synthesis',
    },
    significance: {
      sourceIds: ['moma-de-stijl-term'],
      status: 'documented',
    },
  },
  graphicType: 'rietveld-chair'
};
