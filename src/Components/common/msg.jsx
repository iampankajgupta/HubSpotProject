import React from "react";

const Message = ({ title, content }) => {
  return (
    <>
      <div className="main-container">
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
