import { joaquinTorresGarcia } from './joaquin-torres-garcia';
import { tomoyoshiMurayama } from './tomoyoshi-murayama';

export { joaquinTorresGarcia, tomoyoshiMurayama };

export const ALL_GLOBAL_PEOPLE = [tomoyoshiMurayama, joaquinTorresGarcia];

export const globalPeopleRegistry = Object.fromEntries(
  ALL_GLOBAL_PEOPLE.map((person) => [person.id, person]),
);

export const getGlobalPersonById = (id: string) => globalPeopleRegistry[id];
