import { NetworkConnection, MovementId } from '../../types/atlas';
import { deStijlToBauhausConnection } from './de-stijl-to-bauhaus';
import { constructivismToBauhausConnection } from './constructivism-to-bauhaus';
import { werkbundToBauhausConnection } from './werkbund-to-bauhaus';
import { cubismToFuturismConnection } from './cubism-to-futurism';
import { cubismToDeStijlConnection } from './cubism-to-de-stijl';
import { cubismToPurismConnection } from './cubism-to-purism';
import { suprematismToConstructivismConnection } from './suprematism-to-constructivism';
import { artNouveauToSecessionConnection } from './art-nouveau-to-secession';
import { secessionToWerkbundConnection } from './secession-to-werkbund';
import { futurismToCuboFuturismConnection } from './futurism-to-cubo-futurism';
import { cuboFuturismToSuprematismConnection } from './cubo-futurism-to-suprematism';
import { dadaToNewTypographyConnection } from './dada-to-new-typography';
import { bauhausToNewTypographyConnection } from './bauhaus-to-new-typography';
import { bauhausToInternationalStyleConnection } from './bauhaus-to-international-style';
import { purismToInternationalStyleConnection } from './purism-to-international-style';
import { neueSachlichkeitToInternationalStyleConnection } from './neue-sachlichkeit-to-international-style';
import { futurismToRationalismConnection } from './futurism-to-rationalism';
import { rationalismToInternationalStyleConnection } from './rationalism-to-international-style';

export {
  deStijlToBauhausConnection,
  constructivismToBauhausConnection,
  werkbundToBauhausConnection,
  cubismToFuturismConnection,
  cubismToDeStijlConnection,
  cubismToPurismConnection,
  suprematismToConstructivismConnection,
  artNouveauToSecessionConnection,
  secessionToWerkbundConnection,
  futurismToCuboFuturismConnection,
  cuboFuturismToSuprematismConnection,
  dadaToNewTypographyConnection,
  bauhausToNewTypographyConnection,
  bauhausToInternationalStyleConnection,
  purismToInternationalStyleConnection,
  neueSachlichkeitToInternationalStyleConnection,
  futurismToRationalismConnection,
  rationalismToInternationalStyleConnection
};

export const ALL_CONNECTIONS: NetworkConnection[] = [
  artNouveauToSecessionConnection,
  secessionToWerkbundConnection,
  werkbundToBauhausConnection,
  cubismToFuturismConnection,
  cubismToDeStijlConnection,
  cubismToPurismConnection,
  futurismToCuboFuturismConnection,
  cuboFuturismToSuprematismConnection,
  suprematismToConstructivismConnection,
  constructivismToBauhausConnection,
  deStijlToBauhausConnection,
  dadaToNewTypographyConnection,
  bauhausToNewTypographyConnection,
  bauhausToInternationalStyleConnection,
  purismToInternationalStyleConnection,
  neueSachlichkeitToInternationalStyleConnection,
  futurismToRationalismConnection,
  rationalismToInternationalStyleConnection
];

export const getConnectionsForMovement = (id: MovementId | string): NetworkConnection[] => {
  return ALL_CONNECTIONS.filter((c) => c.source === id || c.target === id);
};
