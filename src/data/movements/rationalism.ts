import { Movement } from '../../types/atlas';

export const rationalismMovement: Movement = {
  id: 'rationalism',
  name: 'Rationalism',
  germanOrOriginalName: 'Razionalismo Italiano / Gruppo 7',
  period: '1926—1943',
  startYear: 1926,
  endYear: 1943,
  countries: ['Italy'],
  cities: ['Como', 'Milan', 'Rome'],
  mottoOrKeywords: ['Gruppo 7', 'Mediterranean Light', 'Structural Purity'],
  summary: 'The Italian branch of modern architecture that synthesized European functionalist rigor with ancient Mediterranean proportions, classical harmony, and local marble craft.',
  coreIdeas: 'To modernize Italian architecture without renouncing its deep classical Latin heritage. Led by Gruppo 7 and Giuseppe Terragni, Rationalism proved that modern reinforced concrete and pure geometric grids could achieve the timeless poetic balance of classical Roman and Renaissance monuments.',
  historicalContext: 'Founded in Milan in 1926 by seven young architects (Gruppo 7). Navigated a precarious political compromise with the Fascist regime, which ultimately favored reactionary monumental neoclassicism by the late 1930s.',
  visualPrinciples: [
    'Rigorous proportional grids inspired by classical harmonic ratios and the Golden Section',
    'Pristine surfaces of white local Botticino marble, glass blocks, and framed voids',
    'Structural transparency: revealing the reinforced concrete skeleton frame',
    'Dialogue with Mediterranean light through deep loggias, brise-soleil, and glass grids'
  ],
  visualDna: {
    geometry: {
      primaryShapes: ['The Pure Cube', 'Three-Dimensional Coordinate Grids', 'Continuous Glass Slots'],
      description: 'Precise cubic volumes articulated through structural column bays.',
      diagramType: 'structural-frame'
    },
    composition: {
      system: 'Classical Proportional Grid',
      rules: [
        'Absolute alignment of mullions, beams, and marble veneer seams',
        'Symmetrical discipline infused with dynamic modern asymmetric transparency'
      ]
    },
    colour: {
      palette: [
        { name: 'Botticino Marble White', hex: '#FAF9F6', role: 'Pure Classical Veneer' },
        { name: 'Mediterranean Azure', hex: '#0284C7', role: 'Atmospheric Counterpoint' },
        { name: 'Steel Graphite', hex: '#334155', role: 'Precision Mullions' }
      ],
      philosophy: 'Noble, light-drenched Mediterranean purity celebrating natural stone and crystal glass.'
    },
    typography: {
      classification: 'Architectural Grotesk & Modern Roman',
      characteristics: [
        'Incised Roman capitals on stone facades',
        'Clean, elegant Italian grotesk faces used in the architectural journal Casabella'
      ],
      specimen: 'CASABELLA COSTROZIONI 1933'
    },
    materials: ['Reinforced concrete', 'Botticino marble', 'Glass block pavers', 'Anodized aluminum', 'Travertine'],
    attitude: ['Disciplined', 'Lyrical', 'Proportional', 'Classical-Modernist', 'Rigorous']
  },
  architectureNotes: 'The Casa del Fascio in Como (Giuseppe Terragni, 1932–1936) is an undisputed masterpiece of 20th-century architecture: a pure prism of white marble, glass bricks, and transparent spatial bays.',
  graphicDesignNotes: 'The architectural magazine "Casabella", edited by Edoardo Persico and Giuseppe Pagano, set European benchmarks for typographic minimalism.',
  industryRelationship: 'Celebrated the modern Italian steel and glass industry while honoring traditional stone masonry and marble quarrying.',
  keyPeople: [
    'giuseppe-terragni',
    'giuseppe-pagano',
    'luigi-figini',
    'gino-pollini',
    'edoardo-persico'
  ],
  keyWorks: [
    'obj-casa-del-fascio',
    'obj-asilo-sant-elia'
  ],
  influencesFrom: ['futurism', 'bauhaus', 'purism'],
  influencesTo: ['international-style'],
  styleTheme: {
    accentColor: '#0284C7',
    secondaryColor: '#334155',
    layoutBehavior: 'international-clarity'
  }
};
