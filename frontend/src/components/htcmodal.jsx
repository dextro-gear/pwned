import React, { Component } from "react";

class HTCModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordLength: "",
      password: "",
      // copySuccess: false,
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

    if (this.state.passwordLength >= 12) {
      for (var i = 0, n = charset.length; i < this.state.passwordLength; ++i) {
        randPwd += charset.charAt(Math.floor(Math.random() * n));
      }
    } else {
      randPwd = "Min. length must be 12.";
    }

    this.setState({ password: randPwd });
  };

  copyPassword = () => {
    var copyText = document.getElementById("copyText").innerText;
    console.log(copyText);

    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyText;
    elem.select();
    try {
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    } catch (e) {
      console.log(e);
    }
    document.body.removeChild(elem);
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
            <p className="password" id="copyText">
              {this.state.password
                ? this.state.password
                : "Your password here."}
            </p>
            {document.queryCommandSupported("copy") && (
              <button className="copy-button" onClick={this.copyPassword}>
                Copy to clipboard
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HTCModal;
