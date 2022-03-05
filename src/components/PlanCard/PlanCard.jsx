import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { activePlanAction } from "../../redux/plans/plansActions";

import * as S from "./PlanCard.styles";
import { useHistory } from "react-router";

const PlanCard = ({ id, date, title, sections, body, url }) => {
  const planDate = moment(date);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePlanClick = () => {
    dispatch(
      activePlanAction(id, {
        date,
        title,
        body,
        sections,
        url,
      })
    );
    history.push("/plan");
  };

  return (
    <S.PlanCard onClick={handlePlanClick}>
      <div className="card-header">
        <h3 className="title">{title}</h3>
      </div>

      <div className="card-body">
        <p>Business Plan</p>
      </div>

      <div className="card-footer">
        <span>{planDate.format("dddd")}</span>
        <h4>{planDate.format("Do")}</h4>
      </div>
    </S.PlanCard>
  );
};

export default PlanCard;
