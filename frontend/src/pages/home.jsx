import React, { Component } from "react";
import Breach from "../components/breach";
import ETRModal from "../components/etrmodal";
import HTCModal from "../components/htcmodal";
import NoBreach from "../components/nobreach";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ETRModal: false,
      HTCModal: false,
      checkType: "",
      credentials: "",
      isBreachOpen: false,
      isNoBreachOpen: false,
      breaches: [],
    };
  }

  checkIntegrity = () => {
    var URL =
      "http://localhost:5000/api/v1/breachedaccount/" + this.state.credentials;
    console.log(URL);
    this.setState({ isBreachOpen: false, isNoBreachOpen: false });
    Axios({
      method: "get",
      url: URL,
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ breaches: response.data, isBreachOpen: true });
        } else {
          this.setState({ isNoBreachOpen: true });
        }
      })
      .catch((error) => {
        this.setState({ isNoBreachOpen: true });
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
                placeholder="Enter your email associated with any account"
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
        <NoBreach isOpen={this.state.isNoBreachOpen} />
        <Breach
          isOpen={this.state.isBreachOpen}
          breaches={this.state.breaches}
        />
        <section className="info">
          <div className="info-container">
            <p className="numbers">492</p>
            <p className="small-text">compromised websites</p>
          </div>
          <div className="info-container">
            <p className="numbers">10,240,427,866</p>
            <p className="small-text">breached accounts</p>
          </div>
          <div className="info-container">
            <p className="numbers">113,831</p>
            <p className="small-text">pastes</p>
          </div>
          <div className="info-container">
            <p className="numbers">195,045,077</p>
            <p className="small-text">paste accounts</p>
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

export default Home;
