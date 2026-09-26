import { Movement } from '../../types/atlas';

export const deStijlMovement: Movement = {
  id: 'de-stijl',
  name: 'De Stijl',
  germanOrOriginalName: 'The Style / Neo-Plasticism',
  period: '1917—1931',
  startYear: 1917,
  endYear: 1931,
  countries: ['Netherlands'],
  cities: ['Leiden', 'Utrecht', 'Amsterdam'],
  mottoOrKeywords: ['The New Plastic Art', 'Universal Equilibrium', 'Pure Orthogonality'],
  summary: 'A Dutch avant-garde network centered on the journal De Stijl, pursuing abstract relationships of line, plane, proportion, and color across painting, furniture, architecture, and graphic design.',
  coreIdeas: 'De Stijl artists and designers pursued abstraction as a means of organizing visual and spatial relationships beyond naturalistic representation. In Mondrian’s Neo-Plasticism this vocabulary was reduced especially to verticals, horizontals, rectangular planes, primary colors, and neutrals.',
  historicalContext: 'The journal De Stijl was founded in the Netherlands in 1917 by Theo van Doesburg and became the focus of a shifting group of artists, architects, and designers including Piet Mondrian, Gerrit Rietveld, Bart van der Leck, Vilmos Huszár, and J. J. P. Oud.',
  visualPrinciples: [
    'Strict orthogonal geometry: only straight 90-degree horizontal and vertical vectors',
    'Complete rejection of diagonal lines (until Van Doesburg’s controversial Elementarism break in 1924)',
    'Primary colors (red, blue, yellow) set against non-colors (white, gray, black)',
    'Continuous spatial interpenetration: planes glide past one another without forming enclosed mass'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['Orthogonal Planes', 'Intersecting Rectangles', 'Cartesian Grids'],
      description: 'Forms never overlap to create volume; rather, two-dimensional surfaces slide in spatial coordinate systems.',
      diagramType: 'orthogonal-grid'
    },
    composition: {
      system: 'Asymmetrical Dynamic Equilibrium',
      rules: [
        'No symmetry or central focal points',
        'Heavy black spatial bars framing independent colored fields',
        'Proportional balance calculated intuitively rather than mechanically'
      ]
    },
    colour: {
      palette: [
        { name: 'Primary Yellow', hex: '#FACC15', role: 'Solar Vitality / Vertical Tension' },
        { name: 'Primary Blue', hex: '#2563EB', role: 'Infinite Depth / Horizontal Ground' },
        { name: 'Primary Red', hex: '#DC2626', role: 'Radiant Centre' },
        { name: 'Pure White', hex: '#FFFFFF', role: 'Luminous Void' },
        { name: 'Charcoal Black', hex: '#111827', role: 'Orthogonal Structural Grid' }
      ],
      philosophy: 'Primary colors and neutrals became a recurring means of separating and balancing planes, although individual De Stijl participants did not apply a single fixed color doctrine in identical ways.'
    },
    typography: {
      classification: 'Constructed Monospaced Block Letters',
      characteristics: [
        'Letters constructed exclusively with square modules and thick rectangular lines',
        'No diagonal strokes (even K, N, Z composed with right-angle stepped elements)',
        'Headline and subheadings locked into Cartesian page coordinates'
      ],
      specimen: 'DE STIJL MAANDBLAD 1917'
    },
    materials: ['Painted solid wood beams', 'Sheet metal panels', 'Plate glass', 'Plaster partitions'],
    attitude: ['Universal', 'Spiritual', 'Uncompromising', 'Architectonic', 'Systematic']
  },
  architectureNotes: 'The Rietveld-Schröder House in Utrecht (1924) translated Neo-Plasticist painting into three dimensions: sliding partitions, floating colored balconies, and total spatial permeability.',
  graphicDesignNotes: 'The De Stijl journal published essays and architectural manifestos using asymmetric modular typography, framing avant-garde literature and Dadaist contributions.',
  industryRelationship: 'Sought an architectonic synthesis of all fine arts into a completely redesigned human environment, though manufacturing remained largely artisanal and bespoke.',
  keyPeople: [
    'theo-van-doesburg',
    'piet-mondrian',
    'gerrit-rietveld',
    'j-j-p-oud',
    'vilmos-huszar'
  ],
  keyWorks: [
    'obj-red-blue-chair',
    'obj-rietveld-schroder',
    'obj-mondrian-broadway'
  ],
  influencesFrom: ['cubism'],
  influencesTo: ['bauhaus', 'international-style', 'new-typography'],
  provenance: {
    summary: {
      sourceIds: ['moma-de-stijl-term', 'moma-de-stijl-magazine'],
      status: 'editorial-synthesis',
    },
    coreIdeas: {
      sourceIds: ['moma-de-stijl-term'],
      status: 'editorial-synthesis',
    },
    historicalContext: {
      sourceIds: ['moma-de-stijl-term', 'moma-van-doesburg'],
      status: 'documented',
    },
    graphicDesignNotes: {
      sourceIds: ['moma-de-stijl-magazine'],
      status: 'documented',
    },
  },
  styleTheme: {
    accentColor: '#2563EB',
    secondaryColor: '#DC2626',
    layoutBehavior: 'de-stijl-grid'
  }
};
