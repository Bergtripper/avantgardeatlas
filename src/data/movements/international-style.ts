import { Movement } from '../../types/atlas';

export const internationalStyleMovement: Movement = {
  id: 'international-style',
  name: 'International Style',
  germanOrOriginalName: 'Modern Movement / Neues Bauen',
  period: '1927—1940+',
  startYear: 1927,
  endYear: 1945,
  countries: ['Germany', 'France', 'Switzerland', 'United States'],
  cities: ['Stuttgart', 'Paris', 'Berlin', 'New York', 'Chicago'],
  mottoOrKeywords: ['Architecture as Volume', 'Regularity rather than Symmetry', 'Avoidance of Applied Decoration'],
  summary: 'An interwar architectural category used to describe a transnational modernist vocabulary of rectilinear volumes, structural frames, glass, reinforced concrete, regularity, and minimal applied ornament.',
  coreIdeas: 'Henry-Russell Hitchcock and Philip Johnson used the term International Style in connection with MoMA’s 1932 architecture exhibition to identify formal tendencies shared by several European modern architects, especially an emphasis on volume, regularity, and avoidance of applied decoration.',
  historicalContext: 'The label consolidated in the United States around MoMA’s 1932 Modern Architecture exhibition and the accompanying work of Hitchcock and Johnson. It described tendencies that had developed during the 1920s in European modern architecture and were subsequently circulated through exhibitions, publications, migration, and professional networks.',
  visualPrinciples: [
    'Volume rather than mass: thin surface membranes stretched over skeleton frames',
    'Regularity rather than bilateral symmetry: standardized structural bay rhythms',
    'Rejection of applied ornament: the intrinsic elegance of materials and proportions',
    'The Five Points of Architecture: pilotis, roof gardens, free plan, ribbon windows, free facade'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Rectilinear Prisms', 'Modular Structural Grids', 'Continuous Horizontal Bands'],
      description: 'Extreme volumetric reduction and proportional clarity.',
      diagramType: 'structural-frame'
    },
    composition: {
      system: 'Modular Bay Rhythm',
      rules: [
        'Repetitive column grids defining flexible interior space',
        'Unbroken horizontal lines running along facade perimeters',
        'Cantilevered terraces extending beyond structural frames'
      ]
    },
    colour: {
      palette: [
        { name: 'Stucco White', hex: '#F8FAFC', role: 'Pure Volumetric Shell' },
        { name: 'Slate Anthracite', hex: '#334155', role: 'Mullions and Steel Frame' },
        { name: 'Windowpane Glass', hex: '#E2E8F0', role: 'Transparent Permeability' },
        { name: 'Natural Travertine', hex: '#E7E5E4', role: 'Honest Earth Foundation' }
      ],
      philosophy: 'Purity of unadorned architectural envelope; materials speak through their natural surface texture.'
    },
    typography: {
      classification: 'Clear Swiss Grotesk & Neutral Sans',
      characteristics: [
        'Asymmetric grid layout with rigid column alignment',
        'Total clarity of hierarchical communication',
        'Tabular alignment for technical specifications and building metrics'
      ],
      specimen: 'HELVETICA & AKZIDENZ GROTESK'
    },
    materials: ['Reinforced concrete', 'Structural rolled steel', 'Plate glass', 'Travertine marble', 'Chromed bronze'],
    attitude: ['Rational', 'Universal', 'Rigorous', 'Architectonic', 'Cosmopolitan']
  },
  architectureNotes: 'Projects such as Le Corbusier and Pierre Jeanneret’s Villa Savoye and Mies van der Rohe’s Barcelona Pavilion became central examples in later accounts of interwar modern architecture and the International Style.',
  graphicDesignNotes: 'Direct ancestor to the Swiss International Typographic Style of the 1950s (Max Bill, Josef Müller-Brockmann, Emil Ruder).',
  industryRelationship: 'Deep commitment to industrialized prefabrication, standardized steel profiles, and mass civic housing blocks.',
  keyPeople: [
    'mies-van-der-rohe',
    'le-corbusier',
    'walter-gropius',
    'philip-johnson',
    'henry-russell-hitchcock'
  ],
  keyWorks: [
    'obj-barcelona-pavilion',
    'obj-villa-savoye'
  ],
  influencesFrom: ['bauhaus', 'de-stijl', 'purism', 'constructivism'],
  influencesTo: ['rationalism'],
  provenance: {
    summary: {
      sourceIds: ['moma-international-style-term'],
      status: 'documented',
    },
    coreIdeas: {
      sourceIds: ['moma-international-style-term', 'moma-modern-architecture-1932'],
      status: 'documented',
    },
    historicalContext: {
      sourceIds: ['moma-modern-architecture-1932', 'moma-international-style-term'],
      status: 'editorial-synthesis',
    },
    architectureNotes: {
      sourceIds: ['moma-international-style-term'],
      status: 'editorial-synthesis',
    },
  },
  styleTheme: {
    accentColor: '#334155',
    secondaryColor: '#0F172A',
    layoutBehavior: 'international-clarity'
  }
};
