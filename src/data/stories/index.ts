import { ConnectionStory } from '../../types/atlas';
import { deStijlInfluencingBauhausStory } from './de-stijl-influencing-bauhaus';
import { leCorbusierNotBauhausStory } from './le-corbusier-not-bauhaus';
import { suprematismToConstructivismStory } from './suprematism-to-constructivism';
import { artNouveauToBauhausStory } from './art-nouveau-to-bauhaus';

export {
  deStijlInfluencingBauhausStory,
  leCorbusierNotBauhausStory,
  suprematismToConstructivismStory,
  artNouveauToBauhausStory
};

export const ALL_STORIES: ConnectionStory[] = [
  deStijlInfluencingBauhausStory,
  leCorbusierNotBauhausStory,
  suprematismToConstructivismStory,
  artNouveauToBauhausStory
];

export const getStoryById = (id: string): ConnectionStory | undefined => {
  return ALL_STORIES.find((s) => s.id === id);
};
