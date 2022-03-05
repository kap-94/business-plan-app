import React, { useState } from "react";

export const useSelect = (initialState, options) => {
  const [state, setState] = useState(initialState);

  const SelectNews = () => (
    <select onChange={(e) => setState(e.target.value)} value={state}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNews];
};
