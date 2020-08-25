import React, { Component } from "react";
import BodyPart from "./common/bodypart";
import FeatureCards from "./common/featureCards";
import Message from "./common/msg";
import DropDown from "./common/dropdown";
import FooterContent from "./common/footerContents";
import Info from "./common/info";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../assets/images/grey_logo.svg";
import photo from "../assets/images/photo.webp";
import atlassian from "../assets/images/atlassian.webp";
import doorDarsh from "../assets/images/doordarsh.webp";
import crowd from "../assets/images/crowd.webp";
import survey_monkey from "../assets/images/survey_monkey.svg";
import subaru from "../assets/images/subaru.webp";
import wistia from "../assets/images/wistia.webp";
import class_pass from "../assets/images/class_pass.webp";
import vmware from "../assets/images/vmware.webp";

import handshake from "../assets/Icons/handshake.svg";
import hbsBlogs from "../assets/Icons/hbsBlogs.svg";
import hbsAcademy from "../assets/Icons/hbsAcademy.svg";
import inBound from "../assets/Icons/inBound.svg";
import marketPlace from "../assets/Icons/marketPlace.webp";
import langauges from "../assets/Icons/globe_languages.svg";
import chat from "../assets/Icons/followers.svg";
import customers from "../assets/Icons/customers.svg";

import home from "./CSS/home.css";
import Services from "./common/services";

class Home extends Component {
  state = {
    option1: [
      "Ad Software",
      "Blog Software",
      "SEO Software",
      "ocial Media Software",
    ],
    option2: [
      "Find New Prospects",
      "Email Tracking",
      "Sales Email Templates",
      "Click to Call Your Leads",
    ],
    option3: [
      "Document Tracking Tool",
      "Meeting Schedule Tool",
      "Sales Automation Tool",
      "Lead Management Tool",
    ],
    option4: [
      "HubSpot Partners",
      "Join a Local User Group",
      "PieSync Integrations",
      "PieSync Integrations",
    ],
  };
  render() {
    return (
      <>
        <div id="container">
          <div id="main">
            <div className="header">
              <div className="header_section1">
                <div id="icon">
                  <FontAwesomeIcon icon="globe-asia" />
                </div>
                <div className="selectLanguage">
                  <h6>English</h6>
                </div>
                <div className="verticalLine" ></div>
                <div className="contact_txt">
                  <h6>Contact Sales</h6>
                </div>
              </div>
              <div className="header_section2">
                <div className="searchIcon">
                  <FontAwesomeIcon icon="search" />
                </div>
                <div className="loginBtn">
                  <button
                    type="button"
                    className="btn btn btn-warning"
                    id="logInBtn"
                  >
                    Log In
                  </button>
                </div>
                <div className="freeBtn">
                  <button
                    type="button"
                    className="btn btn btn-warning"
                    id="freeBtn"
                  >
                    Get HubSpot free
                  </button>
                </div>
              </div>
            </div>
            <div className="body">
              {/* <div className="bodyMenu">
                <div className="logo">HubSpot Logo</div>
                <div className="servicesOptions"></div>
              </div> */}
              <div className="bodyCenter">
                <BodyPart
                  title="There's a better way to grow."
                  content="Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”"
                  btnName="Get HubSpot free"
                  message="Get started with FREE tools, and  upgrade as you grow."
                />
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "20px",
                  backgroundColor: "#f5f8fa",
                }}
              >
                <div id="body-content">
                  <div className="content">
                    <Message
                      title="Powerful alone.Better together"
                      content="HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together."
                    />
                    <FeatureCards
                      title="Free HubSpot CRM"
                      content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                      btnName="Get Free CRM"
                    />
                    <FeatureCards
                      title="Free HubSpot CRM"
                      content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                      btnName="Get Free CRM"
                    />
                    <FeatureCards
                      title="Free HubSpot CRM"
                      content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                      btnName="Get Free CRM"
                    />
                    <FeatureCards
                      title="Free HubSpot CRM"
                      content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                      btnName="Get Free CRM"
                    />
                    <FeatureCards
                      title="Free HubSpot CRM"
                      content="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."
                      btnName="Get Free CRM"
                    />
                  </div>
                </div>
              </div>
              <div className="about_hubSpot">
                <div className="message">
                  <div>
                    <h2>
                      Learn and grow with award-winning support and a thriving
                      community behind you.
                    </h2>
                  </div>
                  <br/>
                  <div>
                    <span>
                      You don't have to go it alone. Master the inbound
                      methodology and get the most out of your tools with
                      HubSpot's legendary customer support team and a community
                      of thousands of marketing and sales pros just like you.
                    </span>
                  </div>
                  <div className="grid-container">
                    <div>
                      <div id="icons_row1">
                        <Info
                          src={handshake}
                          number="150"
                          section="Hubspot group Users"
                        />
                        <Info
                          src={hbsBlogs}
                          number="7M"
                          section="monthly visits"
                        />
                        <Info
                          src={hbsAcademy}
                          number="276K"
                          section="certified professionals"
                        />
                        <Info
                          src={inBound}
                          number="26"
                          section="registered attendees"
                        />
                      </div>
                      <div id="icons_row2">
                        {/* <Info
                          src={marketPlace}
                          number="150"
                          section="Hubspot group Users"
                        /> */}

