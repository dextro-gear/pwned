import React, { Component } from "react";
import parse from "html-react-parser";

class Breach extends Component {
  render() {
    if (this.props.isOpen)
      return (
        <div className="breach">
          <p className="breach-title">
            Oh no! Your account has been compromised!
          </p>
          <p className="breach-subtitle">
            Your account has been breached in the following website(s):
          </p>
          {this.props.breaches.map(function (breach, index) {
            console.log(index, breach);
            return (
              <div className="breach-container" key={index + 1}>
                <p className="breach-website-title" key={index + 101}>
                  {index}. {breach.Title}
                </p>
                <p className="breach-date" key={index + 201}>
                  Breach Date: {breach.BreachDate}
                </p>
                <p className="breach-desc" key={index + 301}>
                  {parse(breach.Description)}
                </p>
                <p className="breach-compromised-data" key={index + 401}>
                  Compromised data: {breach.DataClasses.join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      );
    else return null;
  }
}

export default Breach;
