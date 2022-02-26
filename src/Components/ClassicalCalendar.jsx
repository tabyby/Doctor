import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "./fakeData";

export default class ClassicalCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date(),
      view: "all",
    };
  }
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
    if (this.state.view === "all") {
      sortedData = data;
    } else if (this.state.view === "today") {
      sortedData = data.filter(
        (patient) =>
          parseInt(patient.dateOfAp[0]) === this.state.selectedDate.getDate()
      );
    }
    console.log(sortedData);
    console.log(typeof this.state.selectedDate.getDate());


    return (
      <div>
          
        <Calendar onChange={this.handleChange} />
        <div> you have {sortedData.length} appointments </div>
        <div>{this.state.selectedDate.toDateString()}</div>
        <button onClick={() => this.handleViews("today")}>Check List</button>
        <table>
          <thead>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </thead>
          {sortedData.map(patient=>{
              return(
                <tbody key={patient.name} >
          <tr key={patient.name} >
             <td>{patient.name}</td>
            <td>{patient.dateOfBirth}</td>
            <td>{patient.dateOfAp}</td>
             <td>{patient.time}</td>
             </tr> 
             </tbody>
              )
          })}
        </table>
      </div>
    );
  }
}
