import { ArchivalObject } from '../../types/atlas';
import { wassilyChairObject } from './wassily-chair';
import { bauhausDessauObject } from './bauhaus-dessau';
import { bauhausExhibitionPosterObject } from './bauhaus-exhibition-poster';
import { redBlueChairObject } from './red-blue-chair';
import { rietveldSchroderObject } from './rietveld-schroder';
import { mondrianCompositionObject } from './mondrian-composition';
import { tatlinTowerObject } from './tatlin-tower';
import { beatTheWhitesObject } from './beat-the-whites';
import { lengizBooksPosterObject } from './lengiz-books-poster';
import { blackSquareObject } from './black-square';
import { suprematistCompositionObject } from './suprematist-composition';
import { proun19dObject } from './proun-19d';
import { boccioniContinuityObject } from './boccioni-continuity';
import { cittaNuovaObject } from './citta-nuova';
import { deperoBoltedBookObject } from './depero-bolted-book';
import { cutWithKitchenKnifeObject } from './cut-with-kitchen-knife';
import { merzbauObject } from './merzbau';
import { secessionBuildingObject } from './secession-building';
import { palaisStocletObject } from './palais-stoclet';
import { aegTurbineObject } from './aeg-turbine';
import { weissenhofsiedlungObject } from './weissenhofsiedlung';
import { barcelonaPavilionObject } from './barcelona-pavilion';
import { villaSavoyeObject } from './villa-savoye';
import { dieNeueTypographieObject } from './die-neue-typographie';
import { futuraSpecimenObject } from './futura-specimen';
import { pavillonEspritNouveauObject } from './pavillon-esprit-nouveau';
import { puristStillLifeObject } from './purist-still-life';
import { demoisellesDavignonObject } from './demoiselles-davignon';
import { violinAndCandlestickObject } from './violin-and-candlestick';
import { hotelTasselObject } from './hotel-tassel';
import { metroEntrancesObject } from './metro-entrances';
import { frankfurtKitchenObject } from './frankfurt-kitchen';
import { people20thCenturyObject } from './people-20th-century';
import { casaDelFascioObject } from './casa-del-fascio';
import { asiloSantEliaObject } from './asilo-sant-elia';
import { knifeGrinderObject } from './knife-grinder';
import { victoryOverSunObject } from './victory-over-sun';
import { rodchenkoPioneerObject } from './rodchenko-pioneer';

export {
  wassilyChairObject,
  bauhausDessauObject,
  bauhausExhibitionPosterObject,
  redBlueChairObject,
  rietveldSchroderObject,
  mondrianCompositionObject,
  tatlinTowerObject,
  beatTheWhitesObject,
  lengizBooksPosterObject,
  blackSquareObject,
  suprematistCompositionObject,
  proun19dObject,
  boccioniContinuityObject,
  cittaNuovaObject,
  deperoBoltedBookObject,
  cutWithKitchenKnifeObject,
  merzbauObject,
  secessionBuildingObject,
  palaisStocletObject,
  aegTurbineObject,
  weissenhofsiedlungObject,
  barcelonaPavilionObject,
  villaSavoyeObject,
  dieNeueTypographieObject,
  futuraSpecimenObject,
  pavillonEspritNouveauObject,
  puristStillLifeObject,
  demoisellesDavignonObject,
  violinAndCandlestickObject,
  hotelTasselObject,
  metroEntrancesObject,
  frankfurtKitchenObject,
  people20thCenturyObject,
  casaDelFascioObject,
  asiloSantEliaObject,
  knifeGrinderObject,
  victoryOverSunObject,
  rodchenkoPioneerObject
};

export const ALL_OBJECTS: ArchivalObject[] = [
  wassilyChairObject,
  bauhausDessauObject,
  bauhausExhibitionPosterObject,
  redBlueChairObject,
  rietveldSchroderObject,
  mondrianCompositionObject,
  tatlinTowerObject,
  beatTheWhitesObject,
  lengizBooksPosterObject,
  blackSquareObject,
  suprematistCompositionObject,
  proun19dObject,
  boccioniContinuityObject,
  cittaNuovaObject,
  deperoBoltedBookObject,
  cutWithKitchenKnifeObject,
  merzbauObject,
  secessionBuildingObject,
  palaisStocletObject,
  aegTurbineObject,
  weissenhofsiedlungObject,
  barcelonaPavilionObject,
  villaSavoyeObject,
  dieNeueTypographieObject,
  futuraSpecimenObject,
  pavillonEspritNouveauObject,
  puristStillLifeObject,
  demoisellesDavignonObject,
  violinAndCandlestickObject,
  hotelTasselObject,
  metroEntrancesObject,
  frankfurtKitchenObject,
  people20thCenturyObject,
  casaDelFascioObject,
  asiloSantEliaObject,
  knifeGrinderObject,
  victoryOverSunObject,
  rodchenkoPioneerObject
];

export const objectsRegistry: Record<string, ArchivalObject> = {};

// Register with full ID and strip-prefix ID for frictionless lookup
ALL_OBJECTS.forEach((obj) => {
  if (!obj.svgGraphicType) {
    obj.svgGraphicType = obj.graphicType;
  }
  objectsRegistry[obj.id] = obj;
  const strippedId = obj.id.startsWith('obj-') ? obj.id.slice(4) : obj.id;
  if (!objectsRegistry[strippedId]) {
    objectsRegistry[strippedId] = obj;
  }
});

export const getObjectById = (id: string): ArchivalObject | undefined => {
  if (!id) return undefined;
  if (objectsRegistry[id]) return objectsRegistry[id];
  const withPrefix = id.startsWith('obj-') ? id : `obj-${id}`;
  if (objectsRegistry[withPrefix]) return objectsRegistry[withPrefix];
  const withoutPrefix = id.startsWith('obj-') ? id.slice(4) : id;
  if (objectsRegistry[withoutPrefix]) return objectsRegistry[withoutPrefix];
  return ALL_OBJECTS.find((o) => o.id === id || o.id === withPrefix || o.id === withoutPrefix);
};
