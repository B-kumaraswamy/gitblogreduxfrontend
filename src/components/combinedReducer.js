import { combineReducers } from 'redux';

import reducer from './rootReducer';
import incrementReducer from './incrementReducer';

// Combine reducers
const rootReducer = combineReducers({
  state1: reducer,
  state2: incrementReducer
});

export default rootReducer;