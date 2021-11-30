import React from "react";
import styled from "styled-components";
export default class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      previousNumber: null,
      validate: false,
    };
    this.VerifyPhone = this.VerifyPhone.bind(this);
    this.NumberChanged = this.NumberChanged.bind(this);
    this.validateChange = this.validateChange.bind(this);
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/TelegramServices.js";
    script.async = true;
    document.body.appendChild(script);
  }

  NumberChanged(e) {
    this.setState({ number: e.target.value });
    console.log(this.state.number);
  }

  VerifyPhone() {
    this.setState({ previousNumber: this.state.number, validate: true });
  }

  validateChange() {
    this.setState({ validate: !this.state.validate });
  }
  render() {
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          <div>
            <h1>Telegram</h1>
            <a
              rel="noopener"
              style={{
                padding: "12px 12px",
                color: "white",
                fontWeight: "500",
                textDecoration: "none",
                backgroundColor: "#1d9bf0",
                borderRadius: "10px",
                cursor: "pointer",
                display: "none",
              }}
              target="_blank"
              id="JoinBTN"
              href="https://t.me/RamLogicsTesting"
            >
              Join Telegram
            </a>
            <div style={{ marginTop: "1rem" }} id="phoneContainer">
              <input
                placeholder="Enter Phone Number"
                id="phoneNumber"
                type="number"
              />
              <button id="phoneVerify">Verify</button>
            </div>
            <p id="accountExist" style={{ display: "none" }}>
              Sorry you have already account
            </p>
            <form style={{ display: "none", marginTop: "1rem" }} id="formPart">
              <input
                placeholder="Enter Username"
                id="FTusername"
                style={{ borderRadius: "5px" }}
              />
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  fontWeight: "600",
                  margin: "1rem",
                }}
              >
                <div>Phone Number:</div>
                <div id="FphoneNumber"></div>
              </div>
              <button type="submit" style={{ borderRadius: "5px" }}>
                Validate
              </button>
            </form>
            <div
              style={{ display: "none", marginTop: "1rem", color: "#1d9bf0" }}
              id="wrongNumber"
            >
              Click Here If You enter wrong Phone Number
            </div>
          </div>
        </div>
      </>
    );
  }
}
