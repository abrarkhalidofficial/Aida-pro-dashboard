import React from "react";
import "./FiltersPanel.scss";
import { Col, Row, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilterInputForm from "../components/FilterInputForm";

export default function FiltersPanel() {
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">Filters</div>
      <div className="panel__main__filter">
        <Col>
          <Row>
            <Nav variant="pills" defaultActiveKey="/dashboard/filters">
              <Nav.Link
                to="/dashboard/filters/"
                href="/dashboard/filters"
                as={Link}
                className="nav__link__horizontal"
              >
                Company
              </Nav.Link>
              <Nav.Link
                to="/dashboard/filters/jobseeker"
                as={Link}
                className="nav__link__horizontal"
                eventKey="link-1"
              >
                Job Seeker
              </Nav.Link>
              <Nav.Link
                to="/dashboard/filters/freelancer"
                as={Link}
                className="nav__link__horizontal"
                eventKey="link-2"
              >
                Freelancer
              </Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Switch>
              <Route path="/dashboard/filters" exact>
                <div className="filter__content">
                  <FilterInputForm heading="Skills" />
                  <FilterInputForm heading="Industries Worked In" />
                  <FilterInputForm heading="Experience Level" />
                  <FilterInputForm heading="Job Type" />
                  <FilterInputForm heading="Education" />
                  <FilterInputForm heading="Availability" />
                  <FilterInputForm heading="Languages" />
                </div>
              </Route>
              <Route path="/dashboard/filters/jobseeker">
                <div className="filter__content">
                  <FilterInputForm heading="Skills" />
                </div>
              </Route>
              <Route path="/dashboard/filters/freelancer">
                <div className="filter__content">
                  <FilterInputForm heading="Contract Type" />
                  <FilterInputForm heading="Field Of Work" />
                </div>
              </Route>
            </Switch>
          </Row>
        </Col>
      </div>
    </div>
  );
}
