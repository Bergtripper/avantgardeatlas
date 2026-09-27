import { ConnectionStory } from '../../types/atlas';

export const leCorbusierNotBauhausStory: ConnectionStory = {
  id: 'story-le-corbusier-not-bauhaus',
  title: 'Why Le Corbusier Was Not Bauhaus',
  subtitle: 'Parallel Modernisms with Different Institutional Roots',
  timeframe: '1920—1932',
  summary: 'Le Corbusier and the Bauhaus are often grouped within interwar modernism, but they emerged from different institutional, artistic, and theoretical contexts. Their work converged on some formal problems while remaining distinct in authorship, pedagogy, and architectural argument.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The German Industrial Guild Tradition',
      yearRange: '1907—1919',
      text: 'The Bauhaus inherited important questions from German reform movements such as the Deutscher Werkbund and initially framed education around workshops, craft, and collective building. Its institutional structure differed from the practice of an independent architect-author, although the school itself changed considerably between 1919 and 1933.',
      graphicCue: 'The Medieval Crafts Collective',
      focalMovements: ['deutscher-werkbund', 'bauhaus'],
      provenance: {
        text: { sourceIds: ['werkbundarchiv-chronology', 'bauhaus-archiv-history'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 2,
      subtitle: 'The Parisian Solitary Polymath',
      yearRange: '1918—1923',
      text: 'In Paris, Charles-Édouard Jeanneret developed Purism with Amédée Ozenfant while also building an independent architectural and publishing practice under the name Le Corbusier. His writing connected modern construction and standardized objects with proportion, historical comparison, and an explicitly authorial architectural program.',
      graphicCue: 'French Cartesian Rigor',
      focalMovements: ['purism'],
      provenance: {
        text: { sourceIds: ['moma-purism'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 3,
      subtitle: 'Divergent Architectural Metaphors',
      yearRange: '1923—1927',
      text: 'The comparison is better understood as a difference of emphasis than as a strict opposition. Bauhaus architecture increasingly stressed program, construction, and collective teaching, while Le Corbusier developed a more personal architectural system around the Five Points, regulating lines, promenade, and idealized geometric volumes.',
      graphicCue: 'Inside-Out Function vs Classical Prism',
      focalMovements: ['purism', 'bauhaus'],
      provenance: {
        text: { sourceIds: ['bauhaus-archiv-history', 'moma-purism'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 4,
      subtitle: 'Shared Stage at Weissenhof',
      yearRange: '1927',
      text: 'At the 1927 Weissenhofsiedlung in Stuttgart, works by Le Corbusier, Gropius, Mies van der Rohe, J. J. P. Oud, and others appeared within the same Werkbund exhibition. The event made visible both a shared commitment to modern housing and substantial differences in architectural method and expression.',
      graphicCue: 'Weissenhofsiedlung Showdown',
      focalMovements: ['international-style', 'bauhaus'],
      provenance: {
        text: { sourceIds: ['werkbundarchiv-chronology', 'moma-modern-architecture-1932'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 5,
      subtitle: 'Convergence in the International Style',
      yearRange: '1932',
      text: 'MoMA’s 1932 Modern Architecture exhibition and the related International Style formulation grouped architects including Le Corbusier, Gropius, Mies, and Oud within a common formal narrative. That classification was influential, but it did not erase the different institutional histories and theoretical positions behind their work.',
      graphicCue: 'The Canonical Fusion',
      focalMovements: ['international-style'],
      provenance: {
        text: { sourceIds: ['moma-modern-architecture-1932', 'moma-international-style-term'], status: 'documented' },
      }
    }
  ]
};
