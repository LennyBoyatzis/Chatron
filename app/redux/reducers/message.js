import _ from 'lodash';
import { NEW_MESSAGE } from '../actions/actions';

export function message(state = {}, action) {
  switch (action.type) {
    case NEW_MESSAGE:
      const { id, name, content } = action;
      return _.assign({}, state, {
        [id]: { name, content }
      });
    default:
      return state;
  }
}
