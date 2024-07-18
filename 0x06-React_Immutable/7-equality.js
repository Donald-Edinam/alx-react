import { is } from './node_modules/immutable/dist/immutable';

export const areMapsEqual = (map1, map2) => {
  return is(map1, map2);
};
