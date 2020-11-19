import React, { Component } from "react";
import randomWords from "random-words";
// import "../App.css";

class ETRModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      specialChars: "",
      numericals: "",
      password: "",
    };
  }

  handleKeywordChange = (event) => {
    this.setState({ keyword: event.target.value });
  };

  handleSpecialCharsChange = (event) => {
    this.setState({ specialChars: event.target.value });
  };

  handleNumericalsChange = (event) => {
    this.setState({ numericals: event.target.value });
  };

  generatePassword = (event) => {
    event.preventDefault();
    const specialCharacters = "!@#$%^&*()_+[]";
    const numbers = "0123456789";
    var n = parseInt(this.state.specialChars);
    var m = parseInt(this.state.numericals);
    var randPass = this.state.keyword
      ? this.state.keyword
      : randomWords({ exactly: 2, join: "-" });
    console.log(randPass);
    if (randPass.length + n + m >= 12) {
      for (var i = 0; i < m; ++i) {
        randPass += numbers.charAt(Math.floor(Math.random() * 10));
      }
      for (var i = 0; i < n; ++i) {
        randPass += specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );
      }
    } else {
      randPass =
        "The total length (numbers, special characters and keyword combined) must be atleast 12.";
    }
    this.setState({ password: randPass });
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
      <div className="modal-bg" id="etr-modal">
        <div className="modal">
          <span
            onClick={this.props.onClose}
            className="close-button"
            id="etr-close"
          >
            ×
          </span>
          <p className="modal-title">Create an easy to remember password</p>
          <form onSubmit={this.generatePassword} className="form">
            <div className="label-smalltext-container">
              <p className="input-label">Use your own keyword:</p>
              <p className="modal-small-text">
                Enter a keyword that are easy for you to remember.
                <br />
                Or leave it blank to randomly generate.
              </p>
            </div>
            <input
              className="modal-input"
              type="text"
              placeholder="ex. dog, cat"
              name="keyword"
              id="keyword"
              onChange={this.handleKeywordChange}
            />
            <p className="input-label">
              No. of special characters to be
              <br />
              generated:
            </p>
            <input
              type="text"
              className="modal-input"
              placeholder="ex., 5"
              onChange={this.handleSpecialCharsChange}
            />
            <p className="input-label">No. of numericals to be generated:</p>
            <input
              type="text"
              className="modal-input"
              placeholder="ex., 5"
              onChange={this.handleNumericalsChange}
            />
            <div></div>
            <button type="submit" className="modal-generate-button">
              Generate
            </button>
          </form>
          <p className="note">
            <b>Note:</b> The total length of the password including the keyword,
            numericals and special characters
            <br />
            should be a minimum of 12.
          </p>
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

export default ETRModal;
