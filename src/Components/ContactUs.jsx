import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./contact.css";

export default class contactUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="parent">
          <div>
            <br />
            <br />
            <br />
            <div className="div1 center">
              <form id="contact-form" className="form">
                <h1>Contact us!</h1>
                <br />
                <h5>
                  If you are facing a problem or you want to ask some questions,
                  please don't hesitate to contact us.
                </h5>
                <br />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
