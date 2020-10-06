import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const returnErrors = (errorMsg) => {
  return {
    type: GET_ERRORS,
    payload: { errorMsg }
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};