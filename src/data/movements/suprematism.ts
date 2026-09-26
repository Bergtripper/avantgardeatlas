import { Movement } from '../../types/atlas';

export const suprematismMovement: Movement = {
  id: 'suprematism',
  name: 'Suprematism',
  germanOrOriginalName: 'Супрематизм',
  period: '1913—1928',
  startYear: 1913,
  endYear: 1928,
  countries: ['Russia'],
  cities: ['St. Petersburg', 'Moscow', 'Vitebsk'],
  mottoOrKeywords: ['The Supremacy of Pure Feeling', 'Zero of Form', 'Cosmic Weightlessness'],
  summary: 'A mode of abstract painting formulated by Kazimir Malevich in 1915 that rejected representational reference in favor of geometric forms, color, and what he described as the supremacy of pure feeling or perception.',
  coreIdeas: 'Suprematism sought a non-objective visual language independent of depiction. Basic geometric forms—especially squares, rectangles, circles, and crosses—were arranged against open fields to emphasize relations of color, weight, movement, and perception rather than recognizable subjects.',
  historicalContext: 'Malevich coined the term Suprematism in 1915 and presented the new abstract vocabulary publicly in Petrograd that year. The movement developed through painting, drawing, print, design, and later three-dimensional studies before its ideas were taken in different directions by artists including El Lissitzky and Nikolai Suetin.',
  visualPrinciples: [
    'The Black Square as the embryo of all artistic possibilities',
    'Floating non-objective geometric bodies dispersed in unmeasured white space',
    'Complete absence of horizon line, gravity, perspective, or representational shadows',
    'Dynamic diagonal drifts indicating cosmic flight and multi-dimensional space'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['The Quadrangle (Black Square)', 'Dynamic Cross', 'Cosmic Circle', 'Shifting Trapezoids'],
      description: 'Elemental geometric masses interacting through subtle angles and weight distributions.',
      diagramType: 'floating-planes'
    },
    composition: {
      system: 'Zero-Gravity Suspension',
      rules: [
        'Vast negative white background symbolizing infinite cosmic ether',
        'Shapes never rest on a baseline; they hover or glide diagonally',
        'Dislocation of coordinate axes creates multidirectional orientation'
      ]
    },
    colour: {
      palette: [
        { name: 'Absolute Black', hex: '#000000', role: 'The Zero of Form' },
        { name: 'Cosmic White', hex: '#FFFFFF', role: 'Infinite Spatial Dimension' },
        { name: 'Pure Scarlet', hex: '#E11D48', role: 'Spiritual Energy' },
        { name: 'Lapis Blue', hex: '#1E3A8A', role: 'Atmospheric Dissolution' }
      ],
      philosophy: 'Color is distilled into its purest sensory impact, free of worldly description.'
    },
    typography: {
      classification: 'Dispersed Planar Letterforms',
      characteristics: [
        'Spatial arrangement of words as weightless floating blocks',
        'Suprematist architectural models (Architectons) informing block typography'
      ],
      specimen: 'МИР КАК БЕСПРЕДМЕТНОСТЬ'
    },
    materials: ['Oil on linen canvas', 'Plaster architectural models (Architectons)', 'Porcelain tea sets'],
    attitude: ['Mystical', 'Radical', 'Cosmic', 'Non-Objective', 'Pioneering']
  },
  architectureNotes: 'Malevich’s "Architectons" (1923–1928)—pure white plaster compositions of intersecting rectilinear solids—served as visionary prototypes for future vertical cities and space stations.',
  graphicDesignNotes: 'El Lissitzky translated Malevich’s mystical Suprematism into spatial communication, architectural exhibitions, and his famous "PROUN" (Projects for the Affirmation of the New) series.',
  industryRelationship: 'Although Suprematism began as a theory of non-objective painting, its geometric vocabulary later migrated into print, exhibition design, architectural studies, and applied objects, including porcelain associated with the State Porcelain Factory.',
  keyPeople: [
    'kazimir-malevich',
    'el-lissitzky',
    'olga-rozanova',
    'nikolai-suetin',
    'ilya-chashnik'
  ],
  keyWorks: [
    'obj-black-square',
    'obj-suprematist-composition',
    'obj-proun-19d'
  ],
  influencesFrom: ['cubo-futurism'],
  influencesTo: ['constructivism', 'de-stijl', 'bauhaus'],
  provenance: {
    summary: { sourceIds: ['moma-suprematism'], status: 'documented' },
    coreIdeas: { sourceIds: ['moma-suprematism'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['moma-suprematism'], status: 'documented' },
    industryRelationship: { sourceIds: ['moma-suprematism'], status: 'editorial-synthesis' },
  },
  styleTheme: {
    accentColor: '#111827',
    secondaryColor: '#E11D48',
    layoutBehavior: 'suprematist-floating'
  }
};
