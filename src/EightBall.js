import React, { useState } from "react";


// Somehow getting two items from the object each click.

function randomIndex(answers){
  let msgInd = Math.floor(Math.random() * answers.length);
  return answers[msgInd]
}


const EightBall = ({answers}) => {

  let [message, setMessage] = useState("Think of a question");
  let [bgColor, setBgColor] = useState("black");


  let randMsg = function() {
    let { msg, color } = randomIndex(answers);
      // console.log(msg, color)

    setMessage(msg);
    setBgColor(color);
  };


  return (

    <div className = "EightBall"  
    style = {{backgroundColor : bgColor}}
    onClick = {randMsg}>

      <h2 className = "EightBall-msg" >{message}</h2>
    </div>
  );
};

export default EightBall;
