import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startNewPlanAction } from "../../redux/plans/plansActions";

import PlanCard from "../PlanCard/PlanCard";

import * as S from "./PlansGallery.styles";
import { useHistory } from "react-router";

const PlansGallery = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { plans } = useSelector((state) => state.plans);

  const handleAddNewPlan = () => {
    dispatch(startNewPlanAction());

    setTimeout(() => {
      history.push("/plan");
    }, 550);
  };

  return (
    <S.PlansGallery>
      <h2 onClick={handleAddNewPlan} style={{ cursor: "pointer" }}>
        Create Plan +
      </h2>

      <section className="plans-preview">
        {plans.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </section>
    </S.PlansGallery>
  );
};

export default PlansGallery;
