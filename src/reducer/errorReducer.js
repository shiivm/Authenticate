import { GET_ERRORS, CLEAR_ERRORS } from '../action/types';

const initialState = {
  error : null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        error : action.payload.errorMsg,
      };
      case CLEAR_ERRORS:
      return {
        error : null,
      };
    default:
      return state;
  }
};

export default reducer;
