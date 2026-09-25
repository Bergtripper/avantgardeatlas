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
  summary: 'The transitional international style bridging historicist revivalism and modernism through sinuous organic lines, whiplash curves, and decorative integration of iron and glass.',
  coreIdeas: 'To abolish the historicist imitation of Greek, Gothic, and Renaissance styles. Nature is not realistically copied but stylized into sinuous "whiplash" arabesques, celebrating plant stems, insect wings, and flowing hair integrated into modern cast-iron architecture and graphic posters.',
  historicalContext: 'Emerged in Brussels with Victor Horta\'s Hôtel Tassel (1893) and quickly swept across Paris (Hector Guimard\'s Metro entrances), Munich (Jugendstil), and Glasgow (Charles Rennie Mackintosh).',
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
  architectureNotes: 'Victor Horta exposed structural rivets and slender curved iron columns inside the stairwell of the Hôtel Tassel, treating metal with the grace of living plant vines.',
  graphicDesignNotes: 'The golden age of the color lithographic poster, led by Alphonse Mucha, Eugène Grasset, and Aubrey Beardsley.',
  industryRelationship: 'Celebrated traditional craftsmanship and precious materials, making high Art Nouveau difficult to mass-produce, ultimately prompting the Werkbund and Bauhaus revolt.',
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
  styleTheme: {
    accentColor: '#0F766E',
    secondaryColor: '#B45309',
    layoutBehavior: 'secessionist-linear'
  }
};
