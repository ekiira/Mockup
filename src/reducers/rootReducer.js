import { combineReducers } from 'redux';
import navVisibility from './navVisibilityReducer';
import modules from './modulesReducer';
import testCases from './testCasesReducer';
import testmark from './dropdownReducer'

// Combine all the reducers into the rootReducer
const rootReducer = combineReducers({
  navVisibility,
  modules,
  testCases,
  testmark
});

export default rootReducer;