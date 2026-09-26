import { Movement } from '../../types/atlas';

export const cuboFuturismMovement: Movement = {
  id: 'cubo-futurism',
  name: 'Russian Cubo-Futurism',
  germanOrOriginalName: 'Кубофутуризм',
  period: '1912—1918',
  startYear: 1912,
  endYear: 1918,
  countries: ['Russia'],
  cities: ['Moscow', 'St. Petersburg'],
  mottoOrKeywords: ['A Slap in the Face of Public Taste', 'Zaum (Transrational Language)', 'Rayonism'],
  summary: 'A Russian avant-garde tendency of the early 1910s that combined Cubist fragmentation with Futurist strategies for representing movement, while also developing distinct experiments in poetry, artists’ books, performance, and painting.',
  coreIdeas: 'Cubo-Futurist artists and poets tested how fractured form, repetition, typographic disruption, and transrational language could convey simultaneity and modern experience. Their work often moved between painting, poetry, handmade books, and theatrical collaboration.',
  historicalContext: 'The term Cubo-Futurism is used for a cluster of Russian avant-garde experiments that became prominent around 1912–1914. Malevich’s Knife Grinder is a representative example of the way Cubist prismatic form and Futurist devices for suggesting movement were combined before his turn toward Suprematism.',
  visualPrinciples: [
    'Tubular metallic painting of figures (reminiscent of Fernand Léger)',
    'Combination of Cyrillic typography with faceted pictorial compositions',
    'The depiction of physical exertion, agricultural labor, and steam engines',
    'Crude, handmade lithographic booklets printed on cheap wallpaper scraps'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Tubular Cylinders', 'Crystalline Edges', 'Fractured Cyrillic Lettering'],
      description: 'Dynamic metallic cylinders clashing against faceted angles.',
      diagramType: 'diagonal-vector'
    },
    composition: {
      system: 'Centrifugal Faceted Tumult',
      rules: [
        'Violent compression of bodily figures into metallic armor plates',
        'Words spliced directly into geometric vortices'
      ]
    },
    colour: {
      palette: [
        { name: 'Metallic Cobalt', hex: '#1D4ED8', role: 'Cold Industrial Sheet' },
        { name: 'Raw Ochre', hex: '#B45309', role: 'Peasant Earth' },
        { name: 'Lamp Black', hex: '#0F172A', role: 'Mechanical Contrast' }
      ],
      philosophy: 'Clashing earthy peasant pigments with cold machine-age metallic reflections.'
    },
    typography: {
      classification: 'Zaum & Hand-Lithographed Lettering',
      characteristics: [
        'Hand-written, lithographed, and rubber-stamped Cyrillic words',
        'Deliberately rustic, crude paper stock and wallpaper bindings'
      ],
      specimen: 'ПОЩЕЧИНА ОБЩЕСТВЕННОМУ ВКУСУ'
    },
    materials: ['Lithographic ink', 'Coarse wrapping paper', 'Oil paint', 'Burlap', 'Newsprint'],
    attitude: ['Provocative', 'Experimental', 'Boisterous', 'Radical', 'Intuitive']
  },
  architectureNotes: 'Primarily a pictorial, literary, and theatrical movement; its spatial experimentation found its highest expression in avant-garde stage sets.',
  graphicDesignNotes: 'Revolutionary pocket booklets (such as "A Trap for Judges" and "Worldbackwards") invented modern artist bookmaking.',
  industryRelationship: 'Poetically celebrated machinery and locomotive dynamos as instruments of social liberation before the industrial reality was fully realized in Russia.',
  keyPeople: [
    'kazimir-malevich',
    'vladimir-mayakovsky',
    'natalia-goncharova',
    'mikhail-larionov',
    'velimir-khlebnikov'
  ],
  keyWorks: [
    'obj-knife-grinder',
    'obj-victory-over-sun'
  ],
  influencesFrom: ['cubism', 'futurism'],
  influencesTo: ['suprematism', 'constructivism'],
  provenance: {
    summary: { sourceIds: ['moma-cubo-futurism-knife-grinder'], status: 'editorial-synthesis' },
    coreIdeas: { sourceIds: ['moma-cubo-futurism-knife-grinder'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['moma-cubo-futurism-knife-grinder'], status: 'documented' },
  },
  styleTheme: {
    accentColor: '#1D4ED8',
    secondaryColor: '#B45309',
    layoutBehavior: 'futurist-dynamic'
  }
};
