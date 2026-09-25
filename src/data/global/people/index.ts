import { ariehSharon } from './arieh-sharon';
import { greteStern } from './grete-stern';
import { horacioCoppola } from './horacio-coppola';
import { joaquinTorresGarcia } from './joaquin-torres-garcia';
import { tomoyoshiMurayama } from './tomoyoshi-murayama';

export {
  ariehSharon,
  greteStern,
  horacioCoppola,
  joaquinTorresGarcia,
  tomoyoshiMurayama,
};

export const ALL_GLOBAL_PEOPLE = [
  tomoyoshiMurayama,
  joaquinTorresGarcia,
  ariehSharon,
  greteStern,
  horacioCoppola,
];

export const globalPeopleRegistry = Object.fromEntries(
  ALL_GLOBAL_PEOPLE.map((person) => [person.id, person]),
);

export const getGlobalPersonById = (id: string) => globalPeopleRegistry[id];
