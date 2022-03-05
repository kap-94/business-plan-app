import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as PlansIcon } from "../../icons/plan.svg";
import { ReactComponent as LocalitationIcon } from "../../icons/localitation.svg";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";

import { SidebarContainer, Nav, NavItem, Tooltip } from "./Sidebar.styles";

const Sidebar = function () {
  return (
    <SidebarContainer>
      <Nav>
        <NavItem exact to="/" activeClassName="active">
          <Tooltip className="tooltip">Home</Tooltip>
          <HomeIcon className="tab-icon" />
        </NavItem>

        <NavItem exact to="/plan" activeClassName="active">
          <Tooltip className="tooltip">Plan</Tooltip>
          <PlansIcon className="tab-icon" />
        </NavItem>

        <NavItem exact to="/map" activeClassName="active">
          <Tooltip className="tooltip">Map</Tooltip>
          <LocalitationIcon className="tab-icon" />
        </NavItem>

        <NavItem exact to="/settings" activeClassName="active">
          <Tooltip className="tooltip">Settings</Tooltip>
          <SettingsIcon className="tab-icon" />
        </NavItem>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
