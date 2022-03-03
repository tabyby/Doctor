import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "./fakeData";
import "./grid.css";
import { Link, useNavigate } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";

export default class ClassicalCalendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date(),
      view: "all",
    };
  }
  logout() {
    localStorage.removeItem("doctor");
    console.log("hani lenna ")
  }
  backToAll = () => {
    this.setState({
      view: "all",
    });
  };
  handleViews = (s) => {
    this.setState({
      view: s,
    });
  };
  handleChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    let sortedData = [];
    sortedData = data.filter(
      (patient) =>
        parseInt(patient.dateOfAp[0]) === this.state.selectedDate.getDate()
    );

    return (
      <div>
        <div>
          <div></div>
          <div class="parent">
            <div class="div1">
              <div>
                <br />
                <br />
                <h6 className="center">
                  Hello doctor, these are your appointements, you only have to
                  select a date on the calendar
                </h6>
                <br />
                <div className="center">
                  <Calendar onChange={this.handleChange} />
                </div>
                <br />
                <div className="center">
                  <div> you have {sortedData.length} appointments on</div>
                  <br />
                  <div> {this.state.selectedDate.toDateString()}</div>
                  <br />
                </div>
                <div className="center "></div>
                <br />
                <h2 className="center">Table of appointements:</h2>
                <div className="center">
                  <table id="customers">
                    <tr>
                      <th>Name</th>
                      <th>Date of bith</th>
                      <th>Date of appointement</th>
                      <th>Time</th>
                    </tr>
                    {sortedData.map((patient) => {
                      return (
                        <tbody key={patient.name}>
                          <tr key={patient.name}>
                            <td>{patient.name}</td>
                            <td>{patient.dateOfBirth}</td>
                            <td>{patient.dateOfAp}</td>
                            <td>{patient.time}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
              <br />
              <br />
            </div>
            <div class="div2">
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
                      <a class="active">
                        <span class="item">Calendar</span>
                      </a>
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
                      <Link to="/contactUs">
                        <span className="item">contact us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="item" onClick={()=>this.logout()}>
                          Log out
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
