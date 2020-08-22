import React from "react";
import featureCards from "../CSS/featureCards.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
const FeatureCards = ({ title, content, btnName,img }) => {
  return (
    <>
      <div className="main-container">
        <div id="title-container">
          <div id="titleImg">
          <FontAwesomeIcon icon="check-circle"/>
          </div>
          <div>
            <h5>{title}</h5>
          </div>
        </div>
        <div>
          <span>{content}</span>
        </div>
        <hr/>
        <div className="features"></div>
        <div>
          
          <h6>Popular Features</h6>
        </div>
        <div>
            <ul>
                <li><FontAwesomeIcon icon="check-circle" /> Contact Sights</li>
                <li><FontAwesomeIcon icon="check-circle" /> Contact Sights</li>
                <li><FontAwesomeIcon icon="check-circle" /> Contact Sights</li>
            </ul>
        </div>
        <div>
          <button>{btnName}</button>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
