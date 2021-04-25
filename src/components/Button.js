import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ButtonComponent({ placeholder, variant, toPath }) {
  if (variant === "btn") {
    return <Button className="btn__cta">{placeholder}</Button>;
  } else if (variant === "link") {
    return (
      <Nav.Link to={toPath} as={Link} className="btn__cta">
        {placeholder}
      </Nav.Link>
    );
  }
}
