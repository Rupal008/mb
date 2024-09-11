import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "../../Assests/Background-Circles.png";
import Mockup from "../../Assests/Mockup-Hand.png";
import logo1 from "../../Assests/Logo-1.png";
import logo2 from "../../Assests/Logo-2.png";
import logo3 from "../../Assests/Logo-3.png";
import logo4 from "../../Assests/Logo-4.png";
import logo5 from "../../Assests/Logo-5.png";
import logo6 from "../../Assests/Logo-6.png";
import virtual from "../../Assests/Virtual-Credit-Cards.png";
import mockup2 from "../../Assests/Mockups2.png";
import mockup3 from "../../Assests/Mockups3.png";
import mockupfull from "../../Assests/Mockups6.png";
import app from "../../Assests/Apps-Store.png";
import appifiz from "../../Assests/appifiz.png";
import google from "../../Assests/google-play.png";
import serious from "../../Assests/serious.jpg";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Home.css";

const Home = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const toggleDropdown1 = () => setDropdownOpen1(!dropdownOpen1);
  const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2);
  const toggleDropdown3 = () => setDropdownOpen3(!dropdownOpen3);
  const toggleDropdown4 = () => setDropdownOpen4(!dropdownOpen4);

  return (
    <>
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-3">
            <div>
              <h1 className="main-heading">
                Elevate Your
                <br />
                <span className="gradient-text">Experience</span> At <br />
                Appifiz App
              </h1>
              <p className="intro-text" style={{ color: "gray" }}>
                Welcome to Appifiz application! Start your financial journey
                with us <br />
                today. Explore our services and discover how we can help you
                achieve <br />
                your future financial goals.
              </p>
              <div className="button-group">
                <button
                  className="btn-get-started"
                  style={{
                    background: "linear-gradient(to right, #6dd5ed, lightpink)",
                  }}
                >
                  GET STARTED
                </button>
                <button className="btn-contact-us">CONTACT US</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 align-items-center justify-content-center image-container">
            <div className="position-relative">
              <img
                src={Background}
                alt="Background Circles"
                className="background-image img-fluid"
              />
              <img
                src={Mockup}
                alt="Mockup"
                className="mockup-image img-fluid position-absolute"
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "7rem", color: "gray" }}>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <img
              src={logo1}
              alt="Logo 1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <img
              src={logo2}
              alt="Logo 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <img
              src={logo3}
              alt="Logo 3"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <img
              src={logo4}
              alt="Logo 4"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <img
              src={logo5}
              alt="Logo 5"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <img
              src={logo6}
              alt="Logo 6"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="row">
          <div
            className="text-center pt-5 pb-5 col-12"
            style={{
              marginTop: "10rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1
              className="mb-4"
              style={{
                fontFamily: "DM Sans",
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: "54px",
              }}
            >
              Explore the Outstanding{" "}
              <span className="gradient-text">Features</span>
            </h1>
            <p style={{ fontFamily: "DM Sans", color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Non consectetur a erat nam at lectus urna duis
            </p>
          </div>
        </div>

        <div className="row pb-5" style={{ textAlign: "left" }}>
          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <i
                      aria-hidden="true"
                      className="fas fa-user-lock"
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        borderRadius: "50px",
                        border: "2px solid gray",
                        padding: "25px",
                        marginBottom: "50px",
                      }}
                    ></i>{" "}
                    {/* Example FontAwesome icon */}
                  </div>
                </div>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  User-Friendly Interface
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "#FFFFFF" }}
                >
                  Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque
                  purus semper eget duis. Vel fringilla est ullamcorper eget
                  nulla
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <i
                      aria-hidden="true"
                      className="fas fa-user-lock"
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        borderRadius: "50px",
                        border: "2px solid gray",
                        padding: "25px",
                        marginBottom: "50px",
                      }}
                    ></i>{" "}
                    {/* Example FontAwesome icon */}
                  </div>
                </div>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  User-Friendly Interface
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "#FFFFFF" }}
                >
                  Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque
                  purus semper eget duis. Vel fringilla est ullamcorper eget
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <i
                      aria-hidden="true"
                      className="fas fa-user-lock"
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        borderRadius: "50px",
                        border: "2px solid gray",
                        padding: "25px",
                        marginBottom: "50px",
                      }}
                    ></i>{" "}
                    {/* Example FontAwesome icon */}
                  </div>
                </div>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  User-Friendly Interface
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "#FFFFFF" }}
                >
                  Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque
                  purus semper eget duis. Vel fringilla est ullamcorper eget
                  nulla
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <i
                      aria-hidden="true"
                      className="fas fa-user-lock"
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        borderRadius: "50px",
                        border: "2px solid gray",
                        padding: "25px",
                        marginBottom: "50px",
                      }}
                    ></i>{" "}
                    {/* Example FontAwesome icon */}
                  </div>
                </div>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  User-Friendly Interface
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "#FFFFFF" }}
                >
                  Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque
                  purus semper eget duis. Vel fringilla est ullamcorper eget
                  nulla
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <i
                      aria-hidden="true"
                      className="fas fa-user-lock"
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        borderRadius: "50px",
                        border: "2px solid gray",
                        padding: "25px",
                        marginBottom: "50px",
                      }}
                    ></i>{" "}
                    {/* Example FontAwesome icon */}
                  </div>
                </div>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  User-Friendly Interface
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "#FFFFFF" }}
                >
                  Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque
                  purus semper eget duis. Vel fringilla est ullamcorper eget
                  nulla
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <i
                      aria-hidden="true"
                      className="fas fa-user-lock"
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        borderRadius: "50px",
                        border: "2px solid gray",
                        padding: "25px",
                        marginBottom: "50px",
                      }}
                    ></i>{" "}
                    {/* Example FontAwesome icon */}
                  </div>
                </div>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  User-Friendly Interface
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "#FFFFFF" }}
                >
                  Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque
                  purus semper eget duis. Vel fringilla est ullamcorper eget
                  nulla
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="text-center pt-5 col-lg-12 col-sm-12 col-md-12 mb-4 "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <h1
              className="mb-4"
              style={{
                fontFamily: "DM Sans",
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: "54px",
              }}
            >
              Smart Tools for Creativel <br />
              <span className="gradient-text">Financial Planning.</span>
            </h1>
            <p style={{ fontFamily: "DM Sans", color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Non consectetur a erat nam at lectus urna duis
            </p>
          </div>
        </div>

        <div className="row rounded-4">
          <div className="col-md-6 mb-4">
            <div
              className="card"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "6px 6px 15px rgba(0, 0, 0, 0.5), -6px -6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <h5 style={{ fontSize: "25px", fontWeight: "revert" }}>
                  The Era of Virtual Credit Cards
                </h5>
                <p style={{ marginBottom: "40px", color: "gray" }}>
                  Donec et odio pellentesque diam volutpat commodo sed.
                  Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
                  feugiat.
                </p>
                <img
                  src={virtual}
                  alt="Virtual Credit Cards"
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "6px 6px 15px rgba(0, 0, 0, 0.5), -6px -6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <h5 style={{ fontSize: "25px", fontWeight: "revert" }}>
                  Mobile Banking Integration
                </h5>
                <p style={{ marginBottom: "40px", color: "gray" }}>
                  Donec et odio pellentesque diam volutpat commodo sed.
                  Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
                  feugiat.
                </p>
                <img
                  src={mockup2}
                  alt="Mobile Banking Integration"
                  style={{
                    width: "60%",
                    height: "auto",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "6px 6px 15px rgba(0, 0, 0, 0.5), -6px -6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <h5 style={{ fontSize: "25px", fontWeight: "revert" }}>
                  Mobile Banking Integration
                </h5>
                <p style={{ marginBottom: "40px", color: "gray" }}>
                  Donec et odio pellentesque diam volutpat commodo sed.
                  Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
                  feugiat.
                </p>
                <img
                  src={mockup3}
                  alt="Mobile Banking Integration"
                  style={{
                    width: "60%",
                    height: "auto",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "8px 8px 20px rgba(0, 0, 0, 0.4), -8px -8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <h5 style={{ fontSize: "25px", fontWeight: "revert" }}>
                  Mobile Banking Integration
                </h5>
                <p style={{ marginBottom: "40px", color: "gray" }}>
                  Donec et odio pellentesque diam volutpat commodo sed.
                  Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
                  feugiat.
                </p>
                <img
                  src={mockup3}
                  alt="Mobile Banking Integration"
                  style={{
                    width: "60%",
                    height: "auto",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="text-center pt-5 col-lg-12 col-sm-12 col-md-12 mb-4 "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <h1
              className="mb-4"
              style={{
                fontFamily: "DM Sans",
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: "54px",
              }}
            >
              A Step-by-Step Guide To <br />
              <span className="gradient-text">Financial Management.</span>
            </h1>
            <p style={{ fontFamily: "DM Sans", color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Non consectetur a erat nam at lectus urna duis
            </p>
          </div>
        </div>

        <div className="row">
          <hr
            style={{
              border: "0",
              borderTop: "2px solid gray",
              margin: "20px 0",
              width: "100%",
            }}
          />
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-12 mb-3">
            <div style={{ marginTop: "80px" }}>
              <h1 style={{ fontSize: "3.1rem" }}>
                Make Your Payment
                <br />
                Transfer Very
                <span className="gradient-text"> Easily.</span>
              </h1>
              <p className="intro-text" style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                <br /> labore et dolore magna aliqua. Sed vulputate mi sit amet
                mauris
              </p>
              <div className="button-group">
                <i
                  class="fas fa-check-circle"
                  style={{ fontSize: "2rem", boxShadow: "initial" }}
                ></i>
                <span style={{ fontSize: "24px", marginLeft: "12px" }}>
                  Global Payment Solutions
                </span>
                <p style={{ color: "gray", marginLeft: "3rem" }}>
                  Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                  imperdiet. Faucibus scelerisque eleifend donec pretium
                </p>
              </div>
              <div className="button-group">
                <div>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "2rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "24px", marginLeft: "12px" }}>
                    Convenient Payment Management
                  </span>
                  <p style={{ color: "gray", marginLeft: "3rem" }}>
                    Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                    imperdiet. Faucibus scelerisque eleifend donec pretium
                  </p>
                </div>
                <p style={{ color: "gray" }}>
                  Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                  imperdiet. Faucibus scelerisque eleifend donec pretium
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card2"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "6px 6px 15px rgba(0, 0, 0, 0.5), -6px -6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <img
                  src={mockup2}
                  alt="Virtual Credit Cards"
                  style={{
                    width: "70%",
                    height: "30rem",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <hr
            style={{
              border: "0",
              borderTop: "2px solid gray",
              margin: "20px 0",
              width: "100%",
            }}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              className="card2"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "6px 6px 15px rgba(0, 0, 0, 0.5), -6px -6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <img
                  src={mockup2}
                  alt="Virtual Credit Cards"
                  style={{
                    width: "70%",
                    height: "30rem",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 mb-3">
            <div style={{ marginTop: "80px" }}>
              <h1 style={{ fontSize: "3.1rem" }}>
                Navigating the <br />
                Dashboard
                <span className="gradient-text"> Interface.</span>
              </h1>
              <p className="intro-text" style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                <br /> labore et dolore magna aliqua. Sed vulputate mi sit amet
                mauris
              </p>
              <div className="button-group">
                <i
                  class="fas fa-check-circle"
                  style={{ fontSize: "2rem", boxShadow: "initial" }}
                ></i>
                <span style={{ fontSize: "24px", marginLeft: "12px" }}>
                  Global Payment Solutions
                </span>
                <p style={{ color: "gray", marginLeft: "3rem" }}>
                  Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                  imperdiet. Faucibus scelerisque eleifend donec pretium
                </p>
              </div>
              <div className="button-group">
                <i
                  class="fas fa-check-circle"
                  style={{ fontSize: "2rem", boxShadow: "initial" }}
                ></i>
                <span style={{ fontSize: "24px", marginLeft: "12px" }}>
                  Global Payment Solutions
                </span>
                <p style={{ color: "gray", marginLeft: "3rem" }}>
                  Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                  imperdiet. Faucibus scelerisque eleifend donec pretium
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <hr
            style={{
              border: "0",
              borderTop: "2px solid gray",
              margin: "20px 0",
              width: "100%",
            }}
          />
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-12 ">
            <div style={{ marginTop: "80px" }}>
              <h1 style={{ fontSize: "3.1rem" }}>
                Make Your Payment
                <br />
                Transfer Very
                <span className="gradient-text"> Easily.</span>
              </h1>
              <p className="intro-text" style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                <br /> labore et dolore magna aliqua. Sed vulputate mi sit amet
                mauris
              </p>
              <div className="button-group">
                <i
                  class="fas fa-check-circle"
                  style={{ fontSize: "2rem", boxShadow: "initial" }}
                ></i>
                <span style={{ fontSize: "24px", marginLeft: "12px" }}>
                  Global Payment Solutions
                </span>
                <p style={{ color: "gray", marginLeft: "3rem" }}>
                  Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                  imperdiet. Faucibus scelerisque eleifend donec pretium
                </p>
              </div>
              <div className="button-group">
                <div>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "2rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "24px", marginLeft: "12px" }}>
                    Convenient Payment Management
                  </span>
                </div>
                <p style={{ color: "gray", marginLeft: "3rem" }}>
                  Ultricies mi quis hendrerit dolor. Amet mauris commodo quis
                  imperdiet. Faucibus scelerisque eleifend donec pretium
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card2"
              style={{
                textAlign: "center",
                color: "white",
                boxShadow:
                  "6px 6px 15px rgba(0, 0, 0, 0.5), -6px -6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <img
                  src={mockup2}
                  alt="Virtual Credit Cards"
                  style={{
                    width: "70%",
                    height: "30rem",
                    marginBottom: "-17px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "7rem" }}>
          <hr
            style={{
              border: "0",
              borderTop: "2px solid gray",
              margin: "20px 0",
              width: "100%",
              boxShadow: "0 4px 8px rgba(173, 216, 230, 0.5)",
              backgroundColor:
                "#f5f5f5" /* Optional: adjust if you need a specific background */,
              borderRadius: "4px" /* Optional: softens the edges */,
            }}
          />
        </div>

        <div className="row">
          <div
            className="text-center pt-5 col-lg-12 col-sm-12 col-md-12 mb-4 "
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              marginTop: "8rem",
            }}
          >
            <h1
              className=""
              style={{
                fontFamily: "DM Sans",
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: "54px",
              }}
            >
              Select The Plan<span className="gradient-text"> According</span>{" "}
              To <br /> Your All Demands.
            </h1>
            <p style={{ fontFamily: "DM Sans", color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Non consectetur a erat nam at lectus urna duis
            </p>
          </div>
        </div>

        <div className="row pb-5" style={{ textAlign: "left" }}>
          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "1px solid #FFFFFF",
                padding: "10px",
              }}
            >
              <div className="card-body" style={{ color: "white" }}>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                    marginTop: "16px",
                  }}
                >
                  Starter Plan
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Ut elit tellus, luctus nec
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "3rem",
                      fontWeight: "-moz-initial",
                      color: "white",
                    }}
                  >
                    18.00
                  </span>
                  /Per Month
                </p>
                <hr
                  style={{
                    border: "0",
                    borderTop: "2px solid gray",
                    margin: "20px 0",
                    width: "100%",
                  }}
                />
                <h5>What's included?</h5>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Up to 3 credit cards
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Personal profile only
                  </span>
                </p>
                <p>
                  {" "}
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Unlimited Integrations
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Use Only Mobile App
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Priority Customer Support
                  </span>
                </p>
                <button
                  className="btn-get-started"
                  style={{
                    background: "linear-gradient(to right, #6dd5ed, lightpink)",
                    width: "100%",
                  }}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "1px solid #FFFFFF",
                padding: "10px",
              }}
            >
              <div className="card-body" style={{ color: "white" }}>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                    marginTop: "16px",
                  }}
                >
                  Starter Plan
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Ut elit tellus, luctus nec
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "3rem",
                      fontWeight: "-moz-initial",
                      color: "white",
                    }}
                  >
                    18.00
                  </span>
                  /Per Month
                </p>
                <hr
                  style={{
                    border: "0",
                    borderTop: "2px solid gray",
                    margin: "20px 0",
                    width: "100%",
                  }}
                />
                <h5>What's included?</h5>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Up to 3 credit cards
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Personal profile only
                  </span>
                </p>
                <p>
                  {" "}
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Unlimited Integrations
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Use Only Mobile App
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Priority Customer Support
                  </span>
                </p>
                <button
                  className="btn-get-started"
                  style={{
                    background: "linear-gradient(to right, #6dd5ed, lightpink)",
                    width: "100%",
                  }}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "1px solid #FFFFFF",
                padding: "10px",
              }}
            >
              <div className="card-body" style={{ color: "white" }}>
                <h6
                  className="card-subtitle "
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    marginBottom: "16px",
                    marginTop: "16px",
                  }}
                >
                  Starter Plan
                </h6>
                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Ut elit tellus, luctus nec
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "3rem",
                      fontWeight: "-moz-initial",
                      color: "white",
                    }}
                  >
                    18.00
                  </span>
                  /Per Month
                </p>
                <hr
                  style={{
                    border: "0",
                    borderTop: "2px solid gray",
                    margin: "20px 0",
                    width: "100%",
                  }}
                />
                <h5>What's included?</h5>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Up to 3 credit cards
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Personal profile only
                  </span>
                </p>
                <p>
                  {" "}
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Unlimited Integrations
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Use Only Mobile App
                  </span>
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ fontSize: "1rem", boxShadow: "initial" }}
                  ></i>
                  <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                    Priority Customer Support
                  </span>
                </p>
                <button
                  className="btn-get-started"
                  style={{
                    background: "linear-gradient(to right, #6dd5ed, lightpink)",
                    width: "100%",
                  }}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row text-content"
          style={{ marginTop: "10rem", borderRadius: "20px" }}
        >
          <div className="col-lg-6 col-sm-12 col-md-12 mb-3">
            <div>
              <h1 style={{ fontSize: "50px" }}>
                Ready to Elevate Your
                <br /> App's<span className="gradient-text">Presence?</span>
              </h1>
              <p style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus
                <br /> nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="button-group">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  style={{
                    borderRadius: "25px",
                    padding: "12px 3rem",
                    background: "#131323",
                    marginRight: "16px",
                    color: "gray",
                  }}
                />
                <button
                  className="btn-get-started"
                  style={{
                    background: "linear-gradient(to right, #6dd5ed, lightpink)",
                    padding: "14px",
                  }}
                >
                  SUBSCRIBE
                </button>
              </div>
              <div className="button-group">
                <img
                  src={app}
                  alt="..."
                  style={{
                    width: "120px",
                    height: "35px",
                    borderRadius: "4px",
                    marginRight: "20px",
                  }}
                />
                <img
                  src={google}
                  alt="..."
                  style={{
                    width: "120px",
                    height: "35px",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 image-container">
            <img
              src={Background}
              alt="Background Circles"
              style={{
                width: "110%",
                height: "auto",
                position: "absolute",
                // top: '10rem',
                left: "0",
                zIndex: "1",
                opacity: "0.5",
              }}
            />
            <img
              src={mockupfull}
              alt="Mockup"
              style={{
                width: "66%",
                height: "auto",
                position: "absolute",
                top: "-10rem",
                right: "0",
                marginRight: "50px",
                zIndex: "2",
              }}
            />
          </div>
        </div>

        <div className="row">
          <div
            className="text-center pt-5 col-lg-12 col-sm-12 col-md-12 mb-4 "
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              marginTop: "8rem",
            }}
          >
            <h1
              className=""
              style={{
                fontFamily: "DM Sans",
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: "54px",
              }}
            >
              See what our users
              <br />
              say about <span className="gradient-text">Appifiz</span>
            </h1>
            <p style={{ fontFamily: "DM Sans", color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Non consectetur a erat nam at lectus urna duis
            </p>
          </div>
        </div>

        <div className="row pb-5" style={{ textAlign: "left" }}>
          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <img
                      src={serious}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />{" "}
                    <span
                      className="card-subtitle "
                      style={{
                        fontFamily: "DM Sans",
                        color: "#FFFFFF",
                        fontSize: "22px",
                      }}
                    >
                      Jeremy Mitchell
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        marginLeft: "56px",
                        color: "gray",
                      }}
                    >
                      Business Owner
                    </p>
                  </div>
                </div>

                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  "Appifiz has revolutionized the way I handle my business
                  finances. The app’s seamless integration with my accounting
                  software saves me hours every week. I can manage invoices,
                  track expenses, and even apply for loans directly through the
                  app."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <img
                      src={serious}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />{" "}
                    <span
                      className="card-subtitle "
                      style={{
                        fontFamily: "DM Sans",
                        color: "#FFFFFF",
                        fontSize: "22px",
                      }}
                    >
                      Jeremy Mitchell
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        marginLeft: "56px",
                        color: "gray",
                      }}
                    >
                      Business Owner
                    </p>
                  </div>
                </div>

                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  "Appifiz has revolutionized the way I handle my business
                  finances. The app’s seamless integration with my accounting
                  software saves me hours every week. I can manage invoices,
                  track expenses, and even apply for loans directly through the
                  app."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <img
                      src={serious}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />{" "}
                    <span
                      className="card-subtitle "
                      style={{
                        fontFamily: "DM Sans",
                        color: "#FFFFFF",
                        fontSize: "22px",
                      }}
                    >
                      Jeremy Mitchell
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        marginLeft: "56px",
                        color: "gray",
                      }}
                    >
                      Business Owner
                    </p>
                  </div>
                </div>

                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  "Appifiz has revolutionized the way I handle my business
                  finances. The app’s seamless integration with my accounting
                  software saves me hours every week. I can manage invoices,
                  track expenses, and even apply for loans directly through the
                  app."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <img
                      src={serious}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />{" "}
                    <span
                      className="card-subtitle "
                      style={{
                        fontFamily: "DM Sans",
                        color: "#FFFFFF",
                        fontSize: "22px",
                      }}
                    >
                      Jeremy Mitchell
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        marginLeft: "56px",
                        color: "gray",
                      }}
                    >
                      Business Owner
                    </p>
                  </div>
                </div>

                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  "Appifiz has revolutionized the way I handle my business
                  finances. The app’s seamless integration with my accounting
                  software saves me hours every week. I can manage invoices,
                  track expenses, and even apply for loans directly through the
                  app."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <img
                      src={serious}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />{" "}
                    <span
                      className="card-subtitle "
                      style={{
                        fontFamily: "DM Sans",
                        color: "#FFFFFF",
                        fontSize: "22px",
                      }}
                    >
                      Jeremy Mitchell
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        marginLeft: "56px",
                        color: "gray",
                      }}
                    >
                      Business Owner
                    </p>
                  </div>
                </div>

                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  "Appifiz has revolutionized the way I handle my business
                  finances. The app’s seamless integration with my accounting
                  software saves me hours every week. I can manage invoices,
                  track expenses, and even apply for loans directly through the
                  app."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mb-4">
            <div
              className="card rounded-4"
              style={{
                width: "100%",
                background: "#131323",
                border: "2px solid #FFFFFF",
              }}
            >
              <div className="card-body">
                <div className="icon-box icon-box-header elementor-animation-">
                  <div className="icon style-color">
                    <img
                      src={serious}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />{" "}
                    <span
                      className="card-subtitle "
                      style={{
                        fontFamily: "DM Sans",
                        color: "#FFFFFF",
                        fontSize: "22px",
                      }}
                    >
                      Jeremy Mitchell
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        marginLeft: "56px",
                        color: "gray",
                      }}
                    >
                      Business Owner
                    </p>
                  </div>
                </div>

                <p
                  className="card-text"
                  style={{ fontFamily: "DM Sans", color: "gray" }}
                >
                  "Appifiz has revolutionized the way I handle my business
                  finances. The app’s seamless integration with my accounting
                  software saves me hours every week. I can manage invoices,
                  track expenses, and even apply for loans directly through the
                  app."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5" style={{ textAlign: "-webkit-center" }}>
          <div className="col">
            <div className="p-4">
              <h1
                className="mb-3"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: "bold",
                  fontSize: "54px",
                  color: "#FFFFFF",
                }}
              >
                Frequently Asked{" "}
                <span className="gradient-text"> Questions</span>
              </h1>
              <p style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus
                <br /> nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="m-4">
              {/* FAQ Item 1 */}
              <div
                className="card"
                style={{
                  width: "65%",
                  background: "border-box",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  margin: "15px",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    borderBottom: "1px solid #fff3",
                    padding: "10px",
                    border: "0px 0px 1px 0px",
                  }}
                >
                  <h6
                    className="card-title"
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: "bold",
                      fontSize: "18px",
                      textAlign: "left",
                      color: "#FFFFFF",
                      position: "relative",
                    }}
                  >
                    What is a fintech mobile app?
                    <button
                      style={{
                        float: "right",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#FFFFFF",
                      }}
                      onClick={toggleDropdown1}
                    >
                      <i
                        className="fas fa-chevron-down"
                        style={{
                          fontSize: "20px",
                        }}
                      ></i>
                    </button>
                    {dropdownOpen1 && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "0",
                          backgroundColor: "#131323",
                          border: "1px solid #fff3",
                          borderRadius: "8px",
                          padding: "10px",
                          zIndex: 1000,
                          marginTop: "20px",
                          width: "100%",
                        }}
                      >
                        <p style={{ color: "#FFFFFF" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat.
                        </p>
                      </div>
                    )}
                  </h6>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div
                className="card"
                style={{
                  width: "65%",
                  background: "border-box",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  margin: "15px",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    borderBottom: "1px solid #fff3",
                    padding: "10px",
                    border: "0px 0px 1px 0px",
                  }}
                >
                  <h6
                    className="card-title"
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: "bold",
                      fontSize: "18px",
                      textAlign: "left",
                      color: "#FFFFFF",
                      position: "relative",
                    }}
                  >
                    How do I transfer money to another account?
                    <button
                      style={{
                        float: "right",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#FFFFFF",
                      }}
                      onClick={toggleDropdown2}
                    >
                      <i
                        className="fas fa-chevron-down"
                        style={{
                          fontSize: "20px",
                        }}
                      ></i>
                    </button>
                    {dropdownOpen2 && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "0",
                          backgroundColor: "#131323",
                          border: "1px solid #fff3",
                          borderRadius: "8px",
                          padding: "10px",
                          zIndex: 1000,
                          marginTop: "20px",
                          width: "100%",
                        }}
                      >
                        <p style={{ color: "#FFFFFF" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat.
                        </p>
                      </div>
                    )}
                  </h6>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div
                className="card"
                style={{
                  width: "65%",
                  background: "border-box",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  margin: "15px",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    borderBottom: "1px solid #fff3",
                    padding: "10px",
                    border: "0px 0px 1px 0px",
                  }}
                >
                  <h6
                    className="card-title"
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: "bold",
                      fontSize: "18px",
                      textAlign: "left",
                      color: "#FFFFFF",
                      position: "relative",
                    }}
                  >
                    How long do transactions take to process?
                    <button
                      style={{
                        float: "right",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#FFFFFF",
                      }}
                      onClick={toggleDropdown3}
                    >
                      <i
                        className="fas fa-chevron-down"
                        style={{
                          fontSize: "20px",
                        }}
                      ></i>
                    </button>
                    {dropdownOpen3 && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "0",
                          backgroundColor: "#131323",
                          border: "1px solid #fff3",
                          borderRadius: "8px",
                          padding: "10px",
                          zIndex: 1000,
                          marginTop: "20px",
                          width: "100%",
                        }}
                      >
                        <p style={{ color: "#FFFFFF" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat.
                        </p>
                      </div>
                    )}
                  </h6>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div
                className="card"
                style={{
                  width: "65%",
                  background: "border-box",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  margin: "15px",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    borderBottom: "1px solid #fff3",
                    padding: "10px",
                    border: "0px 0px 1px 0px",
                  }}
                >
                  <h6
                    className="card-title"
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: "bold",
                      fontSize: "18px",
                      textAlign: "left",
                      color: "#FFFFFF",
                      position: "relative",
                    }}
                  >
                    Does the app use biometric authentication?
                    <button
                      style={{
                        float: "right",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#FFFFFF",
                      }}
                      onClick={toggleDropdown4}
                    >
                      <i
                        className="fas fa-chevron-down"
                        style={{
                          fontSize: "20px",
                        }}
                      ></i>
                    </button>
                    {dropdownOpen4 && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "0",
                          backgroundColor: "#131323",
                          border: "1px solid #fff3",
                          borderRadius: "8px",
                          padding: "10px",
                          zIndex: 1000,
                          marginTop: "20px",
                          width: "100%",
                        }}
                      >
                        <p style={{ color: "#FFFFFF" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat.
                        </p>
                      </div>
                    )}
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            {/* Subscription Section */}
            <div
              className="col-lg-5"
              style={{
                boxShadow: "0 4px 8px rgba(173, 216, 230, 0.5)",
                borderRadius: "10px",
                padding: "30px",
                color: "white",
              }}
            >
              <h3 className="mb-3" style={{ fontSize: "26px" }}>
                Subscribe to our newsletter
              </h3>
              <p style={{ color: "gray" }}>
                Ultricies mi quis hendrerit dolor. Amet mauris
                <br /> commodo quis imperdiet. Faucibus scelerisque
              </p>
              <div className="button-group">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  style={{
                    borderRadius: "50px",
                    padding: "10px 15px",
                    textAlign: "center",
                    background: "#131323",
                    color: "white",
                    border: "1px solid #ddd",
                    marginRight: "10px",
                    width: "35%" /* Adjusted width for better fit */,
                  }}
                />
                <button
                  style={{
                    background: "linear-gradient(to right, #6dd5ed, lightpink)",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Links Section */}
            <div className="col-lg-7">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  color: "white",
                }}
              >
                <div className="me-12">
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Menu
                  </p>
                  <p style={{ color: "gray" }}>Home</p>
                  <p style={{ color: "gray" }}>About</p>
                  <p style={{ color: "gray" }}>Features</p>
                  <p style={{ color: "gray" }}>FAQ</p>
                  <p style={{ color: "gray" }}>Blog</p>
                  <p style={{ color: "gray" }}>Contact</p>
                </div>

                <div className="me-12">
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Quick Links
                  </p>
                  <p style={{ color: "gray" }}>Terms of use</p>
                  <p style={{ color: "gray" }}>Privacy policy</p>
                  <p style={{ color: "gray" }}>Cookie policy</p>
                  <p style={{ color: "gray" }}>Payment Integration</p>
                  <p style={{ color: "gray" }}>Data Security</p>
                  <p style={{ color: "gray" }}>Terms & conditions</p>
                </div>

                <div className="me-12">
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Business Solution
                  </p>
                  <p style={{ color: "white" }}>Address</p>
                  <p style={{ color: "gray" }}>Ocean Drive, Miami, Florida</p>
                  <p style={{ color: "white" }}>Phone</p>
                  <p style={{ color: "gray" }}>+1 (444) 1234 ‑ 567</p>
                  <p style={{ color: "white" }}>Email</p>
                  <p style={{ color: "gray" }}>appifiz@support.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "5rem" }}>
            <hr
              style={{
                border: "0",
                borderTop: "2px solid gray",
                margin: "20px 0",
                width: "100%",
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-5 d-flex justify-content-center">
            <img
              className="rounded-3"
              src={appifiz}
              alt="Appifiz Logo"
              style={{ width: "190px", height: "45px" }}
            />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
            <p
              className="mb-0"
              style={{
                fontFamily: "DM Sans",
                color: "#808080",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              @ Copyright © 2024 Bakrietheme. All Rights Reserved.
            </p>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
            <img src="./Socials.png" alt="social" className="mx-2" />
            <img src="./Socials1.png" alt="social" className="mx-2" />
            <img src="./Socials3.png" alt="social" className="mx-2" />
            <img src="./Socials5.png" alt="social" className="mx-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
