import { ariehSharon } from './arieh-sharon';
import { francisPicabia } from './francis-picabia';
import { greteStern } from './grete-stern';
import { horacioCoppola } from './horacio-coppola';
import { joaquinTorresGarcia } from './joaquin-torres-garcia';
import { lajosKassak } from './lajos-kassak';
import { lenaBergner } from './lena-bergner';
import { manRay } from './man-ray';
import { richardHuelsenbeck } from './richard-huelsenbeck';
import { theoVanDoesburg } from './theo-van-doesburg';
import { tomoyoshiMurayama } from './tomoyoshi-murayama';

export {
  ariehSharon,
  francisPicabia,
  greteStern,
  horacioCoppola,
  joaquinTorresGarcia,
  lajosKassak,
  lenaBergner,
  manRay,
  richardHuelsenbeck,
  theoVanDoesburg,
  tomoyoshiMurayama,
};

export const ALL_GLOBAL_PEOPLE = [
  theoVanDoesburg,
  lajosKassak,
  francisPicabia,
  tomoyoshiMurayama,
  joaquinTorresGarcia,
  lenaBergner,
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
