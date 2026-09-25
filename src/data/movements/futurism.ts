import { Movement } from '../../types/atlas';

export const futurismMovement: Movement = {
  id: 'futurism',
  name: 'Futurism',
  germanOrOriginalName: 'Futurismo Italiano',
  period: '1909—1944',
  startYear: 1909,
  endYear: 1944,
  countries: ['Italy'],
  cities: ['Milan', 'Turin', 'Rome'],
  mottoOrKeywords: ['The Beauty of Speed', 'Parole in Libertà', 'Dynamic Sensation'],
  summary: 'An explosive Italian movement glorifying velocity, machinery, electricity, danger, industrial cities, and the violent destruction of obsolete historical tradition.',
  coreIdeas: 'To capture the sensory delirium of modern mechanical life. Objects never exist in isolation; they are continuously penetrated by their environment, vibrating with "lines of force" that depict speed, sound, and mechanical acceleration.',
  historicalContext: 'Inaugurated on the front page of Le Figaro in Paris on February 20, 1909, by poet Filippo Tommaso Marinetti. It shocked bourgeois Europe through explosive manifestos, provocative theatrical performances (serate futuriste), and militaristic nationalism.',
  visualPrinciples: [
    'Lines of force (linee di forza) demonstrating directional momentum and velocity',
    'Simultaneous interpenetration of interior and exterior planes',
    'Words-in-Freedom (Parole in Libertà): breaking poetic grammar and typographic layout',
    'Staccato optical rhythms simulating the firing cylinders of combustion engines'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Accelerating Chevron Vectors', 'Dynamic Parabolas', 'Turbine Blades', 'Radial Shockwaves'],
      description: 'Continuous diagonal vectors conveying directional forward momentum.',
      diagramType: 'diagonal-vector'
    },
    composition: {
      system: 'Kinetic Dynamic Centrifugation',
      rules: [
        'Diagonal and radial trajectories radiating outward from exploding centers',
        'Fragmented overlapping planes evoking cinematic persistence of vision',
        'Typographic onomatopoeia mimicking gunfire, locomotive whistles, and roaring engines'
      ]
    },
    colour: {
      palette: [
        { name: 'Velocity Ochre', hex: '#D97706', role: 'Friction and Heat' },
        { name: 'Dynamo Blue', hex: '#0284C7', role: 'Electrical Discharge' },
        { name: 'Flame Vermilion', hex: '#EA580C', role: 'Combustion and Aggression' },
        { name: 'Asphalt Black', hex: '#18181B', role: 'Machine Body' }
      ],
      philosophy: 'Vivid, jarring, prismatic optical combinations designed to assault the viewer\'s placid visual senses.'
    },
    typography: {
      classification: 'Parole in Libertà / Onomatopoeic Expression',
      characteristics: [
        'Multiple type sizes, weights, and faces collided on a single page',
        'Text curved along trajectories of ballistic shells and roaring exhausts',
        'Abolition of punctuation, adjectives, and traditional syntax'
      ],
      specimen: 'ZANG TUMB TUUUM 1914'
    },
    materials: ['Polished bronze', 'Chrome steel', 'Electric carbon arcs', 'Newsprint', 'Plywood'],
    attitude: ['Aggressive', 'Accelerated', 'Technological', 'Provocative', 'Anti-Historicist']
  },
  architectureNotes: 'Antonio Sant\'Elia’s visionary drawings for the "Città Nuova" (1914) featured multi-level transport arteries, exposed external elevator shafts, and stepped hydro-electric power plants.',
  graphicDesignNotes: 'Fortunato Depero created the groundbreaking bolted book "Depero Futurista" (1927), bound with two industrial metal bolts, establishing typography as physical machine architecture.',
  industryRelationship: 'Obsessed with industrial machines, airplanes, locomotives, and automobiles (famously declaring a roaring racing car more beautiful than the Victory of Samothrace).',
  keyPeople: [
    'filippo-marinetti',
    'umberto-boccioni',
    'giacomo-balla',
    'antonio-sant-elia',
    'fortunato-depero'
  ],
  keyWorks: [
    'obj-boccioni-forms',
    'obj-citta-nuova',
    'obj-depero-bolted-book'
  ],
  influencesFrom: ['cubism'],
  influencesTo: ['cubo-futurism', 'dada', 'constructivism', 'rationalism'],
  styleTheme: {
    accentColor: '#EA580C',
    secondaryColor: '#0284C7',
    layoutBehavior: 'futurist-dynamic'
  }
};
