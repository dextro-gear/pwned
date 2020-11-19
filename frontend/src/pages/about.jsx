import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <section>
          <p class="about-title">About this project</p>
          <p class="about-content">
            This is a project by the students of SRM Institute of Science and
            Technology, KTR campus, namely, Rajasundaram G, Suryanshi Kaushik
            and Ambarish Datar, all students majoring in B.Tech CSE, currently
            in the final year.
            <br />
            <br />
            <br />
            This project was completed under the guidance of Mrs. P.
            Akilandeshwari (100196), for the subject of Web Programming -
            15IT304J, over the period of one semester.
          </p>
        </section>
      </>
    );
  }
}

export default About;
