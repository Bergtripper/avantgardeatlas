import { Movement } from '../../types/atlas';

export const constructivismMovement: Movement = {
  id: 'constructivism',
  name: 'Constructivism',
  germanOrOriginalName: 'Russian Constructivism / Конструктивизм',
  period: '1915—1934',
  startYear: 1915,
  endYear: 1934,
  countries: ['Soviet Russia'],
  cities: ['Moscow', 'Petrograd', 'Vitebsk'],
  mottoOrKeywords: ['Art into Production', 'Tectonic Truth', 'The Engineer-Artist'],
  summary: 'A fierce Russian avant-garde movement that rejected easel painting as bourgeois self-indulgence, demanding that artists become technical constructors serving the collective socialist society.',
  coreIdeas: 'Art is not decorative embellishment; it is structural construction (Tektonika, Faktura, Konstruktsiya). The artist is an engineer shaping new everyday realities through factories, typography, posters, worker clubs, and monumental civic architecture.',
  historicalContext: 'Emerged from the crucible of the 1917 Bolshevik October Revolution and the Russian Civil War. Thrived at the VKhUTEMAS state art and technical workshops until Stalinist Socialist Realism brutally suppressed avant-garde formal experiments in 1932–1934.',
  visualPrinciples: [
    'Violent diagonal dynamism and structural engineering cantilevers',
    'Photomontage: cutting camera reality and juxtaposing scale for political agitprop',
    'Heavy mechanical sans-serif wood type stacked vertically and diagonally',
    'Industrial materials presented without deception: unpainted iron, glass, timber'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Diagonals', 'Spirals', 'Cantilever Wedges', 'Steel Trusses'],
      description: 'Vectors of forward propulsion and revolutionary momentum, rejecting static bourgeois horizontalism.',
      diagramType: 'diagonal-vector'
    },
    composition: {
      system: 'Diagonal Dynamic Agitation',
      rules: [
        'Angular layout axes tilted 15 to 45 degrees',
        'Dramatic scale clashes: miniature crowd vs monumental worker head',
        'Heavy black and cadmium red graphic bars framing focal statements'
      ]
    },
    colour: {
      palette: [
        { name: 'Revolutionary Red', hex: '#DC2626', role: 'Dynamic Agitation & Ideology' },
        { name: 'Industrial Black', hex: '#000000', role: 'Structural Steel & Heavy Type' },
        { name: 'Parchment Raw', hex: '#F3EFE6', role: 'Unbleached Newsprint Ground' },
        { name: 'Gunmetal Grey', hex: '#4B5563', role: 'Machine Facture' }
      ],
      philosophy: 'Stark high-contrast printing suited for cheap rotary letterpress and mass lithographic dissemination to illiterate proletarians.'
    },
    typography: {
      classification: 'Constructed Heavy Grotesk & Sans Slab',
      characteristics: [
        'Extremely bold woodblock grotesque letterforms',
        'Rotated words following diagonal axes',
        'Aggressive size contrast between headline shouts and factual columns'
      ],
      specimen: 'КНИГИ ПО ВСЕМ ОТРАСЛЯМ ЗНАНИЯ'
    },
    materials: ['Rolled steel girders', 'Industrial plate glass', 'Raw timber', 'Linen overalls', 'Rotary ink'],
    attitude: ['Agitational', 'Engineered', 'Collectivist', 'Utilitarian', 'Radical']
  },
  architectureNotes: 'Tatlin\'s unbuilt Monument to the Third International (1920) proposed a 400-meter leaning iron spiral framework enclosing rotating glass geometric volumes.',
  graphicDesignNotes: 'Alexander Rodchenko and El Lissitzky reinvented 20th-century graphic design through diagonal photo-collages, bold exclamation rules, and agitational magazine layouts (LEF, USSR in Construction).',
  industryRelationship: 'Direct integration into socialist factory production, textile mills, mass printing houses, and municipal civic planning.',
  keyPeople: [
    'vladimir-tatlin',
    'alexander-rodchenko',
    'el-lissitzky',
    'varvara-stepanova',
    'konstantin-melnikov',
    'gustav-klutsis'
  ],
  keyWorks: [
    'obj-tatlin-tower',
    'obj-beat-the-whites',
    'obj-lengiz-books-poster'
  ],
  influencesFrom: ['suprematism', 'cubo-futurism'],
  influencesTo: ['bauhaus', 'new-typography', 'international-style'],
  styleTheme: {
    accentColor: '#DC2626',
    secondaryColor: '#111827',
    layoutBehavior: 'constructivist-diagonal'
  }
};
