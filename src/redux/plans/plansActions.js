import Swal from "sweetalert2";
import { db } from "../../firebase/firebase";

import { plansActionTypes } from "./plansTypes";

import { loadPlans } from "../../helpers/loadPlans";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewPlanAction = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newPlan = {
      title: "",
      description: "",
      sections: {
        businessGenerals: {
          questions: {
            question_1: "Name And Last Name",
            question_2: "Company Name",
          },
          answers: {
            answer_1: "",
            answer_2: "",
          },
        },
      },
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/data/plans`).add(newPlan);

    dispatch(activePlanAction(docRef.id, newPlan));
  };
};

export const activePlanAction = (id, plan) => ({
  type: plansActionTypes.PLANS_ACTIVE,
  payload: {
    id,
    ...plan,
  },
});

export const startLoadingPlansAction = (uid) => {
  return async (dispatch) => {
    const plans = await loadPlans(uid);
    dispatch(setPlansAction(plans));
  };
};

export const setPlansAction = (plans) => ({
  type: plansActionTypes.PLANS_LOAD,
  payload: plans,
});

export const startSavePlanAction = (plan) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!plan.url) {
      delete plan.url;
    }

    const planToFirestore = { ...plan };
    delete planToFirestore.id;

    try {
      await db.doc(`${uid}/data/plans/${plan.id}`).update(planToFirestore);
    } catch (error) {
      throw error;
    }

    dispatch(refreshPlanAction(plan.id, plan));

    Swal.fire("Saved", plan.title, "success");
  };
};

export const refreshPlanAction = (id, plan) => ({
  type: plansActionTypes.PLANS_UPDATE,
  payload: {
    id,
    plan,
  },
});

export const startUploadingAction = (file) => {
  return async (dispatch, getState) => {
    const { active: activePlan } = getState().plans;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activePlan.url = fileUrl;

    dispatch(startSavePlanAction(activePlan));

    Swal.close();
  };
};

export const startDeletingAction = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    try {
      await db.doc(`${uid}/data/plans/${id}`).delete();
    } catch (error) {
      throw error;
    }

    dispatch(deleteNoteFromStoreAction(id));

    Swal.fire("Plan Deleted");
  };
};

export const deleteNoteFromStoreAction = (id) => ({
  type: plansActionTypes.PLANS_DELETE,
  payload: id,
});

export const planLogoutAction = () => ({
  type: plansActionTypes.PLANS_LOGOUT_CLEANING,
});
