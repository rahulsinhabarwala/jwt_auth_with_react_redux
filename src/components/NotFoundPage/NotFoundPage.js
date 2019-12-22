/**
 *
 * NotFoundPage
 *
 */

import React from "react";

/* eslint-disable react/prefer-stateless-function */
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="errorBox">
        <div className="errorContent">
          <h5>Oops! page not found</h5>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h6>
            We are sorry, but the page you requested <br /> was not found
          </h6>
          <button
            className="btn btn-primary"
            onClick={() => this.props.history.push("/")}
          >
            <span className="btn-primary-icon">
              <i className="far fa-angle-left" />
            </span>Return to dashboard
          </button>
        </div>
      </div>
    );
  }
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
