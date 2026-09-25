import { DiffusionRoute } from '../types';

export const deperoRoveretoNewYorkRoute: DiffusionRoute = {
  id: 'depero-rovereto-new-york',
  title: 'Rovereto → New York: Depero and Futurist applied art',
  origin: { scope: 'global', id: 'rovereto' },
  destination: { scope: 'global', id: 'new-york' },
  startYear: 1928,
  endYear: 1930,
  personRefs: [{ scope: 'atlas', id: 'fortunato-depero' }],
  mechanisms: ['travel', 'migration', 'commercial-application', 'exhibition'],
  sourceMovementIds: ['futurism'],
  destinationEntityIds: ['depero-futurist-house-new-york'],
  media: ['advertising', 'graphic-design', 'publishing', 'typography', 'exhibition-design'],
  summary:
    'Fortunato Depero and Rosetta moved to New York in late 1928. Depero opened an American branch of his Futurist art house and worked across exhibitions, advertising, magazines and applied design until 1930.',
  transformationNote:
    'The New York period translated Futurist visual language into a commercial metropolitan environment of advertising, publishing, display and branding rather than simply exporting Italian easel painting.',
  sourceIds: ['mart-depero-new-york', 'moma-depero'],
};
