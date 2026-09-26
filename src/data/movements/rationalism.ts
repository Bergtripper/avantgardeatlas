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
  summary: 'An Italian modernist current that combined functionalist construction and geometric clarity with debates about proportion, Mediterranean identity, classical continuity, and the political culture of Fascist Italy.',
  coreIdeas: 'Italian Rationalist architects sought a modern architecture grounded in contemporary construction while negotiating questions of national tradition, proportion, abstraction, and monumentality. Gruppo 7 and figures such as Giuseppe Terragni developed distinct positions within that broader debate.',
  historicalContext: 'Gruppo 7 formed in Milan in 1926 and became one of the principal reference points for Italian Rationalism. Its architects worked within Fascist Italy, where modernist and monumental-classical approaches competed for institutional commissions and political legitimacy throughout the 1930s.',
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
  architectureNotes: 'Giuseppe Terragni’s Casa del Fascio in Como (1932–1936) became a major reference point for Italian Rationalism through its compact volume, visible structural grid, differentiated facades, extensive glazing, and carefully controlled proportional relationships.',
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
  provenance: {
    summary: {
      sourceIds: ['treccani-giuseppe-terragni'],
      status: 'editorial-synthesis',
      note: 'The source directly supports Terragni and the Casa del Fascio; the broader movement framing is an editorial synthesis.',
    },
    coreIdeas: {
      sourceIds: ['treccani-giuseppe-terragni'],
      status: 'editorial-synthesis',
    },
    historicalContext: {
      sourceIds: ['treccani-giuseppe-terragni'],
      status: 'editorial-synthesis',
    },
    architectureNotes: {
      sourceIds: ['treccani-giuseppe-terragni'],
      status: 'documented',
    },
  },
  styleTheme: {
    accentColor: '#0284C7',
    secondaryColor: '#334155',
    layoutBehavior: 'international-clarity'
  }
};
