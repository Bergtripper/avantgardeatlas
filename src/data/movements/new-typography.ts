import { Movement } from '../../types/atlas';

export const newTypographyMovement: Movement = {
  id: 'new-typography',
  name: 'New Typography',
  germanOrOriginalName: 'Die Neue Typographie',
  period: '1925—1933',
  startYear: 1925,
  endYear: 1933,
  countries: ['Germany', 'Switzerland'],
  cities: ['Munich', 'Berlin', 'Frankfurt', 'Basel'],
  mottoOrKeywords: ['Asymmetric Balance', 'Elementary Typography', 'Grotesk Clarity'],
  summary: 'A modernist reform of graphic and information design that replaced conventional symmetrical page arrangements with asymmetric composition, standardized forms, sans-serif type, photography, and functional hierarchy.',
  coreIdeas: 'Typography was treated primarily as a system for organizing and communicating information. Designers favored asymmetric balance, standardized paper formats, sans-serif type, photography, rules, and active white space to make hierarchy and reading order explicit.',
  historicalContext: 'Jan Tschichold helped synthesize these ideas through his 1925 special issue of "Typographische Mitteilungen" and codified them in the 1928 book "Die neue Typographie". The approach drew on experiments associated with Soviet Constructivism, the Bauhaus, and other Central European avant-garde networks.',
  visualPrinciples: [
    'Strict asymmetric balance replacing bilateral center-axis symmetry',
    'Grotesk (sans-serif) typefaces chosen as the quintessential contemporary script',
    'Heavy horizontal and vertical rules used to structure hierarchy and guide eye movement',
    'Direct integration of photographic images instead of manual illustration'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Orthogonal Type Blocks', 'Heavy Hairline Rules', 'DIN Rectangles'],
      description: 'Rigorous layout architecture based on mathematical relationships and functional reading flow.',
      diagramType: 'orthogonal-grid'
    },
    composition: {
      system: 'Asymmetric Hierarchical Grid',
      rules: [
        'Strong left-aligned flush margins',
        'Heavy horizontal bars creating clear reading pauses',
        'Negative space utilized as an active structural force rather than passive remainder'
      ]
    },
    colour: {
      palette: [
        { name: 'Printing Black', hex: '#0A0A0A', role: 'Maximum Contrast Letterforms' },
        { name: 'Vermilion Red', hex: '#E11D48', role: 'Signal & Focal Punctuation' },
        { name: 'Warm Cream Ground', hex: '#FAF9F5', role: 'High-Grade Calendered Paper' }
      ],
      philosophy: 'Color is employed strictly as an optical signal to guide the eye through information tiers.'
    },
    typography: {
      classification: 'Elementary Grotesk',
      characteristics: [
        'Akzidenz Grotesk and Futura as ideal models',
        'Elimination of decorative swashes, blackletter Fraktur, and baroque ornaments',
        'Consistent typographic weights and standardized DIN paper formats (A4)'
      ],
      specimen: 'DIE NEUE TYPOGRAPHIE 1928'
    },
    materials: ['Machine-set lead type', 'Zinc photo-engraving plates', 'Coated letterpress stock'],
    attitude: ['Systematic', 'Precise', 'Objective', 'Functional', 'Progressive']
  },
  architectureNotes: 'Closely aligned with the "Neues Bauen" architectural movement; Tschichold designed publications for Gropius, Mies, and the Werkbund.',
  graphicDesignNotes: 'The movement established a widely influential vocabulary of asymmetric page construction, sans-serif type, photography, rules, and standardized formats for modern graphic communication.',
  industryRelationship: 'Aimed directly at commercial print shops, newspaper publishers, advertising agencies, and industrial trade catalogs.',
  keyPeople: [
    'jan-tschichold',
    'paul-renner',
    'herbert-bayer',
    'kurt-schwitters'
  ],
  keyWorks: [
    'obj-die-neue-typographie-book',
    'obj-futura-specimen'
  ],
  influencesFrom: ['bauhaus', 'constructivism', 'dada', 'de-stijl'],
  influencesTo: ['international-style'],
  provenance: {
    summary: {
      sourceIds: ['moma-new-typography'],
      status: 'editorial-synthesis',
    },
    coreIdeas: {
      sourceIds: ['moma-new-typography'],
      status: 'editorial-synthesis',
    },
    historicalContext: {
      sourceIds: ['moma-new-typography'],
      status: 'documented',
    },
    graphicDesignNotes: {
      sourceIds: ['moma-new-typography'],
      status: 'documented',
    },
  },
  styleTheme: {
    accentColor: '#E11D48',
    secondaryColor: '#0A0A0A',
    layoutBehavior: 'bauhaus-grid'
  }
};
