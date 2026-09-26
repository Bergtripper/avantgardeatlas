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
  summary: 'A German interwar tendency associated with a renewed emphasis on realism, precise observation, and unsentimental description across painting and photography, alongside broader contemporary debates about functional modernity.',
  coreIdeas: 'New Objectivity rejected the heightened subjectivity of Expressionism in favor of sharper observation and recognizably contemporary subjects. In photography and portraiture, this often meant systematic description; in architecture and housing discourse, related ideas of Sachlichkeit emphasized functional organization, economy, and standardization.',
  historicalContext: 'Gustav Friedrich Hartlaub coined the term Neue Sachlichkeit in the mid-1920s for a new realist tendency in German art. The label became associated with artists including Otto Dix and George Grosz and was later also applied to photographers such as August Sander, whose work pursued systematic representations of Weimar society.',
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
        'Unadorned grotesque lettering used for signage and municipal records'
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
  provenance: {
    summary: { sourceIds: ['moma-neue-sachlichkeit'], status: 'documented' },
    coreIdeas: { sourceIds: ['moma-neue-sachlichkeit', 'moma-august-sander'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['moma-neue-sachlichkeit', 'moma-august-sander'], status: 'documented' },
  },
  styleTheme: {
    accentColor: '#64748B',
    secondaryColor: '#CA8A04',
    layoutBehavior: 'international-clarity'
  }
};
