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
  summary: 'A Russian avant-garde movement that emerged around the Revolution and redirected artistic practice toward construction, production, communication, and socially oriented design.',
  coreIdeas: 'Constructivist practice emphasized construction, material, and organization over autonomous pictorial expression. The artist was increasingly framed as a constructor working across objects, typography, exhibition design, architecture, and other forms of social production.',
  historicalContext: 'Constructivism developed within the Russian avant-garde in the years around and after the October Revolution of 1917. During the 1920s it intersected with state art education, publishing, exhibition design, theater, photography, and architecture before the institutional space for avant-garde experimentation narrowed sharply in the early 1930s.',
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
  architectureNotes: 'Tatlin’s unbuilt Monument to the Third International (1920) became one of the movement’s emblematic projects: an immense inclined spiral structure conceived as both monument and apparatus for revolutionary institutions.',
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
    'obj-lengiz-books'
  ],
  influencesFrom: ['suprematism', 'cubo-futurism'],
  influencesTo: ['bauhaus', 'new-typography', 'international-style'],
  provenance: {
    summary: {
      sourceIds: ['moma-constructivism'],
      status: 'editorial-synthesis',
    },
    coreIdeas: {
      sourceIds: ['moma-constructivism'],
      status: 'editorial-synthesis',
    },
    historicalContext: {
      sourceIds: ['moma-constructivism'],
      status: 'editorial-synthesis',
      note: 'MoMA directly supports the movement’s post-1917 emergence and utilitarian social orientation; the later institutional contraction is a concise editorial synthesis.',
    },
    architectureNotes: {
      sourceIds: ['moma-constructivism'],
      status: 'documented',
    },
  },
  styleTheme: {
    accentColor: '#DC2626',
    secondaryColor: '#111827',
    layoutBehavior: 'constructivist-diagonal'
  }
};
