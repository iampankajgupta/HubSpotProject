import React from "react";
import bodyPart from "../CSS/bodyPart.css";
const BodyPart = ({ title, content, btnName, message }) => {
  return (
    <>
      <div className="bodyPart">
        <div id="heading">
          <h1>{title}</h1>
        </div>
        <div id="content">
          <span>{content}</span>
        </div>
        <div id="btn">
          <button type="btn" id="btn btn-danger">
            {btnName}
          </button>
        </div>
        <div id="message">
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default BodyPart;
