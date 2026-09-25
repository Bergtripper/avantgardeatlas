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
  summary: 'A radical reform of graphic design spearheaded by Jan Tschichold, purging decorative serif flourishes and central-axis symmetry in favor of asymmetric functional clarity.',
  coreIdeas: 'Typography must not decorate; it must communicate with ruthless efficiency. The traditional symmetrical page layout is declared archaic; dynamic asymmetric equilibrium, standardized DIN paper formats, grotesque sans-serif type, and photography are declared the true visual language of the machine age.',
  historicalContext: 'Synthesized in Jan Tschichold’s 1925 special issue of "Typographische Mitteilungen" and codified in his seminal 1928 book "Die neue Typographie". Widely adopted by commercial advertising studios across Central Europe.',
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
  graphicDesignNotes: 'The foundational text for modern visual communication, directly leading to Swiss Style and mid-century corporate identity programs.',
  industryRelationship: 'Aimed directly at commercial print shops, newspaper publishers, advertising agencies, and industrial trade catalogs.',
  keyPeople: [
    'jan-tschichold',
    'paul-renner',
    'herbert-bayer',
    'kurt-schwitters'
  ],
  keyWorks: [
    'obj-die-neue-typographie',
    'obj-futura-specimen'
  ],
  influencesFrom: ['bauhaus', 'constructivism', 'dada', 'de-stijl'],
  influencesTo: ['international-style'],
  styleTheme: {
    accentColor: '#E11D48',
    secondaryColor: '#0A0A0A',
    layoutBehavior: 'bauhaus-grid'
  }
};
