import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  activePlanAction,
  startUploadingAction,
} from "../../redux/plans/plansActions";

import { useFormPlan } from "../../hooks/useFormPlan";

import PlanTopBar from "../PlanTopBar/PlanTopBar";
import BusinessDescription from "../PlanSection/BusinessDescription";

import * as S from "./Plan.styles";

const Plan = () => {
  const dispatch = useDispatch();

  const { active: plan } = useSelector((state) => state.plans);
  const [formValues, handleInputChange, reset] = useFormPlan(plan);

  const activeId = useRef(plan.id);

  const handlePictureClick = () => {
    document.querySelector("#productImage").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadingAction(file));
    }
  };

  useEffect(() => {
    if (activeId.current !== plan.id) {
      reset(plan);
      activeId.current = plan.id;
    }
  }, [plan, reset]);

  useEffect(() => {
    dispatch(activePlanAction(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <>
      <PlanTopBar />

      <S.Plan>
        <BusinessDescription
          plan={plan}
          handlePictureClick={handlePictureClick}
          handleFileChange={handleFileChange}
          handleInputChange={handleInputChange}
        />
      </S.Plan>
    </>
  );
};

export default Plan;
