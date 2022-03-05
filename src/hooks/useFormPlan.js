import { useState } from "react";

const initialState = {};

export const useFormPlan = (state = initialState) => {
  const [values, setValues] = useState(state);

  const reset = (newFormState = state) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
