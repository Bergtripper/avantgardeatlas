import { ConnectionStory } from '../../types/atlas';

export const deStijlInfluencingBauhausStory: ConnectionStory = {
  id: 'story-de-stijl-bauhaus',
  title: 'Why De Stijl Influenced the Bauhaus',
  subtitle: 'Weimar Encounters between De Stijl and the Bauhaus',
  timeframe: '1921—1925',
  summary: 'How Theo van Doesburg’s presence in Weimar and his private De Stijl teaching intersected with an already evolving Bauhaus, contributing to debates about abstraction, geometry, craft, technology, and the school’s changing direction.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The Mystical Early Bauhaus',
      yearRange: '1919—1921',
      text: 'The early Bauhaus in Weimar combined craft workshops with experimental teaching and included strongly expressionist and spiritual tendencies, particularly around Johannes Itten’s preliminary course. This phase differed markedly from the school’s later emphasis on technology and industrial production.',
      graphicCue: 'Monastic Handcraft vs Machine',
      focalMovements: ['bauhaus'],
      provenance: {
        text: { sourceIds: ['bauhaus-archiv-history'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 2,
      subtitle: 'Van Doesburg Arrives in Weimar',
      yearRange: 'December 1920',
      text: 'Theo van Doesburg settled in Weimar around 1921 and sought closer contact with the Bauhaus, but he never joined its faculty. Instead, he developed an independent presence in the city while promoting De Stijl ideas through lectures, publications, and private teaching.',
      graphicCue: 'The Uninvited Provocateur',
      focalMovements: ['de-stijl', 'bauhaus'],
      provenance: {
        text: { sourceIds: ['moma-van-doesburg', 'moma-de-stijl-term'], status: 'documented' },
      }
    },
    {
      stepNumber: 3,
      subtitle: 'The Guerrilla De Stijl Course',
      yearRange: '1921—1922',
      text: 'Van Doesburg organized a private De Stijl course outside the Bauhaus. Bauhaus students and associates encountered his ideas directly, adding a visible Dutch geometric and constructivist reference point to the broader set of influences already circulating in Weimar.',
      graphicCue: 'Underground Orthogonal Pedagogy',
      focalMovements: ['de-stijl', 'bauhaus'],
      provenance: {
        text: { sourceIds: ['moma-van-doesburg', 'moma-de-stijl-term'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 4,
      subtitle: 'Itten Resigns, Moholy-Nagy Takes Over',
      yearRange: '1923',
      text: 'Johannes Itten left the Bauhaus in 1923 and László Moholy-Nagy succeeded him in the preliminary course. The school’s turn toward “Art and Technology: A New Unity” had several causes; Van Doesburg’s activity in Weimar formed part of that wider environment but should not be treated as the sole trigger.',
      graphicCue: 'The Shift to Art & Technology',
      focalMovements: ['bauhaus', 'constructivism'],
      provenance: {
        text: { sourceIds: ['bauhaus-archiv-history', 'moma-van-doesburg'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 5,
      subtitle: 'The Dessau Synthesis',
      yearRange: '1925—1926',
      text: 'By the Dessau period, Bauhaus design showed stronger commitments to industry, standardized production, typography, and modern architecture. De Stijl was one important reference among several—including Constructivism and the Werkbund—rather than a single source for this transformation.',
      graphicCue: 'The Modernist Breakthrough',
      focalMovements: ['bauhaus', 'de-stijl', 'international-style'],
      provenance: {
        text: { sourceIds: ['bauhaus-archiv-history', 'moma-de-stijl-term'], status: 'editorial-synthesis' },
      }
    }
  ]
};
