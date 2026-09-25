import { ConnectionStory } from '../../types/atlas';

export const artNouveauToBauhausStory: ConnectionStory = {
  id: 'story-art-nouveau-to-bauhaus',
  title: 'From Art Nouveau to Bauhaus',
  subtitle: 'The 30-Year Journey from Botanical Ornament to Industrial Steel',
  timeframe: '1890—1925',
  summary: 'Tracing how European design purged the organic whiplash curve of 1895, passed through the geometry of Vienna and the standardization of the Werkbund, and arrived at the tubular steel and curtain-wall glass of Dessau.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The Organic Sinuous Revolt',
      yearRange: '1890—1900',
      text: 'Victor Horta in Brussels and Hector Guimard in Paris rebelled against Victorian classical copyists. Using modern cast iron, they shaped structural columns into living plant stems and whiplash arabesques, creating the total organic artwork.',
      graphicCue: 'The Whiplash Awakening',
      focalMovements: ['art-nouveau']
    },
    {
      stepNumber: 2,
      subtitle: 'Vienna Geometrizes the Surface',
      yearRange: '1897—1905',
      text: 'Josef Hoffmann and Koloman Moser in Vienna grew tired of untamed botanical tangles. They straightened the curves into the "Quadratstil" (square style), establishing rhythmic orthogonal checkerboard grids on furniture, silver, and architecture.',
      graphicCue: 'The Viennese Square',
      focalMovements: ['vienna-secession']
    },
    {
      stepNumber: 3,
      subtitle: 'The Machine Standardization Debate',
      yearRange: '1907—1914',
      text: 'In Munich and Berlin, the Deutscher Werkbund brought artists together with factory directors. At the fateful 1914 Cologne debate, Hermann Muthesius insisted on standardization (Typisierung) for machine mass production, while Henry van de Velde fought for individual artist expression.',
      graphicCue: 'Typisierung vs Individual',
      focalMovements: ['deutscher-werkbund']
    },
    {
      stepNumber: 4,
      subtitle: 'The Postwar Catharsis and Dessau Climax',
      yearRange: '1919—1926',
      text: 'The First World War destroyed the old imperial world. Walter Gropius resolved the Werkbund conflict: machine standardization and artistic form merged into the Bauhaus curriculum. The botanical vine had transformed into the seamless nickel-plated tubular steel chair.',
      graphicCue: 'The Industrial Transformation',
      focalMovements: ['bauhaus', 'international-style']
    }
  ]
};
