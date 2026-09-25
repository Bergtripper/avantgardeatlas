import { ConnectionStory } from '../../types/atlas';

export const deStijlInfluencingBauhausStory: ConnectionStory = {
  id: 'story-de-stijl-bauhaus',
  title: 'Why De Stijl Influenced the Bauhaus',
  subtitle: 'The Dutch Invasion of Weimar & The Purge of Mysticism',
  timeframe: '1921—1925',
  summary: 'How Theo van Doesburg arrived in Weimar in 1921, mocked Johannes Itten’s mystical expressionist robes, and forced the early Bauhaus to embrace primary colors, orthogonal geometry, and industrial logic.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The Mystical Early Bauhaus',
      yearRange: '1919—1921',
      text: 'When Walter Gropius opened the Bauhaus in Weimar in 1919, its spiritual heart was not machine functionalism, but Johannes Itten’s Preliminary Course. Students wore monastic monk garments, shaved their heads, practiced Mazdaznan breathing exercises, and created handcrafted, expressive timber and stained-glass crafts.',
      graphicCue: 'Monastic Handcraft vs Machine',
      focalMovements: ['bauhaus']
    },
    {
      stepNumber: 2,
      subtitle: 'Van Doesburg Arrives in Weimar',
      yearRange: 'December 1920',
      text: 'Theo van Doesburg, founder of the Dutch magazine De Stijl, arrived in Weimar with his wife Nelly. Van Doesburg expected to be offered a mastership at the Bauhaus. Gropius, wary of Van Doesburg’s aggressive dogma and abrasive temperament, refused to appoint him to the faculty.',
      graphicCue: 'The Uninvited Provocateur',
      focalMovements: ['de-stijl', 'bauhaus']
    },
    {
      stepNumber: 3,
      subtitle: 'The Guerrilla De Stijl Course',
      yearRange: '1921—1922',
      text: 'Refusing defeat, Van Doesburg rented an atelier in Weimar and launched an unofficial private course on De Stijl principles. Bauhaus students—including Marcel Breuer, Herbert Bayer, and Werner Graeff—surreptitiously attended. Van Doesburg showed them Mondrian’s paintings, Rietveld’s chairs, and rigid orthogonal grids, declaring expressionist handcraft obsolete.',
      graphicCue: 'Underground Orthogonal Pedagogy',
      focalMovements: ['de-stijl', 'bauhaus']
    },
    {
      stepNumber: 4,
      subtitle: 'Itten Resigns, Moholy-Nagy Takes Over',
      yearRange: '1923',
      text: 'The Dutch intervention caused an ideological explosion inside the faculty. Itten, defending spiritual individuality and craft, resigned in early 1923. Gropius replaced him with Hungarian constructivist László Moholy-Nagy, pivoting the entire school slogan to "Art and Technology: A New Unity".',
      graphicCue: 'The Shift to Art & Technology',
      focalMovements: ['bauhaus', 'constructivism']
    },
    {
      stepNumber: 5,
      subtitle: 'The Dessau Synthesis',
      yearRange: '1925—1926',
      text: 'When the Bauhaus relocated to Dessau, the transformation was total. Marcel Breuer translated Rietveld’s wooden planar joints into tubular nickel steel. Herbert Bayer applied orthogonal layout to typography. De Stijl’s primary colors and spatial continuity became part of the universal modern canon.',
      graphicCue: 'The Modernist Breakthrough',
      focalMovements: ['bauhaus', 'de-stijl', 'international-style']
    }
  ]
};
