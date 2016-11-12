import { SET_DEFAULT_SPOTS, ADD_SPOT, UPDATE_SPOT, DELETE_SPOT } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

export default (state = [], action) => {
  switch(action.type) {
    case SET_DEFAULT_SPOTS:
      return action.spots
    default:
      return state;
  }
}
