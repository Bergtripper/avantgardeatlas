import { GlobalEntity } from '../types';

export const maPublication: GlobalEntity = {
  id: 'ma-magazine',
  name: 'MA',
  kind: 'publication',
  placeRef: { scope: 'atlas', id: 'vienna' },
  startYear: 1916,
  endYear: 1925,
  movementLinks: ['constructivism', 'dada', 'futurism', 'de-stijl'],
  media: ['publishing', 'typography', 'graphic-design'],
  summary:
    'Lajos Kassák’s radical journal, relaunched in Vienna in exile, became an important international transmitter of Constructivist, Dada, Futurist and De Stijl texts and graphics.',
  sourceIds: ['moma-ma-magazine', 'kassak-ma-network'],
};
