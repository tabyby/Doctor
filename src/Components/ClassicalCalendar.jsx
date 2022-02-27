import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from "./fakeData";
<<<<<<< HEAD
import Patients from "./Patients";
=======
import { AdvancedImage } from "@cloudinary/react";
import {Cloudinary} from "@cloudinary/url-gen"
>>>>>>> 3b9d2237c6133aa9d5baba2c42c47776f1046e0f

export default class ClassicalCalendar extends Component{
    constructor(){
        super();
        this.state={
            selectedDate:new Date(),
            view : "all",
        }
    }
<<<<<<< HEAD
    handleViews = s => {
        this.setState({
            view : s,
        })
    }
    handleChange = (date) => {
        this.setState({ selectedDate: date }); 
      }
      render(){
        let sortedData = [];
        if(this.state.view==="all"){
            sortedData = data;
        }
        else if(this.state.view==="today") {
            sortedData = data.filter(patient=>parseInt(patient.dateOfAp[0])===this.state.selectedDate.getDate());
        }
        console.log(sortedData)
        console.log(typeof (this.state.selectedDate.getDate()))
        
        let dataUnsorted = sortedData.map(patient=>{
            return(
                <Patients key={patient.name} patient={patient} />
            )
        })
        return(
            <div>
                <Calendar  onChange={this.handleChange} /> 
                <div> you have {sortedData.length} appointments </div>
                <div>{this.state.selectedDate.toDateString()}</div>
                    <button onClick={()=>this.handleViews('today')} >Check List</button>
                    {dataUnsorted}
                    
            </div>
        )
    }
}
=======


    return (
      <div>
          
        <Calendar onChange={this.handleChange} />
        <div> you have {sortedData.length} appointments </div>
        <div>{this.state.selectedDate.toDateString()}</div>
        <button onClick={() => this.handleViews("today")}>Check List</button>
        <table>
          <thead>
            <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
            </tr>
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
>>>>>>> 3b9d2237c6133aa9d5baba2c42c47776f1046e0f
