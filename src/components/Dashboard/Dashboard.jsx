import React from "react";

import DashboardRouter from "./../../routers/DashboardRouter";

import { CenteredPage } from "./../GeneralStyledComponents/CenteredPage.styles";
import Sidebar from "../Sidebar/Sidebar.jsx";

import { DashboardContainer, DashboardMain } from "./Dashboard.styles.js";

const Dashboard = function () {
  return (
    <CenteredPage>
      <DashboardContainer>
        <Sidebar />

        <DashboardMain>
          <DashboardRouter />
        </DashboardMain>
      </DashboardContainer>
    </CenteredPage>
  );
};

export default Dashboard;
