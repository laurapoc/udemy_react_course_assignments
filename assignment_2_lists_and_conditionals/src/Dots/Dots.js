import React from "react";

import "./Dots.css";

const Dots = (props) => {
const generateRandomColor = Math.floor(Math.random()*16777215).toString(16);
const randomColor = "#" + generateRandomColor;

const style = {
    backgroundColor: randomColor
}

  return (
    <div>
      <span style={style} className="dot"></span>
    </div>
  );
};

export default Dots;
