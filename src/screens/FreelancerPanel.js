import React from "react";
import "./FreelancerPanel.scss";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";

export default function FreelancerPanel() {
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">Freelancers</div>
      <Switch>
        <Route path="/dashboard/freelancer" exact>
          <div className="panel__main__freelancer">
            <div className="panel__main__heading__row">
              <div className="panel__main__heading__row__entry">ID</div>
              <div className="panel__main__heading__row__entry">Name</div>
              <div className="panel__main__heading__row__entry">
                Job Applied
              </div>
              <div className="panel__main__heading__row__entry">Location</div>
            </div>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/details"
              className="panel__main__row"
            >
              <div className="panel__main__row__entry">1325440</div>
              <div className="panel__main__row__entry">Umar Riaz</div>
              <div className="panel__main__row__entry">20</div>
              <div className="panel__main__row__entry">California</div>
            </Nav.Link>
          </div>
        </Route>
        <Route path="/dashboard/freelancer/details">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}
