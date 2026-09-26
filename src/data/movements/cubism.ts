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
  summary: 'A Paris-based modernist movement developed principally by Pablo Picasso and Georges Braque that compressed pictorial space, multiplied viewpoints, fragmented forms, and later incorporated collage and everyday printed materials.',
  coreIdeas: 'Cubist artists challenged stable single-point perspective by breaking figures and objects into intersecting planes and presenting several aspects within one composition. In later work, collage and found materials further complicated the boundary between representation and the physical surface of the artwork.',
  historicalContext: 'Cubism developed in Paris during the first decade of the twentieth century through the close exchange between Pablo Picasso and Georges Braque. Historians commonly distinguish an Analytic phase, beginning around 1910, from a Synthetic phase, beginning around 1912, when collage and papier collé became central techniques.',
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
  graphicDesignNotes: 'Cubist collage introduced newspaper fragments, lettering, labels, and other printed matter directly into pictorial composition, creating precedents that later avant-garde graphic practices developed in different ways.',
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
  provenance: {
    summary: { sourceIds: ['moma-cubism'], status: 'documented' },
    coreIdeas: { sourceIds: ['moma-cubism'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['moma-cubism'], status: 'documented' },
    graphicDesignNotes: { sourceIds: ['moma-cubism'], status: 'editorial-synthesis' },
  },
  styleTheme: {
    accentColor: '#78350F',
    secondaryColor: '#334155',
    layoutBehavior: 'bauhaus-grid'
  }
};
