import { DiffusionRoute } from '../types';

export const maViennaBerlinRoute: DiffusionRoute = {
  id: 'ma-vienna-berlin',
  title: 'Vienna → Berlin: MA and the international Constructivist network',
  origin: { scope: 'atlas', id: 'vienna' },
  destination: { scope: 'atlas', id: 'berlin' },
  startYear: 1922,
  personRefs: [{ scope: 'global', id: 'lajos-kassak' }],
  mechanisms: ['print', 'reinterpretation'],
  sourceMovementIds: ['constructivism', 'dada', 'futurism', 'de-stijl'],
  transmissionEntityIds: ['ma-magazine'],
  destinationEntityIds: [],
  media: ['publishing', 'typography', 'graphic-design'],
  summary:
    'From Vienna, MA operated inside a dense international network that included Berlin-based artists and publications, transmitting Constructivist, Dada, Futurist and De Stijl material through texts and reproductions.',
  transformationNote:
    'MA’s exile context reshaped the journal from a primarily Hungarian activist publication into a broader international avant-garde forum.',
  sourceIds: ['moma-ma-magazine', 'kassak-ma-network'],
};
