import { Movement } from '../../types/atlas';

export const artNouveauMovement: Movement = {
  id: 'art-nouveau',
  name: 'Art Nouveau / Jugendstil',
  germanOrOriginalName: 'Art Nouveau / Jugendstil / Modern Style',
  period: '1890—1910',
  startYear: 1890,
  endYear: 1910,
  countries: ['Belgium', 'France', 'Germany', 'United Kingdom', 'Austria'],
  cities: ['Brussels', 'Paris', 'Munich', 'Glasgow', 'Vienna'],
  mottoOrKeywords: ['The Whiplash Line', 'Gesamtkunstwerk', 'Organic Synthesis'],
  summary: 'An international reform style that sought a modern visual language through organic line, integrated decoration, and a closer relationship between architecture, interiors, graphic art, and the applied arts.',
  coreIdeas: 'Art Nouveau designers challenged routine historicist imitation and treated nature as a source for stylized line, rhythm, and ornament. Across architecture, interiors, furniture, and graphics, plant forms and flowing curves were used to connect structure, surface, and decoration.',
  historicalContext: 'The style developed through several European centers in the 1890s, with Brussels playing an early role through Victor Horta and Henry van de Velde. Related regional forms emerged in Paris, Munich, Glasgow, Vienna, and elsewhere under different names and local traditions.',
  visualPrinciples: [
    'The dynamic, asymmetrical "whiplash" curve (coup de fouet)',
    'Total decorative integration: wallpaper, chandeliers, door handles, and structural iron',
    'Structural iron and curved glass used expressively rather than concealed',
    'Stylized flora and fauna: lilies, peacock feathers, dragonflies, and vine tendrils'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['The Whiplash Curve', 'Sinuous Parabolic Arcs', 'Stylized Botanical Profiles'],
      description: 'Fluid, asymmetric serpentine lines conveying organic life and tension.',
      diagramType: 'organic-curve'
    },
    composition: {
      system: 'Flowing Botanical Dynamism',
      rules: [
        'Organic continuity: columns sprout into structural branches and decorative capitals',
        'Sinuous framing borders surrounding typography and pictorial fields'
      ]
    },
    colour: {
      palette: [
        { name: 'Peacock Teal', hex: '#0F766E', role: 'Organic Biological Fluidity' },
        { name: 'Patinated Sage', hex: '#65A30D', role: 'Botanical Stem' },
        { name: 'Warm Terracotta', hex: '#B45309', role: 'Warm Earthen Clay' }
      ],
      philosophy: 'Subtle atmospheric secondary colors evocative of twilight, autumn, and exotic gardens.'
    },
    typography: {
      classification: 'Fluid Organic Display Script',
      characteristics: [
        'Letterforms with swelling strokes and whiplash terminal flourishes',
        'Intimate integration between hand-lettered text and botanical illustration',
        'Lavish lithographic poster title designs (Alphonse Mucha, Jules Chéret)'
      ],
      specimen: 'L\'ART NOUVEAU BING PARIS'
    },
    materials: ['Wrought and cast iron', 'Curved plate glass', 'Carved mahogany', 'Iridescent Tiffany glass', 'Ceramics'],
    attitude: ['Sensuous', 'Organic', 'Transitional', 'Ornamental', 'Atmospheric']
  },
  architectureNotes: 'In buildings such as the Hôtel Tassel, Victor Horta coordinated ironwork, stained glass, mosaics, wall decoration, and fittings into a unified interior vocabulary based on organic line.',
  graphicDesignNotes: 'The golden age of the color lithographic poster, led by Alphonse Mucha, Eugène Grasset, and Aubrey Beardsley.',
  industryRelationship: 'Art Nouveau moved between workshop craft, luxury production, new industrial materials, and commercial print culture. Its mixed relationship with serial production became one of the questions later reform movements addressed more systematically.',
  keyPeople: [
    'victor-horta',
    'hector-guimard',
    'alphonse-mucha',
    'charles-rennie-mackintosh'
  ],
  keyWorks: [
    'obj-hotel-tassel',
    'obj-metro-entrances'
  ],
  influencesFrom: [],
  influencesTo: ['vienna-secession', 'deutscher-werkbund', 'cubism'],
  provenance: {
    summary: {
      sourceIds: ['vam-art-nouveau-international-style'],
      status: 'editorial-synthesis',
    },
    coreIdeas: {
      sourceIds: ['vam-art-nouveau-international-style'],
      status: 'editorial-synthesis',
    },
    historicalContext: {
      sourceIds: ['vam-art-nouveau-international-style'],
      status: 'documented',
    },
    architectureNotes: {
      sourceIds: ['vam-art-nouveau-international-style'],
      status: 'documented',
    },
  },
  styleTheme: {
    accentColor: '#0F766E',
    secondaryColor: '#B45309',
    layoutBehavior: 'secessionist-linear'
  }
};
