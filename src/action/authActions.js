import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "./types";
import { returnErrors } from "./errorAction";

export const loginUser = (userData) => (dispatch) => {
  if (userData) {
    const email = userData.email || '';
    const password = userData.password || '';
    if(email === 'hruday@gmail.com' && password === 'hruday123') {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: email,
      });
      return true;
    }
  }
  dispatch(returnErrors('Invalid username or password'));
  dispatch({
    type: LOGIN_FAIL,
  });
  return false;
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
