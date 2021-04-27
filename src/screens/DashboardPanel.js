import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import SpineChart from "../components/SpineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <LineChart />
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
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <SpineChart />
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,345"
            contentInfo="25 April 2019"
          >
            <BarChart />
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <div style={{ width: "50%" }}>
            <Card
              heading="Lorem"
              infoHeading="Lorem"
              infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
              contentHeading="24,795"
              contentInfo="25 April 2019"
            >
              <DoughnutChart />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
