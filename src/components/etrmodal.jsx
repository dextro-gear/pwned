import React, { Component } from "react";
import "../App.css";

class ETRModal extends Component {
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
          <form onSubmit={this.handleEasyToRememberPassword} className="form">
            <div className="label-smalltext-container">
              <p className="input-label">Use your own keywords(s):</p>
              <p className="modal-small-text">
                Enter keywords that are easy for you to remember.
                <br />
                Or leave it blank to randomly generate.
              </p>
            </div>
            <textarea
              className="modal-textarea"
              placeholder="ex.  dog, cat, something, easy, to, remember"
              name="keywords"
              id="keywords"
              cols="26"
              rows="5"
            ></textarea>
            <p className="input-label">
              No. of special characters to be
              <br />
              generated:
            </p>
            <input type="text" className="modal-input" placeholder="ex., 5" />
            <p className="input-label">No. of numericals to be generated:</p>
            <input type="text" className="modal-input" placeholder="ex., 5" />
            <div></div>
            <button type="submit" className="modal-generate-button">
              Generate
            </button>
          </form>
          <p className="note">
            <b>Note:</b> The total length of the password including the
            keywords, numericals and special characters
            <br />
            should be a minimum of 12.
          </p>
          <div className="password-display-container">
            <p className="password-title">Your Password</p>
            <p className="password">placeholder</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ETRModal;
