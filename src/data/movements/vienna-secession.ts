import { Movement } from '../../types/atlas';

export const viennaSecessionMovement: Movement = {
  id: 'vienna-secession',
  name: 'Vienna Secession',
  germanOrOriginalName: 'Wiener Secession',
  period: '1897—1914',
  startYear: 1897,
  endYear: 1914,
  countries: ['Austria-Hungary'],
  cities: ['Vienna'],
  mottoOrKeywords: ['To Every Age Its Art, To Art Its Freedom', 'Gesamtkunstwerk', 'Sacred Spring (Ver Sacrum)'],
  summary: 'A Viennese artists’ association founded in 1897 by figures who broke with the conservative Künstlerhaus and sought new exhibition formats and a more modern artistic culture across painting, architecture, graphic design, and the applied arts.',
  coreIdeas: 'The Secession promoted artistic autonomy, new exhibition practices, and closer dialogue between fine and applied arts. Its members did not share one fixed formal style, but their work often explored geometric order, linear ornament, integrated interiors, and modern approaches to publishing and display.',
  historicalContext: 'The Vienna Secession was founded in 1897 by a group around Gustav Klimt after a split from the Künstlerhaus. Gustav Klimt became its first president; Josef Hoffmann, Joseph Maria Olbrich, Kolo Moser, and Carl Moll were among the founding members. Olbrich designed the association’s exhibition building, completed in 1898, while the magazine Ver Sacrum became another central platform.',
  visualPrinciples: [
    'The Golden Laurel dome atop pure cubic white architecture',
    'The "Quadratstil" (square style) pioneered by Josef Hoffmann and Koloman Moser',
    'Delicate, rhythmically repetitive linear ornaments and stylized biological motifs',
    'The ideal of the Gesamtkunstwerk: unifying all interior elements into an aesthetic symphony'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['The Square Matrix', 'Gilded Domes', 'Stylized Laurel Leaves'],
      description: 'Pure cubic architecture counterpointed by delicate rhythmic surface ornament.',
      diagramType: 'circle-square-triangle'
    },
    composition: {
      system: 'Sacred Linear Grid',
      rules: [
        'Orthogonal square repetition forming border friezes',
        'Generous unadorned white plaster surfaces',
        'Symmetrical balance imbued with ritualistic architectural dignity'
      ]
    },
    colour: {
      palette: [
        { name: 'Imperial Gold Leaf', hex: '#EAB308', role: 'Sacred Laurel Dome and Ornamental Gilded Line' },
        { name: 'Stucco White', hex: '#F8FAFC', role: 'Purity of Architectural Wall' },
        { name: 'Iron Black', hex: '#18181B', role: 'Crisp Graphic Contours' }
      ],
      philosophy: 'Contrast of gleaming gold accents against serene white grounds.'
    },
    typography: {
      classification: 'Secessionist Square Lettering',
      characteristics: [
        'Hand-lettered architectural capitals locked into square proportions',
        'Dense graphic block layouts in the journal Ver Sacrum',
        'Delicate floral and geometric border decorations'
      ],
      specimen: 'VER SACRUM WIEN 1898'
    },
    materials: ['Gilded bronze leaf', 'White polished stucco', 'Bentwood', 'Hand-hammered silver', 'Marble veneers'],
    attitude: ['Sacred', 'Aesthetic', 'Holistic', 'Refined', 'Emancipatory']
  },
  architectureNotes: 'Joseph Maria Olbrich’s Secession building of 1898 served as the association’s dedicated exhibition venue and as a built statement of its commitment to contemporary art, combining a compact white mass with the distinctive gilded laurel dome.',
  graphicDesignNotes: 'The magazine "Ver Sacrum" (Sacred Spring) redefined publishing through square paper formats, innovative woodcuts, and unified typographic borders.',
  industryRelationship: 'Gave birth to the Wiener Werkstätte (Vienna Workshops, 1903), producing handcrafted luxury furnishings and silver goods for an enlightened cultural elite.',
  keyPeople: [
    'gustav-klimt',
    'joseph-maria-olbrich',
    'josef-hoffmann',
    'koloman-moser',
    'otto-wagner'
  ],
  keyWorks: [
    'obj-secession-building',
    'obj-palais-stoclet'
  ],
  influencesFrom: ['art-nouveau'],
  influencesTo: ['deutscher-werkbund', 'bauhaus'],
  provenance: {
    summary: { sourceIds: ['vienna-secession-history'], status: 'documented' },
    coreIdeas: { sourceIds: ['vienna-secession-history'], status: 'editorial-synthesis' },
    historicalContext: { sourceIds: ['vienna-secession-history'], status: 'documented' },
    architectureNotes: { sourceIds: ['vienna-secession-history'], status: 'documented' },
  },
  styleTheme: {
    accentColor: '#CA8A04',
    secondaryColor: '#18181B',
    layoutBehavior: 'secessionist-linear'
  }
};
