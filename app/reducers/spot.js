import { SET_DEFAULT_SPOTS, ADD_SPOT, UPDATE_SPOT, REMOVE_SPOT } from '../actions/types';
import isEmpty from 'lodash/isEmpty';
import findIndex from 'lodash/findIndex'

export default (state = [], action) => {
  switch(action.type) {
    case SET_DEFAULT_SPOTS:
      return action.spots
    case REMOVE_SPOT:
      const index = findIndex(state, { _id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
  }
}
