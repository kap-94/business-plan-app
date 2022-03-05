import { plansActionTypes } from "./plansTypes";

const initialState = {
  plans: [],
  active: null,
};

export const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case plansActionTypes.PLANS_ACTIVE:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case plansActionTypes.PLANS_LOAD:
      return {
        ...state,
        plans: [...action.payload],
      };

    case plansActionTypes.PLANS_UPDATE:
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan.id === action.payload.id ? action.payload.plan : plan
        ),
      };

    case plansActionTypes.PLANS_DELETE:
      return {
        ...state,
        active: null,
        plans: state.plans.filter((plan) => plan.id !== action.payload),
      };

    case plansActionTypes.PLANS_LOGOUT_CLEANING:
      return {
        ...state,
        active: null,
        plans: [],
      };

    default:
      return state;
  }
};
