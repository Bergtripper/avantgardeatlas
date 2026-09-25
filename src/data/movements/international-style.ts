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
  summary: 'The universal institutionalization of modernist architectural principles: lightweight skeletons, ribbon windows, flat roofs, and serene undecorated surfaces.',
  coreIdeas: 'Formulated in 1932 by Henry-Russell Hitchcock and Philip Johnson at the seminal MoMA exhibition. Architecture is conceived not as heavy structural mass, but as slender enclosed volumes defined by lightweight structural frames and glass curtains.',
  historicalContext: 'Crystallized at the Weissenhofsiedlung exhibition in Stuttgart in 1927, championed globally by Le Corbusier, Mies van der Rohe, Walter Gropius, and CIAM, and transplanted to America before World War II.',
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
        'Cantilevered cantilever terraces floating above open terrain'
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
  architectureNotes: 'Villa Savoye in Poissy by Le Corbusier (1929) and the Barcelona Pavilion by Mies van der Rohe (1929) defined the canonical vocabulary of modern world architecture.',
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
  styleTheme: {
    accentColor: '#334155',
    secondaryColor: '#0F172A',
    layoutBehavior: 'international-clarity'
  }
};
