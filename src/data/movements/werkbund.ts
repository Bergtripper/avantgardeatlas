import { Movement } from '../../types/atlas';

export const werkbundMovement: Movement = {
  id: 'deutscher-werkbund',
  name: 'Deutscher Werkbund',
  germanOrOriginalName: 'German Work Federation',
  period: '1907—1934',
  startYear: 1907,
  endYear: 1934,
  countries: ['Germany'],
  cities: ['Munich', 'Berlin', 'Cologne', 'Stuttgart'],
  mottoOrKeywords: ['Vom Sofa-Kissen zum Städtebau', 'Typisierung', 'Quality and Industrial Honor'],
  summary: 'An influential state-sponsored association of artists, architects, artisans, and industrialists striving to integrate traditional German craftsmanship with mass industrial factory methods.',
  coreIdeas: 'To elevate the quality of German industrial production on the world market. The movement debated the fundamental conflict between individual artistic expression (Henry van de Velde) and standardized machine typification / mass production (Hermann Muthesius).',
  historicalContext: 'Established in Munich in 1907 by Hermann Muthesius, Peter Behrens, and others. Produced landmark exhibitions including the 1914 Cologne Exhibition and the 1927 Weissenhofsiedlung in Stuttgart.',
  visualPrinciples: [
    'Elimination of historicist imitation and cheap decorative veneer',
    'Clarity of industrial construction and truth to materials',
    'The creation of standard types (Typisierung) suitable for mass production',
    'Holistic corporate design spanning architecture, products, and advertising'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Industrial Skeletons', 'Standardized Grids', 'Prismatic Volumes'],
      description: 'Tectonic forms expressing the structural power of steel, brick, and glass.',
      diagramType: 'structural-frame'
    },
    composition: {
      system: 'Systematic Structural Order',
      rules: [
        'Orderly architectural grids',
        'Dignified, understated balance of negative space and industrial form'
      ]
    },
    colour: {
      palette: [
        { name: 'Prussian Blue', hex: '#1E3A8A', role: 'State Dignity and Industrial Rigor' },
        { name: 'Factory Slate', hex: '#475569', role: 'Machine Iron and Cast Concrete' },
        { name: 'Warm Cream', hex: '#F5F5F0', role: 'Honest Background' }
      ],
      philosophy: 'Subdued corporate dignity emphasizing high build quality over flashy novelty.'
    },
    typography: {
      classification: 'Pre-Modern Grotesk & Clean Roman',
      characteristics: [
        'Peter Behrens’ corporate typefaces for AEG',
        'Clarity, legibility, and architectural balance'
      ],
      specimen: 'ALLGEMEINE ELEKTRICITÄTS-GESELLSCHAFT'
    },
    materials: ['Structural cast iron', 'Large-span glass panes', 'Industrial brickwork', 'High-grade hardwood'],
    attitude: ['Dignified', 'Systematic', 'High-Quality', 'Standardized', 'Influential']
  },
  architectureNotes: 'Peter Behrens designed the AEG Turbine Factory in Berlin (1909), widely hailed as the first monument of modern industrial architecture, framing a steel and glass cathedral of labor.',
  graphicDesignNotes: 'Behrens established the world\'s first unified corporate identity for AEG, designing everything from the company logo, product catalogs, and advertisements to the electric tea kettles and the factory itself.',
  industryRelationship: 'The very purpose of the Werkbund was to unite avant-garde designers directly with corporate industrial leaders and factory owners.',
  keyPeople: [
    'hermann-muthesius',
    'peter-behrens',
    'henry-van-de-velde'
  ],
  keyWorks: [
    'obj-aeg-turbine',
    'obj-weissenhofsiedlung'
  ],
  influencesFrom: ['vienna-secession', 'art-nouveau'],
  influencesTo: ['bauhaus', 'international-style', 'neue-sachlichkeit'],
  styleTheme: {
    accentColor: '#1E3A8A',
    secondaryColor: '#475569',
    layoutBehavior: 'bauhaus-grid'
  }
};
