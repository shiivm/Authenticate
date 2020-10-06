import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "../action/types";

const initialState = {
  isAuthenticated: false,
  userInfo: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated:
          action.payload && Object.keys(action.payload).length > 0
            ? true
            : false,
        userInfo: action.payload,
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
