import React from "react";

const CharComponent = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };

  const charArr = props.charBoxData.split("");
  
//   let arrIndex;
//  charArr.forEach(element => {
//     arrIndex = charArr.indexOf(element);
//     // console.log(arrIndex);
//  });

  const charList = charArr.map((char) => (
    <div key={char}>
      <li style={style}>{char}</li>
    </div>
  ));

  return (
    <div className="CharComponent">
      <p>TEST</p>
      <p>{charArr.join(" ")}</p>
      {charList}
      {console.log(charArr)}
    </div>
  );
};

export default CharComponent;
