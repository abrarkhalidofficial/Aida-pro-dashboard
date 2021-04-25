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
            as={Link}
            to="/dashboard/companies"
            className="screen__back__btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.556 17.629">
              <g
                id="_507257"
                data-name="507257"
                transform="translate(0 -31.842)"
              >
                <g
                  id="Group_506"
                  data-name="Group 506"
                  transform="translate(0 31.842)"
                >
                  <path
                    id="Path_753"
                    data-name="Path 753"
                    d="M19.32,39.213a1.469,1.469,0,0,0-.254-.019H4.564l.316-.147a2.941,2.941,0,0,0,.831-.588l4.067-4.067a1.522,1.522,0,0,0,.213-1.949,1.471,1.471,0,0,0-2.206-.191L.431,39.606a1.471,1.471,0,0,0,0,2.08h0l7.354,7.354a1.471,1.471,0,0,0,2.206-.147,1.522,1.522,0,0,0-.213-1.949L5.718,42.871a2.942,2.942,0,0,0-.735-.537l-.441-.2H18.984A1.522,1.522,0,0,0,20.536,40.9,1.471,1.471,0,0,0,19.32,39.213Z"
                    transform="translate(0 -31.842)"
                    fill="#15878c"
                  />
                </g>
              </g>
            </svg>
          </Nav.Link>
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
