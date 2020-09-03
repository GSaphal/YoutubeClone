import React, { Component } from "react";
import D from "./D";
import E from "./E";

const B = (props) => {
  return (
    <div>
      <h6>Hello this is B.</h6>

      <button onClick={props.handleNext}>Next</button>
    </div>
  );
};
export default B;
