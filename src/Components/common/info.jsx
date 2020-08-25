import React from "react";
import info from '../CSS/info.css'
const Info = ({ src, number, section }) => {
  return (
    <>
      <div className="info_container">
        <div>
          <img src={src} alt="" />
        </div>
        <div></div>
        <div>
          <h1>{number}</h1>
        </div>
        <div>
          <h6>{section}</h6>
        </div>
      </div>
    </>
  );
};

export default Info;
