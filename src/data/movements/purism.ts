import { Movement } from '../../types/atlas';

export const purismMovement: Movement = {
  id: 'purism',
  name: 'Purism',
  germanOrOriginalName: 'Le Purisme',
  period: '1918—1925',
  startYear: 1918,
  endYear: 1925,
  countries: ['France'],
  cities: ['Paris'],
  mottoOrKeywords: ['The Machine Aesthetic', 'L\'Esprit Nouveau', 'Objects-Types'],
  summary: 'A post-Cubist movement developed by Amédée Ozenfant and Charles-Édouard Jeanneret (Le Corbusier) from 1918, emphasizing clarity, order, geometric composition, and the depiction of standardized everyday objects.',
  coreIdeas: 'Purism proposed a more ordered alternative to Cubist fragmentation. Ozenfant and Jeanneret treated simple manufactured objects as stable pictorial types and organized them through controlled geometry, proportion, and restrained surfaces.',
  historicalContext: 'Ozenfant and Jeanneret published "Après le Cubisme" in 1918 alongside the first exhibition of Purist painting. Their ideas were subsequently developed through "L’Esprit Nouveau" and became closely entangled with Le Corbusier’s architectural thinking during the early 1920s.',
  visualPrinciples: [
    'Selection of standardized everyday industrial objects (objets-types)',
    'Rigorous geometric proportion governed by regulating lines (tracés régulateurs)',
    'Smooth, non-painterly application of flat untextured color planes',
    'Harmonic clarity inspired by ancient Greek temples and modern ocean liners'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['The Golden Section', 'Cylindrical Silhouettes', 'Smooth Tangents'],
      description: 'Harmonious geometric contours of industrialized objects.',
      diagramType: 'orthogonal-grid'
    },
    composition: {
      system: 'Regulating Lines & Golden Ratio',
      rules: [
        'Underlying diagonal and orthogonal regulating guidelines',
        'Flattened isometric overlaps of type-objects',
        'Absolute rejection of expressive brushstrokes or textured distortion'
      ]
    },
    colour: {
      palette: [
        { name: 'Ochre Chalk', hex: '#D97706', role: 'Warm Terrestrial Base' },
        { name: 'Slate Gray', hex: '#64748B', role: 'Industrial Metal' },
        { name: 'Pale Terracotta', hex: '#C2410C', role: 'Ceramic Warmth' },
        { name: 'Alabaster Tint', hex: '#F8FAFC', role: 'Pristine Ground' }
      ],
      philosophy: 'Subtle, architectural, muted earth pigments that support spatial calm rather than sensory excitation.'
    },
    typography: {
      classification: 'Architectural Grotesk & Modern Roman',
      characteristics: [
        'Clean, disciplined French grotesk faces',
        'Magazine layouts with classical margins and generous white space',
        'Integration of technical engineering cross-sections'
      ],
      specimen: 'L\'ESPRIT NOUVEAU 1920'
    },
    materials: ['Precast concrete', 'Sheet steel', 'Industrial glass', 'Cast iron', 'Oil paint'],
    attitude: ['Rigorous', 'Harmonic', 'Rational', 'Classical', 'Architectural']
  },
  architectureNotes: 'Directly laid the theoretical foundation for Le Corbusier’s "Vers une architecture" (Towards an Architecture, 1923) and his iconic Pavilion of the Esprit Nouveau (1925).',
  graphicDesignNotes: 'The journal "L\'Esprit Nouveau" merged automotive engineering diagrams with ancient Doric columns, creating modern comparative visual rhetoric.',
  industryRelationship: 'Idolized the standardized mass manufacture of automobiles (Voisin), steamships, and airplanes as models for home building.',
  keyPeople: [
    'amedee-ozenfant',
    'le-corbusier',
    'fernand-leger'
  ],
  keyWorks: [
    'obj-pavillon-esprit-nouveau',
    'obj-purist-still-life'
  ],
  influencesFrom: ['cubism'],
  influencesTo: ['international-style', 'rationalism'],
  provenance: {
    summary: { sourceIds: ['moma-purism'], status: 'documented' },
    coreIdeas: { sourceIds: ['moma-purism'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['moma-purism'], status: 'documented' },
  },
  styleTheme: {
    accentColor: '#C2410C',
    secondaryColor: '#64748B',
    layoutBehavior: 'international-clarity'
  }
};
