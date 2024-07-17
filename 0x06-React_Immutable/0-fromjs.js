import { fromJS } from 'immutable';

export default function getImmutatableObject (object) {
  return fromJS(object);
}
