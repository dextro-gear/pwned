import React, { Component } from "react";

class Breach extends Component {
  render() {
    return (
      <div className="breach">
        <p className="breach-title">
          Oh no! Your account has been compromised!
        </p>
        <p className="breach-subtitle">
          Your account has been breached in the following website(s):
        </p>
        <div className="breach-container">
          <p className="breach-website-title">1. Adobe (adobe.com)</p>
          <p className="breach-date">Breach Date: 08-06-2020</p>
          <p className="breach-desc">
            In December 2018, the video messaging service{" "}
            <a
              href="https://www.theregister.co.uk/2019/02/11/620_million_hacked_accounts_dark_web/"
              target="_blank"
              rel="noopener"
            >
              Dubsmash suffered a data breach
            </a>
            . The incident exposed 162 million unique email addresses alongside
            usernames and PBKDF2 password hashes. In 2019, the data appeared
            listed for sale on a dark web marketplace (along with several other
            large breaches) and subsequently began circulating more broadly. The
            data was provided to HIBP by a source who requested it to be
            attributed to &quot;BenjaminBlue@exploit.im&quot;.
          </p>
          <p className="breach-compromised-data">
            Compromised data: Email addresses, Geographic locations, Names,
            Passwords, Phone numbers, Spoken languages, Usernames
          </p>
        </div>
      </div>
    );
  }
}

export default Breach;