                        <Info src={langauges} number="6" section="languages" />
                        <Info
                          src={chat}
                          number="2.6M"
                          section="social followers"
                        />
                        <Info
                          src={customers}
                          number="86,000"
                          section="customers"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="across_platform_users_section">
                <div>
                  <Message
                    title="86,000"
                    content="Customers in over 120 countries growing their businesses with HubSpot"
                  />
                </div>
                <div id="companies_images">
                  <div className="company_section1" id="company_images1">
                    <img src={atlassian} alt="" id="atlassian" />
                    <img src={doorDarsh} alt="" id="doorDarsh" />
                    <img src={crowd} alt="" id="crowd" />
                    <img src={survey_monkey} alt="" id="survey_monkey" />
                  </div>
                  <div className="company_section2" id="company_images2">
                    <img src={subaru} alt="" id="subaru" />
                    <img src={wistia} alt="" id="wistia" />
                    <img src={class_pass} alt="" id="class_pass" />
                    <img src={vmware} alt="" id="vmware" />
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-around">
                  <BodyPart
                    title="Start Growing With HubSpot Today"
                    content="With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier."
                    btnName="Get HubSpot free"
                    message="Get started with FREE tools, or get more with our premium software.
"
                  />
                  <img src={photo} alt="logo" id="personImg" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="footer-body">
            <div className="footer-content">
              <Services
                title="Increase Your Traffic"
                services={this.state.option1}
              />
              <Services
                title="Connect With Leads"
                services={this.state.option2}
              />
              <Services
                title="Close and Manage Leads"
                services={this.state.option3}
              />
              <Services
                title="Support and Tools"
                services={this.state.option4}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button id="contactBtn">Contact HubSpot Support</button>
            </div>
            <div className="languages">
              <div>
                <h5>English</h5>
              </div>
              <div>
                <h5>Deutsch</h5>
              </div>
              <div>
                <h5>Chinese</h5>
              </div>
              <div>
                <h5>Espaniol</h5>
              </div>
              <div>
                <h5>Portuguese</h5>
              </div>
              <div>
                <h5>French </h5>
              </div>
            </div>
            <hr />
            <div>
              <img src={img} alt="logo" id="logoName" />
            </div>
            <div className="footer-bottom">
            <div className="d-flex justify-content-end">
                <div id="legalStuff"><h5>Legal Stuff</h5></div>
                <div id="privacyPolicy"><h5>Privacy Policy</h5></div>
              </div>
              <div className="d-flex justify-content-start">
                <h6>Copyright @ 2020 HubSpot,Inc.</h6>
              </div>
 
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
