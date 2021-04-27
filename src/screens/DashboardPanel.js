import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";

export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
          >
            hello
          </Card>
          <div style={{ width: "40%" }}>
            <Card
              heading="Lorem"
              infoHeading="Lorem"
              infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            >
              hello
            </Card>
          </div>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
          >
            hello
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
          >
            hello
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
          >
            hello
          </Card>
        </div>
      </div>
    );
  }
}
