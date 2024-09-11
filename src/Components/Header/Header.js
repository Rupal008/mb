import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="gradient-background">
      <div className="container">
        <div className="header-content">
          <div className="left-content">
            <h1
              style={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                color: "white",
              }}
            >
              envato
              <span style={{ fontFamily: "Inter", color: "greenyellow" }}>
                m
              </span>
              arket
            </h1>
          </div>
          <div className="right-content">
            <button
              style={{
                borderRadius: "5px",
                padding: "3px 10px",
                background: "greenyellow",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
