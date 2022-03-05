import { authActionTypes } from "./authTypes";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case authActionTypes.LOGOUT:
      return {};

    default:
      return state;
  }
};
