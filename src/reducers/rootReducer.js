import { combineReducers } from 'redux';
import navVisibility from './navVisibilityReducer';
import modules from './modulesReducer';
import testCases from './testCasesReducer';

// Combine all the reducers into the rootReducer
const rootReducer = combineReducers({
  navVisibility,
  modules,
  testCases
});

export default rootReducer;