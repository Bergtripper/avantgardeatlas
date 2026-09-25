import { Movement, MovementId } from '../../types/atlas';
import { bauhausMovement } from './bauhaus';
import { deStijlMovement } from './de-stijl';
import { constructivismMovement } from './constructivism';
import { suprematismMovement } from './suprematism';
import { futurismMovement } from './futurism';
import { dadaMovement } from './dada';
import { internationalStyleMovement } from './international-style';
import { newTypographyMovement } from './new-typography';
import { purismMovement } from './purism';
import { werkbundMovement } from './werkbund';
import { viennaSecessionMovement } from './vienna-secession';
import { cubismMovement } from './cubism';
import { artNouveauMovement } from './art-nouveau';
import { neueSachlichkeitMovement } from './neue-sachlichkeit';
import { rationalismMovement } from './rationalism';
import { cuboFuturismMovement } from './cubo-futurism';

export {
  bauhausMovement,
  deStijlMovement,
  constructivismMovement,
  suprematismMovement,
  futurismMovement,
  dadaMovement,
  internationalStyleMovement,
  newTypographyMovement,
  purismMovement,
  werkbundMovement,
  viennaSecessionMovement,
  cubismMovement,
  artNouveauMovement,
  neueSachlichkeitMovement,
  rationalismMovement,
  cuboFuturismMovement
};

export const ALL_MOVEMENTS: Movement[] = [
  bauhausMovement,
  deStijlMovement,
  constructivismMovement,
  suprematismMovement,
  futurismMovement,
  dadaMovement,
  internationalStyleMovement,
  newTypographyMovement,
  purismMovement,
  werkbundMovement,
  viennaSecessionMovement,
  cubismMovement,
  artNouveauMovement,
  neueSachlichkeitMovement,
  rationalismMovement,
  cuboFuturismMovement
];

export const movementsRegistry: Record<MovementId, Movement> = {
  'bauhaus': bauhausMovement,
  'de-stijl': deStijlMovement,
  'constructivism': constructivismMovement,
  'suprematism': suprematismMovement,
  'futurism': futurismMovement,
  'dada': dadaMovement,
  'international-style': internationalStyleMovement,
  'new-typography': newTypographyMovement,
  'purism': purismMovement,
  'deutscher-werkbund': werkbundMovement,
  'vienna-secession': viennaSecessionMovement,
  'cubism': cubismMovement,
  'art-nouveau': artNouveauMovement,
  'neue-sachlichkeit': neueSachlichkeitMovement,
  'rationalism': rationalismMovement,
  'cubo-futurism': cuboFuturismMovement
};

export const getMovementById = (id: MovementId | string): Movement | undefined => {
  return movementsRegistry[id as MovementId] || ALL_MOVEMENTS.find((m) => m.id === id);
};
