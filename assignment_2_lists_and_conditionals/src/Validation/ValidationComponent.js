import React from "react";


const ValidationComponent = (props) => {
    const minLength = 5;

    return (
        <div className="ValidationComponent">
            <h3>Valid number of characters is 5.</h3>
            <p>The text you entered is: {props.enteredText}. </p>
            <p>Text's length is: {props.textLength}. </p>
            {props.textLength >= minLength ? <p>Text long enough</p> : <p>Text too short</p>}            
        </div>
    );
};

export default ValidationComponent;