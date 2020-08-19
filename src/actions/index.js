// DECLARE TYPES
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const GET_MODULES = 'GET_MODULES';
export const GET_TEST_CASES = 'GET_TEST_CASES';

export const visibility = () => {
  return {
    type: SET_VISIBILITY,
  }
}

export const modules = (nr) => {
  return {
    type: GET_MODULES,
    payload: nr
  }
}

export const tCases = (nr) => {
  return {
    type: GET_TEST_CASES,
    payload: nr
  }
}

