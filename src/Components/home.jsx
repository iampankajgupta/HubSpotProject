import React, { Component } from "react";
import home from "./CSS/home.css";
import BodyPart from "./common/bodypart";
import FeatureCards from "./common/featureCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Message from "./common/msg";
import DropDown from "./common/dropdown";
import FooterContent from "./common/footerContents";
class Home extends Component {
  state = {
    option1:['Ad Software', 'Blog Software', 'SEO Software', 'ocial Media Software'],
    option2:['Find New Prospects','Email Tracking','Sales Email Templates','Click to Call Your Leads'],
    option3:['Document Tracking Tool','Meeting Schedule Tool','Sales Automation Tool','Lead Management Tool'],
    option4:['HubSpot Partners','Join a Local User Group','PieSync Integrations','PieSync Integrations']
  };
  render() {
    return (
      <>
        <div id="container">
          <div id="main">
            <div className="header">
              <div>
                <FontAwesomeIcon icon="globe-asia" />
              </div>
              <div className="selectLanguage">
                <DropDown />
              </div>
              <div className="verticalLine" />
              <div classNam="contact">
                <h6>Contact Sales</h6>
              </div>
              <div className="searchIcon">
                <FontAwesomeIcon icon="search" />
              </div>
              <div className="loginBtn">
                <button type="button" className="btn btn btn-warning">
                  Log In
                </button>
              </div>
              <div className="freeBtn">
                <button type="button" className="btn btn btn-warning">
                  Get HubSpot free
                </button>
              </div>

            </div>
            <div className="body">
              <div className="bodyMenu">
                <div className="logo">HubSpot Logo</div>
                <div className="servicesOptions">
                </div>
              </div>
              <div className="bodyCenter">
                <BodyPart title="There's a better way to grow." content="Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”" btnName="Get HubSpot free" message="Get started with FREE tools, and  upgrade as you grow." />
              </div>
              <div style={{ "display": "flex", "padding": "20px", "backgroundColor": "#f5f8fa" }}>
                <div id="body-content">
                  <Message title="Powerful alone.Better together" content="HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together." />
                  <FeatureCards title="Free HubSpot CRM" content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                    btnName="Get Free CRM"
                  />
                  <FeatureCards title="Free HubSpot CRM" content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                    btnName="Get Free CRM"
                  />
                </div>
              </div>
              <div id="across_platform_users_section">
                <div >
                  <Message title="86,000" content="ustomers in over 120 countries growing their businesses with HubSpot" />
                </div>
              </div>

              <div>
                <div className="join_section">
                  <BodyPart title="Start Growing With HubSpot Today" content="With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier." btnName="Get HubSpot free" message="Get started with FREE tools, or get more with our premium software.
" />
                  <img src="../assets/images/img.png" alt="logo" />
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="footer-content" style={{"margin":"auto","width":"70%","marginTop":"20px"}} >
            <div className="list1">
              <FooterContent title="Increase Your Traffic " options={this.state.option1} />
            </div>
            <div className="list2">
              <FooterContent title="Connect With Leads " options={this.state.option2} />
            </div>
            <div className="list3">
              <FooterContent title="Close and Manage Leads" options={this.state.option3} />
            </div>
            <div className="list4">
              <FooterContent title="Support and Tools" options={this.state.option4} />
            </div>
          </div>
          {/* <div className="language"> */}
            {/* <div>
              English
            </div>
            <div>Dutch</div>
            <div>Espniol</div>

          </div> */}
          <hr />
          <div className="logoName">
            <img src="../assets/images/grey_logo.svg" alt="logo" />
          </div>
          <div className="footer-bottom">

            <div className="copyRights">
              <h6>Copyright @ 2020 HubSpot,Inc.</h6>
            </div>
            <div className="policy">
              <div id="legalStuff">
                Legal Stuff
          </div>
              <div id="privacyPolicy">
                Privacy Policy
          </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Home;
