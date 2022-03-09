import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "./fakeData";
import "./grid.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Timer from './Timer'
import axios from "axios";

export default class ClassicalCalendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date(),
      appointment: [],
      
    };
  }
  componentDidMount(){
    axios.get("http://localhost:3000/doctor/api/getAppointment")
    .then(response=>{console.log(response.data[0].date)
      this.setState({
        appointment : response.data,
      })
    })

  }
  logout() {
    localStorage.removeItem("doctor");
    console.log("hani lenna ")
  }


  handleChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    let sortedData = [];
    sortedData = this.state.appointment.filter(
      (patient) =>  {
        let sumApp = patient.date[6] + patient.date[7];
        return(
        parseInt(sumApp) === this.state.selectedDate.getDate() 
        )}
    );

    return (
      <div>
        <Sidebar/>
        <div>
          <div></div>
          <div className="parent">
            <div className="div1">
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
                      <th>Timer</th>
                    </tr>
                    {sortedData.map((patient) => {
                      return (
                        <tbody key={patient.name}>
                          <tr key={patient.name}>
                            <td>{patient.name}</td>
                            <td>{patient.dateOfBirth}</td>
                            <td>{patient.date}</td>
                            <td><Timer/></td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                  {/* <Timer/> */}
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
