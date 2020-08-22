import React from 'react';

const FooterContent = ({ title, options }) => {
  return (
    <>
      <div style={{"marginRight":"30px","marginLeft":"30px","marginTop":"50px"}}>
        <div>
          <h6 style={{"fontWeight":"800","marginTop":"30px"}}>{title}</h6>
        </div>
        <div  >
          <ul>
            {options.map(item => <li>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterContent;