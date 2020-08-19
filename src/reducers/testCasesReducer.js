import { GET_TEST_CASES} from '../actions'

const initialState = {
 testCases : []
};

const testCasesReducer= (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST_CASES:
      return {
        ...state,
        testCases: action.payload
      };
      default:
        return state;
  }

}

export default testCasesReducer;