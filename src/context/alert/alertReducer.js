// A place for all actions which will decide what's gonna happen to our state based on an action
import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};
