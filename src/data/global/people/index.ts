import { ariehSharon } from './arieh-sharon';
import { greteStern } from './grete-stern';
import { horacioCoppola } from './horacio-coppola';
import { joaquinTorresGarcia } from './joaquin-torres-garcia';
import { manRay } from './man-ray';
import { richardHuelsenbeck } from './richard-huelsenbeck';
import { tomoyoshiMurayama } from './tomoyoshi-murayama';

export {
  ariehSharon,
  greteStern,
  horacioCoppola,
  joaquinTorresGarcia,
  manRay,
  richardHuelsenbeck,
  tomoyoshiMurayama,
};

export const ALL_GLOBAL_PEOPLE = [
  tomoyoshiMurayama,
  joaquinTorresGarcia,
  richardHuelsenbeck,
  manRay,
  ariehSharon,
  greteStern,
  horacioCoppola,
];

export const globalPeopleRegistry = Object.fromEntries(
  ALL_GLOBAL_PEOPLE.map((person) => [person.id, person]),
);

export const getGlobalPersonById = (id: string) => globalPeopleRegistry[id];
