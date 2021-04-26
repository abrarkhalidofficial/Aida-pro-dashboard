import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import FreelancerPanel from "./FreelancerPanel";
import JobSeekerPanel from "./JobSeekerPanel";
import CompanyPanel from "./CompanyPanel";
import FiltersPanel from "./FiltersPanel";
import MessagesPanel from "./MessagesPanel";
import PaymentsPanel from "./PaymentsPanel";
import UsersManagerPanel from "./UsersManagerPanel";
import AnalysisPanel from "./AnalysisPanel";
import PlansPanel from "./PlansPanel";
import ReportsPanel from "./ReportsPanel";

export default function Dashboard() {
  return (
    <div className="dasboard__container">
      <SideBar />
      <div className="main">
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPanel />
          </Route>
          <Route path="/dashboard/freelancer">
            <FreelancerPanel />
          </Route>
          <Route path="/dashboard/jobseeker">
            <JobSeekerPanel />
          </Route>
          <Route path="/dashboard/companies">
            <CompanyPanel />
          </Route>
          <Route path="/dashboard/users-manager">
            <UsersManagerPanel />
          </Route>
          <Route path="/dashboard/analysis">
            <AnalysisPanel />
          </Route>
          <Route path="/dashboard/messages">
            <MessagesPanel />
          </Route>
          <Route path="/dashboard/payments">
            <PaymentsPanel />
          </Route>
          <Route path="/dashboard/plans">
            <PlansPanel />
          </Route>
          <Route path="/dashboard/filters">
            <FiltersPanel />
          </Route>
          <Route path="/dashboard/reports">
            <ReportsPanel />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
