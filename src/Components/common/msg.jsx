import React from "react";
import msg from '../CSS/msg.css'
const Message = ({ title, content }) => {
  return (
    <>
      <div className="msg-container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="content">
          <span>{content}</span>
        </div>
      </div>
    </>
  );
};

export default Message;
