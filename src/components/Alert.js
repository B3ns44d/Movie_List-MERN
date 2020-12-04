import React from "react";
import './Alert.css';
export default function Alert() {
  return (
    <>
    <div id="container">
      <div id="success-box">
        <div className="dot"></div>
        <div className="dot two"></div>
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert">Success!</h1>
          <p>yay, everything is working.</p>
        </div>
        <button className="button-box">
          <h1 className="green">continue</h1>
        </button>
      </div>
    </div>
    {/* <footer>
    <p>made by <a href="https://github.com/B3ns44d"> B3ns44d</a> ♡</p>
  </footer> */}
  </>
  );
}
