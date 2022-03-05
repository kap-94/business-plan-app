import { uiActionTypes } from "./uiTypes";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActionTypes.UI_SET_ERROR:
      return {
        ...state,
        msgError: action.payload,
      };

    case uiActionTypes.UI_REMOVE_ERROR:
      return {
        ...state,
        msgError: null,
      };

    case uiActionTypes.UI_START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case uiActionTypes.UI_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
