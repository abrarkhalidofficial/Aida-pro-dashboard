import React from "react";
import "./DashboardPanel.scss";

export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Dashboard</div>
        <div className="panel__main__dashboard"></div>
      </div>
    );
  }
}
