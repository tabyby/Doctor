import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./contact.css";

const ContactUs = () => {
  let [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(values.name);
  const form = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1orpeqa",
        "template_g5eq5bw",
        form.current,
        "7Y7AXEoXIHpUfE--B"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setValues({ name: "", email: "", message: "" });
  }
  return (
    <div>
      <div className="parent">
        <div>
          <br />
          <br />
          <br />
          <div className="div1 center">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              className="form"
            >
              <h1>Contact us!</h1>
              <br />
              <h5>
                If you are facing a problem or you want to ask some questions,
                please don't hesitate to contact us.
              </h5>
              <br />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              <br />
              <button
                onClick={sendEmail}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="div2">
          <div class="wrapper">
            <div class="sidebar">
              <div class="profile">
                <img
                  src="https://media.discordapp.net/attachments/936015556287528980/947614190263210035/cc93f1595f4ec18589d585e5d9910c2f.jpg?width=473&height=473"
                  alt="profile_picture"
                />
                <h3>Dr Mortadha</h3>
                <p>Dentist</p>
              </div>
              <ul>
                <li>
                  <Link to="/Calendar">
                    <span className="item">Calendar</span>
                  </Link>
                </li>
                <li>
                  <Link to="/PostBlog">
                    <span className="item">Post blogs</span>
                  </Link>
                </li>
                <li>
                  <a>
                    <span className="item">Blogs</span>
                  </a>
                </li>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <li>
                  <a className="active">
                    <span className="item">contact us</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="item">Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/Calendar">
            <span className="item">Calendar</span>
          </Link>
        </li>
        <li>
          <Link to="/PostBlog">
            <span className="item">Post blogs</span>
          </Link>
        </li>
        <li>
          <a>
            <span className="item">Blogs</span>
          </a>
        </li>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <li>
          <a className="active">
            <span className="item">contact us</span>
          </a>
        </li>
        <li>
          <Link to="/">
            <span onClick={() => this.logout()} className="item">
              Log out
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default ContactUs;
