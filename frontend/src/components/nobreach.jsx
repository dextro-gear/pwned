import React, { Component } from "react";
class NoBreach extends Component {
  state = {};
  render() {
    if (this.props.isOpen)
      return (
        <div className="nobreach">
          <p className="nobreach-title">Your account is safe! For now.</p>
          <p className="nobreach-subtitle">
            No breaches associated with your account was found.
          </p>
          <p className="nobreach-desc">
            Just because your account is safe now, it does not necessarily mean
            that it cannot be compromised in the future.
            <br />
            <a>Subscribe with us</a> now to get notified if your account is
            breached in the future! We will conduct periodic checks
            <br />
            and send you an email if we find a breach.
          </p>
          <div className="subscribe-button-container">
            <a href="/subscribe" className="subscribe-now-button">
              Subscribe Now
            </a>
          </div>
        </div>
      );
    else return null;
  }
}

export default NoBreach;
