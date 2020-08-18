import { combineReducers } from 'redux';
import navVisibility from './navVisibilityReducer';

// Combine all the reducers into the rootReducer
const rootReducer = combineReducers({
  navVisibility,
});

export default rootReducer;