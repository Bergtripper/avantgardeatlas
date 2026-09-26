import { Movement } from '../../types/atlas';

export const dadaMovement: Movement = {
  id: 'dada',
  name: 'Dada',
  germanOrOriginalName: 'Dadaismus',
  period: '1916—1924',
  startYear: 1916,
  endYear: 1924,
  countries: ['Switzerland', 'Germany', 'France', 'United States'],
  cities: ['Zurich', 'Berlin', 'Cologne', 'Paris', 'New York'],
  mottoOrKeywords: ['Anti-Art', 'Chance as a Principle', 'Photomontage Sabotage'],
  summary: 'An international artistic and literary movement that emerged during World War I and used chance, collage, photomontage, performance, readymades, irreverence, and absurdity to challenge established definitions of art and cultural authority.',
  coreIdeas: 'Dada artists linked the catastrophe of World War I to a crisis of political, social, and cultural values. Rather than proposing one coherent style, they used chance, nonsense, appropriation, collaboration, performance, and everyday objects to disrupt conventions of artistic authorship, taste, order, and logic.',
  historicalContext: 'Dada emerged in 1916 around the Cabaret Voltaire in Zurich and also developed independently in New York before spreading through Berlin, Cologne, Hanover, Paris, and other centers. Its politics, methods, and tone varied considerably from one local group to another.',
  visualPrinciples: [
    'Chance operations: tearing paper and letting fragments fall at random',
    'Invention of photomontage: slicing newspaper photographs and mass media adverts',
    'Deliberate disruption of typographic grid, orientation, and typographic scale',
    'The Readymade: taking an ordinary manufactured commodity and signing it as art'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Torn Edges', 'Irregular Polygons', 'Fragmented Newspaper Clippings'],
      description: 'Anti-geometry that deliberately subverts neat classical and industrial precision.',
      diagramType: 'organic-curve'
    },
    composition: {
      system: 'Collage & Chance Subversion',
      rules: [
        'Arbitrary juxtaposition of contradictory elements',
        'Violent clashes between hand-drawn scrawls and crisp letterpress type',
        'Deliberately destabilized reading flow'
      ]
    },
    colour: {
      palette: [
        { name: 'Soot Black', hex: '#1C1917', role: 'Newspaper Print & Ink' },
        { name: 'Zinc White', hex: '#F5F5F4', role: 'Collage Paper Ground' },
        { name: 'Sepia Tonal', hex: '#78716C', role: 'Aged Newsprint Patina' },
        { name: 'Blood Crimson', hex: '#BE123C', role: 'Subversive Agitation' }
      ],
      philosophy: 'Anti-aesthetic palette derived directly from everyday discarded ephemera and street circulars.'
    },
    typography: {
      classification: 'Disordered Letterpress Collage',
      characteristics: [
        'Multiple discordant typefaces thrown together on a single line',
        'Rotated, upside-down, and overlapping lines of text',
        'Phonetic sound poetry laid out as visual typographic scores'
      ],
      specimen: 'karawane jolifanto bambla o falli bambla'
    },
    materials: ['Ticket stubs', 'Rotary newspaper clippings', 'Cardboard', 'Enamel urinals', 'Found timber'],
    attitude: ['Subversive', 'Satirical', 'Nihilistic', 'Spontaneous', 'Anti-Authoritarian']
  },
  architectureNotes: 'Kurt Schwitters created the "Merzbau" (1923–1937) in Hanover, transforming his family apartment into an ever-expanding, labyrinthine three-dimensional collage cavern.',
  graphicDesignNotes: 'John Heartfield weaponized photomontage for the AIZ worker magazine, pioneering political visual satire against Adolf Hitler and corporate fascism.',
  industryRelationship: 'Dada frequently appropriated materials from modern media and commodity culture—newspapers, advertisements, tickets, magazines, photographs, and manufactured objects—turning the visual language of mass production into material for critique and experiment.',
  keyPeople: [
    'hannah-hoch',
    'john-heartfield',
    'kurt-schwitters',
    'tristan-tzara',
    'marcel-duchamp'
  ],
  keyWorks: [
    'obj-cut-with-kitchen-knife',
    'obj-merzbau'
  ],
  influencesFrom: ['cubism', 'futurism'],
  influencesTo: ['new-typography', 'constructivism'],
  provenance: {
    summary: { sourceIds: ['moma-dada-term'], status: 'documented' },
    coreIdeas: { sourceIds: ['moma-dada-term'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['moma-dada-term'], status: 'documented' },
    industryRelationship: { sourceIds: ['moma-dada-term'], status: 'editorial-synthesis' },
  },
  styleTheme: {
    accentColor: '#BE123C',
    secondaryColor: '#1C1917',
    layoutBehavior: 'dada-asymmetry'
  }
};
