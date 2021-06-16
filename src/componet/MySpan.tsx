import React from "react";
import "./style.css";

const MySpan = (props: any) => {
  return (
    <>
      {props.color === "RED" && RedSpan(props.text)}
      {props.color === "GREEN" && GreenSpan(props.text)}
    </>
  );
};

const RedSpan = (text: string) => {
  return <span id="red-span">{text}</span>;
};

const GreenSpan = (text: string) => {
  return <span id="green-span">{text}</span>;
};

export default MySpan;
