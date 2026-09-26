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
  summary: 'A German association founded in 1907 that brought designers, architects, manufacturers, and craft firms into a shared debate about product quality, modern form, industry, and the cultural consequences of standardization.',
  coreIdeas: 'The Werkbund aimed to improve the quality and cultural standing of modern production by connecting artistic design with craft and industry. A major internal debate concerned the balance between individual artistic authorship and standardized types suitable for wider industrial production.',
  historicalContext: 'The Deutscher Werkbund was founded in Munich in October 1907 by twelve artists and twelve firms. Its membership connected architects and designers with manufacturers and publishers, and its exhibitions—including Cologne in 1914 and the later Weissenhofsiedlung in Stuttgart—became important forums for debates about modern production and design.',
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
  architectureNotes: 'Peter Behrens’s work for AEG, including the Berlin Turbine Factory, became an important example of the Werkbund-era attempt to give industrial production a coherent architectural and visual form.',
  graphicDesignNotes: 'Behrens’s work for AEG coordinated architecture, products, advertising, printed matter, and visual identity, providing an influential early model for integrated industrial design and corporate communication.',
  industryRelationship: 'The association explicitly linked designers and architects with firms, workshops, and manufacturers, making the relationship between artistic form, production quality, industrial scale, and standardization central to its program.',
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
  provenance: {
    summary: { sourceIds: ['werkbundarchiv-chronology'], status: 'documented' },
    coreIdeas: { sourceIds: ['werkbundarchiv-chronology'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['werkbundarchiv-chronology'], status: 'documented' },
    architectureNotes: { sourceIds: ['werkbundarchiv-chronology'], status: 'editorial-synthesis' },
    graphicDesignNotes: { sourceIds: ['werkbundarchiv-chronology'], status: 'editorial-synthesis' },
    industryRelationship: { sourceIds: ['werkbundarchiv-chronology'], status: 'documented' },
  },
  styleTheme: {
    accentColor: '#1E3A8A',
    secondaryColor: '#475569',
    layoutBehavior: 'bauhaus-grid'
  }
};
