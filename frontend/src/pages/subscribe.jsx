import React, { Component } from "react";

class Subcribe extends Component {
  state = {};
  render() {
    return (
      <>
        <section>
          <p class="about-title title-margins">Subscribe</p>
          <p class="subtitle-text subtitle-margins">
            Subscribe with us to get notified when your account is compromised
            in the future. You will recieve notifications via email.
          </p>

          <form>
            <label class="email-label subtitle-text" for="email">
              Enter email for notification:
            </label>
            <input
              class="email-input"
              type="email"
              name="email"
              id="name"
              placeholder="ex., mymail@email.com"
            />

            <label class="accounts-label subtitle-text" for="accounts">
              Enter accounts that you want to be notified about (comma-seperated
              values):
            </label>
            <textarea
              class="accounts-input"
              name="accounts"
              id="accounts"
              rows="8"
              placeholder="ex., mail1@email1.com, mail2@email2.com"
            ></textarea>
            <button type="submit" class="submit-button">
              Submit
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default Subcribe;
