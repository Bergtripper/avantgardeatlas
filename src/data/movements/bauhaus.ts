import { Movement } from '../../types/atlas';

export const bauhausMovement: Movement = {
  id: 'bauhaus',
  name: 'Bauhaus',
  germanOrOriginalName: 'Staatliches Bauhaus',
  period: '1919—1933',
  startYear: 1919,
  endYear: 1933,
  countries: ['Germany'],
  cities: ['Weimar', 'Dessau', 'Berlin'],
  mottoOrKeywords: ['Art and Technology: A New Unity', 'Form Follows Function', 'Volksbedarf statt Luxusbedarf'],
  summary: 'A German school of art, design, and architecture active from 1919 to 1933 that repeatedly redefined the relationship between artistic education, craft workshops, architecture, and modern production.',
  coreIdeas: 'The Bauhaus began from a program of reconnecting art, craft, and building, then evolved toward stronger engagement with technology, industry, standardization, and architecture. Its priorities changed substantially under Walter Gropius, Hannes Meyer, and Ludwig Mies van der Rohe rather than forming one fixed doctrine.',
  historicalContext: 'Walter Gropius founded the Staatliches Bauhaus in Weimar in 1919. Political pressure forced the school to leave Weimar for Dessau in 1925; it later moved to Berlin under Mies van der Rohe and was forced to close in 1933 under National Socialist pressure.',
  visualPrinciples: [
    'Universal primary geometry: sphere, cube, pyramid, and planar surfaces',
    'Structural transparency and weightless curtain-wall suspension',
    'Asymmetric dynamic balance replacing classical axial symmetry',
    'Functional rhythm dictated strictly by program and usage',
    'Honest revelation of industrial materials: tubular steel, plate glass, reinforced concrete'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Circle', 'Square', 'Triangle'],
      description: 'Kandinsky and Itten formulated the direct psychological pairing of primary forms with primary tones: yellow triangle, red square, blue circle.',
      diagramType: 'circle-square-triangle'
    },
    composition: {
      system: 'Modular Asymmetric Grid',
      rules: [
        'Orthogonal coordination with 90-degree intersections',
        'Heavy elemental rules separating functional hierarchy',
        'Tension created through stark contrast between active white field and concentrated graphic weight'
      ]
    },
    colour: {
      palette: [
        { name: 'Pure White', hex: '#FFFFFF', role: 'Neutral Ground / Spatial Void' },
        { name: 'Cadmium Red', hex: '#D82B2B', role: 'Primary Accent & Focal Anchor' },
        { name: 'Cobalt Blue', hex: '#1D4ED8', role: 'Structural Stability' },
        { name: 'Chrome Yellow', hex: '#EAB308', role: 'Kinetic Tension' },
        { name: 'Carbon Black', hex: '#111111', role: 'Typographic & Frame Density' }
      ],
      philosophy: 'Colors are never applied decoratively; they articulate spatial joints, designate function, or highlight primary compositional weight.'
    },
    typography: {
      classification: 'Geometric Grotesk & Universal Alphabet',
      characteristics: [
        'Herbert Bayer Universal typeface eliminating capital letters',
        'Pure circular bowls and straight vertical stems',
        'Heavy horizontal/vertical rules used as typographic punctuation'
      ],
      specimen: 'abcdefghijklmnopqrstuvwxyz 1234567890'
    },
    materials: ['Tubular nickel-plated steel', 'Float glass', 'Reinforced concrete', 'Plywood', 'Chromed brass'],
    attitude: ['Functional', 'Radical', 'Pedagogical', 'Industrial', 'Egalitarian']
  },
  architectureNotes: 'Walter Gropius’s Dessau Bauhaus building (1925–1926) organized workshops, teaching spaces, administration, housing, and communal facilities into differentiated volumes, with the workshop wing marked by its extensive glazed curtain wall.',
  graphicDesignNotes: 'Pioneered by Herbert Bayer, László Moholy-Nagy, and Joost Schmidt, integrating photography with asymmetric grotesque type into typographic-photographic synthesis (Typofoto).',
  industryRelationship: 'Especially in Dessau, the workshops increasingly developed prototypes and model types intended for industrial and craft production, linking experimental teaching with the goal of producing well-designed, affordable objects for broader use.',
  keyPeople: [
    'walter-gropius',
    'hannes-meyer',
    'mies-van-der-rohe',
    'marcel-breuer',
    'herbert-bayer',
    'laszlo-moholy-nagy',
    'wassily-kandinsky',
    'paul-klee'
  ],
  keyWorks: [
    'obj-bauhaus-dessau',
    'obj-wassily-chair',
    'obj-bauhaus-poster'
  ],
  influencesFrom: ['deutscher-werkbund', 'de-stijl', 'constructivism', 'vienna-secession'],
  influencesTo: ['new-typography', 'international-style', 'rationalism'],
  provenance: {
    summary: {
      sourceIds: ['bauhaus-archiv-history'],
      status: 'documented',
    },
    coreIdeas: {
      sourceIds: ['bauhaus-archiv-history', 'bauhaus-archiv-teaching'],
      status: 'editorial-synthesis',
    },
    historicalContext: {
      sourceIds: ['bauhaus-archiv-history', 'bauhaus-closure-1933'],
      status: 'documented',
    },
    architectureNotes: {
      sourceIds: ['bauhaus-archiv-history'],
      status: 'documented',
    },
    industryRelationship: {
      sourceIds: ['bauhaus-archiv-teaching'],
      status: 'documented',
    },
  },
  styleTheme: {
    accentColor: '#D82B2B',
    secondaryColor: '#1D4ED8',
    layoutBehavior: 'bauhaus-grid'
  }
};
