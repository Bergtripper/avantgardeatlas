import { ConnectionStory } from '../../types/atlas';

export const leCorbusierNotBauhausStory: ConnectionStory = {
  id: 'story-le-corbusier-not-bauhaus',
  title: 'Why Le Corbusier Was Not Bauhaus',
  subtitle: 'Mediterranean Classical Order vs Central European Collective Guild',
  timeframe: '1920—1932',
  summary: 'Though often grouped together under the umbrella of modernism, Le Corbusier and the Bauhaus possessed deeply divergent intellectual DNA, political philosophies, and formal ideals.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The German Industrial Guild Tradition',
      yearRange: '1907—1919',
      text: 'The Bauhaus grew directly out of the Deutscher Werkbund and medieval cathedral Bauhütten (lodges): a democratic guild of collaborative artisans and engineers working collectively for municipal housing and mass production without an individual star cult.',
      graphicCue: 'The Medieval Crafts Collective',
      focalMovements: ['deutscher-werkbund', 'bauhaus']
    },
    {
      stepNumber: 2,
      subtitle: 'The Parisian Solitary Polymath',
      yearRange: '1918—1923',
      text: 'Le Corbusier (Charles-Édouard Jeanneret) operated in Paris as a solitary painter, polemicist, and classical scholar. Rooted in French rationalism and Auguste Perret’s structural concrete, he viewed architecture not as a collective guild trade, but as a monumental plastic art governed by ancient Latin proportion and regulating lines.',
      graphicCue: 'French Cartesian Rigor',
      focalMovements: ['purism']
    },
    {
      stepNumber: 3,
      subtitle: 'Divergent Architectural Metaphors',
      yearRange: '1923—1927',
      text: 'The Bauhaus designed from the inside out: functional spatial volumes arranged dynamically according to internal programs. Le Corbusier designed from the outside in: pure, crystalline white volumetric prisms (prismes purs) set into nature on slender pilotis, guided by the Golden Ratio.',
      graphicCue: 'Inside-Out Function vs Classical Prism',
      focalMovements: ['purism', 'bauhaus']
    },
    {
      stepNumber: 4,
      subtitle: 'Clash at the Weissenhof Estate',
      yearRange: '1927',
      text: 'At the 1927 Werkbund exhibition in Stuttgart, Mies van der Rohe invited both Gropius and Le Corbusier to construct houses. Corbusier’s two residences—with their soaring pilotis, polychromatic interior walls, and cantilevered balconies—stole international attention, showcasing French lyrical monumentality against German functional restraint.',
      graphicCue: 'Weissenhofsiedlung Showdown',
      focalMovements: ['international-style', 'bauhaus']
    },
    {
      stepNumber: 5,
      subtitle: 'Convergence in the International Style',
      yearRange: '1932',
      text: 'It was only when American curators Hitchcock and Philip Johnson organized the 1932 MoMA exhibition that Le Corbusier, Gropius, Mies, and Oud were flattened into a single stylistic doctrine: "The International Style." In reality, their foundational philosophical paths remained completely distinct.',
      graphicCue: 'The Canonical Fusion',
      focalMovements: ['international-style']
    }
  ]
};
