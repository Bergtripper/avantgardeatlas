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
  summary: 'A revolutionary German school that transformed the relationship between fine art, architectural craft, graphic communication, and mass industrial manufacture.',
  coreIdeas: 'The fundamental dissolution of the false barrier between craftsman and artist. The Bauhaus sought to strip everyday objects of ornamental decadence, creating standardized, beautiful, and accessible industrial products rooted in pure geometry and honest materiality.',
  historicalContext: 'Founded in Weimar in 1919 amidst the ashes and inflation of the Weimar Republic by Walter Gropius. Relocated to Dessau in 1925 to erect its iconic glass-curtain campus, and finally shut down under direct National Socialist police pressure in Berlin in 1933.',
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
  architectureNotes: 'The Bauhaus Dessau complex (Walter Gropius, 1925–1926) eliminated load-bearing outer walls in favor of a continuous glass curtain-wall facade, revealing the reinforced concrete skeleton beneath.',
  graphicDesignNotes: 'Pioneered by Herbert Bayer, László Moholy-Nagy, and Joost Schmidt, integrating photography with asymmetric grotesque type into typographic-photographic synthesis (Typofoto).',
  industryRelationship: 'Direct industrial prototyping. Workshops actively licensed tubular furniture, textiles, and lighting fixtures to German manufacturers (e.g. Standard Möbel, Korting & Mathiesen).',
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
  styleTheme: {
    accentColor: '#D82B2B',
    secondaryColor: '#1D4ED8',
    layoutBehavior: 'bauhaus-grid'
  }
};
