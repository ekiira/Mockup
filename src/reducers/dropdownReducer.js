import { SET_TESTMARK } from '../actions'

const initialState = {
 testmark : 'Pass'
};

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTMARK:
      return {
        ...state,
        testmark: action.payload
      };
      default:
        return state;
  }

}

export default dropdownReducer;