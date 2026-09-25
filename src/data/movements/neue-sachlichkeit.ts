import { Movement } from '../../types/atlas';

export const neueSachlichkeitMovement: Movement = {
  id: 'neue-sachlichkeit',
  name: 'Neue Sachlichkeit',
  germanOrOriginalName: 'New Objectivity',
  period: '1922—1933',
  startYear: 1922,
  endYear: 1933,
  countries: ['Germany'],
  cities: ['Berlin', 'Frankfurt', 'Munich', 'Karlsruhe'],
  mottoOrKeywords: ['The New Objectivity', 'Existenzminimum', 'Sachlichkeit'],
  summary: 'A cool, sober, unsentimental German movement that countered postwar Expressionist emotionalism with documentary realism, factual social analysis, and functional civic architecture.',
  coreIdeas: 'To look at the harsh socioeconomic realities of modern life without sentimental illusions. In painting, it forged ruthless, razor-sharp documentary portraits; in architecture, it designed standardized, light-filled municipal social housing (Siedlungen) configured around biological minimum requirements for human life (Existenzminimum).',
  historicalContext: 'Named by Gustav Friedrich Hartlaub for his 1925 exhibition at the Kunsthalle Mannheim. It characterized the stabilized "Golden Twenties" of the Weimar Republic before the rise of totalitarian fascism.',
  visualPrinciples: [
    'Unforgiving, crystalline objective clarity and sharp-focus depiction',
    'The eradication of decorative bourgeois pretense in architecture and daily life',
    'Ergonomic calculation of living space (e.g. Margarete Schütte-Lihotzky’s Frankfurt Kitchen)',
    'Repetitive parallel slab blocks oriented systematically toward natural sunlight'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Linear Slabs', 'Ergonomic Modules', 'Parallel Daylight Vectors'],
      description: 'Calculated, scientific planning based on hygiene and ventilation.',
      diagramType: 'structural-frame'
    },
    composition: {
      system: 'Functional Sociological Grid',
      rules: [
        'Spacing dictated strictly by solar orientation angles',
        'Standardized building depths optimized for cross-ventilation',
        'Sober, matter-of-fact documentation'
      ]
    },
    colour: {
      palette: [
        { name: 'Institutional Ochre', hex: '#CA8A04', role: 'Warm Social Plaster' },
        { name: 'Linoleum Gray', hex: '#64748B', role: 'Durable Functional Floor' },
        { name: 'Soot Black', hex: '#1E293B', role: 'Sharp Linework' }
      ],
      philosophy: 'Functional, calm, clean colors supporting psychological hygiene.'
    },
    typography: {
      classification: 'Documentary Sans & Objective Grotesk',
      characteristics: [
        'Tabular statistical layouts and demographic charts',
        'Unadorned grotesque lettering used for signage and municipal municipal records'
      ],
      specimen: 'DAS NEUE FRANKFURT 1926'
    },
    materials: ['Prefabricated pumice concrete slabs', 'Tubular steel', 'Linoleum', 'Plate glass'],
    attitude: ['Sober', 'Documentary', 'Sociological', 'Scientific', 'Pragmatic']
  },
  architectureNotes: 'The New Frankfurt housing estates (Ernst May, 1925–1930) provided tens of thousands of affordable, hygienic modern flats equipped with standardized kitchens.',
  graphicDesignNotes: 'The monthly magazine "Das Neue Frankfurt" chronicled international modernist urbanism with dry, immaculate photographic layouts.',
  industryRelationship: 'Pioneered prefabricated building elements assembled rapidly on site with mobile crane towers.',
  keyPeople: [
    'ernst-may',
    'margarete-schutte-lihotzky',
    'otto-dix',
    'george-grosz',
    'august-sander'
  ],
  keyWorks: [
    'obj-frankfurt-kitchen',
    'obj-people-20th-century'
  ],
  influencesFrom: ['deutscher-werkbund', 'bauhaus', 'dada'],
  influencesTo: ['international-style', 'new-typography'],
  styleTheme: {
    accentColor: '#64748B',
    secondaryColor: '#CA8A04',
    layoutBehavior: 'international-clarity'
  }
};
