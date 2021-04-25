import React from "react";
import { Form } from "react-bootstrap";

export default function InputboxComponent({ placeholder, type }) {
  return (
    <Form.Control
      placeholder={placeholder}
      type={type}
      className="input__box"
    />
  );
}
