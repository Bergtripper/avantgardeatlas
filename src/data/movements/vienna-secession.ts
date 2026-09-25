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
  summary: 'A revolutionary breakaway movement of Viennese artists and architects rejecting conservative academic historicism in pursuit of a unified total work of art (Gesamtkunstwerk).',
  coreIdeas: 'To liberate creative art from imperial academic stagnation. The Secession embraced geometric stylization, exquisite graphic square motifs, organic linear tension, and the complete aesthetic integration of architecture, furniture, metalwork, and typography.',
  historicalContext: 'Formed in Vienna in 1897 by Gustav Klimt, Josef Hoffmann, Koloman Moser, and Joseph Maria Olbrich. Built their own radical white exhibition pavilion topped by a golden laurel dome.',
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
  architectureNotes: 'The Secession Building by Joseph Maria Olbrich (1898) stood as a temple to the new art, featuring pure white cubic masses crowned with a filigree dome of 2,500 gilded laurel leaves.',
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
  styleTheme: {
    accentColor: '#CA8A04',
    secondaryColor: '#18181B',
    layoutBehavior: 'secessionist-linear'
  }
};
