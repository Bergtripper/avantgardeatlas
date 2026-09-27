import { ConnectionStory } from '../../types/atlas';

export const artNouveauToBauhausStory: ConnectionStory = {
  id: 'story-art-nouveau-to-bauhaus',
  title: 'From Art Nouveau to Bauhaus',
  subtitle: 'A Selective Route from Reform Ornament to Industrial Design',
  timeframe: '1890—1925',
  summary: 'A selective editorial route through overlapping reform movements—from Art Nouveau and the Vienna Secession to the Werkbund and Bauhaus—showing how debates about ornament, craft, standardization, and industrial production changed across several European contexts.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The Organic Sinuous Revolt',
      yearRange: '1890—1900',
      text: 'In Brussels and Paris, designers such as Victor Horta and Hector Guimard used iron, glass, flowing line, and integrated interiors to develop alternatives to conventional historicist design. Their work connected architecture, fittings, surfaces, and graphic ornament within a broader reform culture.',
      graphicCue: 'The Whiplash Awakening',
      focalMovements: ['art-nouveau'],
      provenance: {
        text: { sourceIds: ['vam-art-nouveau-international-style'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 2,
      subtitle: 'Vienna Geometrizes the Surface',
      yearRange: '1897—1905',
      text: 'In Vienna, figures including Josef Hoffmann and Koloman Moser developed a more geometric design language within the Secession and related applied-arts networks. Square grids, repeated motifs, and integrated interiors became important features, but this shift was not a simple linear rejection of Art Nouveau.',
      graphicCue: 'The Viennese Square',
      focalMovements: ['vienna-secession'],
      provenance: {
        text: { sourceIds: ['vienna-secession-history'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 3,
      subtitle: 'The Machine Standardization Debate',
      yearRange: '1907—1914',
      text: 'The Deutscher Werkbund linked designers, architects, workshops, and manufacturers. Its internal debates—including the well-known 1914 dispute between Hermann Muthesius and Henry van de Velde—made standardization, artistic authorship, product quality, and industrial scale explicit points of contention.',
      graphicCue: 'Typisierung vs Individual',
      focalMovements: ['deutscher-werkbund'],
      provenance: {
        text: { sourceIds: ['werkbundarchiv-chronology'], status: 'documented' },
      }
    },
    {
      stepNumber: 4,
      subtitle: 'Bauhaus Reframes the Debate',
      yearRange: '1919—1926',
      text: 'After 1919, the Bauhaus inherited several earlier reform questions but changed its answers over time. The school began with a strong craft orientation and later, especially in Dessau, moved toward technology, prototypes, architecture, and industrial production. This was a reconfiguration of earlier debates rather than their simple resolution.',
      graphicCue: 'The Industrial Transformation',
      focalMovements: ['bauhaus', 'international-style'],
      provenance: {
        text: { sourceIds: ['bauhaus-archiv-history', 'bauhaus-archiv-teaching'], status: 'editorial-synthesis' },
      }
    }
  ]
};
