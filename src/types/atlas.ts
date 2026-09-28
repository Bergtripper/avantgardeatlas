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

export type MediaAssetRole =
  | 'portrait'
  | 'representative-work'
  | 'object-image'
  | 'institutional-thumbnail';

export type MediaSourceType =
  | 'hosted'
  | 'external'
  | 'iiif';

export type MediaRightsStatus =
  | 'public-domain'
  | 'cc0'
  | 'cc-by'
  | 'cc-by-sa'
  | 'copyrighted-permission'
  | 'copyrighted-link-only'
  | 'unknown-review-required';

export interface InstitutionalCollectionLink {
  institution: string;
  label: string;
  url: string;
  collectionType?: 'artist' | 'movement' | 'object' | 'search' | 'archive';
  note?: string;
}

export interface MediaAsset {
  id: string;
  role: MediaAssetRole;
  sourceType: MediaSourceType;
  alt: string;
  caption?: string;
  creator?: string;
  workTitle?: string;
  year?: number;
  institution?: string;
  creditLine?: string;
  sourceUrl: string;
  rightsStatus: MediaRightsStatus;
  rightsLabel?: string;
  rightsUrl?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  iiifManifestUrl?: string;
  iiifImageServiceUrl?: string;
  verified: boolean;
}

export interface MovementMedia {
  representativeWorks?: MediaAsset[];
  externalCollections?: InstitutionalCollectionLink[];
}

export interface PersonMedia {
  portrait?: MediaAsset;
  externalCollections?: InstitutionalCollectionLink[];
}

export interface ObjectMedia {
  image?: MediaAsset;
  externalCollections?: InstitutionalCollectionLink[];
}

export type EvidenceStatus =
  | 'documented'
  | 'editorial-synthesis'
  | 'interpretive';

export interface ClaimEvidence {
  sourceIds: string[];
  status: EvidenceStatus;
  note?: string;
}

export type MovementClaimKey =
  | 'summary'
  | 'coreIdeas'
  | 'historicalContext'
  | 'architectureNotes'
  | 'graphicDesignNotes'
  | 'industryRelationship';

export type ObjectClaimKey =
  | 'description'
  | 'significance'
  | 'medium'
  | 'location';

export type StoryStepClaimKey = 'text' | 'graphicCue';

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
  media?: MovementMedia;
  architectureNotes: string;
  graphicDesignNotes: string;
  industryRelationship: string;
  keyPeople: PersonId[];
  keyWorks: ObjectId[];
  influencesFrom: MovementId[];
  influencesTo: MovementId[];
  provenance?: Partial<Record<MovementClaimKey, ClaimEvidence>>;
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
  provenance?: Partial<Record<ObjectClaimKey, ClaimEvidence>>;
  graphicType: SvgGraphicPlateType;
  svgGraphicType?: SvgGraphicPlateType;
  media?: ObjectMedia;
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
  media?: PersonMedia;
}

export interface ConnectionStoryStep {
  stepNumber: number;
  subtitle: string;
  yearRange: string;
  text: string;
  graphicCue: string;
  focalMovements: MovementId[];
  provenance?: Partial<Record<StoryStepClaimKey, ClaimEvidence>>;
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
