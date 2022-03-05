import { uiActionTypes } from "./uiTypes";

export const setErrorAction = (err) => ({
  type: uiActionTypes.UI_SET_ERROR,
  payload: err,
});

export const removeErrorAction = () => ({
  type: uiActionTypes.UI_REMOVE_ERROR,
});

export const startLoadingAction = () => ({
  type: uiActionTypes.UI_START_LOADING,
});

export const finishLoadingAction = () => ({
  type: uiActionTypes.UI_FINISH_LOADING,
});
