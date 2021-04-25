import React from "react";
import "./CompanyDetails.scss";
import { Nav, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posting from "./Posting";

export default function CompanyDetails() {
  return (
    <Col>
      <Row>
        <Nav variant="pills" defaultActiveKey="/dashboard/companies/details">
          <Nav.Link
            to="/dashboard/companies/details"
            href="/dashboard/filters"
            as={Link}
            className="nav__link__horizontal"
          >
            Jobs Postings
          </Nav.Link>
          <Nav.Link
            to="/dashboard/companies/details/company-details"
            as={Link}
            className="nav__link__horizontal"
            eventKey="link-1"
          >
            Company Details
          </Nav.Link>
          <Nav.Link
            to="/dashboard/companies/details/plans-payments"
            as={Link}
            className="nav__link__horizontal"
            eventKey="link-2"
          >
            Plans & Payments
          </Nav.Link>
        </Nav>
      </Row>
      <Row>
        <Switch>
          <Route path="/dashboard/companies/details" exact>
            <Posting />
          </Route>
          <Route path="/dashboard/companies/details/draft">
            <Posting />
          </Route>
          <Route path="/dashboard/companies/details/closed">
            <Posting />
          </Route>
          <Route path="/dashboard/companies/details/hold">
            <Posting />
          </Route>
          <Route path="/dashboard/companies/details/company-details">aoa</Route>
          <Route path="/dashboard/companies/details/plans-payments">hi</Route>
        </Switch>
      </Row>
    </Col>
  );
}
