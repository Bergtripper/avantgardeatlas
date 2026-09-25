export type MovementId = 
  | 'art-nouveau'
  | 'vienna-secession'
  | 'deutscher-werkbund'
  | 'cubism'
  | 'futurism'
  | 'cubo-futurism'
  | 'suprematism'
  | 'constructivism'
  | 'de-stijl'
  | 'dada'
  | 'bauhaus'
  | 'purism'
  | 'neue-sachlichkeit'
  | 'new-typography'
  | 'rationalism'
  | 'international-style';

export interface VisualDNA {
  geometry: {
    primaryShapes: string[];
    description: string;
    diagramType: 'circle-square-triangle' | 'orthogonal-grid' | 'diagonal-vector' | 'floating-planes' | 'organic-curve' | 'structural-frame';
  };
  composition: {
    system: string;
    rules: string[];
  };
  colour: {
    palette: Array<{ name: string; hex: string; role: string }>;
    philosophy: string;
  };
  typography: {
    classification: string;
    characteristics: string[];
    specimen: string;
  };
  materials: string[];
  attitude: string[];
}

export type PersonId = string;
export type ObjectId = string;

export type SvgGraphicPlateType = 
  | 'bauhaus-building' 
  | 'rietveld-chair' 
  | 'tatlin-tower' 
  | 'malevich-square' 
  | 'schwitters-merz' 
  | 'corbusier-villa' 
  | 'tschichold-poster' 
  | 'boccioni-sculpture' 
  | 'secession-building' 
  | 'werkbund-turbine' 
  | 'mondrian-grid' 
  | 'rodchenko-photo' 
  | 'barcelona-pavilion';

export interface KeyWork {
  title: string;
  creator: string;
  year: number;
  category: 'architecture' | 'graphic' | 'furniture' | 'art' | 'typography' | 'photography';
  location: string;
  description: string;
  svgGraphicType: SvgGraphicPlateType;
  graphicType?: SvgGraphicPlateType;
}

export interface Movement {
  id: MovementId;
  name: string;
  germanOrOriginalName?: string;
  period: string;
  startYear: number;
  endYear: number;
  countries: string[];
  cities: string[];
  mottoOrKeywords: string[];
  summary: string;
  coreIdeas: string;
  historicalContext: string;
  visualPrinciples: string[];
  visualDna: VisualDNA;
  architectureNotes: string;
  graphicDesignNotes: string;
  industryRelationship: string;
  keyPeople: PersonId[];
  keyWorks: ObjectId[];
  influencesFrom: MovementId[];
  influencesTo: MovementId[];
  styleTheme: {
    accentColor: string;
    secondaryColor: string;
    layoutBehavior: 'bauhaus-grid' | 'de-stijl-grid' | 'constructivist-diagonal' | 'suprematist-floating' | 'futurist-dynamic' | 'international-clarity' | 'dada-asymmetry' | 'secessionist-linear';
  };
}

export interface NetworkConnection {
  source: MovementId;
  target: MovementId;
  rationale: string;
  keyThemes: string[];
  strength: number; // 1-3
}

export interface ArchivalObject {
  id: string;
  title: string;
  creator: string;
  year: number;
  movementId: MovementId;
  category: 'graphic' | 'architecture' | 'furniture' | 'art' | 'typography' | 'photography';
  medium: string;
  location: string;
  dimensions?: string;
  description: string;
  significance: string;
  graphicType: SvgGraphicPlateType;
  svgGraphicType?: SvgGraphicPlateType;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  years: string;
  birthCity: string;
  primaryMovements: MovementId[];
  interventions: string[];
  biography: string;
  keyDisciplines: string[];
  keyQuote?: string;
  role?: string;
  birthDeath?: string;
}

export interface ConnectionStoryStep {
  stepNumber: number;
  subtitle: string;
  yearRange: string;
  text: string;
  graphicCue: string;
  focalMovements: MovementId[];
}

export interface ConnectionStory {
  id: string;
  title: string;
  subtitle: string;
  timeframe: string;
  summary: string;
  steps: ConnectionStoryStep[];
}

export interface CulturalCity {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  activeEras: { start: number; end: number };
  activeMovements: MovementId[];
  historicalNotes: string;
  keyInstitutions: string[];
}
