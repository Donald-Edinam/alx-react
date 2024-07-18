import { Map } from './node_modules/immutable/dist/immutable';

const newMap = {
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
};

export const map = Map(newMap);

export const map2 = map.withMutations((values) => {
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
