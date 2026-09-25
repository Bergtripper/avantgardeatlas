import { Movement } from '../../types/atlas';

export const cubismMovement: Movement = {
  id: 'cubism',
  name: 'Cubism',
  germanOrOriginalName: 'Le Cubisme',
  period: '1907—1919',
  startYear: 1907,
  endYear: 1919,
  countries: ['France'],
  cities: ['Paris'],
  mottoOrKeywords: ['Simultaneous Viewpoints', 'Deconstruction of Perspective', 'Collage & Papier Collé'],
  summary: 'The seismic French movement founded by Picasso and Braque that dismantled Renaissance single-point perspective, analyzing objects simultaneously from multiple viewpoints.',
  coreIdeas: 'To depict objects as they are understood in the mind rather than as they merely appear to the eye from a single fixed optical vantage point. Deconstructs subjects into fractured geometric facets, recombining them in shallow, shifting pictorial space.',
  historicalContext: 'Catalyzed in Paris around 1907 by Pablo Picasso\'s "Les Demoiselles d\'Avignon" and Paul Cézanne’s retrospective. Transitioned from Analytic Cubism (fragmented brown/grey facets) to Synthetic Cubism (collage, papier collé, flat brightly colored planes).',
  visualPrinciples: [
    'Simultaneous multi-angled perspectives within a single picture plane',
    'Fracturing of solid volumes into crystalline geometric facets',
    'Integration of real-world typography, newspaper clippings, and musical notation',
    'Flattening of spatial depth into rhythmic overlapping planes'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Fractured Planes', 'Triangular Facets', 'Crystalline Shards'],
      description: 'Multiple faceted planes intersecting in shallow relief.',
      diagramType: 'orthogonal-grid'
    },
    composition: {
      system: 'Simultaneous Multi-Planar Intersection',
      rules: [
        'Deconstructed focal axes',
        'Shallow pictorial depth with shimmering edge ambiguities'
      ]
    },
    colour: {
      palette: [
        { name: 'Ochre Umber', hex: '#78350F', role: 'Analytical Ground' },
        { name: 'Slate Charcoal', hex: '#334155', role: 'Edge Definition' },
        { name: 'Newsprint Gray', hex: '#E2E8F0', role: 'Collage Texture' }
      ],
      philosophy: 'Restrained, austere monochromatic earth tones in Analytic phase; bolder flat color in Synthetic phase.'
    },
    typography: {
      classification: 'Fragmented Newspaper Letterpress',
      characteristics: [
        'Collaged newspaper snippets (Le Journal, Figaro)',
        'Hand-stenciled Roman and Grotesk letters acting as flat signs'
      ],
      specimen: 'JOU LE JOURNAL 1912'
    },
    materials: ['Oil on canvas', 'Newsprint', 'Tobacco wrappers', 'Patterned wallpaper', 'Charcoal'],
    attitude: ['Analytical', 'Revolutionary', 'Intellectual', 'Deconstructive', 'Foundational']
  },
  architectureNotes: 'Indirectly inspired Czech Cubist architecture (Josef Chochol, Pavel Janák) in Prague, which sculpted building facades with crystalline diamond angles.',
  graphicDesignNotes: 'The birth of collage and papier collé fundamentally transformed graphic layout and visual syntax for the entire 20th century.',
  industryRelationship: 'Primarily a fine arts revolution, but its multi-angle analytical vision laid the foundation for machine-age industrial aesthetics.',
  keyPeople: [
    'pablo-picasso',
    'georges-braque',
    'juan-gris',
    'fernand-leger'
  ],
  keyWorks: [
    'obj-demoiselles-davignon',
    'obj-violin-and-candlestick'
  ],
  influencesFrom: ['art-nouveau'],
  influencesTo: ['futurism', 'de-stijl', 'purism', 'constructivism', 'suprematism'],
  styleTheme: {
    accentColor: '#78350F',
    secondaryColor: '#334155',
    layoutBehavior: 'bauhaus-grid'
  }
};
