import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Plan from "./../../components/Plan/Plan";

const PlanPage = function () {
  const { active } = useSelector((state) => state.plans);

  return (
    <Fragment>
      {active ? (
        <Plan />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeContent: "center",
          }}
        >
          <h1>No plan selected</h1>
        </div>
      )}
    </Fragment>
  );
};

export default PlanPage;
