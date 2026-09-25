import { DiffusionRoute } from '../types';

export const huelsenbeckZurichBerlinRoute: DiffusionRoute = {
  id: 'huelsenbeck-zurich-berlin',
  title: 'Zurich → Berlin: Huelsenbeck and political Dada',
  origin: { scope: 'atlas', id: 'zurich' },
  destination: { scope: 'atlas', id: 'berlin' },
  startYear: 1917,
  personRefs: [{ scope: 'global', id: 'richard-huelsenbeck' }],
  mechanisms: ['return', 'reinterpretation'],
  sourceMovementIds: ['dada'],
  destinationEntityIds: [],
  media: ['publishing', 'performance', 'graphic-design'],
  summary:
    'Richard Huelsenbeck returned from Zurich to Berlin in 1917 carrying direct experience of the Cabaret Voltaire circle and became a key organizer of Berlin Dada.',
  transformationNote:
    'Berlin Dada developed a sharper political and propagandistic character than the Zurich milieu, demonstrating how a shared Dada vocabulary changed under local conditions.',
  sourceIds: ['moma-dada-heritage', 'moma-dada-overview'],
};
