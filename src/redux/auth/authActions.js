import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from "../../firebase/firebase";

import { authActionTypes } from "./authTypes";
import { planLogoutAction } from "../plans/plansActions";
import { startLoadingAction, finishLoadingAction } from "../ui/uiActions";

// Async Actions
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoadingAction());
      })
      .catch((error) => {
        dispatch(finishLoadingAction());
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startSignupEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
    dispatch(planLogoutAction());
  };
};

// Sync Actions
export const login = (uid, displayName) => ({
  type: authActionTypes.LOGIN,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: authActionTypes.LOGOUT,
});
