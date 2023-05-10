import React from "react";

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id="heading">
        <h3 style={{ fontWeight: "bold", color: "maroon" }}>{subtitle} </h3>
        <h1 style={{ fontWeight: "bold", color: "maroon " }}>{title} </h1>
      </div>
    </>
  );
};

export default Heading;
