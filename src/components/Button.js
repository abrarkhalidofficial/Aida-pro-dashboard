import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ButtonComponent extends React.Component {
  render() {
    const variant = this.props.variant;
    if (variant === "btn") {
      return (
        <Button className="btn__cta" onClick={this.props.onClick}>
          {this.props.placeholder}
        </Button>
      );
    } else if (variant === "link") {
      return (
        <Nav.Link to={this.props.toPath} as={Link} className="btn__cta">
          {this.props.placeholder}
        </Nav.Link>
      );
    }
  }
}
