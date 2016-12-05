import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessage'
import spots from './reducers/spot';

export default combineReducers({
  flashMessages,
  spots
})
