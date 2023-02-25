import React from "react";
import "./Title.css";

function Title(props) {
  return <h2 className='title-container'>{props.content}</h2>;
}

export default Title;
