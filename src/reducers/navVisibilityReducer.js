import { SET_VISIBILITY } from '../actions'

const initialState = {
 navVisible : true
};

const navVisibilityReducer= (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return {
        ...state,
        navVisible: !state.navVisible
      };
      default:
        return state;
  }

}

export default navVisibilityReducer;