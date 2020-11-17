import Axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Breach from "./components/breach";
import ETRModal from "./components/etrmodal";
import HTCModal from "./components/htcmodal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ETRModal: false,
      HTCModal: false,
      checkType: "",
      credentials: "",
      isBreachOpen: true,
    };
  }

  checkIntegrity = () => {
    var URL =
      "https://www.haveibeenpwned.com/api/v3/breachedaccount/" +
      this.state.credentials;
    console.log(URL);
    Axios({
      method: "get",
      url: URL,
      headers: {
        "hibp-api-key": "742b43f7494c446f9dc816f951c3679b",
        // "User-Agent": "pwned-aic",
        "Content-Type": "application/json",
        // "Origin": "http://49.207.142.29:5000",
      },
    }).then((response) => {
      console.log(response);
    });
  };

  handleCredentialsChange = (event) => {
    this.setState({ credentials: event.target.value });
  };

  handleEasyToRememberPassword = (event) => {
    console.log(event.target, "Submitted!");
  };

  displayETRModal = () => {
    this.setState({ ETRModal: true });
    console.log(this.state.ETRModal);
  };

  displayHTCModal = () => {
    this.setState({ HTCModal: true });
  };

  closeETRModal = () => {
    this.setState({ ETRModal: false });
  };

  closeHTCModal = () => {
    this.setState({ HTCModal: false });
  };

  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <a className="nav-links" href="/Home.html">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-links" href="/About.html">
                  About
                </a>
              </li>
              <li>
                <a className="nav-links" href="/Subscribe.html">
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <!-- The first hero section, ie., the "has my account been compromised" section --> */}
        <section>
          <center>
            <p className="lead">Has my account been compromised?</p>
            <p className="sub-lead">
              Check if you have an account that has been compromised in a
              security breach
            </p>
            <p className="sub-lead">
              We do not store your email or password data
            </p>

            <div className="input-container">
              <input
                formNoValidate
                type="email"
                className="input"
                placeholder="Enter your credentials associated with any account"
                onChange={this.handleCredentialsChange}
              />
              <button onClick={this.checkIntegrity} className="check-button">
                Check for integrity
              </button>
              {/* <p class="sub-lead">
                <input
                  type="radio"
                  class="radio-button"
                  id="email"
                  name="checkRadio"
                  checked
                />
                <label class="check-label" for="email">
                  Check email
                </label>
                <input type="radio" class="" id="password" name="checkRadio" />
                <label class="check-label" for="password">
                  Check password
                </label>
              </p> */}
            </div>
          </center>
        </section>
        <div id="root"></div>
        <section className="gen-pass-div">
          <p className="gen-pass-lead">Generate a secure password</p>
          <p className="gen-pass-subtitle">
            both passwords are secure, don't worry :)
          </p>
          <div className="gen-pass-button-container">
            <button
              onClick={this.displayETRModal}
              className="gen-pass-button"
              id="easyToRemember"
            >
              Easy to remember
            </button>
            <button
              onClick={this.displayHTCModal}
              className="gen-pass-button"
              id="hardToCrack"
            >
              Hard to crack
            </button>
          </div>
        </section>
        <Breach isOpen={this.state.isBreachOpen} />
        <section className="info">
          <div className="info-container">
            <p className="numbers">1212121212</p>
            <p className="small-text">small text</p>
          </div>
          <div className="info-container">
            <p className="numbers">1212121212</p>
            <p className="small-text">small text</p>
          </div>
          <div className="info-container">
            <p className="numbers">1212121212</p>
            <p className="small-text">small text</p>
          </div>
          <div className="info-container">
            <p className="numbers">1212121212</p>
            <p className="small-text">small text</p>
          </div>
        </section>
        <footer>
          <p>A project by SRM KTR students</p>
        </footer>

        {/* <!-- EASY TO REMEMBER PASSWORD MODAL --> */}
        {this.state.ETRModal ? <ETRModal onClose={this.closeETRModal} /> : null}
        {/* <!-- EASY TO REMEMBER PASSWORD MODAL --> */}

        {/* <!-- HARD TO CRACK MODAL --> */}
        {this.state.HTCModal ? <HTCModal onClose={this.closeHTCModal} /> : null}
        {/* <!-- HARD TO CRACK MODAL --> */}
      </div>
    );
  }
}

export default App;
