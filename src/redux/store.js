import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth/authReducer";
import { plansReducer } from "./plans/plansReducer";
import { uiReducer } from "./ui/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  plans: plansReducer,
});

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
