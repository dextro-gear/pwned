import React, { Component } from "react";
class HTCModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordLength: "",
      password: "",
    };
  }

  handlePassLengthChange = (event) => {
    this.setState({ passwordLength: event.target.value });
    console.log(this.state.passwordLength);
  };

  generatePassword = (event) => {
    event.preventDefault();
    var charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_";
    // console.log(event);
    var randPwd = "";

    for (var i = 0, n = charset.length; i < this.state.passwordLength; ++i) {
      randPwd += charset.charAt(Math.floor(Math.random() * n));
    }

    this.setState({ password: randPwd });
  };

  render() {
    return (
      <div className="modal-bg" id="htc-modal">
        <div className="modal">
          <span
            onClick={this.props.onClose}
            className="close-button"
            id="htc-close"
          >
            ×
          </span>
          <p className="modal-title  modal-subtitle">
            Create a password that is hard to crack
          </p>
          <p className="modal-small-text">
            This password consists of random characters so we recommend using a
            password manager.
          </p>
          <form className="htc-modal-form" onSubmit={this.generatePassword}>
            <label for="length" className="input-label">
              Enter a password length:
            </label>
            <input
              onChange={this.handlePassLengthChange}
              type="text"
              placeholder="min. 12"
              className="modal-input"
            />
            <button type="submit" className="modal-generate-button">
              Generate
            </button>
          </form>
          <div className="password-display-container">
            <p className="password-title">Your Password</p>
            <p className="password">
              {this.state.password
                ? this.state.password
                : "Your password will be displayed here."}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HTCModal;
