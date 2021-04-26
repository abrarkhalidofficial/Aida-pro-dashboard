import React from "react";
import "./AnalysisPanel.scss";

export default class AnalysisPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Analysis</div>
        <div className="panel__main__analysis"></div>
      </div>
    );
  }
}
